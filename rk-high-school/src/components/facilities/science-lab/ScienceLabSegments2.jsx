import React from 'react';
import { Microscope, ShieldCheck, Flame, Users, Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';

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

// Section 8 & 9: Infrastructure & Equipment
export const LabInfra = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">World-Class Infrastructure</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex items-start gap-6">
                        <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                            <Microscope className="w-8 h-8 text-indigo-600" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Modern Workstations</h3>
                            <p className="text-slate-600 text-sm">Acid-resistant tables, individual sinks with running water, and proper reagent shelves for every student group.</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex items-start gap-6">
                        <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                            <ShieldCheck className="w-8 h-8 text-emerald-600" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Safety First Design</h3>
                            <p className="text-slate-600 text-sm">Multiple exits, proper ventilation/exhaust systems, and non-slip flooring to prevent accidents.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 10: Methodology
export const LabMethodology = () => {
    return (
        <div className="w-full py-16 px-4 bg-slate-50">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Pedagogy of Experiments</h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 relative">
                    {/* Lines connecting steps for desktop */}
                    <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-indigo-100 -z-10"></div>

                    {[
                        { step: "1", title: "Observe", color: "indigo" },
                        { step: "2", title: "Hypothesize", color: "cyan" },
                        { step: "3", title: "Experiment", color: "teal" },
                        { step: "4", title: "Analyze", color: "emerald" },
                        { step: "5", title: "Conclude", color: "purple" }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm w-full md:w-48">
                            <div className={`w-8 h-8 rounded-full bg-${item.color}-100 text-${item.color}-700 font-bold flex items-center justify-center mx-auto mb-3`}>
                                {item.step}
                            </div>
                            <div className="font-bold text-slate-800">{item.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 11 & 12: Safety Measures & Student Rules
export const LabSafety = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Measures */}
                <div>
                    <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-2 block">Zero Tolerance</span>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Safety Measures</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <PWCard title="Fire Safety" desc="Extinguishers & Sand Buckets." icon={<Flame className="w-6 h-6" />} color="red" />
                        <PWCard title="First Aid" desc="Fully stocked medical kit." icon={<ShieldCheck className="w-6 h-6" />} color="emerald" />
                    </div>
                </div>

                {/* Rules */}
                <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-200">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <AlertTriangle className="w-6 h-6 text-orange-500" /> Student Rules
                    </h3>
                    <ul className="space-y-4">
                        {[
                            "Wear lab coats at all times.",
                            "Do not touch chemicals without permission.",
                            "Tie back long hair.",
                            "Wash hands after experiments.",
                            "Report breakage immediately."
                        ].map((rule, i) => (
                            <li key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100">
                                <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                                <span className="text-slate-700 font-medium text-sm">{rule}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

// Section 13 & 14: Timings & Supervision
export const LabDetails = () => {
    return (
        <div className="w-full py-16 px-4 bg-indigo-900 text-white">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                        <Clock className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Lab Timings</h3>
                        <p className="text-indigo-200 text-sm">Scheduled Practical Periods (Class 9-12)</p>
                    </div>
                </div>
                <div className="h-px w-full md:w-px md:h-16 bg-white/20"></div>
                <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                        <Users className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Expert Supervision</h3>
                        <p className="text-indigo-200 text-sm">Qualified Instructors + Lab Assistants</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
