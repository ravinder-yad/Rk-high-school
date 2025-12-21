import React from 'react';
import { Target, Lightbulb, Rocket, Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import scienceFairImg from '../../../assets/images/student-life/activities.jpg';
import modelMakingImg from '../../../assets/images/student-life/gallery-page-8.jpg';

// Section 15: Competitive Exam Foundation
export const CompetitiveFoundation = () => {
    return (
        <div className="w-full py-20 px-4 bg-indigo-900 text-white relative overflow-hidden">
            {/* Soft background pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-block px-4 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-bold mb-4 border border-orange-500/30">
                            Beyond Boards
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Competitive Exam Foundation</h2>
                        <p className="text-indigo-200 text-lg mb-8 leading-relaxed">
                            We integrate foundation courses for JEE (Main & Advanced) and NEET into our regular curriculum, giving students a head start in their career preparation without extra pressure.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                                <h4 className="font-bold text-white text-xl mb-1">JEE</h4>
                                <p className="text-indigo-300 text-sm">Engineering Entrance</p>
                            </div>
                            <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                                <h4 className="font-bold text-white text-xl mb-1">NEET</h4>
                                <p className="text-indigo-300 text-sm">Medical Entrance</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="relative w-64 h-64 bg-indigo-800 rounded-full flex items-center justify-center border-4 border-indigo-700 shadow-2xl animate-pulse-slow">
                            <Target className="w-32 h-32 text-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 16: Science Projects
export const ScienceProjects = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center flex items-center justify-center gap-3">
                    <Lightbulb className="w-8 h-8 text-yellow-500" /> Innovation & Projects
                </h2>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 bg-slate-50 rounded-3xl p-8 border border-slate-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Annual Science Fair</h3>
                        <p className="text-slate-600 mb-6">
                            Every year, students showcase working models, robots, and eco-friendly solutions. It's a celebration of creativity and scientific application.
                        </p>
                        <img src={scienceFairImg} className="w-full h-48 object-cover rounded-xl" alt="Science Fair" />
                    </div>
                    <div className="flex-1 bg-slate-50 rounded-3xl p-8 border border-slate-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Model Making</h3>
                        <p className="text-slate-600 mb-6">
                            From DNA structures to Hydraulic bridges, hands-on model making helps students understand complex 3D concepts easily.
                        </p>
                        <img src={modelMakingImg} className="w-full h-48 object-cover rounded-xl" alt="Model Making" />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 17: Career Pathways
export const CareerPathways = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-50 text-center">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-10">Where Can Science Take You?</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { title: "Engineering", icon: "⚙️" },
                        { title: "Medicine", icon: "🩺" },
                        { title: "Research", icon: "🔬" },
                        { title: "Data Science", icon: "💻" },
                        { title: "Architecture", icon: "🏛️" },
                        { title: "Aviation", icon: "✈️" },
                        { title: "Defence", icon: "🛡️" },
                        { title: "Astronomy", icon: "🔭" },
                    ].map((career, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 transition-transform">
                            <div className="text-4xl mb-3">{career.icon}</div>
                            <h4 className="font-bold text-slate-700">{career.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 18: Why Science at RK?
export const WhyScienceRK = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why Choose Science at RK?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        "State-of-the-art Laboratories",
                        "Experienced HODs & Faculty",
                        "Integrated Competitive Prep",
                        "Focus on Numerical Solving",
                        "Regular Doubt Clearing",
                        "Excellent Board Results"
                    ].map((point, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center shrink-0">
                                <Check className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-indigo-900">{point}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 19: Admission Info
export const ScienceAdmissionInfo = () => {
    return (
        <div className="w-full py-16 px-4 bg-white border-t border-slate-100">
            <div className="container mx-auto max-w-3xl text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Admission Criteria</h3>
                <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200 inline-block text-left">
                    <p className="text-yellow-800 font-medium mb-2">For Class 11 Science Stream:</p>
                    <ul className="list-disc list-inside text-yellow-900 space-y-1 text-sm">
                        <li>Minimum <strong>75% in Science & Maths</strong> in Class 10 Pre-Boards/Boards.</li>
                        <li>Qualifying internal admission test / interaction.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

// Section 20: Final CTA
export const ScienceFinalCTA = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full py-24 px-4 bg-gradient-to-r from-indigo-600 to-cyan-600 text-center text-white">
            <div className="container mx-auto">
                <Rocket className="w-16 h-16 text-white/80 mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                    Build a Strong Future
                </h2>
                <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
                    Take the first step towards a career in innovation, medicine, or technology.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        onClick={() => navigate('/admissions/form')}
                        className="px-10 py-4 bg-white text-indigo-600 font-bold rounded-full text-lg shadow-xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
                    >
                        Apply for Science Stream <ArrowRight className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-10 py-4 bg-indigo-800/50 border border-white/20 hover:bg-indigo-800/70 text-white font-bold rounded-full text-lg transition-all"
                    >
                        Talk to HOD
                    </button>
                </div>
            </div>
        </div>
    );
};
