import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PWStyleCard from '../../PWStyleCard';

// Section 11: Parent Communication
export const ParentCommunication = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto max-w-5xl">
                <div className="bg-indigo-600 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#ffffff_2px,transparent_2px)] bg-[length:20px_20px]"></div>

                    <div className="relative z-10 mb-8 md:mb-0 md:pr-8">
                        <h2 className="text-3xl font-bold mb-4">Partnering in Your Child's Growth</h2>
                        <p className="text-indigo-100 text-lg">
                            We believe in full transparency. Stay connected with daily updates on your child's meals, activities, and mood through our dedicated parent app.
                        </p>
                    </div>
                    <div className="relative z-10 flex gap-4 flex-shrink-0">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center w-32">
                            <MessageCircle className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                            <span className="font-bold text-sm block">Daily Updates</span>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center w-32">
                            <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-300" />
                            <span className="font-bold text-sm block">Regular PTMs</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 12: Assessment Method
export const AssessmentMethod = () => {
    return (
        <div className="w-full py-16 px-4 bg-slate-50">
            <div className="container mx-auto text-center max-w-3xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">No Exams, Only Growth</h2>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Say goodbye to the pressure of exams. At the Pre-Primary level, we evaluate children based on
                        <span className="font-bold text-indigo-600"> continuous observation</span>.
                        Tracking their social skills, motor development, and curiosity is far more valuable than grades.
                    </p>
                </div>
            </div>
        </div>
    );
};

// Section 13: Why Pre-Primary at RK?
export const WhyPrePrimary = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto text-center">
                <span className="text-indigo-500 font-bold uppercase tracking-wider text-sm">Why Choose Us</span>
                <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-12">The RK High School Advantage</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-left p-6 border-l-4 border-indigo-500 bg-slate-50 rounded-r-2xl">
                        <h3 className="font-bold text-xl text-slate-900 mb-2">Holistic Growth</h3>
                        <p className="text-slate-600">Focus on physical, emotional, and cognitive skills simultaneously.</p>
                    </div>
                    <div className="text-left p-6 border-l-4 border-green-500 bg-slate-50 rounded-r-2xl">
                        <h3 className="font-bold text-xl text-slate-900 mb-2">Safe Campus</h3>
                        <p className="text-slate-600">Gated community with strict security protocols for peace of mind.</p>
                    </div>
                    <div className="text-left p-6 border-l-4 border-yellow-500 bg-slate-50 rounded-r-2xl">
                        <h3 className="font-bold text-xl text-slate-900 mb-2">Legacy of Trust</h3>
                        <p className="text-slate-600">Years of excellence in shaping young minds in our city.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 14: Admission Info
export const AdmissionInfo = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto max-w-4xl">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Admissions for 2025-26</h2>
                        <p className="text-slate-600 mb-8">
                            Give your child the perfect start. Admissions are now open for Play Group, Nursery, LKG, and UKG.
                            Seats are limited to ensure personal attention.
                        </p>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 inline-block">
                            <div className="text-sm text-slate-500 font-bold uppercase mb-1">Session Starts</div>
                            <div className="text-2xl font-bold text-indigo-600">April 2025</div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                        <PWStyleCard
                            title="Age Criteria"
                            desc="Check effective age requirements for all classes."
                            link="/admissions/criteria"
                        />
                        <PWStyleCard
                            title="Fee Structure"
                            desc="Transparent and affordable fee details."
                            link="/admissions/fee-structure"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 15: Final CTA
export const PrePrimaryCTA = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full py-24 px-4 bg-gradient-to-br from-indigo-900 to-slate-900 text-center relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500 opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10 container mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Give Your Child the Best Start</h2>
                <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                    Join the RK High School family where learning is a joyful adventure.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        onClick={() => navigate('/admissions/form')}
                        className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full text-lg shadow-xl hover:shadow-green-500/30 transition-all flex items-center justify-center"
                    >
                        Apply Online Now <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-full text-lg transition-all flex items-center justify-center border border-white/30"
                    >
                        <Phone className="w-5 h-5 mr-2" /> Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};
