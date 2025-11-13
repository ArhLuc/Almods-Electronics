import React from 'react';
import { COLORS } from '../../utils/constants';

const SectionTitle = ({ children }) => (
    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-16 text-almods-primary">
        {children}
    </h2>
);

export default SectionTitle;
