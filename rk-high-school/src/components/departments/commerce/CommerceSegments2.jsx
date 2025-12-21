import React from 'react';
import { BookOpen, FileText, CheckCircle2, UserCheck, Layout, Monitor, Briefcase } from 'lucide-react';

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
export const CommerceMethodology = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Commerce Teaching Methodology</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <PWCard title="Concept Clarity" desc="Understanding the 'Why' behind accounting rules and economic laws." icon={<BookOpen className="w-6 h-6" />} color="indigo" />
                    <PWCard title="Case-Based" desc="Learning from real scenarios of businesses like Tata, Reliance, and startups." icon={<FileText className="w-6 h-6" />} color="teal" />
                    <PWCard title="NCERT & Beyond" desc="Solid Board preparation supplemented with current affairs." icon={<Layout className="w-6 h-6" />} color="emerald" />
                    <PWCard title="Doubt Clearing" desc="Personal attention to resolve queries in numericals and theory." icon={<CheckCircle2 className="w-6 h-6" />} color="orange" />
                </div>
            </div>
        </div>
    );
};

// Section 9: Curriculum
export const CommerceCurriculum = () => {
    return (
        <div className="w-full py-16 px-4 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">CBSE Aligned Syllabus</h2>
                <p className="text-slate-600 max-w-2xl mx-auto mb-8">
                    We strictly follow the CBSE guidelines, ensuring comprehensive coverage of Accountancy, Business Studies, Economics, and English, along with optional subjects.
                </p>
                <div className="inline-flex gap-4 p-4 bg-teal-50 rounded-2xl border border-teal-100">
                    <div className="flex items-center gap-2 text-teal-700 font-bold px-4">
                        <BookOpen className="w-5 h-5" /> Updated Pattern
                    </div>
                    <div className="w-px h-6 bg-teal-200"></div>
                    <div className="flex items-center gap-2 text-teal-700 font-bold px-4">
                        <FileText className="w-5 h-5" /> Project Work
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 10 & 11: Assessment & Board Prep
export const CommAssessmentBoard = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <UserCheck className="w-8 h-8 text-indigo-500" /> Assessment
                        </h3>
                        <ul className="space-y-4">
                            {['Periodic Unit Tests', 'Half-Yearly & Pre-Board Exams', 'Project Vivas & Presentations'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700">
                                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <FileText className="w-8 h-8 text-teal-500" /> Board Prep
                        </h3>
                        <ul className="space-y-4">
                            {['Chapter-wise PYQ Analysis', 'Mock Board Series', 'Answer Writing Workshops'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700">
                                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div> {item}
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
export const CommerceFaculty = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Mentors & Experts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { name: "Mr. S. Gupta", role: "HOD Commerce", exp: "20+ Years Exp", spec: "M.Com, CA Inter" },
                        { name: "Ms. P. Sharma", role: "Senior Economics", exp: "14+ Years Exp", spec: "MA Economics" },
                        { name: "Mr. R. Das", role: "Business Studies", exp: "10+ Years Exp", spec: "MBA" }
                    ].map((fac, idx) => (
                        <div key={idx} className="bg-white rounded-3xl p-6 flex items-center gap-4 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 font-bold text-xl">
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

// Section 13: Practical Learning
export const PracticalSkills = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-900 text-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Skill-Based Learning</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
                        <Monitor className="w-10 h-10 text-teal-400 mb-6" />
                        <h3 className="text-xl font-bold mb-3">Tally & Accounting</h3>
                        <p className="text-slate-300 text-sm">Basic introduction to computerized accounting softwares.</p>
                    </div>
                    <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
                        <Layout className="w-10 h-10 text-indigo-400 mb-6" />
                        <h3 className="text-xl font-bold mb-3">Spreadsheets (Excel)</h3>
                        <p className="text-slate-300 text-sm">Managing data, creating charts, and financial formulas.</p>
                    </div>
                    <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
                        <Briefcase className="w-10 h-10 text-emerald-400 mb-6" /> {/* Briefcase imported in Segments1, need to import it or use other icon. Assuming Monitor/Layout standard imports here */}
                        <h3 className="text-xl font-bold mb-3">Business Projects</h3>
                        <p className="text-slate-300 text-sm">Simluating business plans and marketing strategies.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
