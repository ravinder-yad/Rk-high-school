import React from 'react';
import physImg from '../../../assets/images/student-life/event-science.jpg';
import chemImg from '../../../assets/images/student-life/gallery-page-5.jpg';
import bioImg from '../../../assets/images/student-life/gallery-page-8.jpg';
import { Microscope, Beaker, CheckCircle2, FileText, UserCheck, BookOpen, PenTool } from 'lucide-react';

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
export const TeachingMethodology = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Teaching Methodology</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <PWCard title="Concept Clarity" desc="Building strong fundamentals before moving to complex topics." icon={<BookOpen className="w-6 h-6" />} color="indigo" />
                    <PWCard title="NCERT Focused" desc="Strict adherence to NCERT syllabus for Board Exam success." icon={<FileText className="w-6 h-6" />} color="cyan" />
                    <PWCard title="Problem Solving" desc="Extensive practice of numericals and application-based questions." icon={<PenTool className="w-6 h-6" />} color="emerald" />
                    <PWCard title="Doubt Clearing" desc="Dedicated sessions to resolve individual student queries." icon={<CheckCircle2 className="w-6 h-6" />} color="orange" />
                </div>
            </div>
        </div>
    );
};

// Section 9: Laboratory Facilities
export const LabFacilities = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-900 text-white">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-2 block">Infrastructure</span>
                        <h2 className="text-3xl md:text-5xl font-bold">World-Class Laboratories</h2>
                    </div>
                    <p className="text-slate-400 max-w-md text-lg">
                        Where theory meets practice. Our labs are fully equipped to support individual experimentation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { name: "Physics Lab", img: physImg, desc: "Equipped with optical benches, potentiometers, and modern measuring instruments." },
                        { name: "Chemistry Lab", img: chemImg, desc: "Spacious workstations with individual gas connections and safety showers." },
                        { name: "Biology Lab", img: bioImg, desc: "High-resolution microscopes, specimen jars, and 3D human anatomy models." }
                    ].map((lab, idx) => (
                        <div key={idx} className="group relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-[3/4]">
                            <img src={lab.img} alt={lab.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-2xl font-bold mb-2">{lab.name}</h3>
                                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 transform">{lab.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 10: Practical Learning Approach
export const PracticalApproach = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-12">The Scientific Method</h2>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    {['Observation', 'Hypothesis', 'Experiment', 'Analysis', 'Conclusion'].map((step, idx) => (
                        <React.Fragment key={idx}>
                            <div className="bg-white px-8 py-6 rounded-2xl shadow-sm border border-slate-200 font-bold text-slate-700 min-w-[150px] hover:border-indigo-400 hover:text-indigo-600 transition-colors">
                                {step}
                            </div>
                            {idx < 4 && <div className="hidden md:block w-12 h-0.5 bg-slate-300"></div>}
                            {idx < 4 && <div className="md:hidden w-0.5 h-8 bg-slate-300"></div>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 11: Faculty & Expertise
export const ScienceFaculty = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Expert Guidance</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { name: "Dr. A. Sharma", role: "HOD Physics", exp: "15+ Years Exp", spec: "M.Sc, PhD" },
                        { name: "Mrs. R. Verma", role: "HOD Chemistry", exp: "12+ Years Exp", spec: "M.Sc (Organic)" },
                        { name: "Mr. K. Singh", role: "HOD Mathematics", exp: "18+ Years Exp", spec: "M.Sc, B.Ed" }
                    ].map((fac, idx) => (
                        <div key={idx} className="bg-slate-50 rounded-3xl p-6 flex items-center gap-4 border border-slate-100 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-xl">
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

// Section 12: Curriculum & Syllabus
export const ScienceCurriculum = () => {
    return (
        <div className="w-full py-16 px-4 bg-white border-t border-slate-100">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">CBSE Aligned Curriculum</h2>
                <p className="text-slate-600 max-w-2xl mx-auto mb-8">
                    We strictly follow the CBSE syllabus, ensuring students are well-prepared for Board Exams while also providing the extra edge needed for competitive entrance tests.
                </p>
                <div className="inline-flex gap-4 p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                    <div className="flex items-center gap-2 text-indigo-700 font-bold px-4">
                        <BookOpen className="w-5 h-5" /> Strict NCERT
                    </div>
                    <div className="w-px h-6 bg-indigo-200"></div>
                    <div className="flex items-center gap-2 text-indigo-700 font-bold px-4">
                        <FileText className="w-5 h-5" /> Sample Papers
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 13 & 14: Assessment & Board Prep
export const AssessmentBoardPrep = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <UserCheck className="w-8 h-8 text-cyan-500" /> Assessment
                        </h3>
                        <ul className="space-y-4">
                            {['Topic-wise Weekly Tests', 'Full Syllabus Mock Exams', 'Viva and Practical Assessments'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <FileText className="w-8 h-8 text-indigo-500" /> Board Prep
                        </h3>
                        <ul className="space-y-4">
                            {['Solving Last 10 Years PYQs', 'Topper Answer Sheet Analysis', 'Time Management Strategy Sessions'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700">
                                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
