import React from 'react';
import docImg from '../../../assets/images/gallery/gallery-page-9.jpg';
import { Users, FileCheck, GraduationCap, Calendar, FileText, Wallet, Clock, Check } from 'lucide-react';
import PWStyleCard from '../../PWStyleCard';

// Section 7: Step 4 - Interaction / Assessment
export const StepInteraction = () => {
    return (
        <div id="step-4" className="w-full py-20 px-4 bg-white border-t border-slate-100">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 w-full h-80 rounded-3xl overflow-hidden shadow-xl relative">
                    <img
                        src={docImg}
                        alt="Student Interview"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-900/10"></div>
                </div>
                <div className="flex-1">
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                        Step 4
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Interaction & Assessment</h2>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        For Pre-Primary, we invite parents and the child for a friendly informal interaction to understand the child's readiness.
                        For higher classes, a basic written proficiency test in Math and English is conducted.
                    </p>
                    <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl text-blue-800 text-sm font-medium">
                        ✨ No pressure! We just want to know your child better to place them in the right learning environment.
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 8: Step 5 - Confirmation
export const StepConfirmation = () => {
    return (
        <div id="step-5" className="w-full py-20 px-4 bg-slate-900 text-white">
            <div className="container mx-auto text-center max-w-3xl">
                <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                    Step 5
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Admission Confirmation</h2>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                    <FileCheck className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <p className="text-xl leading-relaxed mb-6 text-slate-200">
                        Selected candidates will receive an <strong>Admission Offer Letter</strong> via Email/SMS.
                        To confirm the seat, parents must pay the Admission Fee within 3 days of receiving the offer.
                    </p>
                    <button className="px-8 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-colors">
                        Pay Fees Online
                    </button>
                </div>
            </div>
        </div>
    );
};

// Section 9: Eligibility Criteria
export const EligibilityCriteria = () => {
    return (
        <div className="w-full py-24 px-4 bg-slate-50">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Who Can Apply?</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { level: "Pre-Primary", text: "Minimum age criteria met. Toilet trained (for Nursery).", color: "bg-pink-50 text-pink-700" },
                        { level: "Primary (1-5)", text: "Pass certificate of previous class from a recognized school.", color: "bg-blue-50 text-blue-700" },
                        { level: "Middle (6-8)", text: "Proficiency in basic Math & Languages. valid Transfer Certificate.", color: "bg-orange-50 text-orange-700" },
                        { level: "Senior (11-12)", text: "Class 10 Board Results. Stream allocation based on merit.", color: "bg-indigo-50 text-indigo-700" },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                            <div className={`inline-block px-3 py-1 rounded-lg text-xs font-bold uppercase mb-4 ${item.color}`}>
                                {item.level}
                            </div>
                            <p className="text-slate-700 font-medium">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 10: Age Criteria
export const AgeCriteria = () => {
    const ageData = [
        { class: "Nursery", age: "3+ Years" },
        { class: "LKG", age: "4+ Years" },
        { class: "UKG", age: "5+ Years" },
        { class: "Class 1", age: "6+ Years" },
    ];

    return (
        <div className="w-full py-24 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Age Criteria (As on 31st March)</h2>
                <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
                    <div className="grid grid-cols-2 bg-slate-900 text-white font-bold p-4 text-center">
                        <div>Class</div>
                        <div>Minimum Age</div>
                    </div>
                    {ageData.map((row, idx) => (
                        <div key={idx} className={`grid grid-cols-2 p-5 text-center border-b border-slate-100 hover:bg-slate-50 transition-colors ${idx === ageData.length - 1 ? 'border-b-0' : ''}`}>
                            <div className="font-bold text-slate-900">{row.class}</div>
                            <div className="text-slate-600">{row.age}</div>
                        </div>
                    ))}
                </div>
                <p className="text-center text-xs text-slate-400 mt-4">* Age relaxation is subject to Principal's discretion and local government rules.</p>
            </div>
        </div>
    );
};

// Section 11: Required Documents
export const RequiredDocuments = () => {
    return (
        <div className="w-full py-24 px-4 bg-slate-50">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Documents Checklist</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        "Birth Certificate (Copy)",
                        "Passport Size Photos (4)",
                        "Aadhar Card (Child & Parents)",
                        "Transfer Certificate (Original)",
                        "Previous Report Card",
                        "Medical Fitness Certificate",
                        "Migration Certificate (XI)",
                        "Caste Certificate (if applicable)"
                    ].map((doc, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl flex items-center gap-4 shadow-sm border border-slate-200">
                            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                                <FileText className="w-4 h-4" />
                            </div>
                            <span className="font-medium text-slate-700 text-sm">{doc}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 12: Fee Structure (Overview)
export const FeeOverview = () => {
    return (
        <div className="w-full py-20 px-4 bg-gradient-to-br from-indigo-900 to-slate-900 text-white">
            <div className="container mx-auto text-center max-w-3xl">
                <Wallet className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-6">Transparent Fee Structure</h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                    At RK High School, we believe in complete financial transparency. There are no hidden charges.
                    Our fee includes tuition, library access, laboratory costs, and basic medical care.
                </p>
                <div className="flex justify-center gap-4">
                    <div className="px-6 py-2 rounded-lg bg-white/10 border border-white/20 text-sm">Quarterly Payment Mode</div>
                    <div className="px-6 py-2 rounded-lg bg-white/10 border border-white/20 text-sm">Online Fee Portal</div>
                </div>
            </div>
        </div>
    );
};

// Section 13: Important Dates
export const ImportantDates = () => {
    return (
        <div className="w-full py-24 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Important Dates (2024-25)</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Registration Opens", date: "1st December 2023", icon: <Clock className="w-8 h-8 text-black" />, status: "completed" },
                        { title: "Entrance Tests", date: "Every Saturday (Feb-March)", icon: <FileText className="w-8 h-8 text-indigo-600" />, status: "active" },
                        { title: "Session Begins", date: "1st April 2024", icon: <GraduationCap className="w-8 h-8 text-emerald-600" />, status: "upcoming" }
                    ].map((item, idx) => (
                        <div key={idx} className="relative p-8 rounded-3xl border border-slate-100 bg-slate-50 text-center overflow-hidden">
                            {item.status === 'active' && <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">ACTIVE</div>}
                            <div className="mb-4 flex justify-center">{item.icon}</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-slate-600 font-medium">{item.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
