import React, { useEffect, useState } from 'react';
import { Target, Eye, Heart, BookOpen, Users, Globe, Award, ShieldCheck } from 'lucide-react';
import Footer from '../../components/home/Footer';
import PageHeader from '../../components/PageHeader';

const VisionMission = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const values = [
        { icon: Award, title: "Excellence", desc: "Striving for the highest standards in everything we do." },
        { icon: ShieldCheck, title: "Integrity", desc: "Building trust through honesty and ethical behavior." },
        { icon: Users, title: "Collaboration", desc: "Working together to achieve common goals effectively." },
        { icon: Heart, title: "Empathy", desc: "Understanding and sharing the feelings of others." },
        { icon: Globe, title: "Global Mindset", desc: "Preparing students for a connected, diverse world." },
        { icon: BookOpen, title: "Innovation", desc: "Embracing creativity and new ways of learning." },
    ];

    return (
        <div className="bg-neutral-50 min-h-screen font-sans text-slate-900">
            {/* Page Header */}
            <PageHeader
                title="Vision & Mission"
                subtitle="Our Guiding Light"
                bgImage="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80&w=1600"
            />

            <div className="container mx-auto px-4 py-20">

                {/* Vision & Mission Cards */}
                <div className="grid md:grid-cols-2 gap-12 mb-24">
                    {/* Vision */}
                    <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100 flex flex-col items-center text-center group hover:bg-primary hover:text-white transition-all duration-500 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-32 -mt-32 opacity-20 group-hover:bg-white/10 transition-colors"></div>
                        <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
                            <Eye className="w-10 h-10" />
                        </div>
                        <h2 className="text-4xl font-black font-display mb-6">Our Vision</h2>
                        <p className="text-slate-600 leading-relaxed text-lg group-hover:text-white/90">
                            "To be a global leader in holistic education, nurturing young minds to become compassionate, innovative, and responsible citizens who shape a better tomorrow."
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100 flex flex-col items-center text-center group hover:bg-secondary hover:text-white transition-all duration-500 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-32 -mt-32 opacity-20 group-hover:bg-white/10 transition-colors"></div>
                        <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
                            <Target className="w-10 h-10" />
                        </div>
                        <h2 className="text-4xl font-black font-display mb-6">Our Mission</h2>
                        <p className="text-slate-600 leading-relaxed text-lg group-hover:text-white/90">
                            "To provide a dynamic learning environment that fosters academic excellence, critical thinking, and character development through a blend of modern methodology and traditional values."
                        </p>
                    </div>
                </div>

                {/* Core Values Section */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Foundation of Success</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-display">Core Values</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((val, index) => (
                            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-50 hover:shadow-2xl hover:-translate-y-2 transition-all">
                                <div className="mb-6 inline-block p-4 rounded-2xl bg-slate-50 text-primary">
                                    <val.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold font-display text-slate-900 mb-3">{val.title}</h3>
                                <p className="text-slate-500">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Educational Philosophy (Split Layout) */}
                <div className="grid md:grid-cols-2 gap-16 items-center bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

                    <div className="relative z-10">
                        <span className="text-secondary font-bold tracking-wider uppercase text-xs mb-3 block">Our Approach</span>
                        <h2 className="text-4xl md:text-5xl font-black font-display mb-6 leading-tight">
                            Education Beyond<br /><span className="text-secondary">Textbooks</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            We believe that true education transcends the four walls of a classroom. It is about igniting curiosity, fostering creativity, and building resilience.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Student-Centric Learning Models",
                                "Integration of Technology & Tradition",
                                "Focus on Emotional Intelligence",
                                "Continuous Assessment & Growth"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg font-medium">
                                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative z-10 h-[400px] rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800"
                            alt="Philosophy"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default VisionMission;
