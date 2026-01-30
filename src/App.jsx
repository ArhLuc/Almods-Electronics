import React, { useState } from 'react';

// --- 1. CONSTANTS (Red/White Apple-Style Theme) ---
const COLORS = {
    primary: '#1D1D1F',    // Near Black / Dark Charcoal (Main text and footer background)
    secondary: '#FF3B30',  // Apple Red (for accents, buttons, and highlights)
    background: '#FFFFFF', // Crisp White (Main page background and header)
    textDark: '#1D1D1F',   // Main text color
    textLight: '#FFFFFF',  // Light text color (for dark backgrounds)
};

// Data for 8 specific products
// The specifications are top-level keys in the object.
const productsData = [
    { 
        id: 'g5k', 
        name: 'MAIN LINE/FULL HOUSE DOUBLE PHASE STABILIZER WORKING RANGE:100V-500V', 
        detail: 'LOW AND HIGH VOLTAGE CUT-OFF PROTECTION - PROTECTS CONNECTED EQUIPMENT FROM POTENTIALLY DANGEROUS VOLTAGES', 
        modelName: "AS10DM500",
        dimension: "500 x 350 x 200 mm",
        application: "Main Line/Full House (Double Phase) - Designed for high-demand residential and light industrial applications requiring robust two-phase voltage correction across an extreme range.",
        workingRange: "100V - 500V",
        image: '/images/mainline100-500.png',
        feature: 'LOW AND HIGH VOLTAGE CUT-OFF PROTECTION - PROTECTS CONNECTED EQUIPMENT FROM POTENTIALLY DANGEROUS VOLTAGES. AS9DP500 ALLOWS FUNCTIONING WITH BY-PASS CHANGE OVER MCB. PERFORMS IN WIDE INPUT RANGE. INITIAL TIME DELAY: THE AMAZING INITIAL TIME DELAY SYSTEM PROTECTS THE COMPRESSOR FROM FREQUENT RE-STARTING AND ENSURES THE SAFETY OF THE CONNECTED EQUIPMENT, IN CASE OF VOLTAGE FLUCTUATION BY PROVIDING A DELAY.' 
    },
    { 
        id: 's10k', 
        name: 'MAIN LINE/FULL HOUSE STABILIZER WORKING RANGE:80V-300V', 
        detail: 'WORKING RANGE OF AS8DM500: 80V-300V (ENSURES FUNCTIONING UNDER WIDE VOLTAGE RANGE)', 
        modelName: "AS8DM10K",
        dimension: "450 x 300 x 180 mm",
        application: "Main Line/Full House (Single Phase) - Provides comprehensive, single-phase voltage stabilization for the entire residential property, protecting all appliances from extreme low voltage conditions.",
        workingRange: "80V - 300V",
        image: '/images/mainline80-300.png',
        feature: 'MICROPROCESSOR BASED DESIGN: Advanced digital circuitry for rapid and precise voltage correction. Built-in **Thermal Overload Protection** and **Intelligent Time Delay** (ITD) for compressor-based appliances. Designed with an attractive digital display showing input and output voltage levels.'
    },
    { 
        id: 'cs2k', 
        name: 'STABILIZER FOR 1.5 & 2.0 TON AC WORKING RANGE:80V-300V', 
        detail: 'WORKING RANGE OF AS8D400: 80V-300V (ENSURES FUNCTIONING UNDER WIDE VOLTAGE RANGE)', 
        modelName: "AS8D400-AC",
        dimension: "300 x 200 x 150 mm",
        application: "1.5 & 2.0 Ton AC Unit (Extreme Low Voltage) - Specifically engineered for high-tonnage air conditioning units operating in areas with severe voltage drops, ensuring compressor safety.",
        workingRange: "80V - 300V",
        image: '/images/AC 150-280.png',
        feature: 'EXTREME LOW VOLTAGE PERFORMANCE: Guarantees air conditioner operation even at 80V, preventing costly compressor failure. **Wall-Mountable Sleek Design** with high-efficiency transformer windings for minimal power loss. Features high-speed voltage cutoff for surge protection.'
    },
    { 
        id: 'ac15t', 
        name: 'STABILIZER FOR 1.5&2.0 TON AC WORKING RANGE:150V-280V', 
        detail: 'WORKING RANGE OF AS2D400: 150V-280V (ENSURES FUNCTIONING UNDER WIDE VOLTAGE RANGE)', 
        modelName: "AS2D400-AC",
        dimension: "300 x 200 x 150 mm",
        application: "1.5 & 2.0 Ton AC Unit (Standard Voltage) - Ideal for stabilizing AC units where voltage fluctuations are moderate, maintaining optimal cooling performance and efficiency.",
        workingRange: "150V - 280V",
        image: '/images/_1.5 & 2.0 TON AC 80V-300V.png',
        feature: 'STANDARD APPLICATION RELIABILITY: Designed for consistent performance in areas with moderate voltage fluctuations. Includes **Initial Time Delay** (ITD) to protect the AC compressor from frequent power cycles. Compact housing for easy installation near the appliance.'
    },
    { 
        id: 'ref500l', 
        name: 'STABILIZER FOR 1.5 TON AC WORKING RANGE:120V-290V', 
        detail: 'WORKING RANGE OF AS2D400: 120V-290V (ENSURES FUNCTIONING UNDER WIDE VOLTAGE RANGE)', 
        modelName: "AS2D250-AC",
        dimension: "280 x 180 x 120 mm",
        application: "1.5 Ton AC Unit (Mid Voltage Fluctuation) - A focused solution for 1.5-ton units, providing protection in environments with predictable but persistent voltage swings.",
        workingRange: "120V - 290V",
        image: '/images/AC 120V-290V copy.png',
        feature: 'MID-RANGE STABILITY: Provides reliable voltage correction from 120V up. **Sleek LED Status Indicators** for monitoring power status. Engineered with robust internal components for extended operational lifespan and low-noise performance.'
    },
    { 
        id: 'ml10kw', 
        name: 'STABILIZER FOR 1.5&2.0 TON AC WORKING RANGE:160V-280V', 
        detail: 'WORKING RANGE OF AS6D400: 160V-280V (ENSURES FUNCTIONING UNDER WIDE VOLTAGE RANGE)', 
        modelName: "AS6D400-ML",
        dimension: "350 x 220 x 160 mm",
        application: "1.5 & 2.0 Ton AC Unit (Narrow Range) - Designed for locations with generally stable grid power but requiring precise regulation within a tighter voltage band.",
        workingRange: "160V - 280V",
        image: '/images/AC 160V-280V copy.png',
        feature: 'PRECISE REGULATION: Focuses on tight voltage control within a narrower input range for highly sensitive electronics. Features **Auto-Reset Functionality** after power cuts, restoring operation safely. High-grade metal casing for superior durability and heat dissipation.'
    },
    { 
        id: 'servo30a', 
        name: 'STABILIZER FOR 1.5 & 2.0 TON AC WORKING RANGE:80V-300V', 
        detail: 'WORKING RANGE OF AS8D400: 80V-300V (ENSURES FUNCTIONING UNDER WIDE VOLTAGE RANGE)', 
        modelName: "Servo-30A-V",
        dimension: "550 x 400 x 250 mm",
        application: "1.5 & 2.0 Ton AC Unit (Servo Grade Protection) - Utilizing advanced servo motor technology for near-instantaneous voltage correction, offering the highest level of stability for critical cooling systems.",
        workingRange: "80V - 300V",
        image: '/images/AC 80V-300V copy.png',
        feature: 'SERVO-ASSISTED CORRECTION: Uses a powerful servo motor for **near-zero-delay voltage regulation**. Ideal for industrial or laboratory-grade applications demanding continuous, perfect voltage supply. Includes an analog meter for real-time voltage monitoring.'
    },
    { 
        id: 'av1k', 
        name: 'STABILIZER FOR REFRIGERATOR AND DEEP FREEZER', 
        detail: 'WORKING RANGE: 130V-290V (ENSURES REFRIGERATOR FUNCTIONING UNDER WIDE VOLTAGE RANGE)', 
        modelName: "AV-1K-FR",
        dimension: "250 x 150 x 100 mm",
        application: "Refrigerator and Deep Freezer - Essential protection for sensitive cooling appliances, preventing damage from power dips and surges which can affect compressor lifespan.",
        workingRange: "130V - 290V",
        image: '/images/REFRIGERATOR AND DEEP FREEZE copy.png',
        feature: 'DEDICATED COOLING APPLIANCE PROTECTION: Optimized ITD specifically for refrigeration compressors. **Compact, under-counter design** with simple plug-and-play setup. High-cut protection ensures the appliance is instantly disconnected during severe high voltage spikes.'
    },
];

