import React from 'react';
import heroImg from '../../../assets/images/student-life/gallery-page-7.jpg';
import featureImg from '../../../assets/images/student-life/gallery-page-5.jpg';
import { motion } from 'framer-motion';
import { ChevronRight, BookOpen, Brain, Users, Lightbulb, Globe, ArrowRight, Microscope, Calculator, PenTool, Layout, Monitor } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Section 1: Hero Section (Transition & Growth)
export const MiddleHero = () => {
    const navigate = useNavigate();

    return (
        <div className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src={heroImg}
                    alt="Middle School Students"
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-4 mb-4 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 font-bold text-sm tracking-wide uppercase backdrop-blur-md">
                        Classes 6 to 8
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Igniting Curiosity, <br /> Fostering <span className="text-emerald-400">Innovation</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
                        The bridge between foundation and specialization. We empower students to question, explore, and think critically.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => navigate('/admissions/form')}
                            className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full transition-all flex items-center shadow-lg hover:shadow-emerald-500/50"
                        >
                            Admission Enquiry <ChevronRight className="w-5 h-5 ml-2" />
                        </button>
                        <button
                            onClick={() => navigate('/contact')}
                            className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-full transition-all border border-white/30"
                        >
                            Curriculum Overview
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// Section 2: Introduction (Bridge Years)
export const MiddleIntro = () => {
    return (
        <div className="w-full py-20 px-4 bg-background">
            <div className="container mx-auto max-w-4xl">
                <div className="relative bg-white shadow-xl rounded-3xl p-10 md:p-14 text-center border border-slate-100">
                    {/* Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                        From Learning to Thinking
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Middle school is a transformative phase where students shift from guided learning to
                        <span className="font-semibold text-emerald-600"> independent inquiry</span>.
                        At RK High School, we focus on subject specialization, analytical skills, and emotional maturity,
                        preparing them for the academic rigor of high school.
                    </p>
                </div>
            </div>
        </div>
    );
};

// Section 3: Classes Offered (3 distinct cards)
export const MiddleClasses = () => {
    const classes = [
        { title: "Class 6", desc: "Transition from primary. Introduction to specialized subjects and organized study habits." },
        { title: "Class 7", desc: "Deepening concepts. Focus on logical reasoning, algebra, and scientific experimentation." },
        { title: "Class 8", desc: "Foundations for high school. Advanced problem solving and career awareness initiation." },
    ];

    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Academic Progression</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">The Middle School Years</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {classes.map((cls, idx) => (
                        <div key={idx} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                            <div className="h-2 w-12 bg-emerald-500 rounded-full mb-4"></div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">{cls.title}</h3>
                            <p className="text-base text-slate-600 leading-relaxed mb-6">{cls.desc}</p>
                            <span className="text-sm font-bold text-emerald-500 uppercase flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                View Syllabus <ArrowRight className="w-4 h-4" />
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 4: Our Teaching Approach
export const TeachingApproach = () => {
    const approaches = [
        { icon: <Microscope className="w-8 h-8 text-emerald-500" />, title: "Inquiry-Based", desc: "Encouraging students to ask 'Why' and 'How'." },
        { icon: <Layout className="w-8 h-8 text-blue-500" />, title: "Project Work", desc: "Hands-on projects to apply theoretical knowledge." },
        { icon: <Globe className="w-8 h-8 text-purple-500" />, title: "Global Context", desc: "Connecting local lessons to real-world issues." },
        { icon: <Monitor className="w-8 h-8 text-orange-500" />, title: "Tech-Integrated", desc: "Using digital tools for research and presentation." },
    ];

    return (
        <div className="w-full py-20 px-4 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Pedagogy of Discovery</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            We move beyond textbooks. Our methodology encourages students to explore, experiment, and express.
                            We believe in <span className="font-bold text-emerald-600">learning by doing</span>, fostering a spirit of innovation.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {approaches.map((item, idx) => (
                                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
                                    <div className="shrink-0">{item.icon}</div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                                        <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-emerald-600 rounded-3xl transform -rotate-3 opacity-10"></div>
                        <img
                            src={featureImg}
                            alt="Science Lab"
                            className="rounded-3xl shadow-xl w-full relative z-10"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 5: Core Subjects (Card Grid)
export const CoreSubjects = () => {
    const subjects = [
        { name: "Mathematics", icon: <Calculator />, color: "bg-blue-50 text-blue-600" },
        { name: "Science", icon: <Microscope />, color: "bg-emerald-50 text-emerald-600" },
        { name: "Social Science", icon: <Globe />, color: "bg-orange-50 text-orange-600" },
        { name: "English", icon: <BookOpen />, color: "bg-indigo-50 text-indigo-600" },
        { name: "Hindi / Saskrit", icon: <PenTool />, color: "bg-red-50 text-red-600" },
        { name: "Info Tech (IT)", icon: <Monitor />, color: "bg-purple-50 text-purple-600" },
    ];

    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Middle School Curriculum</h2>
                    <p className="text-slate-600 mt-2">Specialized subjects for in-depth understanding.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {subjects.map((sub, idx) => (
                        <div key={idx} className={`p-6 rounded-2xl ${sub.color} bg-opacity-50 text-center transition-transform hover:-translate-y-2 cursor-default`}>
                            <div className="mb-4 flex justify-center text-3xl">{sub.icon}</div>
                            <h3 className="font-bold text-sm lg:text-base">{sub.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 6: Skill Development
export const SkillDevelopment = () => {
    return (
        <div className="w-full py-20 px-4 bg-emerald-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,#ffffff_2px,transparent_2px)] bg-[length:32px_32px]"></div>

            <div className="container mx-auto relative z-10 text-center">
                <h2 className="text-3xl font-bold mb-12">Developing Future Leaders</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Critical Thinking", desc: "Analyzing problems from multiple angles." },
                        { title: "Scientific Temper", desc: "Questioning based on evidence and logic." },
                        { title: "Digital Literacy", desc: "Responsible and effective use of technology." },
                        { title: "Collaboration", desc: "Building teamwork through group projects." }
                    ].map((skill, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                            <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                            <p className="text-emerald-200 text-sm">{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
