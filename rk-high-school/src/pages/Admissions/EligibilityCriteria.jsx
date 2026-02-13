import React, { useEffect } from 'react';
import { Baby, GraduationCap, ClipboardCheck, ArrowRight, UserCheck } from 'lucide-react';
import Footer from '../../components/home/Footer';
import PageHeader from '../../components/PageHeader';
import { Link } from 'react-router-dom';

const EligibilityCriteria = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const ageCriteria = [
        { class: "Nursery", age: "3+ Years", date: "as of 31st March" },
        { class: "LKG", age: "4+ Years", date: "as of 31st March" },
        { class: "UKG", age: "5+ Years", date: "as of 31st March" },
        { class: "Grade I", age: "6+ Years", date: "as of 31st March" },
    ];

    const documents = [
        "Birth Certificate (Original for verification)",
        "Transfer Certificate (for Grade II upwards)",
        "Report Card of the previous class",
        "Aadhar Card of Student and Parents",
        "Passport size photographs (Student: 4, Parents: 2 each)",
        "Medical Fitness Certificate"
    ];

    return (
        <div className="bg-neutral-50 min-h-screen font-sans text-slate-900">
            <PageHeader
                title="Eligibility Criteria"
                subtitle="Guidelines for Admission"
                bgImage="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=1600"
            />

            <div className="container mx-auto px-4 py-20">

                {/* Intro */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="text-secondary font-bold tracking-wider uppercase text-xs mb-3 block">Requirements</span>
                    <h2 className="text-4xl md:text-5xl font-black font-display text-slate-900 mb-6 leading-tight">
                        Who Can <span className="text-primary">Apply?</span>
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        To ensure a smooth academic journey, we adhere to specific age guidelines and documentation requirements as per the education board norms.
                    </p>
                </div>

                {/* Age Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {ageCriteria.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-50 hover:shadow-xl hover:-translate-y-2 transition-all flex flex-col items-center text-center group">
                            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                                <Baby className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black font-display text-slate-900 mb-1">{item.class}</h3>
                            <div className="text-4xl font-black text-primary mb-2 my-4">{item.age}</div>
                            <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{item.date}</span>
                        </div>
                    ))}
                </div>

                {/* Documents Checklist */}
                <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-[3rem] shadow-xl overflow-hidden border border-slate-100 mb-20">
                    <div className="lg:w-1/2 bg-slate-900 p-12 lg:p-20 text-white relative flex flex-col justify-center">
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                        <ClipboardCheck className="w-16 h-16 text-secondary mb-8 relative z-10" />
                        <h2 className="text-3xl md:text-4xl font-black font-display mb-6 relative z-10">Document Checklist</h2>
                        <p className="text-slate-400 text-lg leading-relaxed relative z-10">
                            Please ensure you have the following documents ready at the time of admission. Missing documents may delay the process.
                        </p>
                    </div>
                    <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
                        <ul className="space-y-6">
                            {documents.map((doc, i) => (
                                <li key={i} className="flex items-start gap-4 group">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                        <UserCheck className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-lg font-medium text-slate-700 group-hover:text-slate-900 transition-colors">{doc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
                        Ready to take the next step? Check the fee structure or proceed directly to the online application form.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/admissions/fee-structure" className="px-8 py-3 bg-white text-slate-900 font-bold border border-slate-200 rounded-full hover:bg-slate-50 transition-all shadow-sm">
                            View Fee Structure
                        </Link>
                        <Link to="/admissions/form" className="px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all shadow-lg flex items-center justify-center gap-2">
                            <span>Apply Now</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default EligibilityCriteria;
