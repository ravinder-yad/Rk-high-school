import React from 'react';
import heroImg from '../../../assets/images/home/classroom.jpg';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Heart, Sun, BookOpen, Palette, Music, Users, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PWStyleCard from '../../PWStyleCard';

// Section 1: Hero Section (Warm & Emotional)
export const PrePrimaryHero = () => {
    const navigate = useNavigate();

    return (
        <div className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src={heroImg}
                    alt="Happy Kids Learning"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-4 mb-4 rounded-full bg-yellow-300 text-slate-900 font-bold text-sm tracking-wide uppercase">
                        Start Their Journey Right
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Where Learning Begins <br /> with <span className="text-green-400">Joy & Wonder</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-medium">
                        A safe, nurturing, and creatively stimulating environment designed for young minds to explore, play, and grow.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => navigate('/admissions/form')}
                            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-all flex items-center shadow-lg hover:shadow-indigo-500/50"
                        >
                            Enquire Now <ChevronRight className="w-5 h-5 ml-2" />
                        </button>
                        <button
                            onClick={() => navigate('/contact')}
                            className="px-8 py-3 bg-white hover:bg-gray-100 text-slate-900 font-bold rounded-full transition-all shadow-lg"
                        >
                            Visit Our Campus
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Wave Bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg fill="#F8FAFC" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
                </svg>
            </div>
        </div>
    );
};

// Section 2: Introduction (Glass Card)
export const PrePrimaryIntro = () => {
    return (
        <div className="w-full py-16 px-4 bg-background">
            <div className="container mx-auto max-w-4xl relative">
                {/* Decorative Elements */}
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-50 blur-xl"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-200 rounded-full opacity-50 blur-xl"></div>

                <div className="relative bg-white/70 backdrop-blur-lg border border-white/50 shadow-xl rounded-3xl p-8 md:p-12 text-center">
                    <Heart className="w-10 h-10 text-red-500 mx-auto mb-4 fill-current" />
                    <h2 className="text-3xl font-bold text-slate-800 mb-6">
                        A Second Home for Your Little One
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        At RK High School Pre-Primary, we believe that education is not just about books—it's about curiosity. We have crafted a
                        <span className="font-semibold text-indigo-600"> play-based curriculum </span>
                        that balances structured learning with imaginative exploration. Our caring teachers ensure every child feels loved, safe, and ready to take on the world.
                    </p>
                </div>
            </div>
        </div>
    );
};

// Section 3: Age Group & Classes (PW-Style Cards)
export const PrePrimaryClasses = () => {
    const classes = [
        {
            title: "Play Group",
            age: "2 – 3 Years",
            desc: "A joyful first step into the world of learning involving sensory play and social interaction.",
            link: "/academics/pre-primary#playgroup"
        },
        {
            title: "Nursery",
            age: "3 – 4 Years",
            desc: "Building foundational skills through storytelling, art, and basic numeracy concepts.",
            link: "/academics/pre-primary#nursery"
        },
        {
            title: "LKG & UKG",
            age: "4 – 6 Years",
            desc: "Preparing for formal schooling with enhanced reading, writing, and logical thinking.",
            link: "/academics/pre-primary#kindergarten"
        }
    ];

    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <span className="text-green-600 font-bold tracking-wider uppercase text-sm">Our Programs</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Classes We Offer</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2 md:px-8">
                    {classes.map((cls, idx) => (
                        <div key={idx} className="relative group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300">
                            {/* Pattern BG */}
                            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]"></div>

                            <div className="relative z-10 text-center">
                                <div className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold mb-4">
                                    {cls.age}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">{cls.title}</h3>
                                <p className="text-slate-600 mb-6">{cls.desc}</p>
                                <button className="text-indigo-600 font-bold flex items-center justify-center mx-auto group-hover:gap-2 transition-all">
                                    View Details <ChevronRight className="w-4 h-4 ml-1" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 4: Our Learning Approach (Icon Cards)
export const LearningApproach = () => {
    const approaches = [
        { icon: <Sun className="w-8 h-8 text-amber-500" />, title: "Play-Based", desc: "Learning through guided play and joyful discovery." },
        { icon: <Palette className="w-8 h-8 text-purple-500" />, title: "Creative Arts", desc: "Expression through color, craft, music, and dance." },
        { icon: <BookOpen className="w-8 h-8 text-blue-500" />, title: "Storytelling", desc: "Developing language skills through magical stories." },
        { icon: <Users className="w-8 h-8 text-green-500" />, title: "Social Skills", desc: "Learning to share, care, and interact with peers." },
    ];

    return (
        <div className="w-full py-20 px-4 bg-slate-50 relative overflow-hidden">
            {/* Background Blob */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Learning Approach</h2>
                    <p className="text-slate-600 mt-4 max-w-2xl mx-auto">We don't force learning; we make it irresistible. Our methodology is designed to spark curiosity.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {approaches.map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all text-center border border-slate-100">
                            <div className="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 5: What Children Learn (Fun Cards)
export const WhatChildrenLearn = () => {
    const topics = [
        { title: "Language & Phonics", desc: "Reading, speaking, and listening skills.", bg: "bg-orange-50", border: "border-orange-100", text: "text-orange-600" },
        { title: "Numbers & Logic", desc: "Basic counting, shapes, and patterns.", bg: "bg-blue-50", border: "border-blue-100", text: "text-blue-600" },
        { title: "World Awareness", desc: "Nature, seasons, animals, and surroundings.", bg: "bg-green-50", border: "border-green-100", text: "text-green-600" },
        { title: "Emotional Growth", desc: "Confidence, kindness, and self-expression.", bg: "bg-red-50", border: "border-red-100", text: "text-red-600" },
    ];

    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-3xl font-bold text-slate-900">What They Learn</h2>
                        <p className="text-slate-600 mt-2">A holistic curriculum for complete development.</p>
                    </div>
                    <button className="px-6 py-2 border-2 border-slate-200 rounded-full font-semibold text-slate-600 hover:border-indigo-500 hover:text-indigo-600 transition-colors">
                        View Syllabus
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {topics.map((topic, idx) => (
                        <div key={idx} className={`p-6 rounded-2xl border ${topic.bg} ${topic.border} transition-transform hover:-translate-y-1`}>
                            <h3 className={`text-lg font-bold mb-2 ${topic.text}`}>{topic.title}</h3>
                            <p className="text-slate-600 text-sm">{topic.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
