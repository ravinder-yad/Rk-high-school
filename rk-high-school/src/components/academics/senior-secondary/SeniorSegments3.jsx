import React from 'react';
import { Shield, MessageCircle, Trophy, ArrowRight, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PWStyleCard from '../../PWStyleCard';

// Section 15: Discipline & Academic Culture
export const DisciplineCulture = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">A Culture of Focus</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Senior Secondary requires a shift in attitude. We maintain a professional, distraction-free environment
                        where academic seriousness is the norm. Attendance is strictly monitored, and punctuality is non-negotiable.
                    </p>
                </div>
                <div className="flex-1 w-full p-8 bg-white border border-slate-200 rounded-3xl shadow-sm text-center">
                    <div className="text-5xl font-bold text-indigo-600 mb-2">100%</div>
                    <p className="text-slate-900 font-bold uppercase tracking-wide">Focus Required</p>
                </div>
            </div>
        </div>
    );
};

// Section 16: Safety & Well-being
export const SafetyWellbeing = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-6 p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
                    <Shield className="w-12 h-12 text-emerald-600 shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Physical Safety</h3>
                        <p className="text-slate-600">CCTV surveillance and secure campus entry to ensure a safe learning space.</p>
                    </div>
                </div>
                <div className="flex items-start gap-6 p-6 rounded-2xl bg-blue-50 border border-blue-100">
                    <Shield className="w-12 h-12 text-blue-600 shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Mental Well-being</h3>
                        <p className="text-slate-600">Access to counselors for discussing personal or academic challenges confidentially.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 17: Parent Communication
export const ParentCommunication = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-50 text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12">Keeping You in the Loop</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                        <MessageCircle className="w-8 h-8 text-indigo-500 mx-auto mb-4" />
                        <h3 className="font-bold text-slate-900">SMS Updates</h3>
                        <p className="text-sm text-slate-500 mt-2">Instant attendance alerts.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                        <MessageCircle className="w-8 h-8 text-emerald-500 mx-auto mb-4" />
                        <h3 className="font-bold text-slate-900">Performance Reports</h3>
                        <p className="text-sm text-slate-500 mt-2">Detailed graphical analysis.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                        <MessageCircle className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                        <h3 className="font-bold text-slate-900">PTM Sessions</h3>
                        <p className="text-sm text-slate-500 mt-2">One-on-one with faculty.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 18: Results & Achievements
export const ResultsAchievements = () => {
    return (
        <div className="w-full py-24 px-4 bg-indigo-900 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="container mx-auto relative z-10 text-center">
                <h2 className="text-3xl font-bold mb-16">Consistent Excellence</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="text-5xl font-bold text-emerald-400 mb-2">100%</div>
                        <p className="uppercase tracking-wider font-bold">Pass Rate</p>
                    </div>
                    <div className="border-x border-white/20">
                        <div className="text-5xl font-bold text-emerald-400 mb-2">25+</div>
                        <p className="uppercase tracking-wider font-bold">Distinctions</p>
                    </div>
                    <div>
                        <div className="text-5xl font-bold text-emerald-400 mb-2">Top</div>
                        <p className="uppercase tracking-wider font-bold">University Placements</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 19: Admission Details
export const AdmissionDetails = () => {
    return (
        <div className="w-full py-24 px-4 bg-white">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto border border-slate-200 rounded-3xl p-8 md:p-12 shadow-lg bg-slate-50">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Admission Eligibility (XI)</h2>
                    <ul className="space-y-4 mb-10 text-slate-700">
                        <li className="flex items-start gap-3">
                            <Trophy className="w-5 h-5 text-indigo-600 shrink-0 mt-1" />
                            <span>Admission is granted based on <strong>Class 10 Board Results</strong> and an Aptitude Test.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Trophy className="w-5 h-5 text-indigo-600 shrink-0 mt-1" />
                            <span><strong>Science Stream:</strong> Requires &gt;75% in Math & Science.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Trophy className="w-5 h-5 text-indigo-600 shrink-0 mt-1" />
                            <span><strong>Commerce/Arts Stream:</strong> Requires &gt;60% aggregate.</span>
                        </li>
                    </ul>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <PWStyleCard
                            title="Required Documents"
                            desc="Mark sheet, Transfer Certificate, Migration Certificate."
                            link="/admissions/process"
                        />
                        <PWStyleCard
                            title="Scholarships"
                            desc="Merit-based scholarships available for toppers."
                            link="/admissions/fee-structure"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 20: Final CTA
export const SeniorCTA = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full py-24 px-4 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-center relative overflow-hidden">
            {/* Glow Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 container mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                    Shape Your Future with <br /> RK High School
                </h2>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        onClick={() => navigate('/admissions/form')}
                        className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold rounded-full text-xl shadow-xl hover:shadow-indigo-500/40 transition-all flex items-center justify-center transform hover:-translate-y-1"
                    >
                        Apply for Class XI <ArrowRight className="w-6 h-6 ml-2" />
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-10 py-4 bg-white/5 border border-white/20 hover:bg-white/10 text-white font-bold rounded-full text-xl transition-all flex items-center justify-center backdrop-blur-md"
                    >
                        <Phone className="w-6 h-6 mr-2" /> Contact Counsellor
                    </button>
                </div>
            </div>
        </div>
    );
};
