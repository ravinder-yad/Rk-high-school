import React from 'react';
import { ShieldCheck, MessageCircle, ArrowRight, Phone, Laptop } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PWStyleCard from '../../PWStyleCard';

// Section 12: Safety & Well-being
export const SafetyWellbeing = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto flex flex-col items-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-12">A Secure Environment</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {[
                        { title: "Cyber Safety", desc: "Monitored internet usage" },
                        { title: "Counseling", desc: "Expert physiological support" },
                        { title: "Emergency Drill", desc: "Regular fire & safety drills" },
                        { title: "Health Checkups", desc: "Annual medical screening" }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-slate-50 p-6 rounded-2xl flex items-center gap-4">
                            <div className="bg-emerald-100 p-3 rounded-full">
                                <ShieldCheck className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                                <p className="text-xs text-slate-500">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 13: Parent Involvement
export const ParentInvolvement = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-900 text-white">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Partnering in Adolescence</h2>
                    <p className="text-slate-400">Navigating the middle years requires strong home-school partnership.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex items-start gap-4 hover:bg-white/10 transition-colors">
                        <Laptop className="w-10 h-10 text-emerald-400 shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">Online Portal</h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                Real-time access to assignment grids, syllabus, and test scores via our parent portal.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex items-start gap-4 hover:bg-white/10 transition-colors">
                        <MessageCircle className="w-10 h-10 text-blue-400 shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">Workshops</h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                Exclusive webinars for parents on handling teenager behavioral changes and study pressure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 14: Why Middle School at RK?
export const WhyMiddle = () => {
    const reasons = [
        "Focus on STEM education and robotics.",
        "Individual attention during crucial transition years.",
        "Developing strong communication and debating skills.",
        "Preparation for competitive exams foundation."
    ];

    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto flex flex-col items-center">
                <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm mb-2">The RK Difference</span>
                <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Why Choose Us?</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
                    {reasons.map((reason, idx) => (
                        <div key={idx} className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 text-center hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                {idx + 1}
                            </div>
                            <p className="text-slate-700 font-medium">{reason}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 15: Admission Info
export const AdmissionInfo = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Admissions Open (Classes 6-8)</h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Join our vibrant middle school community. Admissions are open for the upcoming academic session.
                            Entrance test is mandatory for these classes to assess basic proficiency.
                        </p>

                        <div className="flex gap-4">
                            <div className="px-5 py-3 bg-white rounded-xl shadow-sm border border-slate-200">
                                <div className="text-xs text-slate-500 font-bold uppercase">Entrance Test</div>
                                <div className="text-lg font-bold text-emerald-600">Required</div>
                            </div>
                            <div className="px-5 py-3 bg-white rounded-xl shadow-sm border border-slate-200">
                                <div className="text-xs text-slate-500 font-bold uppercase">Apply Mode</div>
                                <div className="text-lg font-bold text-blue-600">Online/Offline</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full flex flex-col gap-4">
                        <PWStyleCard
                            title="Required Documents"
                            desc="Previous year report card, TC, and birth certificate."
                            link="/admissions/process"
                        />
                        <PWStyleCard
                            title="Fee Structure"
                            desc="Detailed fee breakdown for Middle School."
                            link="/admissions/fee-structure"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 16: Middle CTA
export const MiddleCTA = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full py-24 px-4 bg-gradient-to-r from-emerald-700 to-emerald-900 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-tr-full"></div>

            <div className="relative z-10 container mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Shape Their Potential</h2>
                <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
                    Give your child the RK High School advantage.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        onClick={() => navigate('/admissions/form')}
                        className="px-8 py-4 bg-white text-emerald-900 font-bold rounded-full text-lg shadow-xl hover:bg-gray-100 transition-all flex items-center justify-center transform hover:-translate-y-1"
                    >
                        Apply for Admission <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-8 py-4 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-bold rounded-full text-lg transition-all flex items-center justify-center"
                    >
                        <Phone className="w-5 h-5 mr-2" /> Contact School
                    </button>
                </div>
            </div>
        </div>
    );
};
