import React from 'react';
import { AlertTriangle, Percent, RotateCcw, HelpCircle, FileDown, Phone, ArrowRight, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Section 14: Late Fee Policy
export const LateFeePolicy = () => {
    return (
        <div className="w-full py-20 px-4 bg-yellow-50">
            <div className="container mx-auto max-w-4xl flex items-start gap-6 border-l-4 border-yellow-500 pl-6">
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-yellow-900 mb-2">Late Fee Policy</h3>
                    <p className="text-yellow-800 leading-relaxed mb-4">
                        Fees must be paid by the 10th of the first month of every quarter.
                        A grace period of 5 days is allowed. Post that, a fine of ₹ 50 per day will be applicable until the 20th.
                    </p>
                    <div className="text-sm font-bold text-yellow-900/70">
                        * Names may be struck off the rolls if arrears continue beyond one quarter.
                    </div>
                </div>
                <AlertTriangle className="w-12 h-12 text-yellow-600 hidden md:block" />
            </div>
        </div>
    );
};

// Section 15: Fee Concessions
export const FeeConcessions = () => {
    return (
        <div className="w-full py-24 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Fee Concessions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="group bg-slate-50 p-6 rounded-3xl transition-all hover:bg-emerald-50">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm mb-4 group-hover:scale-110 transition-transform"><Percent className="w-6 h-6" /></div>
                        <h3 className="font-bold text-slate-900 text-lg mb-2">Sibling Waiver</h3>
                        <p className="text-slate-600 text-sm">10% waiver on Annual Charges for the younger sibling.</p>
                    </div>
                    <div className="group bg-slate-50 p-6 rounded-3xl transition-all hover:bg-indigo-50">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-sm mb-4 group-hover:scale-110 transition-transform"><GraduationCap className="w-6 h-6" /></div>
                        <h3 className="font-bold text-slate-900 text-lg mb-2">Merit Scholarship</h3>
                        <p className="text-slate-600 text-sm">Up to 50% Tuition Fee waiver for Class 11 students with &gt;95% in Boards.</p>
                    </div>
                    <div className="group bg-slate-50 p-6 rounded-3xl transition-all hover:bg-purple-50">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-purple-600 shadow-sm mb-4 group-hover:scale-110 transition-transform"><Percent className="w-6 h-6" /></div>
                        <h3 className="font-bold text-slate-900 text-lg mb-2">Single Parent</h3>
                        <p className="text-slate-600 text-sm">Special consideration on a case-to-case basis by management.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 16: Refund Policy
export const RefundPolicy = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto max-w-3xl text-center">
                <RotateCcw className="w-10 h-10 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-4">Refund Policy</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Admission fees and Annual charges are non-refundable once paid.
                    If a student withdraws mid-session, tuition fees paid for that quarter will not be refunded.
                    Refund of caution money (if any) is processed within 30 days of leaving certificate issuance.
                </p>
            </div>
        </div>
    );
};

// Section 17: Important Notes
export const FeeNotes = () => {
    return (
        <div className="w-full py-12 px-4 bg-white border-b border-slate-100">
            <div className="container mx-auto">
                <h4 className="font-bold text-slate-400 uppercase text-xs tracking-widest mb-4">Official Note</h4>
                <p className="text-slate-500 text-sm italic">
                    * The Management reserves the right to revise the fees as determined by the School's Board of Management.
                    The fee structure is subject to change based on government regulations or economic factors.
                </p>
            </div>
        </div>
    );
};

// Section 18: FAQs (Fees Related)
export const FeeFAQs = () => {
    const questions = [
        { q: "Is the fee inclusive of books and uniforms?", a: "No, books and uniforms must be purchased separately from authorized vendors." },
        { q: "Can I pay the entire year's fee in advance?", a: "Yes, parents paying the full annual fee in advance get a 5% discount on tuition." },
        { q: "Is transport fee mandatory?", a: "No, transport fee is only applicable if you opt for the school bus service." },
    ];

    return (
        <div className="w-full py-24 px-4 bg-slate-50">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center flex items-center justify-center gap-3">
                    <HelpCircle className="w-8 h-8 text-indigo-500" /> Fee FAQs
                </h2>
                <div className="space-y-4">
                    {questions.map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                            <h4 className="font-bold text-slate-900 text-lg mb-2">{item.q}</h4>
                            <p className="text-slate-600 text-sm">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 19: Download / Enquire CTA
export const DownloadFeeCTA = () => {
    return (
        <div className="w-full py-24 px-4 bg-white">
            <div className="container mx-auto">
                <div className="max-w-5xl mx-auto bg-slate-900 rounded-3xl p-10 md:p-14 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-4">Deep Dive into Details</h2>
                        <p className="text-slate-400 mb-8">
                            Download the comprehensive Fee Policy document covering every minute detail regarding payments, fines, and withdrawals.
                        </p>
                        <button className="px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-colors flex items-center">
                            <FileDown className="w-5 h-5 mr-2" /> Download Official PDF
                        </button>
                    </div>
                    <div className="flex-1 border-l border-slate-700 pl-0 md:pl-10">
                        <h3 className="font-bold text-xl mb-4 text-emerald-400">Accounts Office</h3>
                        <div className="space-y-2 text-slate-300">
                            <p>Monday - Saturday</p>
                            <p>9:00 AM - 2:00 PM</p>
                            <p className="flex items-center mt-4"><Phone className="w-4 h-4 mr-2" /> +91 98765 00000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 20: Final CTA
export const FeeFinalCTA = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full py-24 px-4 bg-gradient-to-r from-indigo-600 to-indigo-800 text-center text-white">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                    Need Help Understanding?
                </h2>
                <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
                    Our admission counselors are happy to walk you through the fee structure and payment plans over a call or coffee.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-full text-lg shadow-lg transition-all"
                    >
                        Talk to Admission Team
                    </button>
                    <button
                        onClick={() => navigate('/admissions/process')}
                        className="px-10 py-4 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold rounded-full text-lg transition-all"
                    >
                        Visit Campus
                    </button>
                </div>
            </div>
        </div>
    );
};
