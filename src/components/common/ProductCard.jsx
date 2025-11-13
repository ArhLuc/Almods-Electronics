import React from 'react';
import { PowerIcon, ICON_STROKE_WIDTH } from "../common/icons";
import { COLORS } from '../../utils/constants';

const ProductCard = ({ title, capacity, description }) => (
    <div className="bg-almods-secondary-bg rounded-xl shadow-2xl overflow-hidden border border-gray-700 transition duration-300 hover-shadow-accent-strong">
            <div className="p-6">
            <div className="text-center mb-6">
                <div className="h-48 w-full bg-almods-bg border-2 border-almods-accent/30 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to right, #00eaff 1px, transparent 1px), linear-gradient(to bottom, #00eaff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    <PowerIcon className="w-16 h-16 text-almods-accent z-10 animate-pulse-slow"/>
                </div>
            </div>
            <h3 className="text-2xl font-extrabold text-almods-primary leading-tight">{title}</h3>
            <p className="text-lg font-medium text-almods-neutral mt-2 mb-4">{capacity}</p>
            <p className="text-gray-400 mb-6">{description}</p>
            <button className="w-full py-3 bg-almods-accent text-almods-background font-semibold rounded-lg hover-bg-accent-light transition duration-300 transform hover-scale-101 shadow-xl shadow-almods-accent/30 text-lg">
                Request Datasheet
            </button>
        </div>
    </div>
);

export default ProductCard;
