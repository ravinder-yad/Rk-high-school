import React from 'react';
import heroImg from '../../../assets/images/gallery/gallery-page-10.jpg';
import { motion } from 'framer-motion';
import { Landmark, Globe2, BookOpen, Users2, ScrollText, PenTool, ArrowRight, BrainCircuit } from 'lucide-react';

// Shared PW Card Component
const PWCard = ({ title, desc, icon, color = "indigo", children }) => (
    <div className={`group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}>
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
export const ArtsHero = () => {
    return (
        <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950">
            <div className="absolute inset-0">
                <img
                    src={heroImg}
                    alt="Arts Students"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/40"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-purple-300 font-bold mb-6 border border-white/20">
                        Department of Humanities
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Understanding Society <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Shaping Perspectives</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium mb-10">
                        Developing critical thinkers, eloquent speakers, and compassionate leaders through a deep study of History, Politics, and Human Behavior.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-purple-500/25">
                            Focus Areas
                        </button>
                        <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/20 backdrop-blur-sm transition-all">
                            Admission Enquiry
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// Section 2: Department Intro
export const ArtsIntro = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-white rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-rose-500"></div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Thoughtful & Creative</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        The Arts stream at RK High School is designed to foster <span className="text-purple-600 font-bold">intellectual curiosity and social responsibility.</span> We believe that understanding our past and present society is crucial for building a better future. Our curriculum encourages students to question, analyze, and express.
                    </p>
                    <div className="flex justify-center gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-purple-500 rounded-full"></div> Critical Thinking</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-indigo-500 rounded-full"></div> Communication</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-rose-500 rounded-full"></div> Creativity</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 3: Subject Overview
export const ArtsSubjects = () => {
    const subjects = [
        { title: "History", icon: <ScrollText className="w-6 h-6" />, color: "orange", id: "history" },
        { title: "Political Science", icon: <Landmark className="w-6 h-6" />, color: "indigo", id: "polsci" },
        { title: "Geography", icon: <Globe2 className="w-6 h-6" />, color: "emerald", id: "geography" },
        { title: "Sociology", icon: <Users2 className="w-6 h-6" />, color: "rose", id: "sociology" },
    ];

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="w-full py-12 px-4 bg-slate-50">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {subjects.map((sub, idx) => (
                        <div
                            key={idx}
                            onClick={() => scrollToSection(sub.id)}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-purple-300 cursor-pointer flex flex-col items-center justify-center gap-3 transition-all hover:-translate-y-1 group"
                        >
                            <div className={`w-12 h-12 bg-${sub.color}-50 rounded-full flex items-center justify-center text-${sub.color}-600 group-hover:scale-110 transition-transform`}>
                                {sub.icon}
                            </div>
                            <span className="font-bold text-slate-700">{sub.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 4: History Department
export const HistoryDept = () => {
    return (
        <div id="history" className="w-full py-20 px-4 bg-white scroll-mt-20">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-2 block">Our Heritage & Legacy</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">History</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            We explore the tapestry of human existence, from ancient civilizations to modern nation-states. Our focus is not just on dates, but on understanding cause-and-effect relationships and source analysis.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {['World History Themes', 'Indian Independence Movement', 'Historical Source Analysis'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600"><ScrollText className="w-3 h-3" /></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 w-full">
                        <PWCard
                            title="Revisiting the Past"
                            desc="Interactive timelines and documentary screenings bring historical events to life."
                            icon={<ScrollText className="w-8 h-8" />}
                            color="orange"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 5: Political Science
export const PolSciDept = () => {
    return (
        <div id="polsci" className="w-full py-20 px-4 bg-slate-50 scroll-mt-20">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                    <div className="flex-1">
                        <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-2 block">Governance & Rights</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Political Science</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            Students delve into the workings of the Indian Constitution, global politics, and democratic values. We encourage active debates on current affairs and policy decisions.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-xl border border-slate-200">
                                <h4 className="font-bold text-slate-900 mb-1">Domestic</h4>
                                <p className="text-sm text-slate-500">Indian Constitution</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-slate-200">
                                <h4 className="font-bold text-slate-900 mb-1">International</h4>
                                <p className="text-sm text-slate-500">Cold War & UN</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <PWCard
                            title="Democracy in Action"
                            desc="Mock Parliaments and Model UN sessions for practical understanding of diplomacy."
                            icon={<Landmark className="w-8 h-8" />}
                            color="indigo"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 6: Geography
export const GeographyDept = () => {
    return (
        <div id="geography" className="w-full py-20 px-4 bg-white scroll-mt-20">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2 block">People & Planet</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Geography</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            Bridging the gap between physical sciences and social studies. From landforms to population demographics, we cover it all with extensive map work and field trips.
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold border border-emerald-100">Physical</span>
                            <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold border border-emerald-100">Human</span>
                            <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold border border-emerald-100">Cartography</span>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <PWCard
                            title="Mapping the World"
                            desc="Understanding climate change, resources, and sustainable development goals."
                            icon={<Globe2 className="w-8 h-8" />}
                            color="emerald"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 7: Sociology / Psychology
export const SocialScienceDept = () => {
    return (
        <div id="sociology" className="w-full py-20 px-4 bg-slate-900 text-white scroll-mt-20">
            <div className="container mx-auto max-w-4xl text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 text-rose-400">
                    <Users2 className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Sociology & Psychology Understanding Humans</h2>
                <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                    We offer options to study the structure of society and the intricacies of the human mind. These subjects are crucial for understanding behavior and social dynamics.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                        <h4 className="font-bold text-rose-400 mb-2 flex items-center gap-2"><Users2 className="w-4 h-4" /> Sociology</h4>
                        <p className="text-sm text-slate-400">Study of social institutions, culture, and inequality.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                        <h4 className="font-bold text-rose-400 mb-2 flex items-center gap-2"><BrainCircuit className="w-4 h-4" /> Psychology</h4>
                        <p className="text-sm text-slate-400">Study of mental processes, memory, and emotions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
