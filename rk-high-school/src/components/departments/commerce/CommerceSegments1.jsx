import React from 'react';
import heroImg from '../../../assets/images/student-life/gallery-page-5.jpg';
import { motion } from 'framer-motion';
import { TrendingUp, Briefcase, Calculator, PieChart, ArrowRight, BarChart3, LineChart } from 'lucide-react';

// Shared PW Card Component
const PWCard = ({ title, desc, icon, color = "indigo", children }) => (
    <div className={`group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}>
        <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110`}></div>
        <div className={`w-14 h-14 bg-${color}-100 rounded-2xl flex items-center justify-center text-${color}-600 mb-6 relative z-10 group-hover:rotate-6 transition-transform`}>
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3 relative z-10 group-hover:text-indigo-600 transition-colors">{title}</h3>
        <p className="text-slate-600 mb-4 relative z-10 leading-relaxed">{desc}</p>

        {children && <div className="relative z-10 mt-4">{children}</div>}

        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
            <ArrowRight className={`w-5 h-5 text-${color}-500`} />
        </div>
    </div>
);

// Section 1: Hero Section
export const CommerceHero = () => {
    return (
        <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950">
            <div className="absolute inset-0">
                <img
                    src={heroImg}
                    alt="Commerce Students"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/40"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-teal-300 font-bold mb-6 border border-white/20">
                        Department of Commerce
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Building Future <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">Business Leaders</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium mb-10">
                        Mastering the art of Finance, Economics, and Management through practical education and real-world case studies.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-teal-500/25">
                            Focus Areas
                        </button>
                        <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/20 backdrop-blur-sm transition-all">
                            Admission Enquiry
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// Section 2: Department Intro
export const CommerceIntro = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-white rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-500 via-indigo-500 to-emerald-500"></div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Practical Education</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        The Commerce stream at RK High School focuses on bridging the gap between textbook theory and the real business world. We empower students with <span className="text-teal-600 font-bold">financial literacy, analytical thinking, and entrepreneurial skills</span> essential for the corporate sector.
                    </p>
                    <div className="flex justify-center gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-teal-500 rounded-full"></div> Finance</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-indigo-500 rounded-full"></div> Management</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Economics</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 3: Subject Overview
export const CommerceSubjects = () => {
    const subjects = [
        { title: "Accountancy", icon: <Calculator className="w-6 h-6" />, color: "indigo", id: "accounts" },
        { title: "Business Studies", icon: <Briefcase className="w-6 h-6" />, color: "teal", id: "business" },
        { title: "Economics", icon: <TrendingUp className="w-6 h-6" />, color: "emerald", id: "economics" },
        { title: "Mathematics", icon: <PieChart className="w-6 h-6" />, color: "orange", id: "math" }
    ];

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="w-full py-12 px-4 bg-slate-50">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {subjects.map((sub, idx) => (
                        <div
                            key={idx}
                            onClick={() => scrollToSection(sub.id)}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-teal-300 cursor-pointer flex flex-col items-center justify-center gap-3 transition-all hover:-translate-y-1 group"
                        >
                            <div className={`w-12 h-12 bg-${sub.color}-50 rounded-full flex items-center justify-center text-${sub.color}-600 group-hover:scale-110 transition-transform`}>
                                {sub.icon}
                            </div>
                            <span className="font-bold text-slate-700">{sub.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 4: Accountancy Department
export const AccountancyDept = () => {
    return (
        <div id="accounts" className="w-full py-20 px-4 bg-white scroll-mt-20">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-2 block">The Language of Business</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Accountancy</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            From basic journal entries to complex company balance sheets, we ensure students grasp the core of financial reporting. Our focus is on accuracy, standards (GAAP/IndAS), and analysis.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {['Financial Accounting', 'Corporate Accounts', 'Cash Flow Analysis'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600"><BarChart3 className="w-3 h-3" /></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 w-full">
                        <PWCard
                            title="Real-World Skills"
                            desc="Students solve practical problems based on real company data to understand statement analysis better."
                            icon={<Calculator className="w-8 h-8" />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 5: Business Studies
export const BusinessStudiesDept = () => {
    return (
        <div id="business" className="w-full py-20 px-4 bg-slate-50 scroll-mt-20">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                    <div className="flex-1">
                        <span className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-2 block">Management & Operations</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Business Studies</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            We explore the dynamics of modern organizations. Students learn about marketing management, financial markets, and principles of management through interactive case studies.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-xl border border-slate-200">
                                <h4 className="font-bold text-slate-900 mb-1">Principles</h4>
                                <p className="text-sm text-slate-500">Taylor & Fayol</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-slate-200">
                                <h4 className="font-bold text-slate-900 mb-1">Functions</h4>
                                <p className="text-sm text-slate-500">Planning to Control</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <PWCard
                            title="Case Study Approach"
                            desc="Learning through the lens of successful startups and multinational corporations."
                            icon={<Briefcase className="w-8 h-8" />}
                            color="teal"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 6: Economics Department
export const EconomicsDept = () => {
    return (
        <div id="economics" className="w-full py-20 px-4 bg-white scroll-mt-20">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2 block">Markets & Behavior</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Economics</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            Developing analytical minds that understand how economies function. We cover Microeconomics (consumer behavior) and Macroeconomics (national income, banking) in depth.
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold border border-emerald-100">Micro & Macro</span>
                            <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold border border-emerald-100">Statistics</span>
                            <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold border border-emerald-100">Indian Economy</span>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <PWCard
                            title="Analytical Thinking"
                            desc="Understanding data trends, graphs, and economic policies that shape the nation."
                            icon={<TrendingUp className="w-8 h-8" />}
                            color="emerald"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 7: Maths Support (Optional)
export const CommMathSupport = () => {
    return (
        <div id="math" className="w-full py-20 px-4 bg-slate-900 text-white scroll-mt-20">
            <div className="container mx-auto max-w-4xl text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange-400">
                    <PieChart className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Mathematics The Quantitative Edge</h2>
                <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                    For students aiming for top-tier Finance, CA, or Economics courses, Mathematics acts as a powerful differentiator. We focus on Applied Maths relevant to business.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                    {['Financial Mathematics', 'Calculus for Economics', 'Statistical Analysis'].map((topic, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                            <h4 className="font-bold text-orange-400 mb-2">{topic}</h4>
                            <p className="text-sm text-slate-400">Key for Entrance Exams</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
