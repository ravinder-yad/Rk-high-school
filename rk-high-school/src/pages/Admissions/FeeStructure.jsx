import React, { useEffect } from 'react';
import { CreditCard, Banknote, CalendarCheck, HelpCircle } from 'lucide-react';
import Footer from '../../components/home/Footer';
import PageHeader from '../../components/PageHeader';
import { Link } from 'react-router-dom';

const FeeStructure = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fees = [
        { class: "Nursery - UKG", tuition: "₹ 35,000", annual: "₹ 10,000", admission: "₹ 15,000 (One Time)", total: "₹ 60,000", highlight: false },
        { class: "Grade I - V", tuition: "₹ 45,000", annual: "₹ 12,000", admission: "₹ 20,000 (One Time)", total: "₹ 77,000", highlight: true },
        { class: "Grade VI - X", tuition: "₹ 55,000", annual: "₹ 15,000", admission: "₹ 25,000 (One Time)", total: "₹ 95,000", highlight: false },
        { class: "Grade XI - XII", tuition: "₹ 65,000", annual: "₹ 18,000", admission: "₹ 30,000 (One Time)", total: "₹ 1,13,000", highlight: false },
    ];

    return (
        <div className="bg-neutral-50 min-h-screen font-sans text-slate-900">
            <PageHeader
                title="Fee Structure"
                subtitle="Transparent & Affordable"
                bgImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1600"
            />

            <div className="container mx-auto px-4 py-20">

                {/* Intro */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="text-secondary font-bold tracking-wider uppercase text-xs mb-3 block">Investment in Future</span>
                    <h2 className="text-4xl md:text-5xl font-black font-display text-slate-900 mb-6 leading-tight">
                        Value for <span className="text-primary">Money</span>
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        We believe in providing quality education at an affordable cost. Our fee structure is transparent with no hidden charges.
                    </p>
                </div>

                {/* Pricing Table */}
                <div className="overflow-x-auto mb-24 rounded-[2rem] shadow-xl border border-slate-100 bg-white">
                    <table className="w-full min-w-[800px] text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-900 text-white text-sm uppercase tracking-wider font-display">
                                <th className="p-6 font-bold">Class / Grade</th>
                                <th className="p-6 font-bold">Annual Fee</th>
                                <th className="p-6 font-bold">Quarterly Tuition</th>
                                <th className="p-6 font-bold">Admission (One Time)</th>
                                <th className="p-6 font-bold text-right">Approx. Yearly Total</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {fees.map((row, index) => (
                                <tr key={index} className={`hover:bg-slate-50 transition-colors ${row.highlight ? 'bg-primary/5' : ''}`}>
                                    <td className="p-6 font-bold text-slate-900">{row.class}</td>
                                    <td className="p-6 text-slate-600">{row.annual}</td>
                                    <td className="p-6 text-slate-600">{row.tuition}</td>
                                    <td className="p-6 text-slate-600">{row.admission}</td>
                                    <td className="p-6 font-black text-primary text-right text-lg">{row.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Payment Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border-l-8 border-secondary relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                        <Banknote className="w-10 h-10 text-secondary mb-6 relative z-10" />
                        <h3 className="text-2xl font-bold font-display text-slate-900 mb-4 relative z-10">Payment Methods</h3>
                        <p className="text-slate-500 mb-6 relative z-10">
                            We accept fee payments via Online Transfer (NEFT/RTGS), Demand Draft, or via our secure School App/Portal.
                        </p>
                        <ul className="space-y-3 relative z-10">
                            <li className="flex items-center gap-3 text-slate-700 text-sm font-medium"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>UPI / Net Banking</li>
                            <li className="flex items-center gap-3 text-slate-700 text-sm font-medium"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>Credit / Debit Cards</li>
                            <li className="flex items-center gap-3 text-slate-700 text-sm font-medium"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>Cheque (At School Office)</li>
                        </ul>
                    </div>

                    <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border-l-8 border-primary relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                        <CalendarCheck className="w-10 h-10 text-primary mb-6 relative z-10" />
                        <h3 className="text-2xl font-bold font-display text-slate-900 mb-4 relative z-10">Important Dates</h3>
                        <p className="text-slate-500 mb-6 relative z-10">
                            Fees are to be paid quarterly by the 10th of the first month of each quarter (April, July, October, January).
                        </p>
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 relative z-10">
                            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Late Fee Policy</div>
                            <div className="text-slate-700 font-medium">₹ 100 per day after the due date.</div>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl font-black font-display text-slate-900 mb-8 text-center flex items-center justify-center gap-3">
                        <HelpCircle className="w-6 h-6 text-slate-400" />
                        Frequently Asked Questions
                    </h3>
                    <div className="space-y-4">
                        {[
                            { q: "Is the admission fee refundable?", a: "No, the admission fee is non-refundable under any circumstances." },
                            { q: "Do you offer sibling discounts?", a: "Yes, we offer a 10% waiver on the annual fee for the second child." },
                            { q: "Is transport fee included?", a: "No, transport fee is charged separately based on the distance/route." },
                        ].map((faq, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-slate-900 mb-2 flex items-start gap-3">
                                    <span className="text-primary font-black">Q.</span>
                                    {faq.q}
                                </h4>
                                <p className="text-slate-500 text-sm ml-7">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-16">
                    <Link to="/contact" className="text-primary font-bold hover:underline">Need more clarification? Contact Accounts Office</Link>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default FeeStructure;
