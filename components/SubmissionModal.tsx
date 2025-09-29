import React, { useState, useCallback, useEffect } from 'react';
import { Submission, Reply } from '../types';
import { getAiSuggestions, summarizeSuggestions } from '../services/geminiService';
import { SparklesIcon, XMarkIcon, PaperAirplaneIcon, UserIcon, UserGroupIcon, DocumentTextIcon } from './icons';

interface SubmissionModalProps {
  submission: Submission;
  onClose: () => void;
  onAddReply: (submissionId: string, reply: { author: 'PM' | 'Submitter'; text: string }) => void;
}

const SubmissionModal: React.FC<SubmissionModalProps> = ({ submission, onClose, onAddReply }) => {
  const [pmReply, setPmReply] = useState('');
  const [submitterReply, setSubmitterReply] = useState('');
  const [aiSuggestions, setAiSuggestions] = useState<string>('');
  const [isLoadingAi, setIsLoadingAi] = useState<boolean>(false);
  const [aiSummary, setAiSummary] = useState<string>('');
  const [isLoadingAiSummary, setIsLoadingAiSummary] = useState<boolean>(false);

  const handlePmReplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pmReply.trim()) {
      onAddReply(submission.id, { author: 'PM', text: pmReply });
      setPmReply('');
    }
  };

  const handleAISuggestions = useCallback(async () => {
    setIsLoadingAi(true);
    setAiSummary(''); // Reset summary when getting new suggestions
    const suggestions = await getAiSuggestions(submission);
    setAiSuggestions(suggestions);
    setIsLoadingAi(false);
  }, [submission]);

  const handleSummarize = async () => {
    if (!aiSuggestions) return;
    setIsLoadingAiSummary(true);
    const summary = await summarizeSuggestions(aiSuggestions);
    setAiSummary(summary);
    setIsLoadingAiSummary(false);
  };

  const handleSubmitterReplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitterReply.trim()) {
        onAddReply(submission.id, { author: 'Submitter', text: submitterReply });
        setSubmitterReply('');
    }
  };
  
  // Close modal on Escape key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
       if (event.key === 'Escape') {
        onClose();
       }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
            <h2 className="text-lg font-bold text-dark-text">Feedback Details</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                <XMarkIcon className="h-6 w-6"/>
            </button>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side: Submission Details */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-medium-text">Category</h3>
              <p className="text-sm bg-indigo-100 text-indigo-800 font-semibold px-2 py-1 rounded-full inline-block mt-1">{submission.category}</p>
            </div>
             <div>
              <h3 className="font-semibold text-medium-text mb-1">Impact Scores</h3>
              <div className="flex space-x-4 text-sm">
                <span>Budget: <strong>{submission.impact.budget}/5</strong></span>
                <span>Timeline: <strong>{submission.impact.timeline}/5</strong></span>
                <span>Scope: <strong>{submission.impact.scope}/5</strong></span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-medium-text">Situation (What happened)</h3>
              <p className="text-sm text-dark-text bg-gray-50 p-2 rounded-md mt-1">{submission.situation}</p>
            </div>
            <div>
              <h3 className="font-semibold text-medium-text">Impact (Why it's a problem)</h3>
              <p className="text-sm text-dark-text bg-gray-50 p-2 rounded-md mt-1">{submission.problem}</p>
            </div>
            <div>
              <h3 className="font-semibold text-medium-text">Submitter's Suggestion</h3>
              <p className="text-sm text-dark-text bg-gray-50 p-2 rounded-md mt-1">{submission.suggestion}</p>
            </div>
            
            <div className="pt-2">
                 <button onClick={handleAISuggestions} disabled={isLoadingAi} className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-secondary hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-secondary transition-colors disabled:opacity-50">
                    <SparklesIcon className="h-5 w-5 mr-2" />
                    {isLoadingAi ? 'Analyzing...' : 'Get AI Suggestions'}
                </button>
                {aiSuggestions && (
                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="font-bold text-yellow-800 text-sm">AI-Powered Analysis</h4>
                            {!aiSummary && (
                                <button
                                    onClick={handleSummarize}
                                    disabled={isLoadingAiSummary}
                                    className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-yellow-800 bg-yellow-200 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors disabled:opacity-50"
                                >
                                    <DocumentTextIcon className="h-4 w-4 mr-1"/>
                                    {isLoadingAiSummary ? 'Summarizing...' : 'Summarize'}
                                </button>
                            )}
                        </div>
                        <p className="text-sm text-yellow-900 whitespace-pre-wrap">{aiSuggestions}</p>
                        
                        {aiSummary && (
                            <div className="mt-3 pt-3 border-t border-yellow-200">
                                <h5 className="font-bold text-yellow-800 text-sm mb-1">Key Takeaways</h5>
                                <p className="text-sm text-yellow-900 whitespace-pre-wrap">{aiSummary}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>

          </div>

          {/* Right Side: Conversation Thread */}
          <div className="space-y-4">
            <h3 className="font-semibold text-medium-text">Anonymous Conversation Thread</h3>
            <div className="h-64 overflow-y-auto bg-gray-50 p-3 rounded-md border space-y-3">
              {submission.replies.length > 0 ? (
                submission.replies.map((reply, index) => (
                  <div key={index} className={`flex items-start gap-2.5 ${reply.author === 'PM' ? 'justify-end' : ''}`}>
                    <div className={`flex flex-col w-full max-w-[320px] leading-1.5 p-3 border-gray-200 ${reply.author === 'PM' ? 'bg-blue-100 rounded-s-xl rounded-ee-xl' : 'bg-gray-100 rounded-e-xl rounded-es-xl'}`}>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <span className="text-sm font-semibold text-gray-900">{reply.author === 'PM' ? 'Project Manager' : 'Anonymous Submitter'}</span>
                            <span className="text-xs font-normal text-gray-500">{new Date(reply.timestamp).toLocaleTimeString()}</span>
                        </div>
                        <p className="text-sm font-normal py-2.5 text-gray-900">{reply.text}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-light-text text-center pt-8">No replies yet.</p>
              )}
            </div>

            {/* PM Reply Form */}
            <form onSubmit={handlePmReplySubmit}>
                <label htmlFor="pm-reply" className="sr-only">Your reply</label>
                <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 border">
                    <UserGroupIcon className="h-6 w-6 text-gray-500 mr-2"/>
                    <textarea id="pm-reply" rows={1} value={pmReply} onChange={e => setPmReply(e.target.value)} className="block mx-2 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Reply as PM..."></textarea>
                    <button type="submit" className="inline-flex justify-center p-2 text-brand-primary rounded-full cursor-pointer hover:bg-blue-100">
                        <PaperAirplaneIcon className="h-5 w-5"/>
                    </button>
                </div>
            </form>
            
            {/* Submitter Reply Form (for simulation) */}
             <form onSubmit={handleSubmitterReplySubmit}>
                <label htmlFor="submitter-reply" className="sr-only">Your reply</label>
                <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 border">
                    <UserIcon className="h-6 w-6 text-gray-500 mr-2"/>
                    <textarea id="submitter-reply" rows={1} value={submitterReply} onChange={e => setSubmitterReply(e.target.value)} className="block mx-2 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Reply as Submitter..."></textarea>
                    <button type="submit" className="inline-flex justify-center p-2 text-brand-primary rounded-full cursor-pointer hover:bg-blue-100">
                         <PaperAirplaneIcon className="h-5 w-5"/>
                    </button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionModal;