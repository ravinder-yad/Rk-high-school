import React from 'react';
import { Target, Compass, Award, Check, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Section 14: Competitive Exam Foundation
export const CommCompetitive = () => {
    return (
        <div className="w-full py-20 px-4 bg-teal-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            <div className="container mx-auto max-w-6xl relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                    <div className="inline-block px-4 py-1 bg-teal-700 rounded-full text-teal-100 text-sm font-bold mb-4">
                        Future Ready
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Professional Foundation</h2>
                    <p className="text-teal-100 text-lg mb-8 leading-relaxed">
                        We provide orientation and basic foundational support for prestigious professional courses, helping students decide their path early.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                            <h4 className="font-bold text-white text-xl mb-1">CA / CS</h4>
                            <p className="text-teal-200 text-sm">Foundation Concepts</p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                            <h4 className="font-bold text-white text-xl mb-1">CUET</h4>
                            <p className="text-teal-200 text-sm">University Entrance</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="relative w-64 h-64 bg-teal-800 rounded-full flex items-center justify-center border-4 border-teal-700 shadow-2xl animate-pulse-slow">
                        <Target className="w-32 h-32 text-indigo-300" />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 15 & 16: Career Guidance & Pathways
export const CommCareers = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Unlocking Opportunities</h2>
                <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
                    Commerce opens doors to some of the highest-paying and most respected professions in the world.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { title: "Chartered Accountant", icon: "📊" },
                        { title: "Investment Banking", icon: "💰" },
                        { title: "Management (MBA)", icon: "👔" },
                        { title: "Accuary Science", icon: "📈" },
                        { title: "Company Secretary", icon: "📑" },
                        { title: "Entrepreneurship", icon: "🚀" },
                        { title: "Economics", icon: "🌍" },
                        { title: "Corporate Law", icon: "⚖️" },
                    ].map((career, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 transition-transform text-center">
                            <div className="text-4xl mb-3">{career.icon}</div>
                            <h4 className="font-bold text-slate-700">{career.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 17: Why Commerce at RK?
export const WhyCommerceRK = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why Choose Commerce at RK?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        "Focus on Practical Financial Literacy",
                        "Experienced Faculty from Corporate Backgrounds",
                        "Career Counseling & Guidance",
                        "Excellent Board Results in Accountancy",
                        "Regular Guest Lectures from Industry Experts",
                        "Strong Alumni Network in Business"
                    ].map((point, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-teal-50 rounded-2xl border border-teal-100">
                            <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center shrink-0">
                                <Check className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-teal-900">{point}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 18: Admission Info
export const CommAdmissionInfo = () => {
    return (
        <div className="w-full py-16 px-4 bg-white border-t border-slate-100">
            <div className="container mx-auto max-w-3xl text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Admission Criteria</h3>
                <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200 inline-block text-left">
                    <p className="text-orange-900 font-medium mb-2">For Class 11 Commerce Stream:</p>
                    <ul className="list-disc list-inside text-orange-800 space-y-1 text-sm">
                        <li>Minimum <strong>60% aggregate</strong> in Class 10 Pre-Boards/Boards.</li>
                        <li>Qualification in internal admission interaction.</li>
                        <li>Higher Math score required for choosing Maths optional.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

// Section 19: Achievements
export const CommAchievements = () => {
    return (
        <div className="w-full py-16 px-4 bg-indigo-50">
            <div className="container mx-auto text-center">
                <div className="flex flex-wrap justify-center gap-12">
                    <div>
                        <div className="text-4xl font-bold text-indigo-600 mb-1">100%</div>
                        <div className="text-sm text-slate-600 font-bold uppercase tracking-wider">Pass Percentage</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-teal-600 mb-1">25+</div>
                        <div className="text-sm text-slate-600 font-bold uppercase tracking-wider">Students &gt; 90%</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-purple-600 mb-1">Top</div>
                        <div className="text-sm text-slate-600 font-bold uppercase tracking-wider">University Placements</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 20: Final CTA
export const CommerceFinalCTA = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full py-24 px-4 bg-gradient-to-r from-teal-600 to-indigo-600 text-center text-white">
            <div className="container mx-auto">
                <Compass className="w-16 h-16 text-white/80 mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                    Shape Your Career in Finance
                </h2>
                <p className="text-teal-100 text-lg mb-10 max-w-2xl mx-auto">
                    Join RK High School's Commerce Department and take the first step towards becoming a business leader.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        onClick={() => navigate('/admissions/form')}
                        className="px-10 py-4 bg-white text-teal-700 font-bold rounded-full text-lg shadow-xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
                    >
                        Apply Now <ArrowRight className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-10 py-4 bg-teal-800/50 border border-white/20 hover:bg-teal-800/70 text-white font-bold rounded-full text-lg transition-all"
                    >
                        Talk to Mentors
                    </button>
                </div>
            </div>
        </div>
    );
};