// --- 2. CUSTOM STYLES (Apple-Style CSS) ---
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
            /* Screen-reader only text for accessibility (visually hidden) */
            .sr-only {
                position: absolute !important;
                width: 1px !important;
                height: 1px !important;
                padding: 0 !important;
                margin: -1px !important;
                overflow: hidden !important;
                clip: rect(0, 0, 0, 0) !important;
                white-space: nowrap !important;
                border: 0 !important;
            }
            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 0.5rem;
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
                background-color: '#d83027'; /* Slightly darker red */
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
                grid-template-columns: repeat(3, 1fr);
                gap: 5rem;
                padding: 3rem 0;
            }

            /* Feature product card (Top Selling Products) */
            .feature-card {
                text-align: center;
                padding: 4rem 2.5rem;
                border-radius: 28px;
                background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(250,250,250,0.99));
                box-shadow: 0 16px 48px rgba(0,0,0,0.1);
                border: 2px solid rgba(255,59,48,0.1);
                transition: all 300ms cubic-bezier(.2,.9,.2,1);
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
                overflow: hidden;
                min-height: 600px;
            }
            .feature-card::before {
                content: '';
                position: absolute;
                top: -50%;
                right: -50%;
                width: 400px;
                height: 400px;
                background: radial-gradient(circle, rgba(255,59,48,0.08), transparent);
                border-radius: 50%;
                pointer-events: none;
            }
            .feature-card:hover {
                transform: translateY(-16px) scale(1.03);
                box-shadow: 0 40px 80px rgba(255,59,48,0.2);
                border-color: rgba(255,59,48,0.3);
            }
            .feature-card-image {
                width: 100%;
                height: 22rem; /* 352px */
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 2.5rem;
                border-radius: 20px;
                overflow: hidden;
                background: linear-gradient(135deg, #ffffff, #f8f9ff);
                border: 2px solid rgba(255,59,48,0.08);
                transition: all 300ms ease;
            }
            .feature-card:hover .feature-card-image {
                border-color: rgba(255,59,48,0.15);
                background: linear-gradient(135deg, #ffffff, #fff5f3);
            }
            .feature-card-image img {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
                display: block;
                transition: transform 260ms ease;
            }
            .feature-card:hover .feature-card-image img {
                transform: scale(1.02);
            }
            .feature-card-body { width: 100%; }
            .feature-badge {
                display: inline-block;
                background: rgba(255,59,48,0.08);
                color: ${COLORS.secondary};
                padding: 0.25rem 0.6rem;
                border-radius: 999px;
                font-weight: 700;
                font-size: 0.75rem;
                margin-bottom: 0.5rem;
            }
            .feature-title {
                font-size: 1.25rem;
                font-weight: 700;
                color: ${COLORS.primary};
                margin: 0.5rem 0 0.8rem;
                line-height: 1.3;
            }
            .feature-desc {
                color: #666;
                font-size: 1rem;
                margin-bottom: 1.5rem;
                min-height: 3.5rem;
                line-height: 1.5;
            }
            .feature-cta {
                background: ${COLORS.secondary};
                color: ${COLORS.textLight};
                padding: 0.6rem 0.9rem;
                border-radius: 10px;
                border: none;
                cursor: pointer;
                font-weight: 700;
                box-shadow: 0 8px 20px rgba(255,59,48,0.12);
                transition: transform 160ms ease, box-shadow 160ms ease;
                display: inline-block;
            }
            .feature-cta:hover { transform: translateY(-3px); box-shadow: 0 14px 30px rgba(255,59,48,0.16); }

            /* Enhanced Almods Advantage visuals */
            .advantage-section {
                padding-top: 2rem;
                padding-bottom: 3.5rem;
                background: linear-gradient(180deg, #fafbff 0%, #ffffff 100%);
                border-top: 1px solid rgba(13,13,13,0.02);
            }
            .advantage-section p { color: #666; }
            .advantage-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                gap: 1.5rem;
                margin-top: 1.25rem;
            }
            .advantage-card {
                position: relative;
                overflow: visible;
                padding: 1.3rem;
                padding-left: 1.2rem;
                border-radius: 16px;
                background: linear-gradient(180deg, #ffffff 0%, #fafcff 100%);
                border: 1px solid rgba(10, 10, 12, 0.04);
                box-shadow: 0 12px 40px rgba(10, 18, 30, 0.06);
                transition: transform 260ms cubic-bezier(.2,.85,.25,1), box-shadow 260ms ease, opacity 260ms ease;
                display: flex;
                flex-direction: column;
            }
            .advantage-card::before {
                /* subtle diagonal highlight */
                content: '';
                position: absolute;
                inset: 0;
                pointer-events: none;
                background: linear-gradient(120deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 35%);
                mix-blend-mode: overlay;
                border-radius: inherit;
            }
            .advantage-card:hover {
                transform: translateY(-10px);
                box-shadow: 0 34px 80px rgba(10, 18, 40, 0.12);
            }
            .advantage-icon {
                width: 56px;
                height: 56px;
                border-radius: 12px;
                background: linear-gradient(90deg, #00eaff, ${COLORS.secondary});
                display: inline-flex;
                align-items: center;
                justify-content: center;
                color: ${COLORS.textLight};
                font-weight: 700;
                margin-bottom: 0.75rem;
                box-shadow: 0 12px 30px rgba(10,30,50,0.08);
                position: relative;
            }
            .advantage-icon::after {
                content: '';
                position: absolute;
                left: -6px;
                top: -6px;
                right: -6px;
                bottom: -6px;
                border-radius: 14px;
                filter: blur(14px);
                opacity: 0.18;
                background: linear-gradient(90deg, rgba(0,234,255,0.25), rgba(255,59,48,0.18));
                z-index: -1;
            }
            .advantage-title { font-size: 1.08rem; font-weight: 800; color: ${COLORS.primary}; margin: 0 0 0.4rem; }
            .advantage-desc { color: #444; margin: 0; font-size: 0.98rem; line-height: 1.4; }

            /* gentle icon float animation */
            @keyframes floatIcon {
                0% { transform: translateY(0); }
                100% { transform: translateY(-6px); }
            }
            .advantage-icon svg { animation: floatIcon 4.5s ease-in-out infinite alternate; }

            @media (max-width: 768px) {
                /* Compact feature card visuals */
                .feature-card-image {
                    height: 10rem; /* 160px on small screens */
                }
                .feature-title { font-size: 0.98rem; }
                .feature-desc { font-size: 0.9rem; }
                .advantage-grid { gap: 1rem; grid-template-columns: 1fr; }
                .advantage-card { padding: 1rem; border-radius: 12px; }
                .advantage-icon { width: 48px; height: 48px; }

                /* Make buttons stretch for easier tapping */
                .button, .button-outline {
                    width: 100%;
                    display: block;
                    box-sizing: border-box;
                    padding-left: 1rem;
                    padding-right: 1rem;
                    text-align: center;
                }

                /* Reduce horizontal padding for small containers */
                .container { padding: 0 1rem; }

                /* Make product card grid single-column and reduce spacing */
                .card-grid {
                    grid-template-columns: 1fr !important;
                    gap: 2rem !important;
                    padding: 2rem 0 !important;
                }

                /* Ensure product images scale naturally on mobile */
                .card img, .feature-card-image img, .hero-image { height: auto !important; max-width: 100%; }

                /* Tighten hero sizing for small viewports */
                .hero-image-container { height: 38vh; }
                .hero-title { font-size: 2rem !important; }

                /* Hero overlay text scaling */
                .hero-overlay p { font-size: 1rem !important; line-height: 1.5 !important; max-width: 92% !important; }
                .hero-overlay .container { padding-left: 0.5rem; padding-right: 0.5rem; }
                .hero-overlay .button, .hero-overlay .button-outline { width: 100% !important; padding: 0.85rem 1rem !important; font-size: 1rem !important; }


            /* Extra-small screens (phones) */
            @media (max-width: 480px) {
                .hero-image-container { height: 34vh !important; }
                .hero-title { font-size: 1.6rem !important; line-height: 1.1 !important; }
                .hero-overlay p { font-size: 0.98rem !important; margin-bottom: 1rem !important; }
                .hero-overlay .container { padding-left: 0.75rem; padding-right: 0.75rem; }
                .hero-overlay .button, .hero-overlay .button-outline { width: 100% !important; display: block !important; }
                .hero-overlay .button { margin-bottom: 0.6rem !important; }
                .hero-overlay .button-outline { margin-bottom: 0.25rem !important; }
            }
                /* Specs grid becomes single column */
                .specs-grid-desktop { grid-template-columns: 1fr !important; }

                /* Make feature cards less tall on mobile */
                .feature-card { padding: 2.5rem 1.25rem; min-height: auto; }
            }

            /* Responsive Logo Size */
            .header-logo {
                height: 45px; /* Default/Mobile height */
                transition: height 0.3s ease;
            }
            
            /* --- Responsive Hero Image Style for Full Screen Impact --- */
            .hero-image-container {
                position: relative;
                width: 100%;
                /* Desktop Height: 50% of viewport height for high impact */
                height: 55vh; 
                overflow: hidden;
                perspective: 1200px;
            }
            .hero-decor { position: absolute; inset: 0; pointer-events: none; }
            .hero-decor .dot { position: absolute; border-radius: 999px; opacity: 0.14; filter: blur(14px); transform: translate3d(0,0,0); }
            .hero-decor .one { width: 160px; height: 160px; left: 6%; top: 12%; background: linear-gradient(90deg, #00eaff, ${COLORS.secondary}); }
            .hero-decor .two { width: 120px; height: 120px; right: 8%; top: 22%; background: linear-gradient(90deg, rgba(255,59,48,0.9), #ff9a80); }
            .hero-decor .three { width: 220px; height: 220px; left: 38%; top: -12%; background: linear-gradient(90deg, rgba(0,234,255,0.7), rgba(255,59,48,0.5)); opacity: 0.09; }
            .hero-image {
                width: 100%;
                height: 100%; 
                object-fit: cover; /* Ensure it covers the area */
                transition: transform 0.8s cubic-bezier(.2,.9,.2,1);
                will-change: transform;
            }
            .hero-image-container:hover .hero-image { transform: scale(1.035) translateZ(0); }
            .hero-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                /* Dark gradient overlay for text contrast and legibility */
                background: linear-gradient(180deg, rgba(0,0,0,0.28), rgba(0,0,0,0.48));
                padding: 2rem 1rem;
            }
            .hero-wave { display: block; width: 100%; height: 80px; margin-top: -2px; }

            /* CTA outline button */
            .button-outline { background: transparent; border: 2px solid ${COLORS.primary}; color: ${COLORS.primary}; padding: 0.7rem 1.2rem; border-radius: 999px; transition: all 220ms ease; font-weight:700; }
            .button-outline:hover { background: ${COLORS.primary}; color: ${COLORS.textLight}; transform: translateY(-3px); box-shadow: 0 10px 28px rgba(29,29,31,0.12); }

            /* Card entrance and tilt */
            .card-grid { perspective: 1200px; }
            .card-grid .feature-card { opacity: 0; transform: translateY(10px) scale(0.995); animation: fadeUp 520ms cubic-bezier(.2,.85,.25,1) both; }
            .card-grid .feature-card:nth-child(1) { animation-delay: 0.06s; }
            .card-grid .feature-card:nth-child(2) { animation-delay: 0.12s; }
            .card-grid .feature-card:nth-child(3) { animation-delay: 0.18s; }
            @keyframes fadeUp { to { opacity: 1; transform: translateY(0) scale(1); } }
            @keyframes fadeInDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
            @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
            @keyframes slideInLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }

            .feature-card { transform-origin: center; will-change: transform; }
            .feature-card:hover { transform: translateY(-12px) rotateX(3deg) rotateY(1.2deg); box-shadow: 0 38px 78px rgba(13,13,13,0.14); }

            @media (max-width: 768px) {
                .hero-image-container { height: 40vh; }
                .hero-decor .one, .hero-decor .two, .hero-decor .three { display: none; }
                .card-grid .feature-card { animation: none; opacity: 1; transform: none; }
                .button-outline { padding: 0.6rem 1rem; }
            }
            .hero-title {
                color: ${COLORS.textLight}; /* White text */
                /* Use a fluid/clamped size so the headline fits all mobile widths */
                font-size: clamp(1.4rem, 7.2vw, 3.5rem) !important;
                font-weight: 800;
                margin-bottom: 1rem;
                line-height: 1.05 !important;
                text-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
                white-space: normal !important;
                word-break: break-word !important;
            }

            /* Ensure hero overlay container and paragraph are fluid on small screens */
            .hero-overlay .container { max-width: 100% !important; padding-left: 0.75rem !important; padding-right: 0.75rem !important; }
            .hero-overlay p { font-size: clamp(0.95rem, 3.8vw, 1.3rem) !important; line-height: 1.45 !important; max-width: 100% !important; }
            /* --- END Hero Styles --- */


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
            
            /* High-Impact Feature Row for Product Details */
            .feature-highlight {
                background-color: #ffffff; 
                padding: 1.5rem;
                border-radius: 8px;
                margin-bottom: 1rem;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); 
            }
            .feature-highlight-value {
                font-size: 1.1rem !important; 
                line-height: 1.5;
            }
                .cta-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;

  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.6px;

  padding: 1rem 2.4rem;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  color: #fff;

  background: linear-gradient(
    135deg,
    #ff3b30,
    #ff6a5b,
    #ff3b30
  );
  background-size: 200% 200%;

  box-shadow:
    0 8px 24px rgba(255, 59, 48, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);

  transition:
    transform 0.35s cubic-bezier(.2,.9,.2,1),
    box-shadow 0.35s ease,
    background-position 0.6s ease;
}

/* 🔥 Hover */
.cta-button:hover {
  transform: translateY(-5px) scale(1.02);
  background-position: 100% 0;

  box-shadow:
    0 18px 45px rgba(255, 59, 48, 0.45),
    0 0 0 6px rgba(255, 59, 48, 0.08);
}

/* ⚡ Active / Click */
.cta-button:active {
  transform: translateY(-1px) scale(0.98);
  box-shadow:
    0 10px 25px rgba(255, 59, 48, 0.35);
}

/* 🎯 Keyboard focus */
.cta-button:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 4px rgba(255, 59, 48, 0.5),
    0 10px 25px rgba(255, 59, 48, 0.4);
}

/* ✨ Subtle glow animation */
.cta-button::after {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: radial-gradient(
    circle at top,
    rgba(255, 255, 255, 0.35),
    transparent 60%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}

.cta-button:hover::after {
  opacity: 1;
}

/* 📱 Mobile tweak */
@media (max-width: 600px) {
  .cta-button {
    font-size: 1rem;
    padding: 0.9rem 2rem;
  }
}


            /* Mobile Viewpoint Adjustments */
            @media (max-width: 768px) {
                .menu-icon {
                    display: flex;
                }
                /* Make the mobile menu a full-screen (under header) overlay for easy navigation */
                .nav-links {
                    display: none;
                    flex-direction: column;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    padding-top: 72px; /* leave room for header */
                    background: linear-gradient(180deg, #ffffff 0%, #fafbff 100%);
                    box-shadow: 0 20px 60px rgba(10,18,30,0.12);
                    z-index: 90;
                    overflow-y: auto;
                }
                .nav-links.open {
                    display: flex;
                    animation: slideDown 220ms ease;
                }
                /* Mobile 'All Pages' card becomes prominent and expands by default */
                .nav-mobile-card {
                    display: block; /* visible in overlay */
                    width: calc(100% - 2rem);
                    margin: 0.6rem auto;
                    background: linear-gradient(180deg, #ffffff, #f7f9ff);
                    border-radius: 14px;
                    padding: 0.6rem;
                    box-shadow: 0 18px 40px rgba(10,18,30,0.08);
                    border: 1px solid rgba(13,13,13,0.04);
                }
                .nav-mobile-toggle {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 0.6rem;
                    padding: 0.6rem 0.6rem;
                    cursor: pointer;
                }

                .nav-mobile-title { font-weight: 800; color: ${COLORS.primary}; font-size: 1.05rem; }
                .nav-mobile-sub { color: #666; font-size: 0.9rem; }
                .nav-mobile-grid {
                    display: grid;
                    gap: 0.6rem;
                    margin-top: 0.6rem;
                    grid-template-columns: repeat(1, 1fr);
                }
                    .hero-overlay {
  background: transparent !important;
}

                /* slightly larger grid on wider phones */
                @media (min-width:420px) {
                    .nav-mobile-grid { grid-template-columns: repeat(2, 1fr); }
                }
                .nav-mobile-grid.open { display: grid; }
                .nav-mobile-item {
                    display: flex;
                    align-items: center;
                    gap: 0.9rem;
                    padding: 1rem;
                    background: #ffffff;
                    border-radius: 12px;
                    cursor: pointer;
                    box-shadow: 0 10px 28px rgba(10,18,30,0.06);
                    transition: transform 160ms ease, box-shadow 160ms ease;
                    border: 1px solid rgba(10,10,12,0.03);
                    font-size: 1.05rem;
                }
                .nav-mobile-item:hover { transform: translateY(-6px); box-shadow: 0 20px 48px rgba(10,18,30,0.08); }
                .nav-mobile-icon {
                    width: 44px; height: 44px; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; font-weight: 800; color: ${COLORS.textLight}; background: ${COLORS.secondary};
                }
                /* Primary tap targets as big buttons below the card as fallback */
                .nav-links a {
                    padding: 0.9rem 1rem;
                    text-align: left;
                    color: ${COLORS.primary};
                    font-weight: 700;
                    transition: background 160ms ease, color 160ms ease, transform 160ms ease;
                    display: block;
                    width: calc(100% - 2rem);
                    margin: 0.5rem auto;
                    box-sizing: border-box;
                    font-size: 1rem;
                    background: transparent;
                    border-radius: 10px;
                }
                .nav-links a:focus, .nav-links a:active, .nav-links a:hover {
                    background: rgba(255, 59, 48, 0.06);
                    color: ${COLORS.secondary};
                    transform: translateY(-2px);
                }
                .nav-links a:last-child { margin-bottom: 1.5rem; }
                
                @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }

                /* Specs grid should become 1 column on mobile */
                .specs-grid-desktop {
                    grid-template-columns: 1fr !important;
                }
                
                /* Reduce hero container height on mobile */
                .hero-image-container {
                    height: 35vh; 
                }
                .hero-title {
                    font-size: 2rem;
                }
                /* On mobile show only the headline and primary CTA */
                .hero-overlay .container > div:nth-child(2) { display: none !important; } /* decorative line */
                .hero-overlay p { display: none !important; } /* hide paragraph on mobile */
                /* Show both CTAs on mobile; stack them and make them touch-friendly */
                .hero-overlay .button-outline { display: block !important; width: 100% !important; margin: 0.4rem 0 !important; }
                .hero-overlay .button { display: block !important; width: 100% !important; margin: 0.6rem 0 0.4rem 0 !important; }
                /* Give the secondary CTA a dark/black background on mobile for prominence */
                .hero-overlay .button-outline {
                    background: rgba(10,10,12,0.96) !important;
                    color: ${COLORS.textLight} !important;
                    border-color: rgba(255,255,255,0.08) !important;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.45) !important;
                    padding: 0.9rem 1rem !important;
                }
                .hero-overlay .button-outline:hover { background: rgba(20,20,20,1) !important; }
                    .feature-card-image {
  width: 100%;
  height: 10rem; /* 160px on small screens */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.feature-card-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
  

                /* Mobile product card grid - 1 column */
                .card-grid {
                    grid-template-columns: 1fr !important;
                    gap: 2.5rem !important;
                    padding: 2rem 0 !important;
                }
                .card {
                    padding: 1.5rem !important;
                    border-radius: 16px !important;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.06) !important;
                }
                .card img {
                    height: 180px !important;
                }
                /* Products page mobile heading */
                #products-page h2 {
                    font-size: 2.2rem !important;
                }
                .feature-card {
                    padding: 2.5rem 1.5rem !important;
                    min-height: auto !important;
                    border-radius: 20px !important;
                }
                .feature-card-image {
                    height: 14rem !important;
                    margin-bottom: 1.5rem !important;
                }
                .feature-title {
                    font-size: 1.1rem !important;
                }
                .feature-desc {
                    font-size: 0.9rem !important;
                    min-height: 3rem !important;
                }

            }
                /* Default (Desktop) — unchanged */
.top-selling-section {
  margin-top: 0;
}

/* 📱 Mobile only */
@media (max-width: 768px) {
  .top-selling-section {
    padding-top: 2.5rem !important;  /* reduce space */
    margin-top: -2.5rem;             /* pull section upward */
  }
}

            /* Desktop Viewpoint Adjustments (min-width: 769px) */
            @media (min-width: 769px) {
                /* Increase Logo Size for desktop */
                .header-logo {
                    height: 60px; 
                }
                
                /* Desktop Navigation Styles */
                .menu-icon {
                    display: none;
                }
                .nav-links {
                    display: flex;
                    position: static;
                    background: none;
                    backdrop-filter: none;
                    padding: 0;
                    gap: 0.5rem;
                    box-shadow: none;
                }
                .nav-links a {
                    color: #1D1D1F;
                    padding: 0.6rem 1.2rem;
                    border: none;
                    border-radius: 6px;
                    font-weight: 500;
                    font-size: 0.95rem;
                    transition: all 300ms ease;
                    position: relative;
                }
                .nav-links a:hover {
                    color: #FF3B30;
                    background: rgba(255, 59, 48, 0.08);
                    padding-left: 1.2rem;
                }
                .nav-item {
                    position: relative;
                }
                .nav-item .nav-indicator {
                    height: 3px;
                    width: 0;
                    background: #FF3B30;
                    position: absolute;
                    bottom: -8px;
                    left: 50%;
                    transform: translateX(-50%);
                    border-radius: 2px;
                    animation: slideIn 300ms ease forwards;
                }
                
                @keyframes slideIn {
                    from { width: 0; }
                    to { width: 30px; }
                }
                
                /* Product card image sizing for desktop */
                .feature-card-image {
                    height: 12rem; /* 192px on desktop */
                }
                
                 /* Ensure 2 columns for specs on desktop */
                 .specs-grid-desktop {
                    grid-template-columns: 1fr 1fr;
                }
            }
        `}
    </style>
);

// --- 3. HEADER COMPONENT (White Background) ---
const Header = ({ isMenuOpen, setIsMenuOpen, navItems, setCurrentPage, currentPage }) => {
    const handleNavClick = (page) => {
        setCurrentPage(page);
        setIsMenuOpen(false); // Close menu on mobile after click
    };

    return (
        <header style={{ 
            backgroundColor: COLORS.background,
            color: COLORS.textDark, 
            padding: '0.85rem 0',
            position: 'sticky',
            top: 0,
            zIndex: 10,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
            backdropFilter: 'blur(10px)',
            background: 'rgba(255, 255, 255, 0.96)'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                margin: 0,
                padding: '0 1rem'
            }}>
                
                {/* LOGO */}
                <img 
                    src="/images/almodslogo.png"
                    alt="Almods Electronics Logo"
                    onClick={() => setCurrentPage('home')}
                    className="header-logo"
                    style={{
                        width: 'auto',
                        maxWidth: '100%',
                        height: '50px',
                        margin: 0,
                        cursor: 'pointer',
                        transition: 'transform 200ms ease'
                    }}
                />
                
                {/* Mobile Menu Icon */}
                <div
                    className="menu-icon"
                    role="button"
                    aria-label="Toggle navigation"
                    aria-expanded={isMenuOpen}
                    tabIndex={0}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setIsMenuOpen(!isMenuOpen); } }}
                    style={{ cursor: 'pointer' }}
                >
                    <div style={{ background: COLORS.textDark, transform: isMenuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none', transition: 'all 300ms ease' }}></div>
                    <div style={{ background: COLORS.textDark, opacity: isMenuOpen ? 0 : 1, transition: 'opacity 300ms ease' }}></div>
                    <div style={{ background: COLORS.textDark, transform: isMenuOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none', transition: 'all 300ms ease' }}></div>
                </div>

                {/* Navigation Links */}
                <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}
                    style={{
                        gap: '0.5rem',
                    }}
                >
                    {/* Mobile tiles integrated into the same nav overlay for quick navigation */}
                    <div className={`nav-mobile-grid ${isMenuOpen ? 'open' : ''}`} aria-hidden={!isMenuOpen} style={{ width: '100%', padding: '0 1rem' }}>
                        {navItems.map((item) => (
                            <div
                                key={`mobile-${item.page}`}
                                className="nav-mobile-item"
                                onClick={() => handleNavClick(item.page)}
                                role="button"
                                aria-label={item.name}
                                tabIndex={0}
                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleNavClick(item.page); } }}
                            >
                                <span className="sr-only">{item.name}</span>
                            </div>
                        ))}
                    </div>

                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            onClick={() => handleNavClick(item.page)}
                            className={`nav-item ${currentPage === item.page ? 'active' : ''}`}
                            style={{
                                color: currentPage === item.page ? COLORS.secondary : COLORS.textDark,
                                textDecoration: 'none',
                                fontWeight: currentPage === item.page ? '700' : '500',
                                padding: '0.5rem 1rem',
                                borderRadius: '8px',
                                transition: 'all 200ms ease',
                                cursor: 'pointer',
                                position: 'relative',
                                fontSize: '0.95rem',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {item.name}
                            {currentPage === item.page && (
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-8px',
                                    left: '1rem',
                                    right: '1rem',
                                    height: '3px',
                                    background: COLORS.secondary,
                                    borderRadius: '2px',
                                    animation: 'slideIn 200ms ease'
                                }}/>
                            )}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

// --- 4. FOOTER COMPONENT (Dark Background) ---
const Footer = () => {
    return (
        <footer style={{
            backgroundColor: COLORS.primary, // Dark Charcoal
            color: COLORS.textLight,
            padding: '2rem 0',
            marginTop: 'auto', 
            textAlign: 'center',
            fontSize: '0.9rem',
            borderTop: `4px solid ${COLORS.secondary}` // Red accent line
        }}>
            <div className="container">
                <h3 style={{ 
                    fontSize: '1.2rem', 
                    fontWeight: '800', 
                    margin: '0 0 1rem 0', 
                    color: COLORS.secondary // Red text
                }}>
                    Almods Electronics
                </h3>
                <p>&copy; {new Date().getFullYear()} Almods Electronics. All rights reserved.</p>
            </div>
        </footer>
    );
};

// --- 5. PAGE COMPONENTS (For PageRouter) ---

// Used for Home Page top-selling products (simplified card)
const FeatureProductCard = ({ title, description, image, onSelect }) => {
  return (
    <div className="feature-card">
      <div className="feature-card-image">
        <img src={image} alt={title} />
      </div>

      <div className="feature-card-body">
        <div className="feature-badge">Top Seller</div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-desc">{description}</p>
      <button type="button" className="button" onClick={onSelect} style={{ padding: '0.6rem 1rem', fontSize: '0.9rem', alignSelf: 'flex-start' }}>Explore Product</button>
      </div>
    </div>
  );
};




const AdvantagePoint = ({ icon, title, description }) => (
    <div className="advantage-card">
        <div className="advantage-icon">{icon}</div>
        <h4 className="advantage-title">{title}</h4>
        <p className="advantage-desc">{description}</p>
    </div>
);


const HomePage = ({ setCurrentPage, setSelectedProductId }) => (
    <div>
        {/* --- Hero Section: Full-Width Image with Text Overlay --- */}
        <div className="hero-image-container">
            <img 
                // Placeholder URL for a high-resolution, wide image
                src="/images/image copy 2.png"
                alt="Large hero image representing power stabilization technology"
                className="hero-image" 
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1920x800/1D1D1F/FF3B30?text=POWER+STABILITY'; }}
            />

            {/* Decorative floating accents (purely visual) */}
            <div className="hero-decor" aria-hidden>
                <div className="dot one"/>
                <div className="dot two"/>
                <div className="dot three"/>
            </div>

            {/* Text Overlay for visibility */}
            <div className="hero-overlay">
                <div className="container">
                    <div style={{
                        animation: 'fadeInDown 0.8s ease-out'
                    }}>
                        <h2 className="hero-title" style={{
                            fontWeight: '900',
                            letterSpacing: '-2px',
                            marginBottom: '1.5rem',
                            lineHeight: '1.1',
                            backgroundImage: `linear-gradient(135deg, #ffffff, #e0e0e0)`,
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                            position: 'relative'
                        }}>
                            NOW DEALS IN<br/>SOLAR PLANTS
                        </h2>
                    </div>

                    {/* Decorative line */}
                    <div style={{
                        width: '83px',
                        height: '5px',
                        background: `linear-gradient(90deg, #FF3B30, transparent)`,
                        marginBottom: '2rem',
                        borderRadius: '3px',
                        animation: 'slideInLeft 0.8s ease-out 0.2s both'
                    }}></div>

                    <p style={{ 
                        fontSize: '1.3rem', 
                        lineHeight: '1.8', 
                        margin: '0 auto 2.5rem auto',
                        color: COLORS.textLight, 
                        maxWidth: '720px',
                        textShadow: '0 3px 10px rgba(0, 0, 0, 0.4)',
                        fontWeight: '500',
                        letterSpacing: '0.3px',
                        animation: 'fadeInUp 0.8s ease-out 0.3s both'
                    }}>
                        Safeguarding your systems with <strong style={{
                            color: '#FF5252',
                            fontWeight: '700',
                            textShadow: '0 2px 8px rgba(255, 59, 48, 0.3)'
                        }}>Almods Stabilizers, Servo & Solar Solutions</strong>—where performance meets uncompromised reliability and innovation.
                    </p>

                    {/* CTA Buttons with enhanced styling */}
                    <div style={{ 
                        display: 'flex', 
                        gap: '1.5rem', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        animation: 'fadeInUp 0.8s ease-out 0.5s both'
                    }}>
                     <button
  onClick={() => setCurrentPage('products')}
  className="cta-button"
>
  ⚡ Discover Our Stabilizers
</button>

                        
                    </div>
                </div>
            </div>
        </div>

      
        {/* --- End Hero Section --- */}
        
        {/* Top Selling Products Section */}
<div
  className="container top-selling-section"
  style={{ padding: '6rem 0.5rem 4rem' }}
>
  <h2
    style={{
      textAlign: 'center',
      color: COLORS.primary,
      fontSize: '3.2rem',
      marginBottom: '0.75rem',
      marginTop: 0,
      fontWeight: '800',
      letterSpacing: '-0.8px',
      backgroundImage: `linear-gradient(135deg, ${COLORS.primary}, #FF5252)`,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow: 'none',
      position: 'relative',
      paddingBottom: '0.5rem'
    }}
  >
    Top Selling Products
  </h2>

  <div
    style={{
      width: '60px',
      height: '4px',
      background: `linear-gradient(90deg, ${COLORS.primary}, transparent)`,
      margin: '0 auto 2rem',
      borderRadius: '2px'
    }}
  />

  <p
    style={{
      textAlign: 'center',
      color: '#888',
      fontSize: '1.05rem',
      maxWidth: '520px',
      margin: '0 auto 3.5rem',
      fontWeight: '500',
      letterSpacing: '0.3px'
    }}
  >
    Explore our most popular electrical solutions trusted by thousands of customers
  </p>
  <div className="card-grid">
    <FeatureProductCard
      title={productsData[2].name}
      description={productsData[2].detail}
      image={productsData[2].image}
      onSelect={() => { setSelectedProductId(productsData[2].id); setCurrentPage('product'); }}
    />

    <FeatureProductCard
      title={productsData[4].name}
      description={productsData[4].detail}
      image={productsData[4].image}
      onSelect={() => { setSelectedProductId(productsData[4].id); setCurrentPage('product'); }}
    />

    <FeatureProductCard
      title={productsData[5].name}
      description={productsData[5].detail}
      image={productsData[5].image}
      onSelect={() => { setSelectedProductId(productsData[5].id); setCurrentPage('product'); }}
    />
  </div>

  <div style={{ textAlign: 'center', marginTop: '2.25rem' }}>
    <button onClick={() => setCurrentPage('products')} className="button-outline">View All Products</button>
  </div>

</div>

{/* About Us Teaser Section */}
<div style={{ backgroundColor: 'linear-gradient(180deg, #ffffff, #f8f9fb)', padding: '4rem 0' }}>
    <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            {/* Left: Text */}
            <div>
                <p style={{ color: COLORS.secondary, fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '0.5rem' }}>WHO WE ARE</p>
                <h2 style={{ color: COLORS.primary, fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.3 }}>Almods Electronics</h2>
                <p style={{ color: '#333', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    34+ years of innovation and excellence in electrical solutions. We manufacture industry-leading voltage stabilizers, inverters, and solar solutions trusted by thousands across India.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div>
                        <div style={{ fontSize: '1.8rem', fontWeight: 800, color: COLORS.secondary }}>34+</div>
                        <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.25rem' }}>Years</p>
                    </div>
                    <div>
                        <div style={{ fontSize: '1.8rem', fontWeight: 800, color: COLORS.secondary }}>10k+</div>
                        <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.25rem' }}>Customers</p>
                    </div>
                </div>
                <button onClick={() => setCurrentPage('about')} className="button" style={{ fontSize: '0.98rem' }}>Learn More About Us</button>
            </div>

            {/* Right: Visual Card with Stats */}
            <div>
                <div style={{ background: 'linear-gradient(180deg, #ffffff, #fbfcff)', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(13,13,13,0.04)', boxShadow: '0 12px 40px rgba(10,18,30,0.08)' }}>
                    <div style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(13,13,13,0.06)' }}>
                        <p style={{ color: COLORS.secondary, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.3rem', letterSpacing: '0.6px' }}>Located In</p>
                        <h4 style={{ color: COLORS.primary, fontSize: '1.3rem', fontWeight: 800, margin: 0 }}>Lucknow</h4>
                    </div>
                    <div style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(13,13,13,0.06)' }}>
                        <p style={{ color: COLORS.secondary, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.3rem', letterSpacing: '0.6px' }}>Our Mission</p>
                        <p style={{ color: '#333', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>Superior quality electrical products with excellence in service and innovation.</p>
                    </div>
                    <div>
                        <p style={{ color: COLORS.secondary, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.3rem', letterSpacing: '0.6px' }}>Our Vision</p>
                        <p style={{ color: '#333', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>Trusted leader in electrical solutions industry, delivering quality and reliability.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        {/* The Almods Advantage Section */}
        <div style={{ backgroundColor: '#f9f9f9', padding: '4rem 0' }}>
            <div className="container advantage-section">
                <h2 style={{ 
                    textAlign: 'center', 
                    color: COLORS.primary, 
                    fontSize: '2.2rem', 
                    marginBottom: '0.5rem',
                    fontWeight: 800
                }}>
                    The Almods Advantage
                </h2>
                <p style={{ textAlign: 'center', color: '#666', maxWidth: '820px', margin: '0 auto 2rem' }}>
                    Built from the ground up for endurance — precision engineering, robust circuit protection, and global safety compliance.
                </p>

                <div className="advantage-grid">
                    <AdvantagePoint
                        icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15 8H9L12 2Z" fill="white" opacity=".9"/><path d="M4 13h16v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7z" fill="white" opacity=".9"/></svg>}
                        title="Aerospace-Grade Components"
                        description="Premium-grade transformers, capacitors and thermal-rated parts chosen for high reliability under continuous heavy loads."
                    />

                    <AdvantagePoint
                        icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 12h18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                        title="Circuit-Level Reliability"
                        description="Multi-stage surge suppression, EMI/RFI filtering, and optimized PCB layout reduce electrical stress and thermal hotspots — keeping systems stable for years."
                    />

                    <AdvantagePoint
                        icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                        title="Global Compliance Certified"
                        description="Designed and tested to meet major international safety and quality standards (UL, CE, ISO) for global deployment and peace of mind."
                    />
                </div>
            </div>
        </div> 
    </div>
);

// Component for displaying a single product in the grid
const ProductGridCard = ({ product, onExploreClick }) => (
    <div className="card" style={{ 
        textAlign: 'left', 
        padding: '1.8rem', 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%',
        borderRadius: '20px',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(250,250,250,0.99))',
        boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
        border: '1px solid rgba(255,59,48,0.08)',
        transition: 'all 300ms cubic-bezier(.2,.9,.2,1)',
        position: 'relative',
        overflow: 'hidden'
    }}
    onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
        e.currentTarget.style.boxShadow = '0 32px 64px rgba(255,59,48,0.15)';
        e.currentTarget.style.borderColor = 'rgba(255,59,48,0.2)';
    }}
    onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)';
        e.currentTarget.style.borderColor = 'rgba(255,59,48,0.08)';
    }}>
        <div style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '16px',
            marginBottom: '1.5rem',
            backgroundColor: '#f8f9ff',
            border: '2px solid rgba(255,59,48,0.06)'
        }}>
            <img 
                src={product.image} 
                alt={product.name} 
                style={{ 
                    width: '100%', 
                    height: '220px', 
                    borderRadius: '16px', 
                    objectFit: 'contain',
                    padding: '1rem',
                    backgroundColor: '#ffffff',
                    transition: 'transform 300ms ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/aaaaaa/333333?text=Product+Image'; }}
            />
        </div>
        <h3 style={{ 
            color: COLORS.primary, 
            fontSize: '1.25rem', 
            marginBottom: '0.75rem', 
            fontWeight: '700',
            lineHeight: '1.3'
        }}>
            {product.name}
        </h3>
        <p style={{ 
            margin: '0 0 1.5rem 0', 
            fontSize: '0.95rem', 
            color: '#666', 
            flexGrow: 1,
            lineHeight: '1.5'
        }}>
            {product.detail}
        </p>
        <button 
            className="button" 
            onClick={() => onExploreClick(product)} 
            style={{ 
                padding: '0.75rem 1.5rem', 
                fontSize: '0.95rem', 
                fontWeight: '600',
                alignSelf: 'flex-start',
                borderRadius: '8px',
                transition: 'all 200ms ease',
                boxShadow: '0 4px 12px rgba(255,59,48,0.2)'
            }}
            onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 20px rgba(255,59,48,0.3)';
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(255,59,48,0.2)';
            }}
        >
            Explore Product
        </button>
    </div>
);

// Component for the single product detail view
const ProductDetails = ({ product, onBackClick, setCurrentPage }) => {
    // Define the specifications to display and their display names
    const specsToDisplay = [
        { label: "Product Highlight", key: "detail" }, // Full-width, high-impact feature
        { label: "Model Name", key: "modelName" },
        { label: "Dimension", key: "dimension" },
        { label: "Working Range", key: "workingRange" },
        { label: "Application", key: "application" },
        { label: "Key Features", key: "feature" } 
    ];
    
    // Keys that should span the full width of the grid and receive special styling
    const fullWidthKeys = ['detail', 'application', 'feature']; 

    return (
        // Reduced top padding (from 4rem) to 1.5rem to pull content closer to header
        <div style={{ padding: '1.5rem 0 4rem 0' }}> 
            
            {/* Back Button Section: Now with minimal padding, near the top of the page */}
            <div className="container" style={{padding: '0.5rem 0 1rem 0'}}>
                <button 
                    className="button" 
                    onClick={onBackClick} 
                    style={{ 
                        backgroundColor: COLORS.primary, // Dark button for back action
                        boxShadow: '0 4px 10px rgba(29, 29, 31, 0.2)',
                        padding: '0.5rem 1rem' 
                    }}
                >
                    &larr; Back to Products
                </button>
            </div>

            {/* Main Full-Width Content Section: Spans entire screen width */}
            <section style={{ 
                backgroundColor: '#f7f7f7', // Light gray background band
                padding: '0' 
            }}>
                {/* SECTION 1: Image and Product Header/CTA 
                    Reduced top padding from 4rem to 2rem to shift content up.
                */}
                <div className="container" style={{ 
                    display: 'flex', 
                    gap: '4rem', 
                    alignItems: 'flex-start', 
                    flexWrap: 'wrap',
                    padding: '2rem 1rem 2rem 1rem', 
                }}>
                    {/* Product Image Column */}
                    <div style={{ flex: '1 1 350px' }}>
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                borderRadius: '12px', 
                                // Keep shadow for image
                                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)' 
                            }}
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/aaaaaa/333333?text=Product+Image'; }}
                        />
                    </div>
                    
                    {/* Details/Text Column - Takes up remaining width */}
                    <div style={{ flex: '2 1 500px' }}>
                        <h1 style={{ 
                            color: COLORS.primary, 
                            fontSize: '2.2rem', 
                            marginBottom: '1.5rem', 
                            fontWeight: '800' 
                        }}>
                            {product.name}
                        </h1>
                        
                        {/* Moved CTA Button here for immediate visibility */}
                        <button className="button"
                         onClick={() => setCurrentPage('contact')}
                          style={{ fontSize: '1.2rem' }}>
                            Contact Us &rarr;
                        </button>
                    </div>
                </div>
                
                {/* SECTION 2: Core Specifications Table */}
                <div className="container" style={{ 
                    padding: '2rem 1rem 4rem 1rem', // Padding top/bottom for separation
                }}>
                    {/* CORE SPECIFICATIONS - Full width and visually dominant */}
                    <h3 style={{ 
                        color: COLORS.primary, 
                        fontSize: '1.5rem',
                        marginBottom: '1rem', 
                        borderBottom: `2px solid ${COLORS.secondary}`, 
                        paddingBottom: '0.5rem' 
                    }}>
                        Core Specifications
                    </h3>
                    
                    <div className="specs-grid-desktop" style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                        gap: '1.5rem', 
                        padding: '1.5rem',
                        backgroundColor: '#ffffff', // White background for the spec box 
                        borderRadius: '10px',
                        border: '1px solid #EDEDED'
                    }}>
                        {/* Iterate over the structured specs and pull values directly from product */}
                        {specsToDisplay.map((spec) => {
                            const isFullWidth = fullWidthKeys.includes(spec.key);

                            // Skip rendering if the key exists but the value is null/undefined/empty string
                            if (!product[spec.key]) return null;

                            return (
                                <div 
                                    key={spec.key} 
                                    className={isFullWidth ? 'feature-highlight' : ''}
                                    style={{ 
                                        display: 'flex', 
                                        flexDirection: 'column',
                                        // CRITICAL: Make full-width items span both columns
                                        gridColumn: isFullWidth ? '1 / -1' : 'auto', 
                                    }}
                                >
                                    {/* Label in Red/Secondary color, bold, uppercase */}
                                    <span style={{ 
                                        fontSize: '0.8rem', 
                                        color: COLORS.secondary, 
                                        fontWeight: '700', 
                                        textTransform: 'uppercase', 
                                        letterSpacing: '0.5px' 
                                    }}>
                                        {spec.label}
                                    </span>
                                    {/* Value in Primary color, larger font, bold */}
                                    <span className={isFullWidth ? 'feature-highlight-value' : ''} style={{ 
                                        fontSize: '1.1rem', 
                                        color: COLORS.primary, 
                                        fontWeight: isFullWidth ? '700' : '600', 
                                        marginTop: '0.2rem' 
                                    }}>
                                        {product[spec.key]}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};


const ProductsPage = ({ setCurrentPage, productsData, selectedProductId, setSelectedProductId }) => {
    // Local selected product is derived from global selectedProductId
    const [selectedProduct, setSelectedProduct] = useState(() => selectedProductId ? productsData.find(p => p.id === selectedProductId) : null);

    // Sync if parent selectedProductId changes
    React.useEffect(() => {
        if (selectedProductId) {
            const p = productsData.find(p => p.id === selectedProductId) || null;
            setSelectedProduct(p);
            // scroll to top when navigated from Home
            if (p) window.scrollTo(0, 0);
        } else {
            setSelectedProduct(null);
        }
    }, [selectedProductId, productsData]);

    const handleExploreClick = (product) => {
        setSelectedProduct(product);
        if (setSelectedProductId) setSelectedProductId(product.id);
        if (setCurrentPage) setCurrentPage('product');
        // Optionally scroll to top
        window.scrollTo(0, 0);
    };

    const handleBackClick = () => {
        setSelectedProduct(null);
        if (setSelectedProductId) setSelectedProductId(null);
    };

    // Conditional Rendering: Show details or show grid
    if (selectedProduct) {
        return <ProductDetails product={selectedProduct} onBackClick={handleBackClick} setCurrentPage={setCurrentPage} />;
    }
    
    return (
        <div className="container" style={{ padding: '6rem 0.5rem 4rem' }}>
            <h2 style={{ 
                color: COLORS.primary, 
                fontSize: '3.2rem', 
                marginBottom: '0.75rem',
                marginTop: 0,
                textAlign: 'center', 
                fontWeight: '800',
                letterSpacing: '-0.8px',
                backgroundImage: `linear-gradient(135deg, ${COLORS.primary}, #FF5252)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'fadeInDown 0.8s ease-out'
            }}>
                All Almods Stabilizers
            </h2>
            <div style={{
                width: '60px',
                height: '4px',
                background: `linear-gradient(90deg, ${COLORS.primary}, transparent)`,
                margin: '0 auto 2rem',
                borderRadius: '2px',
                animation: 'slideInLeft 0.8s ease-out 0.2s both'
            }}></div>
            <p style={{
                textAlign: 'center',
                color: '#888',
                fontSize: '1.05rem',
                marginBottom: 0,
                maxWidth: '560px',
                margin: '0 auto 3.5rem',
                fontWeight: '500',
                letterSpacing: '0.3px',
                animation: 'fadeInUp 0.8s ease-out 0.3s both'
            }}>
                Discover our complete range of precision voltage stabilizers engineered for maximum reliability
            </p>
            
            {/* Displaying the 8 specific product cards */}
            <div className="card-grid">
                {productsData.map((product) => (
                    <ProductGridCard
                        key={product.id}
                        product={product}
                        onExploreClick={handleExploreClick}
                    />
                ))}
            </div>
        </div>
    );
};



const inputStyle = {
padding: "0.9rem",
border: `1px solid #ddd`,
borderRadius: "8px",
fontSize: "1rem",
width: "100%",
boxSizing: "border-box",
transition: "border-color 0.2s",
};

const errorStyle = {
color: "red",
fontSize: "0.9rem",
marginTop: "-0.5rem"
};

const ContactPage = () => {
const [name, setName] = useState("");
const [location, setLocation] = useState("");
const [customLocation, setCustomLocation] = useState("");
const [selectedProducts, setSelectedProducts] = useState([]);


const [errors, setErrors] = useState({});

const products = ["SOLAR", "SERVO", "STABILIZER", "INVERTER", "BATTERY"];
const locations = [
    "Lucknow",
    "Ayodhya / Faizabad",
    "Basti",
    "Barabanki",
    "Balrampur",
    "Gonda",
    "Bahraich",
    "Pratapgarh",
    "Gorakhpur",
    "Other",
];

const toggleProduct = (option) => {
    setSelectedProducts((prev) =>
        prev.includes(option)
            ? prev.filter((item) => item !== option)
            : [...prev, option]
    );
};

const validateForm = () => {
    let newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required.";

    if (!location) newErrors.location = "Location is required.";

    if (location === "Other" && !customLocation.trim()) {
        newErrors.customLocation = "Please enter your location.";
    }

    if (selectedProducts.length === 0) {
        newErrors.products = "Select at least one product.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
};

const sendToWhatsApp = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const whatsappNumber = "919876543210";

    const finalLocation = location === "Other" ? customLocation : location;

    const text = `New Enquiry from Almods Website:


Name: ${name}
Location: ${finalLocation}
Interested In: ${selectedProducts.join(", ")}`;


    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        text
    )}`;

    window.open(url, "_blank");
};

return (
    <div style={{ padding: "4rem 0" }}>
        {/* Contact Form Card */}
        <div
            className="card"
            style={{
                maxWidth: "500px",
                margin: "0 auto 4rem",
                textAlign: "center",
                padding: "3rem",
            }}
        >
            <h2
                style={{
                    color: COLORS.primary,
                    fontSize: "2rem",
                    marginBottom: "1.5rem",
                    fontWeight: "700",
                    animation: 'fadeInDown 0.8s ease-out'
                }}
            >
                Get in Touch with Almods
            </h2>

            <p style={{ marginBottom: "2rem", color: "#555" }}>
                
                <strong style={{ color: COLORS.secondary }}>
                    We usually respond to all support messages within 24 to 48 hours.
                </strong>
                .
            </p>

            <form style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                
                {/* NAME */}
                <input
                    type="text"
                    placeholder="Your Name"
                    style={inputStyle}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <div style={errorStyle}>{errors.name}</div>}

                {/* LOCATION DROPDOWN */}
                <select
                    style={inputStyle}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                >
                    <option value="">Select Location</option>
                    {locations.map((loc) => (
                        <option key={loc} value={loc}>
                            {loc}
                        </option>
                    ))}
                </select>
                {errors.location && <div style={errorStyle}>{errors.location}</div>}

                {/* CUSTOM LOCATION INPUT */}
                {location === "Other" && (
                    <>
                        <input
                            type="text"
                            placeholder="Enter your location"
                            style={inputStyle}
                            value={customLocation}
                            onChange={(e) => setCustomLocation(e.target.value)}
                        />
                        {errors.customLocation && (
                            <div style={errorStyle}>{errors.customLocation}</div>
                        )}
                    </>
                )}

                {/* PRODUCTS */}
                <div style={{ textAlign: "left" }}>
                    <label style={{ fontWeight: "600" }}>Select Products:</label>
                    <div style={{ marginTop: "0.8rem" }}>
                        {products.map((item) => (
                            <div key={item} style={{ marginBottom: "0.5rem" }}>
                                <input
                                    type="checkbox"
                                    checked={selectedProducts.includes(item)}
                                    onChange={() => toggleProduct(item)}
                                    id={item}
                                />
                                <label htmlFor={item} style={{ marginLeft: "0.5rem" }}>
                                    {item}
                                </label>
                            </div>
                        ))}
                    </div>
                    {errors.products && (
                        <div style={errorStyle}>{errors.products}</div>
                    )}
                </div>

                <button
                    onClick={sendToWhatsApp}
                    type="button"
                    className="button"
                    style={{
                        fontSize: "1.1rem",
                        marginTop: "1rem",
                        backgroundColor: "#25D366",
                    }}
                >
                    Send via WhatsApp
                </button>

           
            </form>
        </div>

        {/* Premium About Us Section */}
        <div style={{
            maxWidth: "650px",
            margin: "0 auto",
            padding: "3rem 2.5rem",
            background: 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(250,250,250,0.99))',
            borderRadius: '20px',
            border: '2px solid rgba(255,59,48,0.12)',
            boxShadow: '0 12px 40px rgba(255,59,48,0.08)',
            position: 'relative',
            overflow: 'hidden',
            animation: 'fadeInUp 0.8s ease-out 0.3s both'
        }}>
            {/* Decorative accent */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${COLORS.primary}, #FF5252)`,
                borderRadius: '20px 20px 0 0'
            }}></div>

            <h3 style={{
                color: COLORS.primary,
                fontSize: '1.8rem',
                marginBottom: '1rem',
                marginTop: '0.5rem',
                fontWeight: '800',
                letterSpacing: '-0.5px'
            }}>Why Choose Almods?</h3>
            
            <p style={{
                color: '#555',
                fontSize: '1rem',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                fontWeight: '500'
            }}>
                With 34+ years of innovation and excellence, Almods Electronics has become the trusted name in voltage stabilization across India. We're committed to delivering premium electrical solutions engineered for reliability and performance.
            </p>

            {/* Highlights Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem',
                marginTop: '1.5rem'
            }}>
                <div style={{
                    textAlign: 'center',
                    padding: '1rem',
                    borderRadius: '12px',
                    background: 'rgba(255,59,48,0.05)'
                }}>
                    <div style={{
                        fontSize: '1.8rem',
                        fontWeight: '800',
                        color: COLORS.primary,
                        marginBottom: '0.25rem'
                    }}>34+</div>
                    <div style={{
                        fontSize: '0.85rem',
                        color: '#666',
                        fontWeight: '600'
                    }}>Years Experience</div>
                </div>
                <div style={{
                    textAlign: 'center',
                    padding: '1rem',
                    borderRadius: '12px',
                    background: 'rgba(255,59,48,0.05)'
                }}>
                    <div style={{
                        fontSize: '1.8rem',
                        fontWeight: '800',
                        color: COLORS.primary,
                        marginBottom: '0.25rem'
                    }}>1000+</div>
                    <div style={{
                        fontSize: '0.85rem',
                        color: '#666',
                        fontWeight: '600'
                    }}>Happy Customers</div>
                </div>
                <div style={{
                    textAlign: 'center',
                    padding: '1rem',
                    borderRadius: '12px',
                    background: 'rgba(255,59,48,0.05)'
                }}>
                    <div style={{
                        fontSize: '1.8rem',
                        fontWeight: '800',
                        color: COLORS.primary,
                        marginBottom: '0.25rem'
                    }}>8+</div>
                    <div style={{
                        fontSize: '0.85rem',
                        color: '#666',
                        fontWeight: '600'
                    }}>Product Ranges</div>
                </div>
            </div>
        </div>
    </div>
);


};



const AboutPage = ({ setCurrentPage }) => (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #fafbff, #ffffff)' }}>
        {/* Hero Section */}
        <div style={{ background: `linear-gradient(180deg, ${COLORS.primary}, #2a2a2e)`, color: COLORS.textLight, padding: '4rem 1rem', textAlign: 'center' }}>
            <div className="container">
                <h1 style={{ fontSize: '3.2rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2, animation: 'fadeInDown 0.8s ease-out' }}>About Almods Electronics</h1>
                <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto', animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>Empowering India with 34+ years of excellence in electrical solutions</p>
            </div>
        </div>

        {/* Main Content */}
        <div className="container" style={{ padding: '4rem 1rem' }}>
            {/* Introduction */}
            <div style={{ maxWidth: '900px', margin: '0 auto 3rem', lineHeight: 1.8, animation: 'fadeInUp 0.8s ease-out 0.3s both' }}>
                <h2 style={{ color: COLORS.primary, fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>Who We Are</h2>
                <p style={{ fontSize: '1.05rem', color: '#333', marginBottom: '1rem' }}>
                    Almods Electronics is a leading manufacturer of Automatic Voltage Stabilizers, Servo Voltage Stabilizers, Inverters, Batteries, and Solar Solutions. With over 45 years of experience, we have been committed to delivering high-quality, reliable, and efficient electrical solutions to our valued customers.
                </p>
                <p style={{ fontSize: '1.05rem', color: '#333' }}>
                    Our manufacturing unit is located in Lucknow, equipped with state-of-the-art machinery and testing facilities to ensure that every product meets stringent quality standards.
                </p>
            </div>

            {/* Three-column highlights */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                <div style={{ background: 'linear-gradient(180deg, #ffffff, #fbfcff)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(13,13,13,0.04)', boxShadow: '0 12px 40px rgba(10,18,30,0.06)' }}>
                    <h3 style={{ color: COLORS.secondary, fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Quality First</h3>
                    <p style={{ color: '#555', fontSize: '0.98rem' }}>Our products are rigorously tested to comply with national standards, ensuring reliability and performance for both industrial and domestic applications.</p>
                </div>

                <div style={{ background: 'linear-gradient(180deg, #ffffff, #fbfcff)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(13,13,13,0.04)', boxShadow: '0 12px 40px rgba(10,18,30,0.06)' }}>
                    <h3 style={{ color: COLORS.secondary, fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Customer-Centric</h3>
                    <p style={{ color: '#555', fontSize: '0.98rem' }}>We strive to offer the best solutions at competitive prices, building long-term relationships with our clients based on trust, innovation, and consistent performance.</p>
                </div>

                <div style={{ background: 'linear-gradient(180deg, #ffffff, #fbfcff)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(13,13,13,0.04)', boxShadow: '0 12px 40px rgba(10,18,30,0.06)' }}>
                    <h3 style={{ color: COLORS.secondary, fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Innovation</h3>
                    <p style={{ color: '#555', fontSize: '0.98rem' }}>Continually advancing our product range and manufacturing processes to meet evolving market demands and customer needs.</p>
                </div>
            </div>

            {/* Mission & Vision */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
                <div style={{ paddingLeft: '1.5rem', borderLeft: `4px solid ${COLORS.secondary}` }}>
                    <h3 style={{ color: COLORS.primary, fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.75rem' }}>Our Mission</h3>
                    <p style={{ color: '#333', fontSize: '1rem', lineHeight: 1.6 }}>To provide superior quality electrical products and solutions while maintaining excellence in service and innovation.</p>
                </div>

                <div style={{ paddingLeft: '1.5rem', borderLeft: `4px solid ${COLORS.secondary}` }}>
                    <h3 style={{ color: COLORS.primary, fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.75rem' }}>Our Vision</h3>
                    <p style={{ color: '#333', fontSize: '1rem', lineHeight: 1.6 }}>To be recognized as a trusted leader in the electrical solutions industry, committed to delivering quality, reliability, and customer satisfaction.</p>
                </div>
            </div>

            {/* Stats Section */}
            <div style={{ background: `linear-gradient(90deg, ${COLORS.primary}, #2a2a2e)`, color: COLORS.textLight, padding: '3rem', borderRadius: '16px', textAlign: 'center', marginBottom: '3rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem' }}>
                    <div>
                        <div style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>34+</div>
                        <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>Years of Experience</p>
                    </div>
                    <div>
                        <div style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>10k+</div>
                        <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>Happy Customers</p>
                    </div>
                    <div>
                        <div style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>8</div>
                        <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>Product Ranges</p>
                    </div>
                    <div>
                        <div style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>Lucknow</div>
                        <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>Manufacturing HQ</p>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div style={{ textAlign: 'center' }}>
                <h3 style={{ color: COLORS.primary, fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Ready to Experience Excellence?</h3>
                <button onClick={setCurrentPage ? () => setCurrentPage('products') : null} className="button" style={{ fontSize: '1.05rem' }}>Explore Our Products</button>
            </div>
        </div>
    </div>
);

const PageRouter = ({ currentPage, setCurrentPage, selectedProductId, setSelectedProductId, productsData }) => {
    switch (currentPage) {
        case 'home':
        case 'stability':
            return <HomePage setCurrentPage={setCurrentPage} setSelectedProductId={setSelectedProductId} />;
        case 'product': {
            const product = productsData.find(p => p.id === selectedProductId);
            if (product) {
                return <ProductDetails product={product} onBackClick={() => { setSelectedProductId(null); setCurrentPage('products'); }} setCurrentPage={setCurrentPage} />;
            }
            // If product not found, fall back to listing
            return <ProductsPage setCurrentPage={setCurrentPage} productsData={productsData} selectedProductId={selectedProductId} setSelectedProductId={setSelectedProductId} />;
        }
        case 'products':
            return <ProductsPage setCurrentPage={setCurrentPage} productsData={productsData} selectedProductId={selectedProductId} setSelectedProductId={setSelectedProductId} />;
        case 'about':
            return <AboutPage setCurrentPage={setCurrentPage} />;
        case 'contact':
            return <ContactPage />;
        default:
            return <HomePage setCurrentPage={setCurrentPage} setSelectedProductId={setSelectedProductId} />;
    }
};


// --- 7. MAIN APP COMPONENT ---

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');
    const [selectedProductId, setSelectedProductId] = useState(null);

    const navItems = [
        { name: 'Home', page: 'home' },
        { name: 'Products', page: 'products' },
        { name: 'Contact', page: 'contact' },
        { name: 'About', page: 'about' },
    ];

    return (
        <div style={{ 
            fontFamily: 'Inter, sans-serif', 
            minHeight: '100vh', 
            backgroundColor: COLORS.background, 
            color: COLORS.textDark, 
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Inject Custom Styles to replace the global Tailwind stylesheet */}
            <CustomStyles />
            
            {/* Navigation */}
            <Header 
                isMenuOpen={isMenuOpen} 
                setIsMenuOpen={setIsMenuOpen} 
                navItems={navItems} 
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />

            <main style={{ flexGrow: 1 }}>
                {/* Dynamically render the current page using the router */}
                <PageRouter
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                selectedProductId={selectedProductId}
                setSelectedProductId={setSelectedProductId}
                productsData={productsData}
                />
            </main>

            <Footer />
        </div>
    );
}

export default App;