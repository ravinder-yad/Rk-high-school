import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, UserCheck, ClipboardCheck, CheckCircle, Monitor, Microscope, Dumbbell, Book as LibraryIcon, ArrowRight } from 'lucide-react';

const AdmissionAndFacilities = () => {
    const navigate = useNavigate();

    const steps = [
        { num: "01", title: "Enquiry", icon: <FileText className="w-6 h-6" /> },
        { num: "02", title: "Form Fill", icon: <ClipboardCheck className="w-6 h-6" /> },
        { num: "03", title: "Interaction", icon: <UserCheck className="w-6 h-6" /> },
        { num: "04", title: "Admission", icon: <CheckCircle className="w-6 h-6" /> },
    ];

    const facilities = [
        { title: "Smart Library", icon: <LibraryIcon className="w-10 h-10 text-emerald-600" />, desc: "Over 10,000+ books with digital access." },
        { title: "Computer Lab", icon: <Monitor className="w-10 h-10 text-blue-600" />, desc: "Latest configuration systems for coding." },
        { title: "Science Lab", icon: <Microscope className="w-10 h-10 text-purple-600" />, desc: "Modern Physics, Chemistry & Bio labs." },
        { title: "Sports Complex", icon: <Dumbbell className="w-10 h-10 text-orange-600" />, desc: "Indoor & Outdoor games facilities." },
    ];

    return (
        <div className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Split Background Effect */}
            <div className="absolute top-0 left-0 w-full h-[60%] bg-slate-900 skew-y-3 transform origin-top-left z-0"></div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Section 1: Admission Process */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold tracking-wider uppercase text-xs mb-3 block">Join Our Family</span>
                        <h2 className="text-4xl font-black text-white mb-4 font-display">Simple Admission Process</h2>
                        <p className="text-slate-300 max-w-2xl mx-auto text-lg font-light">
                            We have streamlined our admission process to make it as smooth and transparent as possible for parents and students.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative px-4">
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-0.5 bg-slate-700 -z-10"></div>

                        {steps.map((step, index) => (
                            <div key={index} className="relative group text-center">
                                {/* Step Circle */}
                                <div className="w-20 h-20 mx-auto bg-slate-800 border-4 border-slate-700 text-slate-400 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 shadow-xl z-20 relative">
                                    {step.icon}
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                    <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-1 block">Step {step.num}</span>
                                    <h4 className="text-xl font-bold text-white tracking-wide">{step.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button
                            onClick={() => navigate('/admissions/process')}
                            className="px-8 py-4 bg-secondary text-primary-dark font-bold rounded-full shadow-lg shadow-secondary/20 hover:shadow-xl hover:bg-white transition-all transform hover:-translate-y-1"
                        >
                            View Detailed Process
                        </button>
                    </div>
                </div>

                {/* Section 2: Facilities */}
                <div className="pt-12">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-xl">
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">World Class Infrastructure</span>
                            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 font-display leading-tight">
                                Facilities that Inspire <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Learning & Growth</span>
                            </h2>
                        </div>
                        <button
                            onClick={() => navigate('/facilities')}
                            className="px-6 py-3 border-2 border-slate-200 rounded-full font-bold text-slate-600 hover:border-primary hover:text-primary transition-colors flex items-center group mb-2"
                        >
                            View All Facilities
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {facilities.map((fac, index) => (
                            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-slate-100 hover:border-transparent">
                                <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {fac.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">{fac.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm font-medium">{fac.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdmissionAndFacilities;
