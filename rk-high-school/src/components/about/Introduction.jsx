import React from 'react';
import histImg from '../../assets/images/home/campus.jpg';
import cultImg from '../../assets/images/home/gallery3.jpg';
import { ArrowRight } from 'lucide-react';

const Introduction = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Text */}
                    <div className="lg:w-1/2">
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="h-1 w-12 bg-secondary rounded-full"></span>
                            <span className="text-secondary font-bold uppercase tracking-wider text-sm">Who We Are</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-textDark mb-6 leading-tight">
                            A Legacy of <br />
                            <span className="text-primary relative inline-block">
                                Academic Excellence
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6" />
                                </svg>
                            </span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            RK High School is more than just an educational institution; it is a vibrant community dedicated to fostering intellectual curiosity, social responsibility, and personal growth.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Established with a vision to provide world-class education accessible to all, we have consistently evolved to meet the changing needs of the 21st century learner while staying rooted in timeless values.
                        </p>
                        <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-blue-800 transition-all flex items-center group">
                            Read Headmaster's Welcome
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Right Image Grid */}
                    <div className="lg:w-1/2 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src={histImg}
                                alt="Students"
                                className="rounded-2xl shadow-lg mt-12 w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500"
                            />
                            <img
                                src={cultImg}
                                alt="Library"
                                className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-2xl border-4 border-secondary/20 hidden md:block">
                            <div className="text-center">
                                <span className="block text-3xl font-bold text-primary">20+</span>
                                <span className="text-xs font-bold text-gray-500 uppercase">Years Exp.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
