import React from 'react';
import { COLORS } from '../../utils/constants';

const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-almods-secondary-bg p-8 rounded-xl shadow-lg transition duration-300 transform hover-shadow-accent border border-transparent hover:border-almods-accent/50">
        {React.cloneElement(icon, {
            className: `w-14 h-14 text-almods-accent mb-4`,
        })}
        <h3 className="text-xl font-bold text-almods-primary mb-3">{title}</h3>
        <p className="text-almods-neutral">{description}</p>
    </div>
);

export default FeatureCard;
