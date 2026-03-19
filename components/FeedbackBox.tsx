'use client';

import { useState } from 'react';
import { submitSuggestion } from '@/app/actions/submitSuggestion';

export default function FeedbackBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (isSuccess) setIsSuccess(false);
    setErrorMsg('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const result = await submitSuggestion(formData);

    if (result.error) {
      setErrorMsg(result.error);
    } else if (result.success) {
      setIsSuccess(true);
      form.reset();
      setTimeout(() => {
        setIsOpen(false);
        setIsSuccess(false);
      }, 3000); // close automatically after 3 seconds
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden transform transition-all">
          <div className="p-4 bg-slate-800 border-b border-slate-700 flex justify-between items-center">
            <h3 className="text-white font-medium">Suggestion Box</h3>
            <button
              onClick={toggleOpen}
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Close suggestion box"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div className="p-5">
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-amber-500/20 text-amber-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-white mb-2">Thank you!</h4>
                <p className="text-sm text-slate-400">Your feedback has been submitted successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {errorMsg && (
                  <div className="p-3 text-sm bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg">
                    {errorMsg}
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Name (Optional)</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-slate-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email (Optional)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-slate-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="How can we improve the website?"
                    className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-slate-500 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-500/20 text-slate-900 font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : null}
                  {isSubmitting ? 'Submitting...' : 'Submit Suggestion'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
      
      <button
        onClick={toggleOpen}
        className={`${
          isOpen ? 'bg-slate-800 text-amber-500 border border-slate-700' : 'bg-amber-500 text-slate-900 shadow-lg hover:shadow-xl hover:-translate-y-1'
        } p-4 rounded-full transition-all duration-300 flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-amber-500/20`}
        aria-label="Toggle suggestion box"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>
    </div>
  );
}
