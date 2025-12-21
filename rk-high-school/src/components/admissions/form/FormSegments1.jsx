import React, { useState } from 'react';
import heroImg from '../../../assets/images/home/campus.jpg';
import { motion } from 'framer-motion';
import { ChevronRight, User, Calendar, BookOpen, GraduationCap, School, Baby } from 'lucide-react';

// Shared Input Component for consistency
const FormInput = ({ label, type = "text", placeholder, value, onChange }) => (
    <div className="mb-4">
        <label className="block text-sm font-semibold text-slate-700 mb-2">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            value={value || ""}
            onChange={onChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder:text-slate-400 font-medium"
        />
    </div>
);

const FormSelect = ({ label, options, value, onChange }) => (
    <div className="mb-4">
        <label className="block text-sm font-semibold text-slate-700 mb-2">{label}</label>
        <select
            value={value || ""}
            onChange={onChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all font-medium bg-white text-slate-700"
        >
            {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
        </select>
    </div>
);

// Section 1: Hero Section
export const FormHero = () => {
    return (
        <div className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src={heroImg}
                    alt="Application Form"
                    className="w-full h-full object-cover opacity-20"
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
                        <span className="text-white">Apply Online</span>
                    </nav>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        Online Admission <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Form</span>
                    </h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto font-medium mb-8">
                        Begin your journey with RK High School in just a few simple steps.
                    </p>

                    {/* Progress Indicator */}
                    <div className="flex items-center justify-center gap-4 text-sm font-bold text-slate-400 uppercase tracking-widest">
                        <span className="text-emerald-400">Step 1: Details</span>
                        <div className="w-12 h-1 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 w-1/3"></div>
                        </div>
                        <span>Step 3: Submit</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// Section 2: Form Intro
export const FormIntro = () => {
    return (
        <div className="w-full py-12 px-4 bg-slate-50 -mt-10 relative z-20">
            <div className="container mx-auto">
                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Before You Begin</h2>
                    <p className="text-slate-600 mb-0">
                        Please ensure you have valid details and digital copies of documents.
                        No payment is required to submit this initial interest form.
                    </p>
                </div>
            </div>
        </div>
    );
};

// Section 3: Academic Level Selection
export const LevelSelection = ({ value, onChange }) => {
    const levels = [
        { id: "pre", title: "Pre-Primary", icon: <Baby className="w-6 h-6" /> },
        { id: "pri", title: "Primary", icon: <BookOpen className="w-6 h-6" /> },
        { id: "mid", title: "Middle", icon: <School className="w-6 h-6" /> },
        { id: "sec", title: "Secondary", icon: <User className="w-6 h-6" /> },
        { id: "sen", title: "Senior", icon: <GraduationCap className="w-6 h-6" /> },
    ];

    return (
        <div className="w-full py-12 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <h3 className="text-xl font-bold text-slate-900 mb-6 px-2">Select Applying For</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {levels.map((level) => (
                        <div
                            key={level.id}
                            onClick={() => onChange(level.id)}
                            className={`cursor-pointer rounded-2xl p-4 flex flex-col items-center justify-center text-center border-2 transition-all ${value === level.id
                                ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                                : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-indigo-200'
                                }`}
                        >
                            <div className={`mb-3 ${value === level.id ? 'text-indigo-600' : 'text-slate-400'}`}>{level.icon}</div>
                            <span className="font-bold text-sm">{level.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 4: Student Basic Details
export const StudentBasicDetails = ({ data, onChange }) => {
    return (
        <div className="w-full py-4 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -mr-16 -mt-16 pointer-events-none"></div>
                    <h3 className="text-xl font-bold text-slate-900 mb-6 relative z-10 flex items-center gap-2">
                        <User className="text-indigo-500 w-5 h-5" /> Student Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                        <FormInput
                            label="First Name"
                            placeholder="Student's First Name"
                            value={data?.firstName}
                            onChange={(e) => onChange("firstName", e.target.value)}
                        />
                        <FormInput
                            label="Last Name"
                            placeholder="Student's Last Name"
                            value={data?.lastName}
                            onChange={(e) => onChange("lastName", e.target.value)}
                        />

                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Date of Birth</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 outline-none text-slate-700 bg-white"
                                    value={data?.dob || ""}
                                    onChange={(e) => onChange("dob", e.target.value)}
                                />
                                <Calendar className="absolute right-4 top-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
                            </div>
                        </div>

                        <FormSelect
                            label="Gender"
                            options={["Select Gender", "Male", "Female", "Other"]}
                            value={data?.gender}
                            onChange={(e) => onChange("gender", e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 5: Applying for Class
export const ClassSelection = ({ data, onChange }) => {
    return (
        <div className="w-full py-4 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Admission Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormSelect
                            label="Grade Applying For"
                            options={["Select Class", "Nursery", "LKG", "UKG", "Class 1", "Class 2", "Class 11"]}
                            value={data?.grade}
                            onChange={(e) => onChange("grade", e.target.value)}
                        />
                        <FormSelect
                            label="Academic Session"
                            options={["2024-2025", "2025-2026"]}
                            value={data?.session}
                            onChange={(e) => onChange("session", e.target.value)}
                        />

                        {/* Conditional Render for Class 11 could go here */}
                        <div className="md:col-span-2 p-4 bg-indigo-50 rounded-xl border border-indigo-100 hidden">
                            <FormSelect
                                label="Stream Preference (For Class 11)"
                                options={["Select Stream", "Science (PCM)", "Science (PCB)", "Commerce", "Arts"]}
                                value={data?.stream}
                                onChange={(e) => onChange("stream", e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 6: Previous School Details
export const PreviousSchool = ({ data, onChange }) => {
    return (
        <div className="w-full py-4 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <School className="text-indigo-500 w-5 h-5" /> Previous Education
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <FormInput
                                label="Last School Attended"
                                placeholder="Full Name of Previous School"
                                value={data?.schoolName}
                                onChange={(e) => onChange("schoolName", e.target.value)}
                            />
                        </div>
                        <FormSelect
                            label="Board"
                            options={["Select Board", "CBSE", "ICSE", "State Board", "Other"]}
                            value={data?.board}
                            onChange={(e) => onChange("board", e.target.value)}
                        />
                        <FormInput
                            label="City / Location"
                            placeholder="School City"
                            value={data?.city}
                            onChange={(e) => onChange("city", e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
