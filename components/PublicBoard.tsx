
import React from 'react';
import { PublicAction } from '../types';
import { MegaphoneIcon, CalendarDaysIcon } from './icons';

interface PublicBoardProps {
  actions: PublicAction[];
}

const PublicBoard: React.FC<PublicBoardProps> = ({ actions }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-dark-text flex items-center">
        <MegaphoneIcon className="h-6 w-6 mr-2 text-brand-secondary" />
        Public Action Board
      </h2>
      <p className="text-sm text-light-text mb-6">This board shows actions taken based on anonymous feedback, closing the loop and building trust.</p>
      
      <div className="space-y-4">
        {actions.length > 0 ? (
          actions.map(action => (
            <div key={action.id} className="bg-blue-50 border-l-4 border-brand-primary p-4 rounded-r-lg">
              <p className="text-sm font-semibold text-brand-primary">
                Pain Point: {action.category} ({action.relatedSubmissions} submissions)
              </p>
              <p className="mt-2 text-medium-text">
                <span className="font-semibold text-dark-text">Action Taken:</span> {action.actionTaken}
              </p>
              <div className="flex items-center text-xs text-light-text mt-3">
                 <CalendarDaysIcon className="h-4 w-4 mr-1.5"/>
                 <span>{new Date(action.timestamp).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-medium-text">
            <p className="font-semibold">No public actions posted yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PublicBoard;
