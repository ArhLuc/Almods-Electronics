import React from 'react';
import HomePage from '../pages/Home';
import ProductsPage from '../pages/Products';
import ContactPage from '../pages/Contact';

/**
 * PageRouter component handles conditional rendering based on the currentPage state.
 */
const PageRouter = ({ currentPage, setCurrentPage }) => {
    switch (currentPage) {
        case 'products':
            return <ProductsPage setCurrentPage={setCurrentPage} />;
        case 'contact':
            return <ContactPage />;
        case 'home':
        default:
            return <HomePage setCurrentPage={setCurrentPage} />;
    }
};

export default PageRouter;
