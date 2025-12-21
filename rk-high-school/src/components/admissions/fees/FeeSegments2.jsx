import React from 'react';
import { CreditCard, Bus, Utensils, CalendarDays, Calculator, GraduationCap, School, Check } from 'lucide-react';

// Section 7: Secondary Fee Structure
export const SecondaryFee = () => {
    return (
        <div id="fee-secondary" className="w-full py-20 px-4 bg-indigo-50/50 border-t border-slate-200">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
                    <div className="flex-1">
                        <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                            Classes 9 & 10
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Secondary School</h2>
                        <p className="text-slate-600 mb-8">
                            Includes Board Registration support, career counseling workshops, and mock examination series.
                        </p>
                    </div>
                    <div className="flex-[1.5] w-full bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
                        <div className="grid grid-cols-2 gap-4 border-b border-slate-100 pb-4 mb-4 font-bold text-slate-900">
                            <div>Component</div>
                            <div className="text-right">Amount (INR)</div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between text-slate-600">
                                <span>Admission Fee</span>
                                <span className="font-bold">₹ 30,000</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>Annual Charges</span>
                                <span className="font-bold">₹ 15,000</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>Tuition Fee (Qtr)</span>
                                <span className="font-bold">₹ 18,000</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>Exam Charges (yearly)</span>
                                <span className="font-bold">₹ 2,500</span>
                            </div>
                            <div className="pt-4 border-t border-slate-100 flex justify-between text-lg font-bold text-indigo-600">
                                <span>Total (At Admission)</span>
                                <span>₹ 65,500</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 8: Senior Secondary Fee Structure
export const SeniorFee = () => {
    return (
        <div id="fee-senior" className="w-full py-20 px-4 bg-emerald-50/50 border-t border-slate-200">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">Classes 11 & 12</div>
                    <h2 className="text-3xl font-bold text-slate-900">Senior Secondary Structure</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { stream: "Science", fee: "22,000", borderClass: "border-blue-500", textClass: "text-blue-600", desc: "Includes Physics, Chem, Bio Labs" },
                        { stream: "Commerce", fee: "20,000", borderClass: "border-emerald-500", textClass: "text-emerald-600", desc: "Includes Computer Lab & Soft Skills" },
                        { stream: "Arts", fee: "18,000", borderClass: "border-orange-500", textClass: "text-orange-600", desc: "Includes Field Work & Workshops" }
                    ].map((item, idx) => (
                        <div key={idx} className={`bg-white p-8 rounded-3xl border-t-8 ${item.borderClass} shadow-sm hover:translate-y-[-5px] transition-transform`}>
                            <h3 className={`text-2xl font-bold ${item.textClass} mb-2`}>{item.stream}</h3>
                            <p className="text-slate-500 text-sm mb-6">{item.desc}</p>
                            <div className="text-3xl font-bold text-slate-900 mb-1">₹ {item.fee}</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wide">Tuition Fee / Quarter</div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8 text-sm text-slate-500">* Annual & Admission charges same as Secondary level. Practical fees extra.</div>
            </div>
        </div>
    );
};

// Section 9: Fee Components Breakdown
export const FeeBreakdown = () => {
    return (
        <div className="w-full py-24 px-4 bg-white border-t border-slate-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Understanding Your Fee</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Tuition Fee", desc: "Covers academic instruction, smart class usage, and teacher salaries." },
                        { title: "Annual Charges", desc: "Maintenance, electricity, water, and infrastructure upkeep." },
                        { title: "Development Fee", desc: "Used for upgrading school facilities and future expansions." },
                        { title: "Activity Fee", desc: "Events, celebrations, clubs, and co-curricular materials." }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <Calculator className="w-8 h-8 text-indigo-500 mb-4" />
                            <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                            <p className="text-sm text-slate-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 10: Transport Fee
export const TransportFee = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto max-w-4xl bg-white shadow-lg rounded-3xl overflow-hidden flex flex-col md:flex-row">
                <div className="bg-yellow-400 p-8 flex flex-col justify-center items-center text-center text-yellow-950 md:w-1/3">
                    <Bus className="w-16 h-16 mb-4" />
                    <h3 className="text-2xl font-bold">Transport <br />(Optional)</h3>
                </div>
                <div className="p-8 flex-1">
                    <h4 className="font-bold text-lg mb-4 text-slate-900">Charges based on Distance</h4>
                    <ul className="space-y-3 text-slate-600">
                        <li className="flex justify-between border-b border-slate-100 pb-2"><span>0 - 3 KM</span> <span className="font-bold text-slate-900">₹ 1,500 / mo</span></li>
                        <li className="flex justify-between border-b border-slate-100 pb-2"><span>3 - 8 KM</span> <span className="font-bold text-slate-900">₹ 2,200 / mo</span></li>
                        <li className="flex justify-between border-b border-slate-100 pb-2"><span>8 - 15 KM</span> <span className="font-bold text-slate-900">₹ 2,800 / mo</span></li>
                        <li className="flex justify-between pt-2"><span>15 KM +</span> <span className="font-bold text-slate-900">₹ 3,500 / mo</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

// Section 11: Additional Services
export const AdditionalServices = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Optional Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-slate-200 rounded-2xl p-6 flex items-center gap-4 hover:border-indigo-200 transition-colors">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600"><Utensils className="w-6 h-6" /></div>
                        <div>
                            <h4 className="font-bold text-slate-900">Cafeteria Meal Plan</h4>
                            <p className="text-sm text-slate-500">Healthy veg lunch: ₹ 2000 / month</p>
                        </div>
                    </div>
                    <div className="border border-slate-200 rounded-2xl p-6 flex items-center gap-4 hover:border-indigo-200 transition-colors">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600"><School className="w-6 h-6" /></div>
                        <div>
                            <h4 className="font-bold text-slate-900">Day Care Facility</h4>
                            <p className="text-sm text-slate-500">Till 5:00 PM: ₹ 3500 / month</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 12: Payment Modes
export const PaymentModes = () => {
    return (
        <div className="w-full py-24 px-4 bg-gradient-to-br from-indigo-900 to-slate-900 text-white text-center">
            <div className="container mx-auto">
                <CreditCard className="w-12 h-12 mx-auto mb-6 text-indigo-400" />
                <h2 className="text-3xl font-bold mb-10">Convenient Payment Modes</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {['Online Portal (Netbanking/UPI)', 'Demand Draft (DD)', 'Cheque at Office', 'NEFT / RTGS'].map((mode, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 px-6 py-4 rounded-xl font-medium">
                            {mode}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 13: Payment Schedule
export const PaymentSchedule = () => {
    return (
        <div className="w-full py-24 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Payment Schedule (Quarterly)</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                        { q: "Q1", range: "Apr - Jun", due: "10th April" },
                        { q: "Q2", range: "Jul - Sep", due: "10th July" },
                        { q: "Q3", range: "Oct - Dec", due: "10th Oct" },
                        { q: "Q4", range: "Jan - Mar", due: "10th Jan" },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center relative overflow-hidden group hover:bg-indigo-50 transition-colors">
                            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                                <CalendarDays className="w-16 h-16 text-indigo-600" />
                            </div>
                            <div className="text-2xl font-bold text-indigo-600 mb-1">{item.q}</div>
                            <div className="text-slate-900 font-bold mb-2">{item.range}</div>
                            <div className="text-xs text-slate-500 uppercase tracking-widest">Due by {item.due}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
