import React from 'react';
import heroImg from '../../../assets/images/student-life/gallery-page-8.jpg';
import expImg from '../../../assets/images/student-life/event-science.jpg';
import chemImg from '../../../assets/images/student-life/gallery-page-5.jpg';
import bioImg from '../../../assets/images/student-life/gallery-page-2.jpg';
import { motion } from 'framer-motion';
import { FlaskConical, Atom, Dna, Calculator, Microscope, Zap, ArrowRight, LayoutGrid } from 'lucide-react';

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
export const ScienceLabHero = () => {
    return (
        <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950">
            <div className="absolute inset-0">
                <img
                    src={heroImg}
                    alt="Science Lab"
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
                    <div className="inline-block px-4 py-2 bg-teal-500/20 backdrop-blur-md rounded-full text-teal-300 font-bold mb-6 border border-teal-500/30">
                        Hub of Innovation
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Science Laboratories <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">Where Theory Meets Practice</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium mb-10">
                        State-of-the-art facilities designed to spark curiosity, foster experimentation, and build scientific temperament.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-teal-500/25">
                            View Labs
                        </button>
                        <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/20 backdrop-blur-sm transition-all">
                            Safety Rules
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// Section 2: Lab Intro
export const ScienceLabIntro = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-white rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-500 via-indigo-500 to-teal-500"></div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Learning by Doing</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        At RK High School, we believe that science cannot be learnt from textbooks alone. Our laboratories provide a <span className="text-teal-600 font-bold">safe and stimulating environment</span> for students to observe, experiment, and analyze real-world phenomena.
                    </p>
                    <div className="flex justify-center gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-teal-500 rounded-full"></div> Observation</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-indigo-500 rounded-full"></div> Analysis</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Discovery</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 3: Overview Cards
export const LabsOverview = () => {
    const labs = [
        { title: "Physics Lab", icon: <Atom className="w-6 h-6" />, color: "indigo", id: "physics" },
        { title: "Chemistry Lab", icon: <FlaskConical className="w-6 h-6" />, color: "teal", id: "chemistry" },
        { title: "Biology Lab", icon: <Dna className="w-6 h-6" />, color: "emerald", id: "biology" },
        { title: "Math Lab", icon: <Calculator className="w-6 h-6" />, color: "orange", id: "math" }
    ];

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="w-full py-12 px-4 bg-slate-50">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {labs.map((lab, idx) => (
                        <div
                            key={idx}
                            onClick={() => scrollToSection(lab.id)}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-teal-300 cursor-pointer flex flex-col items-center justify-center gap-3 transition-all hover:-translate-y-1 group"
                        >
                            <div className={`w-12 h-12 bg-${lab.color}-50 rounded-full flex items-center justify-center text-${lab.color}-600 group-hover:scale-110 transition-transform`}>
                                {lab.icon}
                            </div>
                            <span className="font-bold text-slate-700">{lab.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 4: Physics Lab
export const PhysicsLab = () => {
    return (
        <div id="physics" className="w-full py-20 px-4 bg-white scroll-mt-20">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-2 block">Mechanics & Optics</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Physics Laboratory</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            Equipped with optical benches, potentiometers, and modern measuring instruments. Students perform experiments to verify laws of motion, optics, and electricity.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <Zap className="w-8 h-8 text-indigo-500 mb-2" />
                                <h4 className="font-bold text-slate-900">Electricity</h4>
                                <p className="text-xs text-slate-500">Circuit diagrams & Ohm's Law.</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <Microscope className="w-8 h-8 text-cyan-500 mb-2" />
                                <h4 className="font-bold text-slate-900">Optics</h4>
                                <p className="text-xs text-slate-500">Lenses, mirrors & prisms.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-[2.5rem] opacity-20 blur-xl"></div>
                        <img
                            src={expImg}
                            alt="Physics Lab"
                            className="relative rounded-3xl shadow-2xl border-4 border-white w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 5: Chemistry Lab
export const ChemistryLab = () => {
    return (
        <div id="chemistry" className="w-full py-20 px-4 bg-slate-50 scroll-mt-20">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                    <div className="flex-1">
                        <span className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-2 block">Reactions & Titrations</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Chemistry Laboratory</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            A safe space with individual gas burners, fume hoods, and a wide range of reagents. We cover organic, inorganic, and physical chemistry practicals.
                        </p>
                        <div className="flex gap-4">
                            <PWCard title="Salt Analysis" desc="Systematic identification of cations and anions." icon={<FlaskConical className="w-6 h-6" />} color="teal" />
                        </div>
                    </div>
                    <div className="flex-1 w-full relative">
                        <img
                            src={chemImg}
                            alt="Chemistry Lab"
                            className="rounded-3xl shadow-xl w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 6: Biology Lab
export const BiologyLab = () => {
    return (
        <div id="biology" className="w-full py-20 px-4 bg-white scroll-mt-20">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2 block">Life Sciences</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Biology Laboratory</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            Featuring high-resolution microscopes, human skeletal models, and a rich collection of preserved specimens to understand anatomy and physiology.
                        </p>
                        <ul className="space-y-3">
                            {['Spotting & Identification', 'Slide Preparation', 'Physiology Experiments'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 w-full relative">
                        <img
                            src={bioImg}
                            alt="Biology Lab"
                            className="rounded-3xl shadow-xl w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 7: Math Lab
export const MathLab = () => {
    return (
        <div id="math" className="w-full py-20 px-4 bg-slate-900 text-white scroll-mt-20">
            <div className="container mx-auto text-center">
                <Calculator className="w-16 h-16 text-orange-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Mathematics Activity Lab</h2>
                <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                    Breaking the phobia of numbers. We use 3D models, geometry kits, and interactive software to visualize complex mathematical concepts.
                </p>
                <div className="inline-flex gap-4 p-4 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm">
                    <span className="text-orange-300 font-bold">Geometry</span>
                    <span className="text-white/20">|</span>
                    <span className="text-orange-300 font-bold">Algebra</span>
                    <span className="text-white/20">|</span>
                    <span className="text-orange-300 font-bold">Calculus</span>
                </div>
            </div>
        </div>
    );
};
