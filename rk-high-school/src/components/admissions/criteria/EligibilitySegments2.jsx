import React from 'react';
import { FileText, Award, Calendar, ExternalLink, Globe, AlertCircle, Calculator, Palette, Beaker } from 'lucide-react';

// Section 7: Secondary School Eligibility (Class 9-10)
export const SecondaryEligibility = () => {
    return (
        <div id="secondary" className="w-full py-20 px-4 bg-indigo-50/50 border-t border-slate-200">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                        Classes 9 & 10
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Secondary Eligibility</h2>
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 text-left">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Class 9</h3>
                                <p className="text-slate-600 mb-4">Admission is granted based on the result of Class 8 and an entrance test.</p>
                                <div className="p-4 bg-slate-50 rounded-xl text-sm font-medium border border-slate-100">
                                    ✅ TC Counter-signed by authority required if from another board/state.
                                </div>
                            </div>
                            <div className="w-px bg-slate-200 hidden md:block"></div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-4 text-orange-600">Class 10 (Critical)</h3>
                                <p className="text-slate-600 mb-4">Direct admission to Class 10 is generally <span className="text-red-500 font-bold">NOT</span> granted except in transfer cases with valid Transfer Order of parents.</p>
                                <div className="p-4 bg-orange-50 rounded-xl text-sm font-medium border border-orange-100 text-orange-800">
                                    ⚠️ Subject to CBSE Bye-Laws approval.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 8: Senior Secondary Eligibility (Class 11-12)
export const SeniorEligibility = () => {
    return (
        <div id="senior" className="w-full py-20 px-4 bg-emerald-50/50 border-t border-slate-200">
            <div className="container mx-auto text-center mb-12">
                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                    Classes 11 & 12
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Senior Secondary Eligibility</h2>
                <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                    Admission to Class 11 is provisional until Class 10 Board results are declared.
                    Stream allocation is purely merit-based.
                </p>
            </div>
        </div>
    );
};

// Section 9: Stream-wise Criteria
export const StreamWiseCriteria = () => {
    return (
        <div className="w-full pb-24 px-4 bg-emerald-50/50">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Science */}
                <div className="bg-white p-8 rounded-3xl shadow-md border-t-8 border-blue-600 hover:-translate-y-2 transition-transform">
                    <Beaker className="w-10 h-10 text-blue-600 mb-6" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Science Stream</h3>
                    <p className="text-slate-500 text-sm mb-6">PCM / PCB</p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-slate-700 font-medium"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> &gt; 75% in Math & Science</li>
                        <li className="flex items-center gap-2 text-slate-700 font-medium"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> &gt; 70% Aggregate</li>
                    </ul>
                </div>

                {/* Commerce */}
                <div className="bg-white p-8 rounded-3xl shadow-md border-t-8 border-emerald-600 hover:-translate-y-2 transition-transform">
                    <Calculator className="w-10 h-10 text-emerald-600 mb-6" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Commerce Stream</h3>
                    <p className="text-slate-500 text-sm mb-6">With / Without Math</p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-slate-700 font-medium"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> &gt; 60% Aggregate</li>
                        <li className="flex items-center gap-2 text-slate-700 font-medium"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> &gt; 60% in Math (If Opted)</li>
                    </ul>
                </div>

                {/* Arts */}
                <div className="bg-white p-8 rounded-3xl shadow-md border-t-8 border-orange-600 hover:-translate-y-2 transition-transform">
                    <Palette className="w-10 h-10 text-orange-600 mb-6" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Humanities / Arts</h3>
                    <p className="text-slate-500 text-sm mb-6">History, Pol Sci, Geog</p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-slate-700 font-medium"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div> Open to all students</li>
                        <li className="flex items-center gap-2 text-slate-700 font-medium"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div> &gt; 50% Aggregate preferred</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

// Section 10: Academic Document Requirements
export const DocumentReqs = () => {
    return (
        <div className="w-full py-24 px-4 bg-white border-t border-slate-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Required Academic Documents</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Report Card", desc: "Final Report Card of the previously passed class." },
                        { title: "Transfer Certificate", desc: "Original TC from previous school (MANDATORY)." },
                        { title: "Birth Certificate", desc: "For Pre-Primary & Class 1 admissions." },
                        { title: "Character Cert", desc: "Conduct certificate for Class 9 and above." }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <FileText className="w-8 h-8 text-indigo-500 mb-4" />
                            <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                            <p className="text-sm text-slate-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 11: Age Criteria Table
export const AgeCriteriaTable = () => {
    const data = [
        { class: "Nursery", min: "3 Years", max: "4 Years" },
        { class: "LKG", min: "4 Years", max: "5 Years" },
        { class: "UKG", min: "5 Years", max: "6 Years" },
        { class: "Class 1", min: "6 Years", max: "7 Years" },
        { class: "Class 2", min: "7 Years", max: "8 Years" },
        { class: "Class 3", min: "8 Years", max: "9 Years" },
    ];

    return (
        <div className="w-full py-24 px-4 bg-slate-50">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Age Criteria Chart <span className="text-slate-400 text-lg font-normal">(As on 31 March)</span></h2>
                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="grid grid-cols-3 bg-slate-900 text-white font-bold p-5 text-center tracking-wide">
                        <div>Class</div>
                        <div>Min Age</div>
                        <div>Max Age</div>
                    </div>
                    {data.map((row, idx) => (
                        <div key={idx} className="grid grid-cols-3 p-4 text-center border-b border-slate-100 hover:bg-slate-50 transition-colors">
                            <div className="font-bold text-slate-900">{row.class}</div>
                            <div className="text-slate-600">{row.min}</div>
                            <div className="text-slate-600">{row.max}</div>
                        </div>
                    ))}
                    <div className="p-4 bg-yellow-50 text-center text-sm text-yellow-800 font-medium">
                        Note: For higher classes, add 1 year progressively.
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 12: Transfer Student Eligibility
export const TransferEligibility = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 w-full bg-indigo-50 p-10 rounded-3xl relative overflow-hidden">
                    <ExternalLink className="w-32 h-32 text-indigo-200 absolute -right-6 -bottom-6 rotate-12" />
                    <h3 className="text-2xl font-bold text-indigo-900 mb-4 relative z-10">Mid-Term Transfers</h3>
                    <p className="text-indigo-800 relative z-10">
                        Mid-session admissions are subject to vacancy. Students must provide a valid reason for transfer (e.g., Parent's Transfer Order).
                        Fee will be charged on a pro-rata basis.
                    </p>
                </div>
                <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Transfer Students</h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        We welcome students from all over the country. Our eligibility ensures that the transition is smooth academically.
                        The syllabus covered in the previous school will be taken into consideration during assessment.
                    </p>
                </div>
            </div>
        </div>
    );
};

// Section 13: Out-of-State / Other Board
export const OtherBoards = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto">
                <div className="bg-white shadow-lg rounded-3xl p-8 md:p-12 border border-slate-200 flex flex-col md:flex-row items-center gap-8">
                    <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center shrink-0">
                        <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Other Boards (ICSE / State Board)</h3>
                        <p className="text-slate-600">
                            Students from ICSE or State Boards are eligible for admission. They must submit a Transfer Certificate
                            <strong> countersigned by the District Education Officer (DEO)</strong> if coming from outside the state.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
