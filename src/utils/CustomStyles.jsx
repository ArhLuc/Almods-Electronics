import React from 'react';
import { COLORS } from './constants';

/**
 * Component to inject global custom styles and keyframes.
 */
const CustomStyles = () => (
    <style>{`
        html { scroll-behavior: smooth; }
        .text-almods-primary { color: ${COLORS.primary}; }
        .text-almods-accent { color: ${COLORS.accent}; }
        .bg-almods-bg { background-color: ${COLORS.background}; }
        .bg-almods-secondary-bg { background-color: ${COLORS.secondaryBg}; }
        .text-almods-neutral { color: ${COLORS.neutral}; }
        
        @keyframes pulse-slow {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }
        .animate-pulse-slow {
            animation: pulse-slow 3s infinite;
        }
    `}</style>
);

export default CustomStyles;
