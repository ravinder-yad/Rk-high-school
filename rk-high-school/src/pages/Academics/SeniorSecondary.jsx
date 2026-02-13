import React, { useEffect } from 'react';
import { Atom, Scale, Palette, TrendingUp, BookOpen, UserCheck } from 'lucide-react';
import Footer from '../../components/home/Footer';
import PageHeader from '../../components/PageHeader';

const SeniorSecondary = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const streams = [
        {
            icon: Atom,
            color: "text-blue-500",
            bg: "bg-blue-50",
            title: "Science Stream",
            subjects: ["Physics", "Chemistry", "Mathematics / Biology", "English", "Computer Science / PE"],
            desc: "For aspiring engineers, doctors, and scientists."
        },
        {
            icon: TrendingUp,
            color: "text-green-500",
            bg: "bg-green-50",
            title: "Commerce Stream",
            subjects: ["Accountancy", "Business Studies", "Economics", "English", "Mathematics / IP"],
            desc: "For future entrepreneurs, CAs, and business leaders."
        },
        {
            icon: Palette,
            color: "text-purple-500",
            bg: "bg-purple-50",
            title: "Humanities Stream",
            subjects: ["History", "Political Science", "Psychology", "English", "Fine Arts / Sociology"],
            desc: "For creative minds, civil services aspirants, and researchers."
        },
    ];

    return (
        <div className="bg-neutral-50 min-h-screen font-sans text-slate-900">
            <PageHeader
                title="Senior Secondary"
                subtitle="Grade IX - Grade XII"
                bgImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1600"
            />

            <div className="container mx-auto px-4 py-20">

                {/* Intro */}
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <span className="text-secondary font-bold tracking-wider uppercase text-xs mb-3 block">Career Focused</span>
                    <h2 className="text-4xl md:text-5xl font-black font-display text-slate-900 mb-6 leading-tight">
                        Charting the Path to <span className="text-primary">Success</span>
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        The Senior Secondary years are pivotal. Our rigorous academic program is designed to prepare students for board examinations and competitive entrance tests like JEE, NEET, CLAT, and CUET.
                    </p>
                </div>

                {/* Streams Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {streams.map((stream, i) => (
                        <div key={i} className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-50 hover:shadow-2xl hover:-translate-y-2 transition-all group overflow-hidden relative">
                            <div className={`absolute top-0 right-0 w-32 h-32 ${stream.bg} rounded-full -mr-16 -mt-16 opacity-50`}></div>

                            <div className={`w-16 h-16 ${stream.bg} ${stream.color} rounded-2xl flex items-center justify-center mb-6`}>
                                <stream.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">{stream.title}</h3>
                            <p className="text-slate-400 text-sm mb-6 h-10">{stream.desc}</p>

                            <div className="space-y-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Key Subjects</span>
                                {stream.subjects.map((sub, j) => (
                                    <div key={j} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                                        <div className={`w-1.5 h-1.5 rounded-full ${stream.bg.replace('bg-', 'bg-').replace('50', '500')}`}></div>
                                        {sub}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Excellence & Support */}
                <div className="grid md:grid-cols-2 gap-12 mb-24">
                    <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl flex flex-col justify-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full -mr-20 -mt-20 opacity-50"></div>
                        <BookOpen className="w-12 h-12 text-secondary mb-6 relative z-10" />
                        <h3 className="text-3xl font-black font-display mb-4 relative z-10">Board Excellence</h3>
                        <p className="text-slate-400 leading-relaxed mb-8 relative z-10">
                            Our systematic approach to board preparation includes regular mock tests, doubt-clearing sessions, and personalized feedback. We have a consistent track record of 100% results with city toppers.
                        </p>
                        <ul className="space-y-3 relative z-10">
                            <li className="flex items-center gap-3"><Scale className="w-5 h-5 text-secondary" /> <span>Weekly Test Series</span></li>
                            <li className="flex items-center gap-3"><Scale className="w-5 h-5 text-secondary" /> <span>Previous Year Analysis</span></li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-[3rem] p-12 text-slate-900 border border-slate-100 shadow-xl relative overflow-hidden flex flex-col justify-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-20 -mt-20"></div>
                        <UserCheck className="w-12 h-12 text-primary mb-6 relative z-10" />
                        <h3 className="text-3xl font-black font-display mb-4 relative z-10">Career Counseling</h3>
                        <p className="text-slate-500 leading-relaxed mb-8 relative z-10">
                            Confusion about the future? Our in-house career counselors guide students towards the right path based on their aptitude and interests. We organize university fairs and alumni talks regularly.
                        </p>
                        <ul className="space-y-3 relative z-10">
                            <li className="flex items-center gap-3"><Scale className="w-5 h-5 text-primary" /> <span>Aptitude Testing</span></li>
                            <li className="flex items-center gap-3"><Scale className="w-5 h-5 text-primary" /> <span>University Application Support</span></li>
                        </ul>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default SeniorSecondary;
