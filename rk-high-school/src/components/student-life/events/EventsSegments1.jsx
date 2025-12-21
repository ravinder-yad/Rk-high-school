import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Music, Trophy, Microscope, Palette, ArrowRight, Star } from 'lucide-react';
import heroImg from '../../../assets/images/student-life/gallery-page-6.jpg';
import annualDayImg from '../../../assets/images/gallery/gallery-page-10.jpg';
import sportsDayImg from '../../../assets/images/student-life/gallery-page-3.jpg';

// Shared PW Card Component
const PWCard = ({ title, desc, icon, color = "orange", children }) => (
    <div className={`group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-full`}>
        <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110`}></div>
        <div className={`w-14 h-14 bg-${color}-100 rounded-2xl flex items-center justify-center text-${color}-600 mb-6 relative z-10 group-hover:rotate-6 transition-transform`}>
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3 relative z-10 group-hover:text-orange-600 transition-colors">{title}</h3>
        <p className="text-slate-600 mb-4 relative z-10 leading-relaxed text-sm">{desc}</p>

        {children && <div className="relative z-10 mt-4">{children}</div>}

        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
            <ArrowRight className={`w-5 h-5 text-${color}-500`} />
        </div>
    </div>
);

// Section 1: Hero Section
export const EventsHero = () => {
    return (
        <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950">
            <div className="absolute inset-0">
                <img
                    src={heroImg}
                    alt="School Event"
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
                        Memories & Milestones
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        School Events <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-indigo-400">Celebrating Every Moment</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium mb-10">
                        From grand annual days to spirited sports meets, we celebrate the talent and spirit of our students.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-orange-500/25">
                            Upcoming Events
                        </button>
                        <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/20 backdrop-blur-sm transition-all">
                            Event Gallery
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// Section 2: Intro
export const EventsIntro = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-white rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-indigo-500 to-orange-500"></div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">A Vibrant Community</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        School life is incomplete without celebrations. Our events bring together students, parents, and teachers to create <span className="text-orange-600 font-bold">unforgettable memories</span> and showcase student potential.
                    </p>
                    <div className="flex justify-center gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full"></div> Culture</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-indigo-500 rounded-full"></div> Talent</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Joy</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 3: Overview Cards
export const EventsOverview = () => {
    const items = [
        { title: "Annual Function", icon: <Star className="w-6 h-6" />, color: "orange", id: "annual" },
        { title: "Sports Day", icon: <Trophy className="w-6 h-6" />, color: "green", id: "sports" },
        { title: "Exhibitions", icon: <Microscope className="w-6 h-6" />, color: "sky", id: "exmo" },
        { title: "Festivals", icon: <Calendar className="w-6 h-6" />, color: "pink", id: "fest" }
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
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-orange-300 cursor-pointer flex flex-col items-center justify-center gap-3 transition-all hover:-translate-y-1 group"
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

// Section 4, 5, 6, 7, 8: Major Events
export const MajorEvents = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto space-y-20">
                {/* Annual Day */}
                <div id="annual" className="flex flex-col md:flex-row gap-12 items-center scroll-mt-20">
                    <div className="flex-1">
                        <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2 block">Grand Finale</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Annual Day</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            A spectacular showcase of music, dance, and theatre. Every student gets a chance to shine on stage in front of a massive audience.
                        </p>
                        <div className="flex gap-4">
                            <PWCard title="Theme Based" desc="Unique themes every year." icon={<Start className="w-5 h-5" />} color="orange" />
                        </div>
                    </div>
                    <div className="flex-1 relative h-[350px] w-full">
                        <img
                            src={annualDayImg}
                            alt="Annual Day"
                            className="rounded-[2.5rem] shadow-xl w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Sports Day */}
                <div id="sports" className="flex flex-col md:flex-row-reverse gap-12 items-center scroll-mt-20">
                    <div className="flex-1">
                        <span className="text-green-500 font-bold tracking-widest uppercase text-sm mb-2 block">Speed & Strength</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Annual Sports Meet</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            The campus buzzes with energy as houses compete in track and field events. The march past and torch lighting are highlights.
                        </p>
                    </div>
                    <div className="flex-1 relative h-[350px] w-full">
                        <img
                            src={sportsDayImg}
                            alt="Sports Day"
                            className="rounded-[2.5rem] shadow-xl w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Exhibitions */}
                <div id="exmo" className="border-t border-slate-100 pt-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Exhibitions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-sky-50 p-8 rounded-3xl border border-sky-100 flex items-start gap-4">
                            <Microscope className="w-10 h-10 text-sky-500 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Science Exhibition</h3>
                                <p className="text-slate-600">Working models, robots, and innovative solutions presented by young scientists.</p>
                            </div>
                        </div>
                        <div className="bg-pink-50 p-8 rounded-3xl border border-pink-100 flex items-start gap-4">
                            <Palette className="w-10 h-10 text-pink-500 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Art & Craft Expo</h3>
                                <p className="text-slate-600">A colorful display of paintings, sculptures, and handicrafts made by students.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Start = ({ className }) => <Star className={className} />; // Fix missing import usage
