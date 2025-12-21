import React from 'react';
import heroImg from '../../../assets/images/student-life/event-sports.jpg';
import coachImg from '../../../assets/images/student-life/gallery-page-3.jpg';
import fieldImg from '../../../assets/images/gallery/gallery-page-11.jpg';
import { motion } from 'framer-motion';
import { Trophy, Activity, Dumbbell, Sparkles, ArrowRight, Target, Users } from 'lucide-react';

// Shared PW Card Component
const PWCard = ({ title, desc, icon, color = "indigo", children }) => (
    <div className={`group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-full`}>
        <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110`}></div>
        <div className={`w-14 h-14 bg-${color}-100 rounded-2xl flex items-center justify-center text-${color}-600 mb-6 relative z-10 group-hover:rotate-6 transition-transform`}>
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3 relative z-10 group-hover:text-indigo-600 transition-colors">{title}</h3>
        <p className="text-slate-600 mb-4 relative z-10 leading-relaxed">{desc}</p>

        {children && <div className="relative z-10 mt-4">{children}</div>}

        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
            <ArrowRight className={`w-5 h-5 text-${color}-500`} />
        </div>
    </div>
);

// Section 1: Hero Section
export const SportsHero = () => {
    return (
        <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950">
            <div className="absolute inset-0">
                <img
                    src={heroImg}
                    alt="Sports Ground"
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
                    <div className="inline-block px-4 py-2 bg-orange-500/20 backdrop-blur-md rounded-full text-orange-300 font-bold mb-6 border border-orange-500/30">
                        Champions in Making
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Sports Arena <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-indigo-400">Play. Train. Excel.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium mb-10">
                        Beyond the classroom walls lies a world of team spirit, resilience, and physical endurance.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-orange-500/25">
                            View Facilities
                        </button>
                        <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/20 backdrop-blur-sm transition-all">
                            Our Achievements
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// Section 2: Sports Intro
export const SportsIntro = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-white rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500"></div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Fitness & Character Building</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        We view sports not just as a pastime, but as an essential part of education. It instills <span className="text-orange-600 font-bold">discipline, leadership, and teamwork</span> in students, preparing them for the challenges of life.
                    </p>
                    <div className="flex justify-center gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full"></div> Stamina</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-indigo-500 rounded-full"></div> Skill</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Spirit</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 3: Sports Overview Cards
export const SportsOverview = () => {
    const sections = [
        { title: "Outdoor Sports", icon: <Activity className="w-6 h-6" />, color: "orange", id: "outdoor" },
        { title: "Indoor Sports", icon: <Target className="w-6 h-6" />, color: "indigo", id: "indoor" },
        { title: "Yoga & Fitness", icon: <Sparkles className="w-6 h-6" />, color: "emerald", id: "yoga" },
        { title: "Athletics", icon: <Dumbbell className="w-6 h-6" />, color: "red", id: "athletics" }
    ];

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="w-full py-12 px-4 bg-slate-50">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {sections.map((sec, idx) => (
                        <div
                            key={idx}
                            onClick={() => scrollToSection(sec.id)}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-orange-300 cursor-pointer flex flex-col items-center justify-center gap-3 transition-all hover:-translate-y-1 group"
                        >
                            <div className={`w-12 h-12 bg-${sec.color}-50 rounded-full flex items-center justify-center text-${sec.color}-600 group-hover:scale-110 transition-transform`}>
                                {sec.icon}
                            </div>
                            <span className="font-bold text-slate-700">{sec.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 4 & 5 & 6: Outdoor & Indoor & Playground
export const SportsFacilitiesList = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto flex flex-col gap-20">
                {/* Outdoor */}
                <div id="outdoor" className="scroll-mt-20">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-2 block">Vast Grounds</span>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">Outdoor Sports</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                Our campus boasts expansive fields for major team sports, well-maintained pitches, and dedicated practice nets.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <PWCard title="Cricket" desc="Professional turf & practice nets." icon={<Trophy className="w-5 h-5" />} color="orange" />
                                <PWCard title="Football" desc="Standard size grassy field." icon={<Activity className="w-5 h-5" />} color="emerald" />
                            </div>
                        </div>
                        <div className="flex-1 w-full relative h-[400px]">
                            <img
                                src={coachImg}
                                alt="Cricket Ground"
                                className="rounded-3xl shadow-xl w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Indoor */}
                <div id="indoor" className="scroll-mt-20">
                    <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                        <div className="flex-1">
                            <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-2 block">Indoor Stadium</span>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">Indoor Games</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                A multipurpose indoor hall for focused training in racket sports and mind games, unaffected by weather.
                            </p>
                            <ul className="space-y-4">
                                {['Badminton Courts', 'Table Tennis Arena', 'Chess & Carrom Tables'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                        <span className="text-slate-700 font-bold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 w-full relative h-[400px]">
                            <img
                                src={fieldImg}
                                alt="Indoor Games"
                                className="rounded-3xl shadow-xl w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 7: Equipment
export const SportsEquipment = () => {
    return (
        <div className="w-full py-16 px-4 bg-slate-900 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Premium Equipment</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <h4 className="text-xl font-bold text-orange-400 mb-2">Safety Gear</h4>
                        <p className="text-slate-300 text-sm">Helmets, pads, and guards provided for all contact sports.</p>
                    </div>
                    <div className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <h4 className="text-xl font-bold text-cyan-400 mb-2">International Standards</h4>
                        <p className="text-slate-300 text-sm">Bats, balls, and rackets compliant with national sports regulations.</p>
                    </div>
                    <div className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <h4 className="text-xl font-bold text-emerald-400 mb-2">Regular Maintenance</h4>
                        <p className="text-slate-300 text-sm">Equipment checked weekly for wear and tear to ensure student safety.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
