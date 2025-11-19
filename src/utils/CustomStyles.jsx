import React from 'react';
import { COLORS } from './constants';

/**
 * Component to inject global custom styles and keyframes.
 */
const CustomStyles = () => (
      <style>
        {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

            /* Global Styles Reset and Typography */
            body {
                margin: 0;
                padding: 0;
                background-color: ${COLORS.background}; /* White Background */
                color: ${COLORS.textDark};
                font-family: 'Inter', sans-serif;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
            }

            /* Utility Classes */
            .flex-center {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 1rem;
            }
            .button {
                background-color: ${COLORS.secondary}; /* Red */
                color: ${COLORS.textLight}; /* White */
                padding: 0.8rem 1.8rem;
                border: none;
                border-radius: 10px; /* Very Rounded */
                cursor: pointer;
                transition: background-color 0.2s, box-shadow 0.2s;
                font-weight: 600;
                box-shadow: 0 4px 10px rgba(255, 59, 48, 0.3); /* Red glow shadow */
            }
            .button:hover {
                background-color: #d83027; /* Slightly darker red */
                transform: none; 
                box-shadow: 0 6px 15px rgba(255, 59, 48, 0.4);
            }
            .card {
                background: ${COLORS.background}; /* Pure White */
                padding: 2rem;
                border-radius: 12px; /* Sleek, rounded corners */
                /* Subtle Apple-style shadow */
                box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05); 
                border: 1px solid #EDEDED; /* Light border for definition */
            }
            .card-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 2rem;
            }

            /* Responsive Menu Icon (Hamburger) Styling */
            .menu-icon {
                display: none; /* Hidden on desktop */
                flex-direction: column;
                justify-content: space-between;
                width: 30px;
                height: 21px;
                cursor: pointer;
                position: relative;
                z-index: 100;
            }
            .menu-icon div {
                height: 3px;
                background: ${COLORS.textDark}; /* Dark bars for white header */
                border-radius: 10px;
                transition: all 0.3s ease-in-out;
            }

            /* Mobile Viewpoint Adjustments */
            @media (max-width: 768px) {
                .menu-icon {
                    display: flex;
                }
                .nav-links {
                    display: none;
                    flex-direction: column;
                    position: absolute;
                    top: 100%; /* Below the header */
                    left: 0;
                    width: 100%;
                    background-color: ${COLORS.primary}; /* Dark background for mobile dropdown */
                    padding: 1rem 0;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    z-index: 50;
                }
                .nav-links.open {
                    display: flex;
                }
                .nav-links a {
                    padding: 0.75rem 2rem;
                    text-align: center;
                    color: ${COLORS.textLight}; /* White text in dark dropdown */
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                .nav-links a:last-child {
                    border-bottom: none;
                }
            }
        `}
    </style>
       
);

export default CustomStyles;
