import React, { useEffect } from 'react';
import { FileText, Users, CheckCircle, GraduationCap, Calendar, ArrowRight } from 'lucide-react';
import Footer from '../../components/home/Footer';
import PageHeader from '../../components/PageHeader';
import { Link } from 'react-router-dom';

const AdmissionProcess = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const steps = [
        {
            icon: FileText,
            title: "Step 1: Registration",
            desc: "Fill the online enquiry form or visit the school office to collect the prospectus and registration form."
        },
        {
            icon: Users,
            title: "Step 2: Interaction / Assessment",
            desc: "For Pre-Primary, an informal interaction with parents. For Grade I upwards, a written assessment is conducted."
        },
        {
            icon: CheckCircle,
            title: "Step 3: Document Verification",
            desc: "Submit necessary documents (Birth Certificate, Transfer Certificate, Report Card, etc.) for verification."
        },
        {
            icon: GraduationCap,
            title: "Step 4: Admission Confirmation",
            desc: "Pay the admission fee to secure the seat. You will receive the admission number and id card details."
        },
    ];

    return (
        <div className="bg-neutral-50 min-h-screen font-sans text-slate-900">
            <PageHeader
                title="Admission Process"
                subtitle="Join Our Family"
                bgImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1600"
            />

            <div className="container mx-auto px-4 py-20">

                {/* Intro */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="text-secondary font-bold tracking-wider uppercase text-xs mb-3 block">Simple & Transparent</span>
                    <h2 className="text-4xl md:text-5xl font-black font-display text-slate-900 mb-6 leading-tight">
                        Your Journey Starts <span className="text-primary">Here</span>
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        We have streamlined our admission process to be as smooth as possible for parents and students. Follow these simple steps to become a part of the RK High School family.
                    </p>
                </div>

                {/* Vertical Timeline */}
                <div className="max-w-5xl mx-auto mb-24 relative">
                    {/* Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 hidden md:block"></div>

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="w-full md:w-1/2"></div>
                                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white shadow-lg hidden md:flex items-center justify-center text-white text-xs font-bold z-10">
                                    {index + 1}
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className={`bg-white p-8 rounded-3xl shadow-lg border border-slate-50 hover:shadow-xl transition-all group relative overflow-hidden`}>
                                        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                            <step.icon className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-xl font-bold font-display text-slate-900 mb-2">{step.title}</h3>
                                        <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Important Dates / CTA */}
                <div className="bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-12">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

                    <div className="flex-1 relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                            <Calendar className="w-8 h-8 text-secondary" />
                            <span className="text-secondary font-bold uppercase tracking-wider text-sm">Admissions Open</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black font-display mb-4">Academic Session 2024-25</h2>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            Registration is now open for Nursery to Grade IX. Limited seats available. Apply early to secure your spot.
                        </p>
                    </div>

                    <div className="relative z-10 flex flex-col sm:flex-row gap-4">
                        <Link to="/admissions/form" className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all shadow-lg flex items-center gap-2">
                            <span>Apply Online</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link to="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full hover:bg-white/20 transition-all">
                            Contact Us
                        </Link>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default AdmissionProcess;
