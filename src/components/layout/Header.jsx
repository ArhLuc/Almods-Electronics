import React from 'react';
import { COLORS } from '../../utils/constants';

const Header = ({ isMenuOpen, setIsMenuOpen, navItems, setCurrentPage, currentPage }) => (
    <header className="sticky top-0 z-50 bg-almods-secondary-bg shadow-xl border-b border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
            {/* Logo */}
            <button onClick={() => setCurrentPage('home')} className="text-3xl font-bold tracking-tight text-almods-primary hover:text-almods-accent transition duration-150">
                Almods <span className="text-almods-accent">Electronics</span>
            </button>
            
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex space-x-10">
                {navItems.map(item => (
                    <button 
                        key={item.name} 
                        onClick={() => setCurrentPage(item.page)} 
                        className={`text-lg font-medium transition duration-150 relative ${currentPage === item.page ? 'text-almods-accent' : 'text-almods-primary hover:text-almods-accent'}`}
                    >
                        {item.name}
                        {currentPage === item.page && (
                            <span className="absolute bottom-neg-5 left-0 w-full h-3px bg-almods-accent rounded-full animate-pulse-slow"></span>
                        )}
                    </button>
                ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="md:hidden p-2 rounded-lg text-almods-primary hover:bg-gray-700 transition duration-150"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5">
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                    )}
                </svg>
            </button>
        </div>
        
        {/* Mobile Menu (Conditionally rendered) */}
        <div 
            className={`md:hidden bg-almods-secondary-bg shadow-xl transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
        >
            <nav className="px-4 pt-2 pb-4 space-y-2">
                {navItems.map(item => (
                    <button 
                        key={item.name} 
                        onClick={() => { setCurrentPage(item.page); setIsMenuOpen(false); }}
                        className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-almods-primary hover:bg-almods-bg hover:text-almods-accent transition duration-150"
                    >
                        {item.name}
                    </button>
                ))}
            </nav>
        </div>
    </header>
);

export default Header;
