
import React, { useState, useCallback } from 'react';
import { Submission, PublicAction, Category } from './types';
import SubmissionForm from './components/SubmissionForm';
import PmDashboard from './components/PmDashboard';
import PublicBoard from './components/PublicBoard';
import Header from './components/Header';

const App: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [publicActions, setPublicActions] = useState<PublicAction[]>([
    {
      id: 'pa1',
      category: Category.SCOPE_CREEP,
      relatedSubmissions: 2,
      actionTaken: "Launched a formal change request process for all new feature requests. All changes now require stakeholder sign-off.",
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ]);

  const handleAddSubmission = useCallback((newSubmission: Omit<Submission, 'id' | 'timestamp' | 'replies'>) => {
    const submission: Submission = {
      ...newSubmission,
      id: `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      replies: [],
    };
    setSubmissions(prev => [submission, ...prev]);
  }, []);

  const handleAddReply = useCallback((submissionId: string, reply: { author: 'PM' | 'Submitter'; text: string }) => {
    setSubmissions(prev =>
      prev.map(sub =>
        sub.id === submissionId
          ? { ...sub, replies: [...sub.replies, { ...reply, timestamp: new Date().toISOString() }] }
          : sub
      )
    );
  }, []);

  const handleAddPublicAction = useCallback((category: Category, action: string, count: number) => {
    const newAction: PublicAction = {
      id: `pa_${Date.now()}`,
      category,
      actionTaken: action,
      relatedSubmissions: count,
      timestamp: new Date().toISOString(),
    };
    setPublicActions(prev => [newAction, ...prev]);
  }, []);


  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-4">
            <SubmissionForm onSubmit={handleAddSubmission} />
          </div>

          <div className="lg:col-span-8">
            <PmDashboard
              submissions={submissions}
              onAddReply={handleAddReply}
              onAddPublicAction={handleAddPublicAction}
            />
            <PublicBoard actions={publicActions} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
