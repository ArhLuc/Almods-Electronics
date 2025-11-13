import React from 'react';
import { COLORS } from '../../utils/constants';

const Footer = () => (
    <footer className="bg-almods-secondary-bg text-white py-12 border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6">
                <p className="text-3xl font-bold tracking-tight text-almods-primary">
                    Almods <span className="text-almods-accent">Electronics</span>
                </p>
            </div>
            
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} **Almods Electronics**. All Rights Reserved. | Manufacturing Power Stability Since 20XX.</p>
            
            <div className="mt-6 space-x-6 text-sm">
                <a href="#" className="text-gray-500 hover:text-almods-accent transition">Terms of Service</a>
                <span className="text-gray-700">|</span>
                <a href="#" className="text-gray-500 hover:text-almods-accent transition">Data Security</a>
            </div>
        </div>
    </footer>
);

export default Footer;
