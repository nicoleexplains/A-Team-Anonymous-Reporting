
import React, { useState, useCallback } from 'react';
import { Submission, Reply, Category } from '../types';
import { InboxIcon, ChatBubbleLeftRightIcon } from './icons';
import SubmissionModal from './SubmissionModal';
import PublicActionModal from './PublicActionModal';

interface PmDashboardProps {
  submissions: Submission[];
  onAddReply: (submissionId: string, reply: { author: 'PM' | 'Submitter'; text: string }) => void;
  onAddPublicAction: (category: Category, action: string, count: number) => void;
}

const PmDashboard: React.FC<PmDashboardProps> = ({ submissions, onAddReply, onAddPublicAction }) => {
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [isPublicActionModalOpen, setIsPublicActionModalOpen] = useState(false);
  const [groupedSubmissions, setGroupedSubmissions] = useState<{ category: Category; count: number } | null>(null);

  const handleOpenPublicAction = (category: Category, count: number) => {
    setGroupedSubmissions({ category, count });
    setIsPublicActionModalOpen(true);
  };

  const aggregateSubmissions = () => {
    const counts: { [key in Category]?: number } = {};
    submissions.forEach(sub => {
      counts[sub.category] = (counts[sub.category] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([category, count]) => ({ category: category as Category, count }))
      .sort((a, b) => b.count - a.count);
  };

  const aggregated = aggregateSubmissions();

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4 text-dark-text">PM Dashboard: Incoming Feedback</h2>
        
        {aggregated.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-medium-text mb-2">Submission Hotspots</h3>
            <div className="flex flex-wrap gap-2">
              {aggregated.map(({ category, count }) => (
                <button
                  key={category}
                  onClick={() => handleOpenPublicAction(category, count)}
                  className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-red-200 transition-colors"
                >
                  {category} ({count} {count > 1 ? 'reports' : 'report'})
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div className="space-y-3">
          {submissions.length > 0 ? (
            submissions.map(sub => (
              <div
                key={sub.id}
                onClick={() => setSelectedSubmission(sub)}
                className="p-4 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs bg-indigo-100 text-indigo-800 font-semibold px-2 py-0.5 rounded-full">{sub.category}</span>
                    <p className="mt-2 text-sm text-dark-text font-medium truncate">{sub.situation}</p>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                     <p className="text-xs text-light-text">{new Date(sub.timestamp).toLocaleDateString()}</p>
                     <div className="flex items-center justify-end mt-1 text-light-text">
                        <ChatBubbleLeftRightIcon className="h-4 w-4 mr-1"/>
                        <span className="text-xs">{sub.replies.length}</span>
                     </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-medium-text">
              <InboxIcon className="h-12 w-12 mx-auto text-gray-300" />
              <p className="mt-2 font-semibold">No submissions yet</p>
              <p className="text-sm">New anonymous feedback will appear here.</p>
            </div>
          )}
        </div>
      </div>
      {selectedSubmission && (
        <SubmissionModal
          submission={selectedSubmission}
          onClose={() => setSelectedSubmission(null)}
          onAddReply={onAddReply}
        />
      )}
      {isPublicActionModalOpen && groupedSubmissions && (
        <PublicActionModal
            category={groupedSubmissions.category}
            count={groupedSubmissions.count}
            onClose={() => setIsPublicActionModalOpen(false)}
            onSubmit={onAddPublicAction}
        />
      )}
    </>
  );
};

export default PmDashboard;
