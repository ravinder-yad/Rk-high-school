import React from 'react';
import { Target, Globe, BookOpen, Lightbulb } from 'lucide-react';

export const VisionHero = () => (
    <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-900"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Vision & Mission</h1>
            <p className="text-xl md:text-2xl font-light italic text-yellow-400">“Building Character, Creating Leaders”</p>
        </div>
    </div>
);

export const VisionIntro = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-white/80 backdrop-blur-xl border border-gray-100 p-8 md:p-12 rounded-2xl shadow-xl">
                <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Purpose</h2>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                    At RK High School, our purpose goes beyond textbooks. We envision a world where education is the foundation of character, and every student is empowered to lead with integrity and innovation.
                </p>
            </div>
        </div>
    </section>
);

export const VisionHighlight = () => (
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-gradient-to-r from-blue-600 to-yellow-500 p-10 md:p-16 text-center transform hover:-translate-y-2 transition-transform duration-500">
                <Target className="w-16 h-16 mx-auto text-secondary mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Our Vision</h2>
                <blockquote className="text-2xl md:text-3xl text-gray-600 italic font-serif leading-relaxed">
                    "To be a global leader in school education, fostering a culture of excellence, innovation, and social responsibility."
                </blockquote>
            </div>
        </div>
    </section>
);

export const VisionOneLine = () => (
    <div className="bg-blue-600 py-12 text-white text-center shadow-inner">
        <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold tracking-wide uppercase">
                Empowering Minds • Enriching Souls • Enlightening Future
            </h3>
        </div>
    </div>
);

export const KeyPillars = () => {
    const pillars = [
        { title: "Academic Excellence", icon: <BookOpen className="w-8 h-8 text-blue-600" />, desc: "Rigorous curriculum meeting global standards." },
        { title: "Character Building", icon: <Target className="w-8 h-8 text-red-500" />, desc: "Rooted in strong moral and ethical values." },
        { title: "Innovation", icon: <Lightbulb className="w-8 h-8 text-yellow-500" />, desc: "Encouraging creative thinking and problem solving." },
        { title: "Global Awareness", icon: <Globe className="w-8 h-8 text-green-500" />, desc: "Preparing students for a connected world." },
    ];

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-800">Key Pillars of Our Vision</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                            <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                                {pillar.icon}
                            </div>
                            <h3 className="text-xl font-bold text-center text-slate-800 mb-3">{pillar.title}</h3>
                            <p className="text-center text-gray-600 text-sm">{pillar.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
