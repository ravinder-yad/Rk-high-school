import React from 'react';
import bioImg from '../../../assets/images/student-life/gallery-page-8.jpg';
import physicsImg from '../../../assets/images/student-life/event-science.jpg';
import { FileText, FlaskConical, Target, Calendar, UserCheck, Compass, HeartHandshake, CheckCircle2, Award, Zap } from 'lucide-react';
import PWStyleCard from '../../PWStyleCard';

// Section 8: Board Exam Preparation
export const BoardExamPrep = () => {
    return (
        <div className="w-full py-24 px-4 bg-slate-900 text-white">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Mastering The Boards</h2>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            Board exams are the first major milestone. We leave nothing to chance with our structured preparation strategy,
                            aligning completely with CBSE guidelines.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Complete Syllabus Coverage by December",
                                "Chapter-wise Previous Year Questions (PYQs)",
                                "Strict Answer Writing Protocols",
                                "5+ Full Syllabus Mock Tests"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                                    <span className="font-medium text-slate-100">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 w-full grid grid-cols-2 gap-4">
                        <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                            <FileText className="w-10 h-10 text-indigo-400 mb-4" />
                            <h3 className="font-bold text-lg">Sample Papers</h3>
                            <p className="text-sm text-slate-400 mt-2">Solving 10 years of papers.</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-md mt-8">
                            <Zap className="w-10 h-10 text-yellow-400 mb-4" />
                            <h3 className="font-bold text-lg">Rapid Revision</h3>
                            <p className="text-sm text-slate-400 mt-2">Mind maps & short notes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 9: Practicals & Lab Work
export const PracticalsLabs = () => {
    return (
        <div className="w-full py-24 px-4 bg-white">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="grid grid-cols-2 gap-4">
                    <img src={bioImg} className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Biology Lab" />
                    <img src={physicsImg} className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" alt="Physics Experiment" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Beyond The Theory</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Science isn't just about reading; it's about doing. Our state-of-the-art laboratories ensure that every student
                        performs experiments individually, gaining confidence for the Practical Board Exams.
                    </p>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border-l-4 border-indigo-500">
                            <FlaskConical className="w-8 h-8 text-indigo-600" />
                            <div>
                                <h4 className="font-bold text-slate-900">Modern Equipment</h4>
                                <p className="text-sm text-slate-500">Updated apparatus for precise results.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border-l-4 border-emerald-500">
                            <FileText className="w-8 h-8 text-emerald-600" />
                            <div>
                                <h4 className="font-bold text-slate-900">Lab Manuals</h4>
                                <p className="text-sm text-slate-500">Detailed records required for Boards.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 10: Competitive Exam Foundation
export const CompetitiveFoundation = () => {
    return (
        <div className="w-full py-24 px-4 bg-slate-50">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Future Ready</span>
                    <h2 className="text-4xl font-bold text-slate-900 mt-2">Entrance Exam Orientation</h2>
                    <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                        We don't just teach for school exams. We build the conceptual muscle required for national-level competitions right from Class 11.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "JEE Foundation", sub: "Engineering", desc: "Advanced problem solving in Physics and Math.", color: "bg-blue-50 border-blue-100 text-blue-600" },
                        { title: "NEET Foundation", sub: "Medical", desc: "Deep dive into NCERT Biology and Chemistry.", color: "bg-emerald-50 border-emerald-100 text-emerald-600" },
                        { title: "CUET Prep", sub: "University", desc: "General awareness and critical reasoning logic.", color: "bg-orange-50 border-orange-100 text-orange-600" }
                    ].map((item, idx) => (
                        <div key={idx} className={`p-8 rounded-3xl border ${item.color.split(" ")[1]} ${item.color.split(" ")[0]} hover:shadow-lg transition-all`}>
                            <Target className={`w-12 h-12 ${item.color.split(" ")[2]} mb-6`} />
                            <h3 className="text-2xl font-bold text-slate-900 mb-1">{item.title}</h3>
                            <span className="text-xs font-bold uppercase tracking-wider opacity-70 mb-4 block">{item.sub}</span>
                            <p className="text-slate-700 font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 11: Assessment & Testing System
export const AssessmentSystem = () => {
    return (
        <div className="w-full py-24 px-4 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-16">Rigorous Evaluation</h2>
                <div className="relative">
                    {/* Line */}
                    <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-1 bg-slate-100"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Weekly Tests", desc: "Topic-wise check every Saturday.", icon: <Calendar className="w-6 h-6" /> },
                            { title: "Term Exams", desc: "Half-yearly comprehensive assessment.", icon: <FileText className="w-6 h-6" /> },
                            { title: "Feedback Loop", desc: "Detailed analysis of errors.", icon: <CheckCircle2 className="w-6 h-6" /> }
                        ].map((item, idx) => (
                            <div key={idx} className="relative z-10 flex flex-col items-center">
                                <div className="w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg mb-6 border-4 border-white">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 12: Faculty & Mentorship
export const FacultyMentorship = () => {
    return (
        <div className="w-full py-24 px-4 bg-slate-900 text-white">
            <div className="container mx-auto flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                    <span className="text-emerald-400 font-bold uppercase tracking-wider text-sm">Our Strength</span>
                    <h2 className="text-4xl font-bold text-white mt-2 mb-6">Expert Faculty</h2>
                    <p className="text-slate-300 text-lg leading-relaxed mb-8">
                        Our Senior Secondary wing is led by seasoned educators with decades of experience in Board corrections and
                        competitive coaching. They don't just teach subjects; they mentor lives.
                    </p>
                    <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all font-bold">
                        Meet Our Team
                    </button>
                </div>
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <UserCheck className="w-10 h-10 text-indigo-400 mb-4" />
                        <h3 className="text-xl font-bold">Subject Experts</h3>
                        <p className="text-sm text-slate-400 mt-2">Masters in their respective fields.</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <HeartHandshake className="w-10 h-10 text-emerald-400 mb-4" />
                        <h3 className="text-xl font-bold">Personal Mentors</h3>
                        <p className="text-sm text-slate-400 mt-2">Guidance beyond the classroom.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 13: Career Guidance
export const CareerGuidance = () => {
    return (
        <div className="w-full py-24 px-4 bg-indigo-50">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-12">Navigating The Future</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Stream Selection", desc: "Psychometric tests for Class 10 students." },
                        { title: "Career Roadmap", desc: "Matching skills with emerging professions." },
                        { title: "College Support", desc: "Application guidance for top universities." }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform">
                            <Compass className="w-10 h-10 text-indigo-600 mb-6 mx-auto" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 14: Student Support System
export const StudentSupport = () => {
    return (
        <div className="w-full py-24 px-4 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">We Are Here For You</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <PWStyleCard
                        title="Doubt Clearing"
                        desc="Dedicated slots after school hours for resolving queries."
                        link="/contact"
                        className="border-l-4 border-l-emerald-500"
                    />
                    <PWStyleCard
                        title="Stress Management"
                        desc="Workshops on handling exam pressure and anxiety."
                        link="/contact"
                        className="border-l-4 border-l-blue-500"
                    />
                    <PWStyleCard
                        title="1-on-1 Guidance"
                        desc="Individual attention for students needing extra help."
                        link="/contact"
                        className="border-l-4 border-l-purple-500"
                    />
                </div>
            </div>
        </div>
    );
};
