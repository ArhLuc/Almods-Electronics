import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CustomStyles from './utils/CustomStyles';
import PageRouter from './router/PageRouter';
import { COLORS } from './utils/constants'; // Required for root styling and consistency

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
        <div style={{ fontFamily: 'Inter, sans-serif' }} className="min-h-screen bg-almods-bg text-almods-primary">
            {/* Inject Custom Styles */}
            <CustomStyles />
            
            {/* Navigation */}
            <Header 
                isMenuOpen={isMenuOpen} 
                setIsMenuOpen={setIsMenuOpen} 
                navItems={navItems} 
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />

            <main>
                {/* Dynamically render the current page using the router */}
                <PageRouter currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </main>

            <Footer />
        </div>
    );
}

export default App;
