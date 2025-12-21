import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, Calculator, PenTool, Palette, Music, ArrowRight, Zap, Users } from 'lucide-react';
import heroImg from '../../../assets/images/gallery/gallery-page-9.jpg';

// Shared PW Card Component
const PWCard = ({ title, desc, icon, color = "purple", children }) => (
    <div className={`group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-full`}>
        <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110`}></div>
        <div className={`w-14 h-14 bg-${color}-100 rounded-2xl flex items-center justify-center text-${color}-600 mb-6 relative z-10 group-hover:rotate-6 transition-transform`}>
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3 relative z-10 group-hover:text-purple-600 transition-colors">{title}</h3>
        <p className="text-slate-600 mb-4 relative z-10 leading-relaxed text-sm">{desc}</p>

        {children && <div className="relative z-10 mt-4">{children}</div>}

        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
            <ArrowRight className={`w-5 h-5 text-${color}-500`} />
        </div>
    </div>
);

// Section 1: Hero Section
export const ClubsHero = () => {
    return (
        <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950">
            <div className="absolute inset-0">
                <img
                    src={heroImg}
                    alt="School Clubs"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/40"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-md rounded-full text-purple-300 font-bold mb-6 border border-purple-500/30">
                        Passion & Leadership
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Clubs & Societies <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Discover Your Passion</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium mb-10">
                        Join a community of like-minded peers. Lead, innovate, and express yourself through our diverse range of clubs.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-purple-500/25">
                            Join a Club
                        </button>
                        <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/20 backdrop-blur-sm transition-all">
                            View Schedule
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// Section 2: Intro
export const ClubsIntro = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-white rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500"></div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Where Interests Flourish</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        Clubs at RK High School are student-driven platforms that foster <span className="text-purple-600 font-bold">creativity, critical thinking, and collaboration</span>. They provide a space for students to pursue their hobbies seriously.
                    </p>
                    <div className="flex justify-center gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-purple-500 rounded-full"></div> Innovate</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-indigo-500 rounded-full"></div> Perform</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-pink-500 rounded-full"></div> Serve</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 3: Overview Cards
export const ClubsOverview = () => {
    const items = [
        { title: "Science Club", icon: <Beaker className="w-6 h-6" />, color: "teal", id: "science" },
        { title: "Literary Club", icon: <PenTool className="w-6 h-6" />, color: "indigo", id: "literary" },
        { title: "Art & Craft", icon: <Palette className="w-6 h-6" />, color: "pink", id: "art" },
        { title: "Social Service", icon: <Users className="w-6 h-6" />, color: "emerald", id: "social" }
    ];

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="w-full py-12 px-4 bg-slate-50">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            onClick={() => scrollToSection(item.id)}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-purple-300 cursor-pointer flex flex-col items-center justify-center gap-3 transition-all hover:-translate-y-1 group"
                        >
                            <div className={`w-12 h-12 bg-${item.color}-50 rounded-full flex items-center justify-center text-${item.color}-600 group-hover:scale-110 transition-transform`}>
                                {item.icon}
                            </div>
                            <span className="font-bold text-slate-700">{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 4, 5, 6, 7: Core Academic & Arts Clubs
export const AcademicArtsClubs = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto flex flex-col gap-12">
                <div className="text-center mb-4">
                    <span className="text-purple-500 font-bold tracking-widest uppercase text-sm mb-2 block">Core Clubs</span>
                    <h2 className="text-3xl font-bold text-slate-900">Academic & Creative Circles</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Science */}
                    <PWCard title="Science Club" desc="Exploring the universe through experiments and models." icon={<Beaker className="w-6 h-6" />} color="teal">
                        <div id="science" className="flex flex-wrap gap-2 pt-2 scroll-mt-20">
                            <span className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded-md font-bold">Robotics</span>
                            <span className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded-md font-bold">Astronomy</span>
                        </div>
                    </PWCard>

                    {/* Math */}
                    <PWCard title="Math Club" desc="Solving puzzles and mastering Vedic Maths." icon={<Calculator className="w-6 h-6" />} color="orange">
                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded-md font-bold">Puzzles</span>
                            <span className="text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded-md font-bold">Geometry</span>
                        </div>
                    </PWCard>

                    {/* Literary */}
                    <PWCard title="Literary Club" desc="For the poets, writers, and orators." icon={<PenTool className="w-6 h-6" />} color="indigo">
                        <div id="literary" className="flex flex-wrap gap-2 pt-2 scroll-mt-20">
                            <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md font-bold">Debate</span>
                            <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md font-bold">Journalism</span>
                        </div>
                    </PWCard>

                    {/* Art */}
                    <PWCard title="Art & Craft" desc="Creating beauty from waste and canvas." icon={<Palette className="w-6 h-6" />} color="pink">
                        <div id="art" className="flex flex-wrap gap-2 pt-2 scroll-mt-20">
                            <span className="text-xs bg-pink-50 text-pink-700 px-2 py-1 rounded-md font-bold">Painting</span>
                            <span className="text-xs bg-pink-50 text-pink-700 px-2 py-1 rounded-md font-bold">Origami</span>
                        </div>
                    </PWCard>
                </div>
            </div>
        </div>
    );
};
