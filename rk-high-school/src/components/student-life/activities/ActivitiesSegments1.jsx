import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Dumbbell, BookOpen, Music, Mic2, Cpu, ArrowRight, Star } from 'lucide-react';
import heroImg from '../../../assets/images/student-life/gallery-page-1.jpg';
import artsImg from '../../../assets/images/student-life/gallery-page-8.jpg';
import sportsImg from '../../../assets/images/student-life/event-sports.jpg';

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
export const ActivitiesHero = () => {
    return (
        <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950">
            <div className="absolute inset-0">
                <img
                    src={heroImg}
                    alt="Student Activities"
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
                    <div className="inline-block px-4 py-2 bg-sky-500/20 backdrop-blur-md rounded-full text-sky-300 font-bold mb-6 border border-sky-500/30">
                        Holistic Development
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Learning Beyond <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">The Classroom</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium mb-10">
                        Discover a vibrant world of creativity, sports, and leadership that shapes well-rounded individuals.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-sky-500/25">
                            Explore Activities
                        </button>
                        <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/20 backdrop-blur-sm transition-all">
                            View Gallery
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// Section 2: Intro
export const ActivitiesIntro = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-white rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500"></div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Unlocking Potential</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        We believe that every child has a unique talent waiting to be discovered. Our <span className="text-sky-600 font-bold">extensive range of co-curricular activities</span> ensures that students grow academically, physically, and socially.
                    </p>
                    <div className="flex justify-center gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-sky-500 rounded-full"></div> Creativity</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-indigo-500 rounded-full"></div> Confidence</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-purple-500 rounded-full"></div> Character</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 3: Overview Cards
export const ActivitiesOverview = () => {
    const items = [
        { title: "Creative Arts", icon: <Palette className="w-6 h-6" />, color: "pink", id: "arts" },
        { title: "Sports & Fitness", icon: <Dumbbell className="w-6 h-6" />, color: "orange", id: "sports" },
        { title: "Literary", icon: <BookOpen className="w-6 h-6" />, color: "indigo", id: "literary" },
        { title: "Tech & Science", icon: <Cpu className="w-6 h-6" />, color: "sky", id: "tech" }
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
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-sky-300 cursor-pointer flex flex-col items-center justify-center gap-3 transition-all hover:-translate-y-1 group"
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

// Section 4, 5, 6: Academic, Creative, Sports
export const ActivityCategories = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto flex flex-col gap-20">
                {/* Creative Arts */}
                <div id="arts" className="scroll-mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-pink-500 font-bold tracking-widest uppercase text-sm mb-2 block">Expression</span>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Creative Arts</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            Nurturing imagination through sketching, painting, and craft. Our art studio is a canvas for young minds to express their colorful ideas.
                        </p>
                        <div className="flex gap-4">
                            <PWCard title="Fine Arts" desc="Watercolors, Oil Painting & Sketching" icon={<Palette className="w-5 h-5" />} color="pink" />
                        </div>
                    </div>
                    <div className="relative h-[300px] rounded-[2.5rem] overflow-hidden shadow-xl">
                        <img
                            src={artsImg}
                            alt="Art Class"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Sports */}
                <div id="sports" className="scroll-mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative h-[300px] rounded-[2.5rem] overflow-hidden shadow-xl">
                        <img
                            src={sportsImg}
                            alt="Sports"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2 block">Vitality</span>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Sports & Fitness</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            A healthy body houses a healthy mind. From yoga sessions to intense athletic training, we cover it all to ensure physical well-being.
                        </p>
                        <div className="flex gap-4">
                            <PWCard title="Team Sports" desc="Cricket, Football & Volleyball" icon={<Dumbbell className="w-5 h-5" />} color="orange" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
