import React from 'react';
import { ShieldCheck, MessageCircle, FileText, ArrowRight, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PWStyleCard from '../../PWStyleCard';

// Section 12: Safety & Well-being
export const SafetyWellbeing = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto flex flex-col items-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-12">Safety First, Always</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {[
                        { title: "CCTV Monitored", desc: "Corridors & Classrooms" },
                        { title: "First Aid Care", desc: "Trained staff on duty" },
                        { title: "Safe Transport", desc: "GPS enabled buses" },
                        { title: "Filtered Water", desc: "Regular quality checks" }
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
                    <h2 className="text-3xl font-bold mb-4">Together We Grow</h2>
                    <p className="text-slate-400">At Primary level, parent-teacher collaboration is key to success.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex items-start gap-4 hover:bg-white/10 transition-colors">
                        <MessageCircle className="w-10 h-10 text-indigo-400 shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">Open Communication</h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                We maintain open channels via our school app, SMS, and diary notes.
                                Teachers are available to discuss your child’s progress during scheduled hours.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex items-start gap-4 hover:bg-white/10 transition-colors">
                        <FileText className="w-10 h-10 text-green-400 shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">Parent-Teacher Meetings</h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                Regular PTMs are held after every assessment cycle to review performance,
                                discuss challenges, and celebrate improvements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 14: Why Primary at RK?
export const WhyPrimary = () => {
    const reasons = [
        "Concept-oriented teaching, not rote learning.",
        "Equal focus on academics and personality development.",
        "Technology-integrated classrooms.",
        "Safe, disciplined, and nurturing environment."
    ];

    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto flex flex-col items-center">
                <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-2">The RK Difference</span>
                <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Why Parents Trust Us</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
                    {reasons.map((reason, idx) => (
                        <div key={idx} className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 text-center hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
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
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Admissions Open (Classes 1-5)</h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Secure your child's future with RK High School. We accept admissions based on seat availability and a basic interaction/assessment to understand the child's readiness.
                        </p>

                        <div className="flex gap-4">
                            <div className="px-5 py-3 bg-white rounded-xl shadow-sm border border-slate-200">
                                <div className="text-xs text-slate-500 font-bold uppercase">Age for Class 1</div>
                                <div className="text-lg font-bold text-indigo-600">5.5 - 6.5 Years</div>
                            </div>
                            <div className="px-5 py-3 bg-white rounded-xl shadow-sm border border-slate-200">
                                <div className="text-xs text-slate-500 font-bold uppercase">Mode</div>
                                <div className="text-lg font-bold text-green-600">Offline/Online</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full flex flex-col gap-4">
                        <PWStyleCard
                            title="Required Documents"
                            desc="Birth certificate, photos, and transfer certificate details."
                            link="/admissions/process"
                        />
                        <PWStyleCard
                            title="Fee Structure"
                            desc="Comprehensive breakdown of tuition and other fees."
                            link="/admissions/fee-structure"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 16: Primary CTA
export const PrimaryCTA = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full py-24 px-4 bg-gradient-to-r from-indigo-700 to-indigo-900 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-tr-full"></div>

            <div className="relative z-10 container mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Empower Your Child's Future</h2>
                <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
                    Join a school that balances academic excellence with character building.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        onClick={() => navigate('/admissions/form')}
                        className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-full text-lg shadow-xl hover:bg-gray-100 transition-all flex items-center justify-center transform hover:-translate-y-1"
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
