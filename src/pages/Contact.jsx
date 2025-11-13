import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import { PhoneIcon, ICON_STROKE_WIDTH } from '../components/common/icons';
import { COLORS } from '../utils/constants';

const ContactPage = () => (
    <section className="py-24 bg-almods-bg min-h-80vh">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>Initiate Partnership</SectionTitle>

            <div className="max-w-4xl mx-auto bg-almods-secondary-bg p-10 md:p-16 rounded-3xl shadow-2xl border border-gray-700">
                <p className="text-center text-almods-neutral text-lg mb-10">Secure a consultation for custom high-capacity or enterprise voltage solutions from **Almods Electronics**.</p>
                
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-almods-primary mb-2">Full Name</label>
                        <input type="text" id="name" name="name" required className="w-full p-4 border border-gray-600 bg-almods-bg text-almods-primary rounded-xl focus:ring-almods-accent focus:border-almods-accent focus:ring-2 transition"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-almods-primary mb-2">Work Email</label>
                        <input type="email" id="email" name="email" required className="w-full p-4 border border-gray-600 bg-almods-bg text-almods-primary rounded-xl focus:ring-almods-accent focus:border-almods-accent focus:ring-2 transition"/>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-almods-primary mb-2">Project Scope / Requirements</label>
                        <textarea id="message" name="message" rows="5" required className="w-full p-4 border border-gray-600 bg-almods-bg text-almods-primary rounded-xl focus:ring-almods-accent focus:border-almods-accent focus:ring-2 transition"></textarea>
                    </div>
                    <button type="submit" className="w-full py-4 bg-almods-accent text-almods-background font-bold rounded-xl shadow-lg hover-bg-accent-light transition duration-300 transform hover-scale-101 text-lg shadow-almods-accent/50">
                        Secure Consultation
                    </button>
                </form>

                <div className="text-center mt-12 pt-8 border-t border-gray-700">
                    <h4 className="text-xl font-bold mb-3 text-almods-primary">Direct Technical Line</h4>
                    <p className="flex items-center justify-center text-3xl font-extrabold text-almods-accent">
                        <PhoneIcon className="w-8 h-8 mr-3" strokeWidth={ICON_STROKE_WIDTH}/> +91 98765 43210
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default ContactPage;
