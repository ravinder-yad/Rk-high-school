import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Eye, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

import campusImg from '../../assets/images/home/campus.jpg';

const AboutAndVision = () => {
    const navigate = useNavigate();

    return (
        <div className="py-24 bg-neutral-50 relative overflow-hidden">
            {/* Background Decorative Blobs */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 -skew-x-12 z-0 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section 1: About School */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">

                    {/* Image Side */}
                    <div className="lg:w-1/2 relative group">
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl group-hover:bg-secondary/30 transition-all duration-500"></div>
                        <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-500"></div>

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 group-hover:scale-[1.02]">
                            <img
                                src={campusImg}
                                alt="RK High School Campus"
                                className="w-full h-[450px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <p className="font-bold text-lg">Est. 1995</p>
                                    <p className="text-sm opacity-80">25+ Years of Legacy</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute top-8 -right-8 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block animate-bounce-slow">
                            <div className="flex items-center gap-3">
                                <div className="bg-green-100 p-2 rounded-full text-green-600">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-bold uppercase">Affiliation</p>
                                    <p className="text-slate-900 font-bold">CBSE Board</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-4">
                            About RK High School
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 font-display leading-tight">
                            Nurturing Minds, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Building Character</span>
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8 font-light">
                            Founded in 1995, RK High School has been a beacon of quality education in the region. We believe in nurturing not just the academic intellect, but the character and spirit of every student. Our holistic approach ensures that your child is prepared for the challenges of the modern world.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                            {[
                                "Holistic Development",
                                "Expert Faculty",
                                "Rich Heritage",
                                "Modern Infrastructure"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-3">
                                    <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_theme(colors.secondary.DEFAULT)]"></div>
                                    <span className="text-slate-700 font-bold">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => navigate('/about/school')}
                            className="px-8 py-3.5 bg-slate-900 text-white font-bold rounded-full shadow-lg hover:bg-slate-800 hover:shadow-xl transition-all flex items-center group"
                        >
                            Read Our Story
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Section 2: Vision & Mission Cards */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Vision Card */}
                    <div className="group bg-white p-10 rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500"></div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6 text-secondary-dark group-hover:rotate-12 transition-transform duration-300">
                                <Eye className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">Our Vision</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                To be a center of educational excellence that nurtures future leaders with global perspectives, deeply rooted in Indian values, ethics, and culture.
                            </p>
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div className="group bg-white p-10 rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500"></div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:rotate-12 transition-transform duration-300">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">Our Mission</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                To provide a safe, stimulating, and inclusive learning environment where every student is encouraged to explore their potential and achieve their personal best.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutAndVision;
