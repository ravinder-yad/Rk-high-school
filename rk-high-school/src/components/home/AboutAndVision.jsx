import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Eye, ArrowRight } from 'lucide-react';

import campusImg from '../../assets/images/home/campus.jpg';

const AboutAndVision = () => {
    const navigate = useNavigate();

    return (
        <div className="py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Section 3: About Brief */}
                <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
                    <div className="lg:w-1/2 relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
                        <img
                            src={campusImg}
                            alt="RK High School Campus"
                            className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[400px] transform hover:scale-[1.01] transition-transform"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm">About RK High School</span>
                        <h2 className="text-4xl font-bold text-textDark mt-2 mb-6">Empowering Students to Achieve Excellence</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Founded in 2005, RK High School has been a beacon of quality education. We believe in nurturing not just the mind, but the character of every student. Our holistic approach ensures that your child is prepared for the challenges of tomorrow.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center space-x-2 text-primary font-medium">
                                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                                <span>20 Years of Excellence</span>
                            </div>
                            <div className="flex items-center space-x-2 text-primary font-medium">
                                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                                <span>Best Infrastructure</span>
                            </div>
                        </div>
                        <button
                            onClick={() => navigate('/about/school')}
                            className="mt-8 px-8 py-3 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-blue-800 transition-all flex items-center group"
                        >
                            Read More
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Section 4: Vision & Mission */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Vision Card */}
                    <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-secondary hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6 text-secondary">
                            <Eye className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-textDark mb-4">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To be a center of educational excellence that nurtures future leaders with global perspectives, rooted in Indian values and ethics.
                        </p>
                    </div>

                    {/* Mission Card */}
                    <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                            <Target className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-textDark mb-4">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To provide a safe, stimulating, and inclusive learning environment where every student is encouraged to explore their potential and achieve their personal best.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutAndVision;
