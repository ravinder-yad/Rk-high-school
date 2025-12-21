import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const WhyUsCta = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-background">

            {/* Section 19: Why Us */}
            <div className="py-20 container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-textDark mb-12">Why Choose RK High School?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Academic Excellence", desc: "Consistently delivering 100% board results with state toppers." },
                        { title: "Holistic Development", desc: "Focus on sports, arts, and life skills alongside academics." },
                        { title: "Modern Infrastructure", desc: "Smart classrooms, advanced labs, and digital resources." },
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-gray-200 hover:border-primary">
                            <CheckCircle className="w-10 h-10 text-green-500 mb-4" />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 20: CTA */}
            <div className="py-24 bg-gradient-to-r from-primary to-blue-900 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Invest in Your Child's Future</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Join the RK High School family and give your child the wings to fly. Applications open for the academic year 2025-26.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button
                            onClick={() => navigate('/admissions/form')}
                            className="px-10 py-4 bg-accent hover:bg-green-600 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-all text-lg"
                        >
                            Apply Now
                        </button>
                        <button
                            onClick={() => navigate('/contact')}
                            className="px-10 py-4 bg-white text-primary hover:bg-gray-100 font-bold rounded-full shadow-lg transform hover:scale-105 transition-all text-lg"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhyUsCta;
