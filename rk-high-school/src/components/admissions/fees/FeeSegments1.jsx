import React from 'react';
import heroImg from '../../../assets/images/home/campus.jpg';
import { motion } from 'framer-motion';
import { ChevronRight, Wallet, School, Baby, BookOpen, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

// Section 1: Hero Section
export const FeeHero = () => {
    return (
        <div className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src={heroImg}
                    alt="School Fees"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/30"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <nav className="flex justify-center items-center text-sm text-indigo-300 mb-6 font-medium tracking-wide">
                        <span>Home</span>
                        <ChevronRight className="w-4 h-4 mx-2 text-slate-500" />
                        <span>Admissions</span>
                        <ChevronRight className="w-4 h-4 mx-2 text-slate-500" />
                        <span className="text-white">Fee Structure</span>
                    </nav>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        Fee <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Structure</span>
                    </h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto font-medium mb-8">
                        Transparent, Affordable & Student-Friendly Fee Policy for 2024-25
                    </p>
                    <button className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold rounded-full transition-all flex items-center mx-auto">
                        Download Fee PDF <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

// Section 2: Introduction (Transparency Message)
export const FeeIntro = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto max-w-4xl">
                <div className="relative bg-white shadow-xl shadow-slate-200/50 rounded-3xl p-10 md:p-12 text-center border border-slate-100/50 backdrop-blur-sm">
                    {/* Decorative Element */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-emerald-500 rounded-b-xl"></div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Commitment to Transparency</h2>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                        At RK High School, we value <span className="text-indigo-600 font-bold">integrity</span>.
                        There are <span className="text-emerald-600 font-bold">NO hidden charges</span>. The fee structure outlined below is comprehensive and final for the academic session 2024-25.
                    </p>
                </div>
            </div>
        </div>
    );
};

// Section 3: Fee Overview (Card Wall)
export const FeeOverviewWall = () => {
    const levels = [
        { id: "fee-pre-primary", title: "Pre-Primary", icon: <Baby className="w-8 h-8" />, desc: "Nursery - UKG" },
        { id: "fee-primary", title: "Primary", icon: <BookOpen className="w-8 h-8" />, desc: "Classes 1 - 5" },
        { id: "fee-middle", title: "Middle", icon: <School className="w-8 h-8" />, desc: "Classes 6 - 8" },
        { id: "fee-secondary", title: "Secondary", icon: <Wallet className="w-8 h-8" />, desc: "Classes 9 & 10" },
        { id: "fee-senior", title: "Senior Secondary", icon: <GraduationCap className="w-8 h-8" />, desc: "Classes 11 & 12" },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return (
        <div className="w-full py-24 px-4 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Level-wise Breakdown</span>
                    <h2 className="text-4xl font-bold text-slate-900 mt-2">Explore Fee Details</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {levels.map((level, idx) => (
                        <div
                            key={idx}
                            onClick={() => scrollToSection(level.id)}
                            className="group cursor-pointer bg-slate-50 hover:bg-white border border-slate-100 hover:border-emerald-100 p-6 rounded-2xl text-center transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 flex flex-col items-center justify-center min-h-[200px]"
                        >
                            <div className="w-16 h-16 bg-white border border-slate-100 rounded-full flex items-center justify-center mb-4 text-emerald-600 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                {level.icon}
                            </div>
                            <h3 className="font-bold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">{level.title}</h3>
                            <p className="text-slate-500 text-sm">{level.desc}</p>
                            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowRight className="w-5 h-5 text-emerald-600" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 4: Pre-Primary Fee Structure
export const PrePrimaryFee = () => {
    return (
        <div id="fee-pre-primary" className="w-full py-20 px-4 bg-pink-50/50 border-t border-slate-200">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1">
                        <div className="inline-block px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                            Foundational
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Pre-Primary (Playgroup - UKG)</h2>
                        <p className="text-slate-600 mb-8">
                            A gentle start for the little ones. The fee includes all learning materials, snacks, and basic activity charges.
                        </p>
                        <ul className="space-y-3">
                            {['No Admission Fee for Playgroup', 'Quarterly Payment Options', 'Includes Festival Celebrations'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-pink-500" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-[1.5] w-full bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
                        <div className="grid grid-cols-2 gap-4 border-b border-slate-100 pb-4 mb-4 font-bold text-slate-900">
                            <div>Component</div>
                            <div className="text-right">Amount (INR)</div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between text-slate-600">
                                <span>Admission Fee (One Time)</span>
                                <span className="font-bold">₹ 15,000</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>Annual Charges</span>
                                <span className="font-bold">₹ 8,000</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>Tuition Fee (Quarterly)</span>
                                <span className="font-bold">₹ 9,500</span>
                            </div>
                            <div className="pt-4 border-t border-slate-100 flex justify-between text-lg font-bold text-pink-600">
                                <span>Total (At Admission)</span>
                                <span>₹ 32,500</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 5: Primary School Fee Structure
export const PrimaryFee = () => {
    return (
        <div id="fee-primary" className="w-full py-20 px-4 bg-blue-50/50 border-t border-slate-200">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
                    <div className="flex-1">
                        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                            Classes 1 - 5
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Primary School</h2>
                        <p className="text-slate-600 mb-8">
                            Focused on holistic development. Fees cover smart class modules, library access, and regular health checkups.
                        </p>
                        <ul className="space-y-3">
                            {['Book Set Cost Extra', 'Field Trips Included', 'Sports Coaching Included'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-[1.5] w-full bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
                        <div className="grid grid-cols-2 gap-4 border-b border-slate-100 pb-4 mb-4 font-bold text-slate-900">
                            <div>Component</div>
                            <div className="text-right">Amount (INR)</div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between text-slate-600">
                                <span>Admission Fee (One Time)</span>
                                <span className="font-bold">₹ 20,000</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>Annual Charges</span>
                                <span className="font-bold">₹ 10,000</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>Tuition Fee (Quarterly)</span>
                                <span className="font-bold">₹ 12,500</span>
                            </div>
                            <div className="pt-4 border-t border-slate-100 flex justify-between text-lg font-bold text-blue-600">
                                <span>Total (At Admission)</span>
                                <span>₹ 42,500</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 6: Middle School Fee Structure (Simplified)
export const MiddleFee = () => {
    return (
        <div id="fee-middle" className="w-full py-20 px-4 bg-orange-50/50 border-t border-slate-200">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1">
                        <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                            Classes 6 - 8
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Middle School</h2>
                        <p className="text-slate-600 mb-8">
                            Geared towards subject specialization. Includes lab access, computer training, and advanced sports facilities.
                        </p>
                    </div>
                    <div className="flex-[1.5] w-full bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
                        <div className="flex justify-between items-end border-b border-slate-100 pb-4 mb-4">
                            <span className="font-bold text-slate-900 text-lg">Detailed Breakdown</span>
                            <span className="text-sm text-slate-500">Quarterly Mode</span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between text-slate-600">
                                <span>Admission Fee</span>
                                <span className="font-bold">₹ 25,000</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>Annual Charges</span>
                                <span className="font-bold">₹ 12,000</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>Tuition Fee (Qtr)</span>
                                <span className="font-bold">₹ 15,000</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>Lab/Comp Fee (Qtr)</span>
                                <span className="font-bold">₹ 1,500</span>
                            </div>
                            <div className="pt-4 border-t border-slate-100 flex justify-between text-lg font-bold text-orange-600">
                                <span>Total (At Admission)</span>
                                <span>₹ 53,500</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
