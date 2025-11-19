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
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); 
            }
            .feature-highlight-value {
                font-size: 1.1rem !important; 
                line-height: 1.5;
            }

            /* Desktop Viewpoint Adjustments */
            @media (min-width: 769px) {
                .menu-icon {
                    display: none;
                }
                .specs-grid-desktop {
                    grid-template-columns: 1fr 1fr;
                }
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
                
                .product-detail-flex {
                    flex-direction: column;
                    gap: 2rem !important;
                }
            }
        `}
    </style>
);

// --- 3. HEADER COMPONENT (White Background) ---
const Header = ({ isMenuOpen, setIsMenuOpen, navItems, setCurrentPage, currentPage }) => {
    const handleNavClick = (page) => {
        setCurrentPage({ page, product: null });
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
                <h1 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '800', 
                    margin: 0, 
                    cursor: 'pointer',
                    color: COLORS.primary // Dark Logo/Title
                }} onClick={() => setCurrentPage({ page: 'home', product: null })}>
                    Almods Electronics
                </h1>
                
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
                                fontWeight: currentPage.page === item.page ? '700' : '500',
                                borderBottom: currentPage.page === item.page ? `2px solid ${COLORS.secondary}` : 'none', // Red accent
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
const FeatureProductCard = ({ product, onExploreClick }) => (
    <div className="card" style={{ textAlign: 'left', padding: '1.5rem', cursor: 'pointer' }} onClick={() => onExploreClick(product)}>
        {/* Adjusted from 1.4rem to 1.1rem */}
        <h3 style={{ color: COLORS.primary, fontSize: '1.1rem', marginBottom: '0.5rem' }}>{product.name}</h3>
        <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', color: '#555' }}>{product.detail}</p>
        <button className="button" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>View Detail</button>
    </div>
);

const AdvantagePoint = ({ title, description }) => (
    <div className="card" style={{ textAlign: 'left', backgroundColor: COLORS.background, borderLeft: `5px solid ${COLORS.secondary}`, padding: '1.5rem' }}>
        <h4 style={{ color: COLORS.primary, fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem' }}>{title}</h4>
        <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>{description}</p>
    </div>
);


const HomePage = ({ setCurrentPage }) => {
    // Helper function to simulate navigating to the detail page from the Home page
    const handleExploreClick = (product) => {
        setCurrentPage({ page: 'products', product });
    };
    
    // Pass a simplified product object to FeatureProductCard, and then handle navigation
    const topProducts = [productsData[0], productsData[1], productsData[2]];

    return (
        <div>
            {/* Hero Section */}
            <div style={{ 
                textAlign: 'center', 
                padding: '6rem 1rem 4rem 1rem',
                background: `linear-gradient(180deg, ${COLORS.background} 0%, #f7f7f7 100%)`
            }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ 
                        color: COLORS.primary, 
                        fontSize: '3.2rem', 
                        fontWeight: '800',
                        marginBottom: '0.5rem',
                        lineHeight: '1.2'
                    }}>
                        Voltage Redefined. Absolute Stability.
                    </h2>
                    <p style={{ 
                        fontSize: '1.2rem', 
                        lineHeight: '1.6', 
                        margin: '1.5rem 0 2rem 0',
                        color: '#555'
                    }}>
                        Safeguarding your systems with <strong style={{color: COLORS.secondary}}>Almods Digital Precision Stabilizers</strong>—where performance meets uncompromised reliability.
                    </p>
                    <button className="button" style={{ fontSize: '1.1rem' }} onClick={() => setCurrentPage({ page: 'products', product: null })}>
                        Discover Our Stabilizers
                    </button>
                </div>
            </div>
            
            {/* Top Selling Products Section */}
            <div className="container" style={{ padding: '4rem 0' }}>
                <h2 style={{ 
                    textAlign: 'center', 
                    color: COLORS.primary, 
                    fontSize: '2.2rem', 
                    marginBottom: '2rem' 
                }}>
                    Top Selling Products
                </h2>
                <div className="card-grid">
                    {topProducts.map(product => (
                        <FeatureProductCard 
                            key={product.id}
                            product={product} 
                            onExploreClick={handleExploreClick} 
                        />
                    ))}
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
};

