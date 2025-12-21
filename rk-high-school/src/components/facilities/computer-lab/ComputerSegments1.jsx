import React from 'react';
import heroImg from '../../../assets/images/student-life/gallery-page-5.jpg';
import infraImg from '../../../assets/images/home/classroom.jpg';
import { motion } from 'framer-motion';
import { Monitor, Cpu, Code2, ShieldCheck, MousePointer2, Laptop, ArrowRight, LayoutGrid } from 'lucide-react';

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
export const ComputerHero = () => {
    return (
        <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950">
            <div className="absolute inset-0">
                <img
                    src={heroImg}
                    alt="Students coding"
                    className="w-full h-full object-cover opacity-20"
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
                    <div className="inline-block px-4 py-2 bg-cyan-500/20 backdrop-blur-md rounded-full text-cyan-300 font-bold mb-6 border border-cyan-500/30">
                        Digital Innovation Hub
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Empowering Students <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">With Digital Skills</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium mb-10">
                        Bridging the gap between theory and technology through hands-on coding, design, and digital literacy.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-cyan-500/25">
                            View Facilities
                        </button>
                        <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/20 backdrop-blur-sm transition-all">
                            Lab Curriculum
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// Section 2: Lab Intro
export const ComputerIntro = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-white rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 via-indigo-500 to-cyan-500"></div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Future-Ready Education</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        In an increasingly digital world, computer literacy is as fundamental as reading and writing. Our state-of-the-art Computer Lab ensures every student from Class 1 to 12 gains <span className="text-cyan-600 font-bold">practical, industry-relevant skills.</span>
                    </p>
                    <div className="flex justify-center gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-cyan-500 rounded-full"></div> Coding</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-indigo-500 rounded-full"></div> Creativity</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Safety</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 3: Lab Overview (Card Wall)
export const ComputerOverview = () => {
    const sections = [
        { title: "Infrastructure", icon: <Monitor className="w-6 h-6" />, color: "indigo", id: "infra" },
        { title: "Software & Tools", icon: <LayoutGrid className="w-6 h-6" />, color: "cyan", id: "software" },
        { title: "Curriculum", icon: <Code2 className="w-6 h-6" />, color: "purple", id: "curriculum" },
        { title: "Safety & Security", icon: <ShieldCheck className="w-6 h-6" />, color: "emerald", id: "safety" },
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
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-cyan-300 cursor-pointer flex flex-col items-center justify-center gap-3 transition-all hover:-translate-y-1 group"
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

// Section 4 & 5: Infrastructure & Hardware
export const ComputerInfra = () => {
    return (
        <div id="infra" className="w-full py-20 px-4 bg-white scroll-mt-20">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <span className="text-cyan-600 font-bold tracking-widest uppercase text-sm mb-2 block">High-Tech Facilities</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Modern Infrastructure</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            A dedicated space designed for focus and productivity, equipped with the latest hardware to support everything from basic typing to advanced programming.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <Monitor className="w-8 h-8 text-indigo-500 mb-2" />
                                <h4 className="font-bold text-slate-900">High-Res Displays</h4>
                                <p className="text-xs text-slate-500">Anti-glare screens for eye safety.</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <Cpu className="w-8 h-8 text-cyan-500 mb-2" />
                                <h4 className="font-bold text-slate-900">Powerful Processors</h4>
                                <p className="text-xs text-slate-500">Fast compilation & multi-tasking.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-[2.5rem] opacity-20 blur-xl"></div>
                        <img
                            src={infraImg}
                            alt="Computer Lab Interior"
                            className="relative rounded-3xl shadow-2xl border-4 border-white w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 6: Software & Tools
export const SoftwareTools = () => {
    return (
        <div id="software" className="w-full py-20 px-4 bg-slate-900 text-white scroll-mt-20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Software Ecosystem</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 text-blue-300"><Monitor className="w-6 h-6" /></div>
                        <h3 className="text-lg font-bold mb-2">Operating Systems</h3>
                        <p className="text-slate-300 text-xs">Windows 11 & Linux (Ubuntu) for diverse exposure.</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
                        <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-4 text-orange-300"><LayoutGrid className="w-6 h-6" /></div>
                        <h3 className="text-lg font-bold mb-2">MS Office Suite</h3>
                        <p className="text-slate-300 text-xs">Word, Excel, PowerPoint for professional documentation.</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
                        <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4 text-emerald-300"><Code2 className="w-6 h-6" /></div>
                        <h3 className="text-lg font-bold mb-2">Coding IDEs</h3>
                        <p className="text-slate-300 text-xs">VS Code, PyCharm, Scratch, and BlueJ.</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
                        <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mb-4 text-pink-300"><Laptop className="w-6 h-6" /></div>
                        <h3 className="text-lg font-bold mb-2">Creative Tools</h3>
                        <p className="text-slate-300 text-xs">Canva, GIMP, and Adobe Reader.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 7: Primary Level
export const PrimaryComputers = () => {
    return (
        <div id="curriculum" className="w-full py-20 px-4 bg-white scroll-mt-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                    <PWCard
                        title="Primary Wings (Classes 1-5)"
                        desc="Start young! We introduce computers as a fun and creative tool rather than just a machine."
                        icon={<MousePointer2 className="w-8 h-8" />}
                        color="cyan"
                    />
                </div>
                <div className="flex-1 space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900">Building Foundations</h3>
                    <ul className="space-y-4">
                        {[
                            { label: "Hardware Basics", desc: "Understanding Mouse, Keyboard, Monitor usage." },
                            { label: "Digital Art", desc: "Using MS Paint and Tux Paint for creativity." },
                            { label: "Logic Games", desc: "Interactive puzzles to build problem-solving skills." }
                        ].map((item, i) => (
                            <li key={i} className="flex gap-4 p-4 bg-cyan-50 rounded-2xl border border-cyan-100">
                                <div className="w-2 h-full bg-cyan-400 rounded-full"></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{item.label}</h4>
                                    <p className="text-sm text-slate-600">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
