import React from 'react';
import heroImg from '../../../assets/images/student-life/gallery-page-1.jpg';
import introImg from '../../../assets/images/student-life/gallery-page-7.jpg';
import { motion } from 'framer-motion';
import { ChevronRight, BookOpen, Brain, Users, Lightbulb, Globe, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PWStyleCard from '../../PWStyleCard';

// Section 1: Hero Section (Academic & Confident)
export const PrimaryHero = () => {
    const navigate = useNavigate();

    return (
        <div className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src={heroImg}
                    alt="Primary Students Learning"
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
                    <span className="inline-block py-1 px-4 mb-4 rounded-full bg-indigo-500/20 text-indigo-200 border border-indigo-500/30 font-bold text-sm tracking-wide uppercase backdrop-blur-md">
                        Classes 1 to 5
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Building Strong Foundations <br /> for <span className="text-indigo-400">Lifelong Learning</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
                        A structured yet joyful environment where curiosity meets discipline, preparing students for the challenges of tomorrow.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => navigate('/admissions/form')}
                            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-all flex items-center shadow-lg hover:shadow-indigo-500/50"
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

// Section 2: Introduction (Who We Are)
export const PrimaryIntro = () => {
    return (
        <div className="w-full py-20 px-4 bg-background">
            <div className="container mx-auto max-w-4xl">
                <div className="relative bg-white shadow-xl rounded-3xl p-10 md:p-14 text-center border border-slate-100">
                    {/* Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                        Bridging Play and Academics
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        At RK High School Primary Wing, we transition students from the playful world of kindergarten to a more
                        <span className="font-semibold text-indigo-600"> structured academic setting</span>.
                        We focus on concept clarity, positive discipline, and instilling a love for subjects like Mathematics, Science, and Languages.
                    </p>
                </div>
            </div>
        </div>
    );
};

// Section 3: Classes Offered (5 distinct cards)
export const PrimaryClasses = () => {
    const classes = [
        { title: "Class 1", desc: "Introduction to formal schooling, reading fluency, and basic math." },
        { title: "Class 2", desc: "Developing logical thinking and environmental awareness." },
        { title: "Class 3", desc: "Introduction to Science and deeper language comprehension." },
        { title: "Class 4", desc: "Advanced arithmetic and project-based social studies." },
        { title: "Class 5", desc: "Prep for middle school with focus on independent learning." },
    ];

    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Academic Progression</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">The Primary Years</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {classes.map((cls, idx) => (
                        <div key={idx} className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                            <div className="h-2 w-12 bg-indigo-500 rounded-full mb-4"></div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">{cls.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed mb-4">{cls.desc}</p>
                            <span className="text-xs font-bold text-indigo-500 uppercase flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                View Syllabus <ArrowRight className="w-3 h-3" />
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
        { icon: <Lightbulb className="w-8 h-8 text-yellow-500" />, title: "Concept-Based", desc: "Moving beyond rote memorization to true understanding." },
        { icon: <Brain className="w-8 h-8 text-indigo-500" />, title: "Interactive", desc: "Engaging students with QA sessions and digital tools." },
        { icon: <BookOpen className="w-8 h-8 text-pink-500" />, title: "Activity-Driven", desc: "Projects and experiments to valid theories." },
        { icon: <Users className="w-8 h-8 text-green-500" />, title: "Peer Learning", desc: "Group activities to build teamwork and communication." },
    ];

    return (
        <div className="w-full py-20 px-4 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">How We Teach</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            We understand that primary students are still developing their cognitive abilities. Our teaching methodology is designed to be
                            <span className="font-bold text-indigo-600"> engaging, not exhausting</span>.
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
                        <div className="absolute inset-0 bg-indigo-600 rounded-3xl transform rotate-3 opacity-10"></div>
                        <img
                            src={introImg}
                            alt="Interactive Classroom"
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
        { name: "English", icon: "📖", color: "bg-blue-50 text-blue-600" },
        { name: "Mathematics", icon: "📐", color: "bg-indigo-50 text-indigo-600" },
        { name: "Science", icon: "🧬", color: "bg-green-50 text-green-600" },
        { name: "Social Studies", icon: "🌍", color: "bg-orange-50 text-orange-600" },
        { name: "Hindi / Regional", icon: "🗣️", color: "bg-red-50 text-red-600" },
        { name: "Computer Sci", icon: "💻", color: "bg-purple-50 text-purple-600" },
    ];

    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Academic Curriculum</h2>
                    <p className="text-slate-600 mt-2">A balanced mix of core subjects and life skills.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {subjects.map((sub, idx) => (
                        <div key={idx} className={`p-6 rounded-2xl ${sub.color} bg-opacity-50 text-center transition-transform hover:-translate-y-2 cursor-default`}>
                            <div className="text-4xl mb-3">{sub.icon}</div>
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
        <div className="w-full py-20 px-4 bg-indigo-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,#ffffff_2px,transparent_2px)] bg-[length:32px_32px]"></div>

            <div className="container mx-auto relative z-10 text-center">
                <h2 className="text-3xl font-bold mb-12">Beyond The Books</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Reading & Writing", desc: "Enhanced literacy programs." },
                        { title: "Logical Thinking", desc: "Puzzles and problem-solving." },
                        { title: "Effective Communication", desc: "Debates and presentations." },
                        { title: "Creative Expression", desc: "Story writing and arts." }
                    ].map((skill, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                            <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                            <p className="text-indigo-200 text-sm">{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
