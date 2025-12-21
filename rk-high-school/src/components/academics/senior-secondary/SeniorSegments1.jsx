import React from 'react';
import heroImg from '../../../assets/images/home/campus.jpg';
import scienceImg from '../../../assets/images/student-life/event-science.jpg';
import commerceImg from '../../../assets/images/student-life/gallery-page-5.jpg';
import artsImg from '../../../assets/images/gallery/gallery-page-9.jpg';
import { motion } from 'framer-motion';
import { ChevronRight, BookOpen, Brain, Users, Lightbulb, TrendingUp, Globe, Atom, Calculator, Dna, Beaker, Landmark, Gavel, PenTool, BarChart3, PieChart, Wallet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Section 1: Hero Section (Powerful Opening)
export const SeniorHero = () => {
    const navigate = useNavigate();

    return (
        <div className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src={heroImg}
                    alt="Senior Secondary Students"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/40"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1.5 px-5 mb-6 rounded-full bg-indigo-600/20 text-indigo-200 border border-indigo-500/30 font-bold text-sm tracking-wide uppercase backdrop-blur-md">
                        Classes XI & XII
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Preparing Students for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
                            Boards, Careers & Life
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
                        A focused academic environment designed to foster excellence, critical thinking, and competitive readiness for the leaders of tomorrow.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <button
                            onClick={() => document.getElementById('streams').scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-all flex items-center shadow-lg hover:shadow-indigo-500/50 text-lg"
                        >
                            Choose Your Stream <ChevronRight className="w-5 h-5 ml-2" />
                        </button>
                        <button
                            onClick={() => navigate('/admissions/form')}
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-bold rounded-full transition-all border border-white/20 text-lg"
                        >
                            Admission Enquiry
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// Section 2: Introduction (Why Senior Secondary Matters)
export const SeniorIntro = () => {
    return (
        <div className="w-full py-24 px-4 bg-slate-50">
            <div className="container mx-auto max-w-4xl">
                <div className="relative bg-white shadow-xl shadow-slate-200/50 rounded-3xl p-10 md:p-16 text-center border border-slate-100/50 backdrop-blur-sm">
                    {/* Pattern */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 rounded-t-3xl"></div>

                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                        The Career-Defining Years
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                        Classes 11 and 12 are the stepping stones to professional life. At RK High School, we combine
                        <span className="text-indigo-600 font-bold"> rigorous academics</span> with
                        <span className="text-emerald-600 font-bold"> strategic mentorship</span> to ensure every student finds their path to success, whether in Engineering, Medicine, Commerce, or Humanities.
                    </p>
                </div>
            </div>
        </div>
    );
};

// Section 3: Streams Offered (Main Card Section)
export const StreamsOffered = () => {
    const streams = [
        {
            id: "science",
            title: "Science Stream",
            desc: "For aspiring Engineers, Doctors, and Scientists. Focus on analytical problem solving and empirical evidence.",
            icon: <Atom className="w-8 h-8 text-white" />,
            color: "from-blue-600 to-indigo-600"
        },
        {
            id: "commerce",
            title: "Commerce Stream",
            desc: "For future CA, CS, and Business Leaders. Deep dive into financial literacy and economic systems.",
            icon: <TrendingUp className="w-8 h-8 text-white" />,
            color: "from-emerald-600 to-teal-600"
        },
        {
            id: "arts",
            title: "Humanities / Arts",
            desc: "For Civil Services, Law, and Liberal Arts. Developing critical perspectives on society and history.",
            icon: <Landmark className="w-8 h-8 text-white" />,
            color: "from-orange-500 to-red-500"
        }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div id="streams" className="w-full py-24 px-4 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Pathways to Success</span>
                    <h2 className="text-4xl font-bold text-slate-900 mt-2">Comprehensive Streams</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {streams.map((stream, idx) => (
                        <div
                            key={idx}
                            onClick={() => scrollToSection(stream.id)}
                            className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${stream.color} opacity-90 transition-opacity`}></div>
                            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
                                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-md">
                                    {stream.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">{stream.title}</h3>
                                    <p className="text-white/90 leading-relaxed text-sm mb-4">{stream.desc}</p>
                                    <span className="inline-flex items-center font-bold text-sm uppercase tracking-wide group-hover:underline">
                                        View Details <ChevronRight className="w-4 h-4 ml-1" />
                                    </span>
                                </div>
                            </div>
                            {/* Dotted Pattern Overlay */}
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <div className="w-24 h-24 bg-[radial-gradient(circle_at_50%_50%,#ffffff_2px,transparent_2px)] bg-[length:8px_8px]"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 4: Science Stream Details
export const ScienceStream = () => {
    return (
        <div id="science" className="w-full py-24 px-4 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-bold text-sm mb-6">
                            <Atom className="w-4 h-4" /> Science Stream
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Innovation & Discovery</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Our Science curriculum is rigorous and designed for students aiming for competitive exams like JEE and NEET.
                            We emphasize conceptual clarity and application-based learning.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { name: "Physics", icon: <Atom className="w-5 h-5" />, desc: "Mechanics, Optics, Thermodynamics" },
                                { name: "Chemistry", icon: <Beaker className="w-5 h-5" />, desc: "Organic, Inorganic, Physical" },
                                { name: "Mathematics", icon: <Calculator className="w-5 h-5" />, desc: "Calculus, Vectors, Algebra" },
                                { name: "Biology", icon: <Dna className="w-5 h-5" />, desc: "Botany, Zoology, Genetics" }
                            ].map((sub, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
                                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">{sub.icon}</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{sub.name}</h4>
                                        <p className="text-xs text-slate-500">{sub.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src={scienceImg}
                            alt="Chemistry Lab"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/20"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 5: Commerce Stream Details
export const CommerceStream = () => {
    return (
        <div id="commerce" className="w-full py-24 px-4 bg-white border-t border-slate-200">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src={commerceImg}
                            alt="Business Planning"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-emerald-900/20"></div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm mb-6">
                            <TrendingUp className="w-4 h-4" /> Commerce Stream
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Finance & Leadership</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Designed for future entrepreneurs and financial experts. We break down complex economic theories and
                            accounting principles into practical, real-world knowledge.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { name: "Accountancy", icon: <Calculator className="w-5 h-5" />, desc: "Financial Statements, Analysis" },
                                { name: "Business Studies", icon: <PieChart className="w-5 h-5" />, desc: "Management, Marketing" },
                                { name: "Economics", icon: <BarChart3 className="w-5 h-5" />, desc: "Micro & Macro Economics" },
                                { name: "Mathematics", icon: <Wallet className="w-5 h-5" />, desc: "Applied Math, Statistics" }
                            ].map((sub, idx) => (
                                <div key={idx} className="bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
                                    <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">{sub.icon}</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{sub.name}</h4>
                                        <p className="text-xs text-slate-500">{sub.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 6: Arts / Humanities Stream
export const ArtsStream = () => {
    return (
        <div id="arts" className="w-full py-24 px-4 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-bold text-sm mb-6">
                            <Landmark className="w-4 h-4" /> Humanities Stream
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Perspective & Policy</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            For students eager to understand society, culture, and governance. This stream is the bedrock for
                            careers in Civil Services (UPSC), Law (CLAT), and Journalism.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { name: "History", icon: <Landmark className="w-5 h-5" />, desc: "World & Indian History" },
                                { name: "Political Science", icon: <Gavel className="w-5 h-5" />, desc: "Constitution, Politics" },
                                { name: "Geography", icon: <Globe className="w-5 h-5" />, desc: "Physical & Human Geography" },
                                { name: "Sociology", icon: <Users className="w-5 h-5" />, desc: "Society, Culture, Dynamics" }
                            ].map((sub, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
                                    <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">{sub.icon}</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{sub.name}</h4>
                                        <p className="text-xs text-slate-500">{sub.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src={artsImg}
                            alt="Library Study"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-orange-900/20"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 7: Teaching Methodology
export const TeachingMethodology = () => {
    return (
        <div className="w-full py-24 px-4 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,#000000_1px,transparent_1px)] bg-[length:24px_24px]"></div>

            <div className="container mx-auto relative z-10 text-center">
                <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Academic Excellence</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-16">Our Methodology</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Concept Clarity", desc: "Focus on 'Why' before 'How'.", icon: <Lightbulb className="w-8 h-8" />, color: "text-yellow-500" },
                        { title: "NCERT Focus", desc: "Deep line-by-line analysis.", icon: <BookOpen className="w-8 h-8" />, color: "text-blue-500" },
                        { title: "Regular Testing", desc: "Pattern-proof assessment.", icon: <PenTool className="w-8 h-8" />, color: "text-emerald-500" },
                        { title: "Doubt Sessions", desc: "Zero backlog policy.", icon: <Brain className="w-8 h-8" />, color: "text-purple-500" }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all">
                            <div className={`mb-6 ${item.color} bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mx-auto`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
