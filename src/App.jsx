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
        image: 'https://placehold.co/400x300/FF3B30/FFFFFF?text=Guardian+5000VA',
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
        image: 'https://placehold.co/400x300/FF3B30/FFFFFF?text=Sentinel+10kVA',
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
        image: 'https://placehold.co/400x300/FF3B30/FFFFFF?text=Shield+2000',
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
        image: 'https://placehold.co/400x300/FF3B30/FFFFFF?text=AC+Master',
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
        image: 'https://placehold.co/400x300/FF3B30/FFFFFF?text=Freeze+Guard',
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
        image: 'https://placehold.co/400x300/FF3B30/FFFFFF?text=MainLine+10kW',
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
        image: 'https://placehold.co/400x300/FF3B30/FFFFFF?text=Servo+30A',
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
        image: 'https://placehold.co/400x300/FF3B30/FFFFFF?text=Visual+1000',
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
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 2rem;
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
                height: 50vh; 
                overflow: hidden;
            }
            .hero-image {
                width: 100%;
                height: 100%; 
                object-fit: cover; /* Ensure it covers the area */
                transition: transform 0.3s ease;
            }
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
                /* Dark overlay for text contrast and legibility */
                background-color: rgba(0, 0, 0, 0.45); 
            }
            .hero-title {
                color: ${COLORS.textLight}; /* White text */
                font-size: 3.5rem;
                font-weight: 800;
                margin-bottom: 1rem;
                line-height: 1.2;
                text-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
            }
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
            }
            /* Desktop Viewpoint Adjustments (min-width: 769px) */
            @media (min-width: 769px) {
                /* Increase Logo Size for desktop */
                .header-logo {
                    height: 60px; 
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
            backgroundColor: COLORS.background, // White Header
            color: COLORS.textDark, 
            padding: '1rem 0',
            position: 'sticky',
            top: 0,
            zIndex: 10,
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }} className="container">
                
                {/* LOGO IMAGE REPLACING TEXT - Responsive height managed by CSS class */}
                <img 
                    src="/images/almodslogo.png"
                    alt="Almods Electronics Logo"
                    onClick={() => setCurrentPage('home')}
                    className="header-logo" // Add class to target in CSS
                    style={{
                        width: 'auto', // Maintain aspect ratio
                        maxWidth: '100%', // Ensures it doesn't overflow on tiny screens
                        margin: 0,
                        cursor: 'pointer',
                        borderRadius: '5px' 
                    }}
                />
                
                {/* Mobile Menu Icon - Dark Bars on White Background */}
                <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <div style={{ background: COLORS.textDark, transform: isMenuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none' }}></div>
                    <div style={{ background: COLORS.textDark, opacity: isMenuOpen ? 0 : 1 }}></div>
                    <div style={{ background: COLORS.textDark, transform: isMenuOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none' }}></div>
                </div>

                {/* Desktop and Mobile Navigation Links */}
                <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}
                    style={{
                        display: 'flex',
                        gap: '2rem',
                    }}
                >
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            onClick={() => handleNavClick(item.page)}
                            style={{
                                color: isMenuOpen ? COLORS.textLight : COLORS.textDark, // Dark text on desktop
                                textDecoration: 'none',
                                fontWeight: currentPage === item.page ? '700' : '500',
                                borderBottom: currentPage === item.page ? `2px solid ${COLORS.secondary}` : 'none', // Red accent
                                paddingBottom: '0.25rem',
                                transition: 'all 0.1s',
                                cursor: 'pointer',
                            }}
                        >
                            {item.name}
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
                <div style={{ marginTop: '0.5rem' }}>
                    <a href="#" style={{ color: COLORS.secondary, textDecoration: 'none', margin: '0 0.5rem' }}>Privacy Policy</a>
                    <span style={{ color: '#aaa' }}>|</span>
                    <a href="#" style={{ color: COLORS.secondary, textDecoration: 'none', margin: '0 0.5rem' }}>Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

// --- 5. PAGE COMPONENTS (For PageRouter) ---

// Used for Home Page top-selling products (simplified card)
const FeatureProductCard = ({ title, description }) => (
    <div className="card" style={{ textAlign: 'left', padding: '1.5rem' }}>
        <h3 style={{ color: COLORS.primary, fontSize: '1.4rem', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', color: '#555' }}>{description}</p>
        <button className="button" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>View Detail</button>
    </div>
);

const AdvantagePoint = ({ title, description }) => (
    <div className="card" style={{ textAlign: 'left', backgroundColor: COLORS.background, borderLeft: `5px solid ${COLORS.secondary}`, padding: '1.5rem' }}>
        <h4 style={{ color: COLORS.primary, fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem' }}>{title}</h4>
        <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>{description}</p>
    </div>
);


const HomePage = () => (
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
            {/* Text Overlay for visibility */}
            <div className="hero-overlay">
                <div className="container">
                    <h2 className="hero-title">
                        NOW DEALS IN SOLAR PLANTS
                    </h2>
                    <p style={{ 
                        fontSize: '1.2rem', 
                        lineHeight: '1.6', 
                        // Adjusted margins for overlay
                        margin: '0 auto 2rem auto',
                        color: COLORS.textLight, 
                        maxWidth: '600px',
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)'
                    }}>
                        Safeguarding your systems with <strong style={{color: COLORS.secondary}}>Almods  Stabilizers & Servo</strong>—where performance meets uncompromised reliability.
                    </p>
                    <button className="button" style={{ fontSize: '1.1rem' }}>
                        Discover Our Stabilizers
                    </button>
                </div>
            </div>
        </div>
        {/* --- End Hero Section --- */}
        
        {/* Top Selling Products Section */}
        <div className="container" style={{ padding: '4rem 0' }}> {/* Added 4rem top padding for spacing after the large hero */}
            <h2 style={{ 
                textAlign: 'center', 
                color: COLORS.primary, 
                fontSize: '2.2rem', 
                marginBottom: '2rem' 
            }}>
                Top Selling Products
            </h2>
            <div className="card-grid">
                <FeatureProductCard 
                    title={productsData[0].name} 
                    description={productsData[0].detail} 
                />
                <FeatureProductCard 
                    title={productsData[1].name} 
                    description={productsData[1].detail} 
                />
                <FeatureProductCard 
                    title={productsData[2].name} 
                    description={productsData[2].detail} 
                />
            </div>
        </div>

        {/* The Almods Advantage Section */}
        <div style={{ backgroundColor: '#f9f9f9', padding: '4rem 0' }}>
            <div className="container">
                <h2 style={{ 
                    textAlign: 'center', 
                    color: COLORS.primary, 
                    fontSize: '2.2rem', 
                    marginBottom: '2rem' 
                }}>
                    The Almods Advantage
                </h2>
                <div className="card-grid">
                    <AdvantagePoint 
                        title="Aerospace-Grade Components" 
                        description="Sourced from certified suppliers, guaranteeing internal component stability under continuous heavy load." 
                    />
                    <AdvantagePoint 
                        title="AI-Enhanced Diagnostics" 
                        description="Predictive failure detection monitors component health, minimizing unexpected downtime and maximizing lifespan." 
                    />
                    <AdvantagePoint 
                        title="Global Compliance Certified" 
                        description="Meets all major international safety and quality standards (UL, CE, ISO) for global integration." 
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
        padding: '1rem', 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%', 
        transition: 'box-shadow 0.3s' 
    }}>
        <img 
            src={product.image} 
            alt={product.name} 
            style={{ 
                width: '100%', 
                height: 'auto', 
                minHeight: '150px', 
                borderRadius: '8px', 
                marginBottom: '1rem', 
                objectFit: 'cover' 
            }}
            // Fallback for failed image load
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/aaaaaa/333333?text=Product+Image'; }}
        />
        <h3 style={{ 
            color: COLORS.primary, 
            fontSize: '1.2rem', 
            marginBottom: '0.5rem', 
            fontWeight: '700' 
        }}>
            {product.name}
        </h3>
        <p style={{ 
            margin: '0 0 1rem 0', 
            fontSize: '0.9rem', 
            color: '#555', 
            flexGrow: 1 
        }}>
            {product.detail}
        </p>
        <button 
            className="button" 
            onClick={() => onExploreClick(product)} 
            style={{ 
                padding: '0.6rem 1rem', 
                fontSize: '0.9rem', 
                alignSelf: 'flex-start' 
            }}
        >
            Explore Product
        </button>
    </div>
);

// Component for the single product detail view
const ProductDetails = ({ product, onBackClick }) => {
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
                        <button className="button" style={{ fontSize: '1.2rem' }}>
                            Request a Quote &rarr;
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


const ProductsPage = ({ setCurrentPage }) => {
    // State to hold the currently selected product for the detail view
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleExploreClick = (product) => {
        setSelectedProduct(product);
        // Optionally scroll to top
        window.scrollTo(0, 0); 
    };

    const handleBackClick = () => {
        setSelectedProduct(null);
    };

    // Conditional Rendering: Show details or show grid
    if (selectedProduct) {
        return <ProductDetails product={selectedProduct} onBackClick={handleBackClick} />;
    }
    
    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h2 style={{ color: COLORS.primary, fontSize: '2.4rem', marginBottom: '2.5rem', textAlign: 'center', fontWeight: '800' }}>
                All Almods Precision Stabilizers
            </h2>
            
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
        <div
            className="card"
            style={{
                maxWidth: "500px",
                margin: "0 auto",
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
    </div>
);


};




// --- 6. PAGE ROUTER ---
const PageRouter = ({ currentPage, setCurrentPage }) => {
    switch (currentPage) {
        case 'home':
        case 'stability':
            return <HomePage />;
        case 'products':
            return <ProductsPage setCurrentPage={setCurrentPage} />;
        case 'contact':
            return <ContactPage />;
        default:
            return <HomePage />;
    }
};


// --- 7. MAIN APP COMPONENT ---

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');

    const navItems = [
        { name: 'Home', page: 'home' },
        { name: 'Products', page: 'products' },
        { name: 'Stability', page: 'home' },
        { name: 'Contact', page: 'contact' },
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
                <PageRouter currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </main>

            <Footer />
        </div>
    );
}

export default App;