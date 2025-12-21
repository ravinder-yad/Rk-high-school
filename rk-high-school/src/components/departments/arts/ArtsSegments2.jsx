import React from 'react';
import { BookOpen, FileText, CheckCircle2, UserCheck, Mic, PenTool, BrainCircuit } from 'lucide-react';

// Shared PW Card Component
const PWCard = ({ title, desc, icon, color = "indigo" }) => (
    <div className={`bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-${color}-300 transition-all duration-300 h-full`}>
        <div className={`w-12 h-12 bg-${color}-50 rounded-xl flex items-center justify-center text-${color}-600 mb-6`}>
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
);

// Section 8: Teaching Methodology
export const ArtsMethodology = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Interactive Learning</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <PWCard title="Deep Analysis" desc="Going beyond surface level facts to understand core reasons." icon={<BrainCircuit className="w-6 h-6" />} color="indigo" />
                    <PWCard title="Case Studies" desc="Analyzing historical events and political conflicts." icon={<FileText className="w-6 h-6" />} color="purple" />
                    <PWCard title="Debates" desc="Regular classroom discussions to improve argumentation." icon={<Mic className="w-6 h-6" />} color="rose" />
                    <PWCard title="Projects" desc="Research-based assignments to foster independent enquiry." icon={<PenTool className="w-6 h-6" />} color="orange" />
                </div>
            </div>
        </div>
    );
};

// Section 9: Curriculum
export const ArtsCurriculum = () => {
    return (
        <div className="w-full py-16 px-4 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">CBSE Aligned Humanities</h2>
                <p className="text-slate-600 max-w-2xl mx-auto mb-8">
                    A comprehensive curriculum that balances academic rigor with creative expression, preparing students for competitive exams and higher education in liberal arts.
                </p>
                <div className="inline-flex gap-4 p-4 bg-purple-50 rounded-2xl border border-purple-100">
                    <div className="flex items-center gap-2 text-purple-700 font-bold px-4">
                        <BookOpen className="w-5 h-5" /> Detailed Syllabus
                    </div>
                    <div className="w-px h-6 bg-purple-200"></div>
                    <div className="flex items-center gap-2 text-purple-700 font-bold px-4">
                        <FileText className="w-5 h-5" /> Map Work
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 10 & 11: Assessment & Board Prep
export const ArtsAssessmentBoard = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <UserCheck className="w-8 h-8 text-indigo-500" /> Evaluation
                        </h3>
                        <ul className="space-y-4">
                            {['Reading & Comprehension Tests', 'Research Project Reviews', 'Group Presentations'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700">
                                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <PenTool className="w-8 h-8 text-rose-500" /> Board Prep
                        </h3>
                        <ul className="space-y-4">
                            {['Answer Writing Structure', 'Timeline & Map Practice', 'Critical Commentary Writing'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700">
                                    <div className="w-2 h-2 bg-rose-400 rounded-full"></div> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 12: Faculty
export const ArtsFaculty = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Inspiring Mentors</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { name: "Mrs. A. Roy", role: "HOD History", exp: "18+ Years Exp", spec: "MA History (Gold Medalist)" },
                        { name: "Mr. V. Khanna", role: "Political Science", exp: "12+ Years Exp", spec: "MA Pol Sci, M.Phil" },
                        { name: "Ms. S. Iyer", role: "Geography", exp: "10+ Years Exp", spec: "M.Sc Geography" }
                    ].map((fac, idx) => (
                        <div key={idx} className="bg-white rounded-3xl p-6 flex items-center gap-4 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl">
                                {fac.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">{fac.name}</h4>
                                <p className="text-indigo-600 font-medium text-sm mb-1">{fac.role}</p>
                                <p className="text-slate-500 text-xs">{fac.exp} • {fac.spec}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 13: Skill Development
export const ArtsSkills = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-900 text-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Developing Key Soft Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm border border-white/10 text-center hover:bg-white/15 transition-colors">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-300"><Mic className="w-6 h-6" /></div>
                        <h3 className="text-lg font-bold mb-2">Public Speaking</h3>
                        <p className="text-slate-300 text-xs">Articulating thoughts clearly and confidently.</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm border border-white/10 text-center hover:bg-white/15 transition-colors">
                        <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-300"><BrainCircuit className="w-6 h-6" /></div>
                        <h3 className="text-lg font-bold mb-2">Critical Thinking</h3>
                        <p className="text-slate-300 text-xs">Evaluating information from multiple perspectives.</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm border border-white/10 text-center hover:bg-white/15 transition-colors">
                        <div className="w-12 h-12 bg-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-rose-300"><PenTool className="w-6 h-6" /></div>
                        <h3 className="text-lg font-bold mb-2">Creative Writing</h3>
                        <p className="text-slate-300 text-xs">Expressing complex ideas through the written word.</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm border border-white/10 text-center hover:bg-white/15 transition-colors">
                        <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-300"><CheckCircle2 className="w-6 h-6" /></div>
                        <h3 className="text-lg font-bold mb-2">Research</h3>
                        <p className="text-slate-300 text-xs">Gathering and analyzing data for projects.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
