import React from 'react';
import heroImg from '../../../assets/images/home/campus.jpg';
import detailImg from '../../../assets/images/student-life/gallery-page-7.jpg';
import { motion } from 'framer-motion';
import { ChevronRight, Baby, BookOpen, GraduationCap, School, UserCheck, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Section 1: Hero Section
export const EligibilityHero = () => {
    return (
        <div className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src={heroImg}
                    alt="Students Studying"
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
                        <span className="text-white">Eligibility Criteria</span>
                    </nav>
                    <h1 className="text-4xl md:text-6xl font-bold text-indigo-900 mb-6 leading-tight">
                        Eligibility <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Criteria</span>
                    </h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto font-medium">
                        Clear Guidelines for Every Academic Level to Ensure a Fair and Transparent Admission Process.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

// Section 2: Introduction (Why Eligibility Matters)
export const EligibilityIntro = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto max-w-4xl">
                <div className="relative bg-white shadow-xl shadow-slate-200/50 rounded-3xl p-10 md:p-12 text-center border border-slate-100/50 backdrop-blur-sm">
                    {/* Decorative Element */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-indigo-500 rounded-b-xl"></div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Why These Guidelines Exist?</h2>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                        At RK High School, we believe in a <span className="text-indigo-600 font-bold">fair and non-discriminatory</span> admission process.
                        Our meaningful eligibility criteria ensure that every student is placed in a grade that matches their age and academic readiness, setting them up for success.
                    </p>
                </div>
            </div>
        </div>
    );
};

// Section 3: Eligibility Overview (Card Wall)
export const EligibilityOverviewWall = () => {
    const levels = [
        { id: "pre-primary", title: "Pre-Primary", icon: <Baby className="w-8 h-8" />, desc: "Nursery, LKG, UKG" },
        { id: "primary", title: "Primary School", icon: <BookOpen className="w-8 h-8" />, desc: "Classes 1 to 5" },
        { id: "middle", title: "Middle School", icon: <School className="w-8 h-8" />, desc: "Classes 6 to 8" },
        { id: "secondary", title: "Secondary", icon: <UserCheck className="w-8 h-8" />, desc: "Classes 9 & 10" },
        { id: "senior", title: "Senior Secondary", icon: <GraduationCap className="w-8 h-8" />, desc: "Classes 11 & 12" },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return (
        <div className="w-full py-24 px-4 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Select Level</span>
                    <h2 className="text-4xl font-bold text-slate-900 mt-2">Check Your Eligibility</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {levels.map((level, idx) => (
                        <div
                            key={idx}
                            onClick={() => scrollToSection(level.id)}
                            className="group cursor-pointer bg-slate-50 hover:bg-white border border-slate-100 hover:border-indigo-100 p-6 rounded-2xl text-center transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 flex flex-col items-center justify-center min-h-[200px]"
                        >
                            <div className="w-16 h-16 bg-white border border-slate-100 rounded-full flex items-center justify-center mb-4 text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                {level.icon}
                            </div>
                            <h3 className="font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">{level.title}</h3>
                            <p className="text-slate-500 text-sm">{level.desc}</p>
                            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowRight className="w-5 h-5 text-indigo-600" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 4: Pre-Primary Eligibility
export const PrePrimaryEligibility = () => {
    return (
        <div id="pre-primary" className="w-full py-20 px-4 bg-pink-50/50 border-t border-slate-200">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-block px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                        Foundational Stage
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                        Minimum Age <span className="text-indigo-600">Criteria</span>
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-8">
                        For Nursery, LKG, and UKG, the primary criteria is age. We look for basic motor skills and social readiness.
                        There is no formal written test for these classes.
                    </p>
                    <ul className="space-y-4 inline-block text-left">
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center shrink-0 mt-0.5"><div className="w-2 h-2 bg-pink-500 rounded-full"></div></div>
                            <span className="text-slate-700 font-medium">Age appropriate as per government norms.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center shrink-0 mt-0.5"><div className="w-2 h-2 bg-pink-500 rounded-full"></div></div>
                            <span className="text-slate-700 font-medium">Toilet trained (Required for Nursery).</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center shrink-0 mt-0.5"><div className="w-2 h-2 bg-pink-500 rounded-full"></div></div>
                            <span className="text-slate-700 font-medium">Assessment via friendly interaction.</span>
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-pink-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-bl-full -mr-10 -mt-10"></div>
                        <h3 className="text-xl font-bold text-pink-700 mb-4 relative z-10">Documents</h3>
                        <div className="space-y-3 relative z-10">
                            <div className="p-3 bg-pink-50 rounded-xl text-sm font-medium text-pink-900">Birth Certificate (Mandatory)</div>
                            <div className="p-3 bg-pink-50 rounded-xl text-sm font-medium text-pink-900">Immunization Record</div>
                            <div className="p-3 bg-pink-50 rounded-xl text-sm font-medium text-pink-900">4 Passport size photos</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 5: Primary School Eligibility
export const PrimaryEligibility = () => {
    return (
        <div id="primary" className="w-full py-20 px-4 bg-blue-50/50 border-t border-slate-200">
            <div className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                        Classes 1-5
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Primary School Eligibility</h2>
                    <p className="text-slate-600 leading-relaxed mb-8">
                        Admission to Primary grades focuses on the child's ability to cope with the curriculum.
                        Previous school reports play a crucial role.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white p-5 rounded-2xl border border-blue-100 shadow-sm">
                            <h4 className="font-bold text-slate-900 mb-2">Academic</h4>
                            <p className="text-sm text-slate-500">Pass certificate of the previous class from a recognized school.</p>
                        </div>
                        <div className="bg-white p-5 rounded-2xl border border-blue-100 shadow-sm">
                            <h4 className="font-bold text-slate-900 mb-2">Readiness</h4>
                            <p className="text-sm text-slate-500">Basic literacy (English/Hindi) and numeracy skills check.</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <BookOpen className="w-48 h-48 text-blue-200" strokeWidth={1} />
                </div>
            </div>
        </div>
    );
};

// Section 6: Middle School Eligibility
export const MiddleEligibility = () => {
    return (
        <div id="middle" className="w-full py-20 px-4 bg-orange-50/50 border-t border-slate-200">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                        Classes 6-8
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Middle School Eligibility</h2>
                    <p className="text-slate-600 leading-relaxed mb-8">
                        Students moving to Middle School are expected to have a solid foundation in core subjects.
                        A formal Transfer Certificate (TC) is mandatory.
                    </p>
                    <div className="bg-white p-6 rounded-3xl border-l-4 border-l-orange-500 shadow-sm">
                        <h4 className="font-bold text-slate-900 text-lg mb-2">Key Requirement</h4>
                        <p className="text-slate-600">
                            Must have passed the previous class with at least <strong>50% aggregate marks</strong>.
                            Basic written proficiency test may be conducted for English and Mathematics.
                        </p>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="relative h-64 rounded-xl overflow-hidden shadow-lg rotate-2 hover:rotate-0 transition-transform duration-500">
                        <img
                            src={detailImg}
                            alt="Middle School Student"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
