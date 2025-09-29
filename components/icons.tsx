
import React from 'react';

type IconProps = {
  className?: string;
};

export const ShieldCheckIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Zm0 13.036h.008v.008h-.008v-.008Z" />
  </svg>
);

export const PaperAirplaneIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
  </svg>
);

export const InboxIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.12-1.588H6.88a2.25 2.25 0 0 0-2.12 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
  </svg>
);

export const ChatBubbleLeftRightIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72-3.72a1.05 1.05 0 0 0-1.485 0L12 15.399V12.51c0-1.136.847-2.1 1.98-2.193l3.72-3.72a1.05 1.05 0 0 0 1.485 0l1.061 1.061Zm-3 0L15.47 10.334a1.05 1.05 0 0 0 0 1.486l3.72 3.72-1.06 1.06a1.05 1.05 0 0 0-1.486 0L15.12 15.12a1.05 1.05 0 0 0-1.486 0L12 16.606V12.51c0-1.136.847-2.1 1.98-2.193l3.72-3.72a1.05 1.05 0 0 0 1.485 0l1.061 1.061Zm-3 0L12.47 10.334a1.05 1.05 0 0 0 0 1.486l3.72 3.72-1.06 1.06a1.05 1.05 0 0 0-1.486 0L12.12 15.12a1.05 1.05 0 0 0-1.486 0L9 16.606V12.51c0-1.136.847-2.1 1.98-2.193l3.72-3.72a1.05 1.05 0 0 0 1.485 0l1.061 1.061Zm-3 0L9.47 10.334a1.05 1.05 0 0 0 0 1.486l3.72 3.72-1.06 1.06a1.05 1.05 0 0 0-1.486 0L9.12 15.12a1.05 1.05 0 0 0-1.486 0L6 16.606V12.51c0-1.136.847-2.1 1.98-2.193l3.72-3.72a1.05 1.05 0 0 0 1.485 0l1.061 1.061Z" />
    </svg>
);

export const XMarkIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
);

export const UserIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
);

export const UserGroupIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.5-2.962c.57-1.023.995-2.148 1.253-3.386m-1.253 3.386a6 6 0 0 1-9.341-3.386c0-1.442.42-2.824 1.173-4.007m11.218 7.393a6.042 6.042 0 0 1-1.173 4.007m-7.5-3.386c-.57 1.023-.995 2.148-1.253 3.386m1.253-3.386a6 6 0 0 0 9.341-3.386m-9.341 3.386c-.446 1.123-.663 2.306-.663 3.518a6.042 6.042 0 0 0 1.173 4.007M12 21a6.042 6.042 0 0 0 1.173-4.007M12 3c-1.212 0-2.393.217-3.518.663a6.042 6.042 0 0 0-1.173 4.007m11.218 0a6.042 6.042 0 0 1-1.173 4.007m-7.5 0a6 6 0 0 1-1.253-3.386M12 3a6 6 0 0 0-3.518 10.653c.446-1.123.663-2.306.663-3.518a6 6 0 0 1 9.341-3.386c0 1.212-.217 2.393-.663 3.518a6.042 6.042 0 0 1-1.173-4.007M12 3c1.212 0 2.393.217 3.518.663a6.042 6.042 0 0 1 1.173 4.007M12 21c-1.212 0-2.393-.217-3.518-.663a6.042 6.042 0 0 1-1.173-4.007m7.5 0c.57-1.023.995-2.148 1.253-3.386" />
    </svg>
);

export const MegaphoneIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
    </svg>
);

export const CalendarDaysIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0h18M-4.5 12h22.5" />
    </svg>
);
