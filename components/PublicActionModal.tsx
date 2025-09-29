
import React, { useState, useEffect } from 'react';
import { Category } from '../types';
import { XMarkIcon, MegaphoneIcon } from './icons';

interface PublicActionModalProps {
  category: Category;
  count: number;
  onClose: () => void;
  onSubmit: (category: Category, action: string, count: number) => void;
}

const PublicActionModal: React.FC<PublicActionModalProps> = ({ category, count, onClose, onSubmit }) => {
  const [actionText, setActionText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!actionText.trim()) {
      alert('Please describe the action taken.');
      return;
    }
    onSubmit(category, actionText, count);
    onClose();
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
       if (event.key === 'Escape') {
        onClose();
       }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg" onClick={e => e.stopPropagation()}>
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-bold text-dark-text">Create Public Action</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <XMarkIcon className="h-6 w-6"/>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-medium-text">Related Pain Point</label>
              <p className="mt-1 text-md font-semibold text-brand-secondary">{category}</p>
              <p className="text-xs text-light-text">Based on {count} anonymous submission{count > 1 ? 's' : ''}.</p>
            </div>
            <div>
              <label htmlFor="action-text" className="block text-sm font-medium text-medium-text">
                Action Taken
              </label>
              <textarea
                id="action-text"
                rows={4}
                value={actionText}
                onChange={e => setActionText(e.target.value)}
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary"
                placeholder="e.g., Scheduled a Scope Review Workshop for Thursday."
              />
            </div>
          </div>
          <div className="bg-gray-50 px-6 py-3 flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
              Cancel
            </button>
            <button type="submit" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-brand-primary border border-transparent rounded-md shadow-sm hover:bg-blue-800">
              <MegaphoneIcon className="h-5 w-5 mr-2" />
              Post Public Action
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PublicActionModal;