// Component for displaying a single product in the grid
const ProductGridCard = ({ product, onExploreClick }) => (
    <div className="card" style={{ 
        textAlign: 'left', 
        padding: '1rem', 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%', 
        transition: 'box-shadow 0.3s',
        cursor: 'pointer'
    }} onClick={() => onExploreClick(product)}>
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
        {/* Adjusted from 1.2rem to 1.1rem */}
        <h3 style={{ 
            color: COLORS.primary, 
            fontSize: '1.1rem', 
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
            // The onClick on the card already handles navigation, but we keep the button for styling
            onClick={(e) => { e.stopPropagation(); onExploreClick(product); }} 
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

// Component for the main Product Listing page
const ProductsPage = ({ setCurrentPage }) => {
    const handleExploreClick = (product) => {
        setCurrentPage({ page: 'products', product });
    };

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h2 style={{ 
                color: COLORS.primary, 
                fontSize: '2.5rem', 
                fontWeight: '800',
                marginBottom: '2rem',
                textAlign: 'center'
            }}>
                Our Complete Stabilizer Range
            </h2>
            <div className="card-grid">
                {productsData.map(product => (
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

// Component for the single product detail view
const ProductDetails = ({ product, onBackClick }) => {
    // Define the specifications to display and their display names
    const specsToDisplay = [
        { label: "Model Name", key: "modelName" },
        { label: "Dimension", key: "dimension" },
        { label: "Working Range", key: "workingRange" },
        { label: "Application", key: "application" },
        { label: "Key Features", key: "feature" } 
    ];
    
    // Keys that should span the full width of the grid and receive special styling
    const fullWidthKeys = ['application', 'feature']; 
    // Keys that should use the new L-R aligned layout (Model Name, Dimension, Working Range)
    const alignedSpecsKeys = ['modelName', 'dimension', 'workingRange'];

    return (
        <div style={{ padding: '4rem 0' }}> 
            
            {/* Back Button Section */}
            <div className="container" style={{paddingBottom: '1rem'}}>
                <button 
                    className="button" 
                    onClick={onBackClick} 
                    style={{ 
                        backgroundColor: COLORS.primary, 
                        boxShadow: '0 4px 10px rgba(29, 29, 31, 0.2)',
                        padding: '0.5rem 1rem' 
                    }}
                >
                    &larr; Back to Products
                </button>
            </div>

            {/* Main Product Header and Image Section */}
            <section style={{ 
                backgroundColor: '#f7f7f7', 
                padding: '0' 
            }}>
                <div className="container product-detail-flex" style={{ 
                    display: 'flex', 
                    gap: '4rem', 
                    alignItems: 'flex-start', 
                    flexWrap: 'wrap',
                    padding: '4rem 1rem 2rem 1rem', 
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
                                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)' 
                            }}
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/aaaaaa/333333?text=Product+Image'; }}
                        />
                    </div>
                    
                    {/* Details/Text Column */}
                    <div style={{ flex: '2 1 500px' }}>
                        {/* Adjusted from 2.8rem to 2.2rem */}
                        <h1 style={{ color: COLORS.primary, fontSize: '2.2rem', marginBottom: '0.5rem', fontWeight: '800' }}>{product.name}</h1>
                        
                        {/* PRODUCT HIGHLIGHT */}
                        <p style={{ 
                            fontSize: '1.2rem', 
                            lineHeight: '1.5',
                            color: COLORS.secondary, 
                            fontWeight: '600',
                            marginBottom: '1.5rem',
                        }}>
                            {product.detail}
                        </p>
                        
                        {/* CTA Button */}
                        <button className="button" style={{ fontSize: '1.2rem' }}>
                            Request a Quote &rarr;
                        </button>
                    </div>
                </div>
                
                {/* Core Specifications Table Section */}
                <div className="container" style={{ 
                    padding: '2rem 1rem 4rem 1rem', 
                }}>
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
                        backgroundColor: '#ffffff', 
                        borderRadius: '10px',
                        border: '1px solid #EDEDED'
                    }}>
                        {specsToDisplay.map((spec) => {
                            const isFullWidth = fullWidthKeys.includes(spec.key);
                            const isAlignedSpec = alignedSpecsKeys.includes(spec.key);

                            if (!product[spec.key]) return null;

                            // 1. FULL-WIDTH, HIGH-DETAIL SPECS (Application, Key Features)
                            if (isFullWidth) {
                                return (
                                    <div 
                                        key={spec.key} 
                                        className="feature-highlight" 
                                        style={{ 
                                            gridColumn: '1 / -1', 
                                            padding: '1.5rem',
                                        }}
                                    >
                                        <span style={{ 
                                            fontSize: '0.8rem', 
                                            color: COLORS.secondary, 
                                            fontWeight: '700', 
                                            textTransform: 'uppercase', 
                                            letterSpacing: '0.5px',
                                            display: 'block',
                                            marginBottom: '0.5rem'
                                        }}>
                                            {spec.label}
                                        </span>
                                        <span className="feature-highlight-value" style={{ 
                                            fontSize: '1.1rem', 
                                            color: COLORS.primary, 
                                            fontWeight: '500', 
                                            lineHeight: '1.5'
                                        }}>
                                            {product[spec.key]}
                                        </span>
                                    </div>
                                );
                            }

                            // 2. ALIGNED/STANDARD SPECS (Model Name, Dimension, Working Range)
                            if (isAlignedSpec) {
                                return (
                                    <div 
                                        key={spec.key}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between', 
                                            alignItems: 'center',
                                            padding: '1rem 0',
                                            borderBottom: '1px solid #eee' 
                                        }}
                                    >
                                        {/* Label (Left side) */}
                                        <span style={{
                                            color: COLORS.textDark,
                                            fontWeight: '600',
                                            fontSize: '1rem',
                                            flexShrink: 0, 
                                            paddingRight: '1rem'
                                        }}>
                                            {spec.label}
                                        </span>
                                        {/* Value (Right side, highlighted) */}
                                        <span style={{
                                            color: COLORS.secondary, 
                                            fontWeight: '700',
                                            fontSize: '1rem',
                                            textAlign: 'right'
                                        }}>
                                            {product[spec.key]}
                                        </span>
                                    </div>
                                );
                            }

                            return null;
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

// --- 6. MAIN APP COMPONENT (Router Logic) ---
const App = () => {
    // currentPage state is an object: { page: 'home' | 'products' | 'contact', product?: ProductType }
    const [currentPage, setCurrentPage] = useState({ page: 'home', product: null });
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', page: 'home' },
        { name: 'Products', page: 'products' },
        { name: 'Contact Us', page: 'contact' },
    ];
    
    // Function to render the correct page component
    const PageRouter = () => {
        switch (currentPage.page) {
            case 'home':
                return <HomePage setCurrentPage={setCurrentPage} />;
            case 'products':
                // Check if a specific product is selected for the detail view
                if (currentPage.product) {
                    return (
                        <ProductDetails 
                            product={currentPage.product} 
                            // Navigate back to the product list view
                            onBackClick={() => setCurrentPage({ page: 'products', product: null })} 
                        />
                    );
                }
                return <ProductsPage setCurrentPage={setCurrentPage} />;
            case 'contact':
                return (
                    <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', color: COLORS.primary }}>Contact Us</h2>
                        <p style={{ fontSize: '1.1rem', color: '#555' }}>
                            Reach out to our sales team for quotes and support.
                        </p>
                        <p style={{ fontWeight: '700', marginTop: '2rem' }}>Email: <a href="mailto:sales@almods.com" style={{ color: COLORS.secondary, textDecoration: 'none' }}>sales@almods.com</a></p>
                    </div>
                );
            default:
                return <HomePage setCurrentPage={setCurrentPage} />;
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <CustomStyles />
            <Header 
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                navItems={navItems}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            
            <main style={{ flexGrow: 1 }}>
                <PageRouter />
            </main>
            
            <Footer />
        </div>
    );
};

export default App;