import React from 'react';
import { Presentation, Medal, Clock, CheckCircle2, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Section 14: Practical Learning
export const PracticalProjects = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Learning by Doing</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 transition-transform">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4"><Presentation className="w-6 h-6" /></div>
                        <h4 className="font-bold text-slate-900 mb-2">Class Presentations</h4>
                        <p className="text-sm text-slate-600">Students create PPTs on diverse topics to boost confidence.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 transition-transform">
                        <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600 mb-4"><Medal className="w-6 h-6" /></div>
                        <h4 className="font-bold text-slate-900 mb-2">Web Design Contest</h4>
                        <p className="text-sm text-slate-600">Annual competition to design the best static webpage.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 transition-transform">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4"><CheckCircle2 className="w-6 h-6" /></div>
                        <h4 className="font-bold text-slate-900 mb-2">Code Debugging</h4>
                        <p className="text-sm text-slate-600">Finding and fixing errors in code snippets to sharpen logic.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 15 & 16: Staff & Timings
export const StaffAndTimings = () => {
    return (
        <div className="w-full py-16 px-4 bg-white">
            <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Staff */}
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Expert Guidance</h3>
                    <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-4">
                        <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center text-2xl text-cyan-600 font-bold">IT</div>
                        <div>
                            <h4 className="font-bold text-slate-900">Mr. R. Sharma</h4>
                            <p className="text-sm text-slate-600">HOD Computer Science (MCA)</p>
                            <p className="text-xs text-indigo-600 font-bold mt-1">10+ Years Experience</p>
                        </div>
                    </div>
                    <p className="text-slate-600 text-sm">
                        Our instructors are not just teachers but mentors who guide students through the complexities of technology with patience and expertise.
                    </p>
                </div>

                {/* Timings */}
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Lab Access</h3>
                    <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
                        <div className="flex items-center gap-4 mb-4">
                            <Clock className="w-6 h-6 text-indigo-600" />
                            <span className="font-bold text-indigo-900">Regular Classes: Assigned Periods</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <User className="w-6 h-6 text-indigo-600" />
                            <span className="font-bold text-indigo-900">Practice Hour: 2:30 PM - 3:30 PM</span>
                        </div>
                        <div className="mt-6 pt-6 border-t border-indigo-200 text-sm text-indigo-800">
                            *Extra practice slots available upon request for project work.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 17 & 18: Achievements & Role
export const TechAchievements = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-900 text-white text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-12">Tech Brilliance</h2>
                <div className="flex flex-wrap justify-center gap-12 text-center">
                    <div>
                        <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
                        <div className="text-sm text-slate-400 uppercase tracking-widest">Digital Literacy</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-indigo-400 mb-2">50+</div>
                        <div className="text-sm text-slate-400 uppercase tracking-widest">Apps Created</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-emerald-400 mb-2">Top 3</div>
                        <div className="text-sm text-slate-400 uppercase tracking-widest">District Cyber Olympiad</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 19: Lab Rules
export const LabRules = () => {
    return (
        <div className="w-full py-16 px-4 bg-white border-b border-slate-100">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Lab Etiquette</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {["No Eatables Allowed", "Maintain Silence", "Proper Shutdown", "Report Hardware Issues"].map((rule, i) => (
                        <span key={i} className="px-6 py-2 rounded-full border border-slate-200 text-slate-600 text-sm font-bold bg-slate-50">
                            {rule}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 20: Final CTA
export const ComputerFinalCTA = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full py-24 px-4 bg-gradient-to-r from-cyan-600 to-indigo-600 text-center text-white">
            <div className="container mx-auto">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <Presentation className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                    Preparing Students for a<br />Digital Future
                </h2>
                <p className="text-cyan-100 text-lg mb-10 max-w-2xl mx-auto">
                    Join RK High School to give your child the tech edge they need for tomorrow's world.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        onClick={() => navigate('/admissions/form')}
                        className="px-10 py-4 bg-white text-cyan-700 font-bold rounded-full text-lg shadow-xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
                    >
                        Explore Curriculum <ArrowRight className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-10 py-4 bg-cyan-800/50 border border-white/20 hover:bg-cyan-800/70 text-white font-bold rounded-full text-lg transition-all"
                    >
                        Contact School
                    </button>
                </div>
            </div>
        </div>
    );
};
