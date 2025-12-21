import React from 'react';
import { FileSpreadsheet, Binary, Users, Code, Globe, ShieldAlert, MonitorCheck, Terminal } from 'lucide-react';

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

// Section 8 & 9: Middle & Senior School
export const MiddleSeniorComputers = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Progressive Curriculum</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-[4rem]"></div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <FileSpreadsheet className="w-8 h-8 text-indigo-500" /> Middle School (6-8)
                        </h3>
                        <p className="text-slate-600 mb-6">Moving from consumption to creation. Students learn to organize data and present ideas.</p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-bold rounded-lg">MS Excel</span>
                            <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-bold rounded-lg">PowerPoint</span>
                            <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-bold rounded-lg">HTML Basics</span>
                            <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-bold rounded-lg">Internet Safety</span>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-50 rounded-bl-[4rem]"></div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <Binary className="w-8 h-8 text-cyan-500" /> Senior School (9-12)
                        </h3>
                        <p className="text-slate-600 mb-6">Advanced technical skills aligned with CBSE board requirements and future career paths.</p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 bg-cyan-50 text-cyan-700 text-sm font-bold rounded-lg">Python Programming</span>
                            <span className="px-3 py-1 bg-cyan-50 text-cyan-700 text-sm font-bold rounded-lg">SQL / Database</span>
                            <span className="px-3 py-1 bg-cyan-50 text-cyan-700 text-sm font-bold rounded-lg">Networking</span>
                            <span className="px-3 py-1 bg-cyan-50 text-cyan-700 text-sm font-bold rounded-lg">AI Basics</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 10: Methodology
export const ComputerMethodology = () => {
    return (
        <div className="w-full py-16 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">How We Teach</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <PWCard title="Practical-First" desc="80% hands-on coding and 20% theory." icon={<Terminal className="w-6 h-6" />} color="indigo" />
                    <PWCard title="1:1 Ratio" desc="One dedicated computer for every student." icon={<MonitorCheck className="w-6 h-6" />} color="cyan" />
                    <PWCard title="Project Based" desc="Learning by building real-world mini projects." icon={<Code className="w-6 h-6" />} color="emerald" />
                    <PWCard title="Guided Labs" desc="Instructor-led sessions with live demonstrations." icon={<Users className="w-6 h-6" />} color="purple" />
                </div>
            </div>
        </div>
    );
};

// Section 11: Coding Focus
export const CodingFocus = () => {
    return (
        <div className="w-full py-20 px-4 bg-gradient-to-br from-indigo-900 to-slate-900 text-white">
            <div className="container mx-auto text-center">
                <Code className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-bold mb-10">Coding: The New Literacy</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {[
                        { lang: "Scratch", desc: "Block-based coding for logic building." },
                        { lang: "Python", desc: "Versatile language for AI & Data Science." },
                        { lang: "HTML/CSS", desc: "The building blocks of the web." },
                        { lang: "SQL", desc: "Managing and querying databases." }
                    ].map((c, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-full md:w-64 text-left hover:-translate-y-2 transition-transform">
                            <h4 className="text-xl font-bold text-cyan-300 mb-2">{c.lang}</h4>
                            <p className="text-slate-300 text-sm">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 12 & 13: Digital Literacy & Safety
export const DigitalSafety = () => {
    return (
        <div id="safety" className="w-full py-20 px-4 bg-white scroll-mt-20">
            <div className="container mx-auto max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2 block">Responsible Citizenship</span>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Digital Literacy & Safety</h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            We teach students not just how to use the internet, but how to use it responsibly. Cyber safety is a core part of our curriculum.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600"><Globe className="w-4 h-4" /></div>
                                <span className="font-bold text-slate-700">Safe Browsing Habits</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600"><ShieldAlert className="w-4 h-4" /></div>
                                <span className="font-bold text-slate-700">Identifying Phishing & Scams</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
                        <h3 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                            <ShieldAlert className="w-6 h-6" /> Lab Firewall
                        </h3>
                        <p className="text-emerald-800 text-sm mb-6">
                            Our lab network is protected by enterprise-grade firewalls with content filtering to ensuring a safe browsing environment for students.
                        </p>
                        <div className="flex gap-2 text-xs font-bold text-emerald-700">
                            <span className="bg-white px-3 py-1 rounded-full border border-emerald-200">24/7 Monitoring</span>
                            <span className="bg-white px-3 py-1 rounded-full border border-emerald-200">Restricted Access</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
