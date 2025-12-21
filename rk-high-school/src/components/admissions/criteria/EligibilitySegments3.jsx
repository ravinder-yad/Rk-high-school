import React from 'react';
import { PenTool, Heart, ShieldCheck, HelpCircle, AlertTriangle, ArrowRight, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Section 14: Admission Test / Interaction
export const AdmissionTestInfo = () => {
    return (
        <div className="w-full py-24 px-4 bg-white border-t border-slate-100">
            <div className="container mx-auto text-center max-w-3xl">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <PenTool className="w-8 h-8 text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Entrance Assessment</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    We conduct a basic proficiency test for applicants of Class 1 and above. This is <span className="font-bold text-indigo-600">NOT a rejection tool</span> but a way to understand the child's academic level for better support.
                </p>
                <div className="flex justify-center gap-4 text-sm font-bold text-slate-500 uppercase tracking-wide">
                    <span>• English</span>
                    <span>• Mathematics</span>
                    <span>• Science (For Class 9+)</span>
                </div>
            </div>
        </div>
    );
};

// Section 15: Special Considerations
export const SpecialConsiderations = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Special Considerations</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600"><Heart className="w-5 h-5" /></div>
                            <h3 className="font-bold text-slate-900">Siblings</h3>
                        </div>
                        <p className="text-slate-600 text-sm">Preference is given to siblings of existing students to assist parents with logistics.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"><ShieldCheck className="w-5 h-5" /></div>
                            <h3 className="font-bold text-slate-900">Alumni Wards</h3>
                        </div>
                        <p className="text-slate-600 text-sm">Children of RK High School Alumni receive special eligibility points during admission.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600"><Heart className="w-5 h-5" /></div>
                            <h3 className="font-bold text-slate-900">Single Girl Child</h3>
                        </div>
                        <p className="text-slate-600 text-sm">We encourage education for girls with specific policy relaxations if applicable.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 16: Fair Admission Policy
export const FairPolicy = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto">
                <div className="bg-gradient-to-r from-slate-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl">
                    <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-emerald-400" />
                    <h2 className="text-3xl font-bold mb-4">Zero Discrimination Policy</h2>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                        RK High School does not discriminate on the basis of caste, creed, religion, or gender.
                        Admission is granted solely on the eligibility criteria mentioned above and availability of seats.
                    </p>
                </div>
            </div>
        </div>
    );
};

// Section 17: FAQs (Eligibility)
export const EligibilityFAQs = () => {
    const questions = [
        { q: "Can a student repeat a class if requested?", a: "Yes, if the parent believes the child needs foundation strengthening." },
        { q: "Is age relaxation provided?", a: "Relaxation up to 30 days may be considered by the Principal depending on the case." },
        { q: "Do you accept mid-term transfer?", a: "Yes, subject to vacancy and valid transfer documents." },
    ];

    return (
        <div className="w-full py-24 px-4 bg-slate-50">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Eligibility FAQs</h2>
                <div className="space-y-4">
                    {questions.map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                            <h4 className="font-bold text-slate-900 flex gap-3 text-lg">
                                <HelpCircle className="w-6 h-6 text-indigo-500 shrink-0" /> {item.q}
                            </h4>
                            <p className="text-slate-600 mt-2 ml-9">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 18: Important Notes
export const ImportantNotes = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl bg-yellow-50 border border-yellow-200 rounded-2xl p-6 flex gap-6 items-start">
                <AlertTriangle className="w-10 h-10 text-yellow-600 shrink-0" />
                <div>
                    <h3 className="text-xl font-bold text-yellow-800 mb-2">Important Note</h3>
                    <p className="text-yellow-900/80 leading-relaxed mb-4">
                        Submission of false documents will lead to cancellation of admission at any stage.
                        The decision of the Principal regarding eligibility and admission is final and binding.
                    </p>
                    <p className="text-sm font-bold text-yellow-800 uppercase tracking-wide">RK High School Administration</p>
                </div>
            </div>
        </div>
    );
};

// Section 19: Apply Check CTA
export const CheckEligibilityCTA = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full py-24 px-4 bg-indigo-50">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Eligible? Start Your Journey!</h2>
                <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
                    If you meet the criteria outlined above, we invite you to take the next step towards joining our RK Family.
                </p>
                <button
                    onClick={() => navigate('/admissions/form')}
                    className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full text-xl shadow-lg hover:shadow-indigo-500/50 transition-all transform hover:-translate-y-1"
                >
                    Apply Now <ArrowRight className="inline-block ml-2 w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

// Section 20: Final CTA
export const EligibilityFinalCTA = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full py-24 px-4 bg-slate-950 text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Not Sure About Eligibility?
                </h2>
                <p className="text-slate-400 mb-10 text-lg">Our counselors are here to guide you through the specifics.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-10 py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-full text-lg shadow-lg transition-all"
                    >
                        <Phone className="inline-block mr-2 w-5 h-5 text-indigo-600" /> Contact Admission Team
                    </button>
                    <button
                        onClick={() => navigate('/admissions/process')}
                        className="px-10 py-4 bg-white/5 border border-white/20 hover:bg-white/10 text-white font-bold rounded-full text-lg transition-all backdrop-blur-md"
                    >
                        Review Admission Process
                    </button>
                </div>
            </div>
        </div>
    );
};
