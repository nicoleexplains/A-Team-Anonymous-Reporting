
import React, { useState } from 'react';
import { Category, ImpactScores } from '../types';
import { CATEGORIES } from '../constants';
import { PaperAirplaneIcon, ShieldCheckIcon } from './icons';

interface SubmissionFormProps {
  onSubmit: (submission: {
    category: Category;
    impact: ImpactScores;
    situation: string;
    problem: string;
    suggestion: string;
  }) => void;
}

const ImpactSlider: React.FC<{ label: string; value: number; onChange: (value: number) => void }> = ({ label, value, onChange }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-medium-text mb-1">{label} Impact: <span className="font-bold text-brand-secondary">{value}</span></label>
        <input
            type="range"
            min="1"
            max="5"
            value={value}
            onChange={(e) => onChange(parseInt(e.target.value, 10))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-secondary"
        />
    </div>
);


const SubmissionForm: React.FC<SubmissionFormProps> = ({ onSubmit }) => {
  const [category, setCategory] = useState<Category>(CATEGORIES[0]);
  const [impact, setImpact] = useState<ImpactScores>({ budget: 3, timeline: 3, scope: 3 });
  const [situation, setSituation] = useState('');
  const [problem, setProblem] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!situation || !problem || !suggestion) {
      alert('Please fill out all fields.');
      return;
    }
    onSubmit({ category, impact, situation, problem, suggestion });
    setSituation('');
    setProblem('');
    setSuggestion('');
    setImpact({ budget: 3, timeline: 3, scope: 3 });
    setCategory(CATEGORIES[0]);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md sticky top-8">
        <h2 className="text-xl font-bold mb-2 text-dark-text">Submit Anonymous Feedback</h2>
        <p className="text-sm text-light-text mb-4">Your submission is 100% anonymous. We cannot track your ID, IP, or email.</p>
        
        {submitted && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
            <p className="font-bold">Success!</p>
            <p>Your feedback has been submitted anonymously.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="category" className="block text-sm font-medium text-medium-text">Pain Point Category</label>
                <select id="category" value={category} onChange={(e) => setCategory(e.target.value as Category)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm rounded-md">
                    {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
            </div>

            <div>
                <h3 className="text-md font-semibold text-dark-text mb-2">Impact Scoring</h3>
                <ImpactSlider label="Budget" value={impact.budget} onChange={v => setImpact(p => ({ ...p, budget: v }))} />
                <ImpactSlider label="Timeline" value={impact.timeline} onChange={v => setImpact(p => ({ ...p, timeline: v }))} />
                <ImpactSlider label="Scope" value={impact.scope} onChange={v => setImpact(p => ({ ...p, scope: v }))} />
            </div>

            <div>
                <label htmlFor="situation" className="block text-sm font-medium text-medium-text">Situation (What happened?)</label>
                <textarea id="situation" rows={3} value={situation} onChange={e => setSituation(e.target.value)} className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary" placeholder="Brief, objective facts..."></textarea>
            </div>

            <div>
                <label htmlFor="problem" className="block text-sm font-medium text-medium-text">Impact (Why is it a problem?)</label>
                <textarea id="problem" rows={3} value={problem} onChange={e => setProblem(e.target.value)} className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary" placeholder="The consequences and effects..."></textarea>
            </div>

            <div>
                <label htmlFor="suggestion" className="block text-sm font-medium text-medium-text">Suggestion (How to fix it?)</label>
                <textarea id="suggestion" rows={3} value={suggestion} onChange={e => setSuggestion(e.target.value)} className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary" placeholder="Focus on constructive solutions..."></textarea>
            </div>

            <button type="submit" className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-primary hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors">
                <PaperAirplaneIcon className="h-5 w-5 mr-2" />
                Submit Anonymously
            </button>
        </form>
    </div>
  );
};

export default SubmissionForm;
