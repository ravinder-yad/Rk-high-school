import React from 'react';
import heroImg from '../../../assets/images/student-life/event-science.jpg';
import { motion } from 'framer-motion';
import { Atom, Droplets, Dna, Calculator, ArrowRight, Microscope, Zap, BookOpen } from 'lucide-react';

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
export const ScienceHero = () => {
    return (
        <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950">
            <div className="absolute inset-0">
                <img
                    src={heroImg}
                    alt="Science Lab"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/40"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-indigo-300 font-bold mb-6 border border-white/20">
                        Department of Sciences
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Exploring Concepts <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Building Futures</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium mb-10">
                        Fostering a spirit of inquiry and innovation through practical learning and conceptual mastery.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-indigo-500/25">
                            Explore Subjects
                        </button>
                        <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/20 backdrop-blur-sm transition-all">
                            View Lab Facilities
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// Section 2: Department Intro
export const ScienceIntro = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-white rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500"></div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Scientific Excellence</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        At RK High School, science is not just about textbooks; it's about <span className="text-indigo-600 font-bold">curiosity, experimentation, and discovery.</span> We maintain a perfect balance between theoretical concepts and hands-on practical experience to prepare students for competitive exams and future research careers.
                    </p>
                    <div className="flex justify-center gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-indigo-500 rounded-full"></div> Concept Clarity</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-cyan-500 rounded-full"></div> Practical Focus</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 3: Stream Overview
export const ScienceStreams = () => {
    const subjects = [
        { title: "Physics", icon: <Atom className="w-6 h-6" />, color: "indigo", id: "physics" },
        { title: "Chemistry", icon: <Droplets className="w-6 h-6" />, color: "cyan", id: "chemistry" },
        { title: "Biology", icon: <Dna className="w-6 h-6" />, color: "emerald", id: "biology" },
        { title: "Mathematics", icon: <Calculator className="w-6 h-6" />, color: "orange", id: "math" }
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
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-300 cursor-pointer flex flex-col items-center justify-center gap-3 transition-all hover:-translate-y-1 group"
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

// Section 4: Physics Department
export const PhysicsDept = () => {
    return (
        <div id="physics" className="w-full py-20 px-4 bg-white scroll-mt-20">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-2 block">Matter & Energy</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Physics</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            Our Physics curriculum goes beyond potential and kinetic energy. We focus on deep conceptual understanding of mechanics, electromagnetism, and modern physics through rigorous numerical practice and real-world demonstrations.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {['Advanced Mechanics & Optics', 'Electricity & Magnetism Labs', 'Emphasis on Numerical Solving'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600"><Zap className="w-3 h-3" /></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 w-full">
                        <PWCard
                            title="Interactive Learning"
                            desc="We use simulations and advanced lab equipment to visualize complex physical phenomena."
                            icon={<Atom className="w-8 h-8" />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 5: Chemistry Department
export const ChemistryDept = () => {
    return (
        <div id="chemistry" className="w-full py-20 px-4 bg-slate-50 scroll-mt-20">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                    <div className="flex-1">
                        <span className="text-cyan-600 font-bold tracking-widest uppercase text-sm mb-2 block">Composition & Reactions</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Chemistry</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            From the Periodic Table to Organic Synthesis, our Chemistry department ensures students master the delicate balance of equations and experiments. Safety and precision in the lab are our top priorities.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-xl border border-slate-200">
                                <h4 className="font-bold text-slate-900 mb-1">Organic</h4>
                                <p className="text-sm text-slate-500">Reactions & Mechanisms</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-slate-200">
                                <h4 className="font-bold text-slate-900 mb-1">Inorganic</h4>
                                <p className="text-sm text-slate-500">Elements & Compounds</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <PWCard
                            title="Practical Chemistry"
                            desc="Hands-on titration, salt analysis, and compound identification in our state-of-the-art lab."
                            icon={<Droplets className="w-8 h-8" />}
                            color="cyan"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 6: Biology Department
export const BiologyDept = () => {
    return (
        <div id="biology" className="w-full py-20 px-4 bg-white scroll-mt-20">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2 block">Life & Living Systems</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Biology</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            Exploring the complexity of life through Botany and Zoology. Our approach involves detailed diagrammatic practice, specimen study, and understanding the physiology of living organisms.
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold border border-emerald-100">Botany</span>
                            <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold border border-emerald-100">Zoology</span>
                            <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold border border-emerald-100">Genetics</span>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <PWCard
                            title="Visual Learning"
                            desc="High-quality microscopes and detailed models help students visualize cellular structures."
                            icon={<Dna className="w-8 h-8" />}
                            color="emerald"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 7: Maths Support
export const MathSupport = () => {
    return (
        <div id="math" className="w-full py-20 px-4 bg-slate-900 text-white scroll-mt-20">
            <div className="container mx-auto max-w-4xl text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange-400">
                    <Calculator className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Mathematics The Language of Science</h2>
                <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                    We emphasize logical reasoning and problem-solving skills. Our rigorous math curriculum supports Physics and Chemistry proficiency and builds a strong foundation for engineering entrance exams.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                    {['Calculus & Algebra', 'Vectors & 3D Geometry', 'Probability & Stats'].map((topic, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                            <h4 className="font-bold text-orange-400 mb-2">{topic}</h4>
                            <p className="text-sm text-slate-400">Core focus area for Class 11 & 12</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
