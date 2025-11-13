import React, { useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import ProductCard from '../components/common/ProductCard';
import { getStabilizerRecommendation } from '../api/geminiService';
import { COLORS } from '../utils/constants';

const ProductsPage = ({ setCurrentPage }) => {
    const [recommendationInput, setRecommendationInput] = useState('');
    const [recommendationResult, setRecommendationResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleRecommendation = async () => {
        if (!recommendationInput.trim()) {
            setError("Please describe your load requirements to get a recommendation.");
            setRecommendationResult(null);
            return;
        }

        setIsLoading(true);
        setError(null);
        setRecommendationResult(null);

        try {
            const result = await getStabilizerRecommendation(recommendationInput);
            setRecommendationResult(result);
        } catch (err) {
            setError("Failed to connect to AI Consultant. Try again.");
            setRecommendationResult(null);
        } finally {
            setIsLoading(false);
        }
    };

    return (
    <section className="py-24 bg-almods-bg min-h-80vh">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle>Our Complete Stabilizer Series</SectionTitle>
                <p className="text-center text-xl text-almods-neutral mb-16 max-w-3xl mx-auto">
                    Explore the full range of Almods Digital Precision Stabilizers, designed for performance, efficiency, and scale.
                </p>
                
                {/* --- Gemini AI Product Matchmaker Feature --- */}
                <div className="max-w-4xl mx-auto bg-almods-secondary-bg p-8 rounded-2xl shadow-2xl border border-almods-accent/50 mb-20">
                    <h3 className="text-2xl font-extrabold text-almods-accent text-center mb-4 flex items-center justify-center">
                        <span className="text-3xl mr-3">✨</span> AI Product Matchmaker <span className="text-3xl ml-3">✨</span>
                    </h3>
                    <p className="text-center text-almods-neutral mb-6">
                        Describe your equipment, required kVA, and voltage phase (single/three) for an instant, expert recommendation.
                    </p>
                    
                    <textarea
                        value={recommendationInput}
                        onChange={(e) => setRecommendationInput(e.target.value)}
                        rows="3"
                        placeholder="Example: 'I need a stabilizer for a 3 kVA home theater system and a refrigerator (single phase).'"
                        className="w-full p-4 border border-gray-600 bg-almods-bg text-almods-primary rounded-xl focus:ring-almods-accent focus:border-almods-accent focus:ring-2 transition resize-none"
                        disabled={isLoading}
                    ></textarea>

                    <button 
                        onClick={handleRecommendation}
                        disabled={isLoading}
                        className="w-full mt-4 py-3 bg-almods-accent text-almods-background font-bold rounded-xl shadow-lg hover-bg-accent-light transition duration-300 transform hover-scale-101 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-almods-background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Analyzing Requirements...
                            </span>
                        ) : "Generate Stabilizer Recommendation"}
                    </button>

                    {recommendationResult && (
                        <div className="mt-6 p-5 bg-almods-bg border border-almods-accent/70 rounded-xl text-almods-primary">
                            <h4 className="text-xl font-bold mb-2 text-almods-accent">AI Consultant Report:</h4>
                            {/* NOTE: We use dangerouslySetInnerHTML to render the bold markdown from the LLM */}
                            <div className="text-almods-primary" dangerouslySetInnerHTML={{ __html: recommendationResult.replace(/\n/g, '<br/>') }} />
                        </div>
                    )}
                    
                    {error && (
                        <div className="mt-6 p-4 bg-red-900 border border-red-700 text-red-300 rounded-xl">
                            Error: {error}
                        </div>
                    )}
                </div>
                {/* --- End Gemini AI Feature --- */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <ProductCard
                        title="HomeGuard Series"
                        capacity="2 kVA - 5 kVA | Single Phase"
                        description="Silent operation and minimal footprint for modern home environments and sensitive entertainment systems."
                    />
                    <ProductCard
                        title="AC Master Pro"
                        capacity="4 kVA - 10 kVA | Single Phase"
                        description="Engineered with high magnetic saturation to safely handle the high initial current draw of inverter HVAC units."
                    />
                    <ProductCard
                        title="Industrial Dynamo"
                        capacity="10 kVA - 50 kVA | Three Phase"
                        description="Servo-controlled precision with high overload capacity for complex industrial automation and machinery."
                    />
                </div>

                <div className="text-center mt-20">
                    <button 
                        onClick={() => setCurrentPage('contact')}
                        className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full shadow-lg text-almods-accent border-2 border-almods-accent hover:bg-almods-accent hover:text-almods-background transition duration-300 shadow-almods-accent/30"
                    >
                        Inquire About Custom Solutions
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductsPage;
