import React from 'react';
import heroImg from '../../../assets/images/home/campus.jpg';
import stepImg from '../../../assets/images/student-life/gallery-page-5.jpg';
import { motion } from 'framer-motion';
import { ChevronRight, FileCheck, Users, CalendarCheck, CheckCircle2, Phone, ClipboardList, PenTool, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PWStyleCard from '../../PWStyleCard';

// Section 1: Hero Section (Confidence Opener)
export const AdmissionHero = () => {
    return (
        <div className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src={heroImg}
                    alt="Admission Open"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/30"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1.5 px-5 mb-6 rounded-full bg-indigo-600/20 text-indigo-200 border border-indigo-500/30 font-bold text-sm tracking-wide uppercase backdrop-blur-md">
                        Admissions Open 2024-25
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Admission Process <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
                            Simple • Transparent • Student-Centric
                        </span>
                    </h1>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
                        <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full transition-all flex items-center shadow-lg hover:shadow-emerald-500/50 text-lg">
                            Apply Now <ChevronRight className="w-5 h-5 ml-2" />
                        </button>
                        <button className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-bold rounded-full transition-all border border-white/20 text-lg">
                            Download Prospectus
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// Section 2: Admission Overview
export const AdmissionOverview = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto max-w-4xl">
                <div className="relative bg-white shadow-xl shadow-slate-200/50 rounded-3xl p-10 md:p-12 text-center border border-slate-100/50 backdrop-blur-sm">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Journey Starts Here</h2>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                        We have designed our admission process to be as <span className="text-indigo-600 font-bold">seamless and stress-free</span> as possible.
                        With clear criteria and a parent-friendly approach, we ensure you have all the information you need to make the best decision for your child's future.
                    </p>
                </div>
            </div>
        </div>
    );
};

// Section 3: Admission Steps (Card Wall - Main)
export const AdmissionStepsWall = () => {
    const steps = [
        { id: 1, title: "Enquiry", icon: <Phone className="w-6 h-6" />, desc: "Visit campus or inquire online." },
        { id: 2, title: "Registration", icon: <ClipboardList className="w-6 h-6" />, desc: "Purchase form & register." },
        { id: 3, title: "Form Submission", icon: <PenTool className="w-6 h-6" />, desc: "Submit details & documents." },
        { id: 4, title: "Interaction", icon: <Users className="w-6 h-6" />, desc: "Friendly student assessment." },
        { id: 5, title: "Confirmation", icon: <CheckCircle2 className="w-6 h-6" />, desc: "Selection & Fee payment." },
        { id: 6, title: "Admission", icon: <FileCheck className="w-6 h-6" />, desc: "Welcome to the family." }
    ];

    const scrollToStep = (id) => {
        const element = document.getElementById(`step-${id}`);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return (
        <div className="w-full py-24 px-4 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900">6 Simple Steps</h2>
                    <p className="text-slate-500 mt-2">A structured path to excellence</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            onClick={() => scrollToStep(step.id)}
                            className="group cursor-pointer bg-slate-50 hover:bg-white border border-slate-100 hover:border-indigo-100 p-8 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
                        >
                            {/* Number Watermark */}
                            <div className="absolute -top-4 -right-4 text-9xl font-bold text-slate-100 group-hover:text-indigo-50 transition-colors z-0">
                                {step.id}
                            </div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 shadow-sm group-hover:scale-110 transition-transform">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                    Step {step.id}: {step.title}
                                </h3>
                                <p className="text-slate-500 text-sm font-medium">{step.desc}</p>
                                <div className="mt-6 flex items-center text-indigo-600 font-bold text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                    View Details <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 4: Step 1 - Enquiry
export const StepEnquiry = () => {
    return (
        <div id="step-1" className="w-full py-20 px-4 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                    <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                        Step 1
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Make an Enquiry</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        The first step is to get to know us. You can submit an enquiry online through our website or visit the school admission office between 9:00 AM to 3:00 PM (Monday to Saturday).
                    </p>
                    <div className="flex gap-4">
                        <div className="flex-1 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                            <h4 className="font-bold text-slate-900 mb-1">Online</h4>
                            <p className="text-sm text-slate-500">Fill the form below</p>
                        </div>
                        <div className="flex-1 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                            <h4 className="font-bold text-slate-900 mb-1">Walk-in</h4>
                            <p className="text-sm text-slate-500">Meet our counselors</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 w-full relative">
                    <div className="absolute inset-0 bg-indigo-600 rounded-3xl transform rotate-3 opacity-10"></div>
                    <img
                        src={stepImg}
                        alt="Parent Enquiry"
                        className="relative rounded-3xl shadow-xl border-4 border-white"
                    />
                </div>
            </div>
        </div>
    );
};

// Section 5: Step 2 - Registration
export const StepRegistration = () => {
    return (
        <div id="step-2" className="w-full py-20 px-4 bg-white border-t border-slate-100">
            <div className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="flex-1">
                    <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                        Step 2
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Registration</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Register your child by purchasing the Prospectus and Application Form from the school office/website.
                        This ensures your intent to seek admission tailored for the specific academic year.
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Fill basic details of the student.",
                            "Select the desired class and stream (if applicable).",
                            "Pay the one-time registration fee."
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                <span className="text-slate-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 w-full">
                    <PWStyleCard
                        title="Registration Checklist"
                        desc="Ensure you have valid child's details ready before registering."
                        className="bg-emerald-50/50 border-emerald-100"
                    />
                </div>
            </div>
        </div>
    );
};

// Section 6: Step 3 - Application Form
export const StepApplicationForm = () => {
    return (
        <div id="step-3" className="w-full py-20 px-4 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto text-center max-w-4xl">
                <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                    Step 3
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Form Submission</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                        <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                            <ClipboardList className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Offline Submission</h3>
                        <p className="text-sm text-slate-500">
                            Fill the physical form neatly and submit it at the school reception along with hard copies of documents.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                            <PenTool className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Online Submission</h3>
                        <p className="text-sm text-slate-500">
                            Scan and upload documents directly via our admission portal. Quick and eco-friendly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
