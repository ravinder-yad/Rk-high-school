import React from 'react';
import { CheckCircle2, HeartPulse, Info, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Section 13: Additional Services
export const AdditionalOptions = ({ data, onChange }) => {
    return (
        <div className="w-full py-4 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Additional Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label className="flex items-center gap-4 p-4 border border-slate-200 rounded-2xl cursor-pointer hover:border-indigo-300 transition-colors">
                            <input
                                type="checkbox"
                                checked={data?.cafeteria || false}
                                onChange={(e) => onChange("cafeteria", e.target.checked)}
                                className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500 border-gray-300"
                            />
                            <div>
                                <span className="block font-bold text-slate-700">Cafeteria Meal Plan</span>
                                <span className="text-xs text-slate-400">Daily veg lunch provided</span>
                            </div>
                        </label>
                        <label className="flex items-center gap-4 p-4 border border-slate-200 rounded-2xl cursor-pointer hover:border-indigo-300 transition-colors">
                            <input
                                type="checkbox"
                                checked={data?.dayCare || false}
                                onChange={(e) => onChange("dayCare", e.target.checked)}
                                className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500 border-gray-300"
                            />
                            <div>
                                <span className="block font-bold text-slate-700">Day Care Facility</span>
                                <span className="text-xs text-slate-400">Post-school care till 5:00 PM</span>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 14: Medical Information
export const MedicalInfo = ({ data, onChange }) => {
    return (
        <div className="w-full py-4 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <HeartPulse className="text-pink-500 w-5 h-5" /> Medical Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Blood Group</label>
                            <select
                                value={data?.bloodGroup || ""}
                                onChange={(e) => onChange("bloodGroup", e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white"
                            >
                                <option>Unknown</option><option>A+</option><option>B+</option><option>O+</option><option>AB+</option><option>A-</option><option>B-</option><option>O-</option><option>AB-</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Specific Allergies / Conditions</label>
                            <input
                                type="text"
                                placeholder="N/A if none"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200"
                                value={data?.allergies || ""}
                                onChange={(e) => onChange("allergies", e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 15: Declaration
export const ParentDeclaration = ({ value, onChange }) => {
    return (
        <div className="w-full py-4 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 text-sm text-slate-600">
                    <div className="flex gap-4 items-start">
                        <input
                            type="checkbox"
                            className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500 border-gray-300"
                            checked={value || false}
                            onChange={(e) => onChange(e.target.checked)}
                        />
                        <p>
                            I hereby declare that the information provided above is correct. I understand that admission is subject to verification of documents and availability of seats. I agree to abide by the school rules and regulations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 16 & 17: Application Fee & Review (Simplified)
export const FormReview = () => {
    return (
        <div className="w-full py-4 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-yellow-50 rounded-3xl p-6 border border-yellow-200 flex items-start gap-4 mb-4">
                    <Info className="w-6 h-6 text-yellow-600 shrink-0" />
                    <div>
                        <h4 className="font-bold text-yellow-900">Application Fee info</h4>
                        <p className="text-yellow-800 text-sm">
                            A nominal registration fee of ₹ 1,000 may be payable at the time of interaction/document submission at the school office. No online payment required now.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 18: Submit CTA
export const SubmitApplication = ({ onSubmit }) => {
    return (
        <div className="w-full py-12 px-4 bg-white">
            <div className="container mx-auto max-w-4xl text-center">
                <button
                    onClick={onSubmit}
                    className="w-full md:w-auto px-12 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full text-xl shadow-lg hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-1"
                >
                    Submit Application <CheckCircle2 className="inline-block ml-2 w-6 h-6" />
                </button>
                <p className="mt-4 text-slate-400 text-sm">
                    By clicking submit, your application will be securely sent to our admissions team.
                </p>
            </div>
        </div>
    );
};

// Section 19: Confirmation Card
export const SubmissionSuccess = () => {
    const navigate = useNavigate();
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Application Submitted!</h2>
                <p className="text-slate-500 mb-6">
                    Thank you! Your application ID is <span className="font-mono font-bold text-slate-900">RK-{Math.floor(1000 + Math.random() * 9000)}</span>.
                    We have stored your application details.
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors"
                >
                    Return to Home
                </button>
            </div>
        </div>
    );
};

// Section 20: Next Steps
export const NextSteps = () => {
    return (
        <div className="w-full py-12 px-4 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">What Happens Next?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "Review", desc: "Our team reviews your application within 2-3 working days." },
                        { title: "Interaction", desc: "You will receive a call/email to schedule a school visit & interaction." },
                        { title: "Finalization", desc: "Admission is confirmed after document verification and fee payment." }
                    ].map((step, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative">
                            <div className="absolute -top-3 -left-3 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                {i + 1}
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2 mt-2">{step.title}</h3>
                            <p className="text-slate-500 text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
