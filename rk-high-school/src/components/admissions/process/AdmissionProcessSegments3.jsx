import React from 'react';
import timeImg from '../../../assets/images/home/classroom.jpg';
import { ShieldCheck, MapPin, Phone, Mail, HelpCircle, ThumbsUp, ArrowRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PWStyleCard from '../../PWStyleCard';

// Section 14: Admission Policy
export const AdmissionPolicy = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-50 text-center">
            <div className="container mx-auto max-w-4xl">
                <div className="inline-flex items-center gap-2 mb-4 text-slate-500 font-medium">
                    <ShieldCheck className="w-5 h-5" /> Policy Highlight
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Fair & Transparent</h2>
                <p className="text-slate-600 leading-relaxed">
                    Admissions are granted purely on merit and availability of seats. RK High School does not accept any donations or capitation fees.
                    Any recommendation or influence will lead to immediate disqualification.
                </p>
            </div>
        </div>
    );
};

// Section 15: Campus Visit / School Tour
export const CampusVisit = () => {
    return (
        <div className="w-full py-24 px-4 bg-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl skew-y-2">
                    <img
                        src={timeImg}
                        alt="School Building"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Experience It Yourself</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Pictures can only say so much. We invite you to visit our campus, walk through the corridors, see the classrooms,
                        and feel the environment where your child will grow.
                    </p>
                    <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-all flex items-center shadow-lg">
                        <MapPin className="w-5 h-5 mr-2" /> Book a Campus Tour
                    </button>
                </div>
            </div>
        </div>
    );
};

// Section 16: Parent Support Desk
export const ParentSupport = () => {
    return (
        <div className="w-full py-20 px-4 bg-indigo-50">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Need Help?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white p-8 rounded-3xl shadow-sm">
                        <Phone className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
                        <h3 className="font-bold text-lg">Call Us</h3>
                        <p className="text-slate-500 mt-2">+91 98765 43210</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm">
                        <Mail className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
                        <h3 className="font-bold text-lg">Email Us</h3>
                        <p className="text-slate-500 mt-2">admissions@rkhighschool.com</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm">
                        <ClockIcon className="w-8 h-8 text-orange-600 mx-auto mb-4" />
                        <h3 className="font-bold text-lg">Visit Hours</h3>
                        <p className="text-slate-500 mt-2">Mon-Sat: 9 AM - 3 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ClockIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);


// Section 17: FAQs
export const AdmissionFAQs = () => {
    const questions = [
        { q: "Is transport facility available?", a: "Yes, we cover a radius of 20km with GPS-enabled buses." },
        { q: "What is the teacher-student ratio?", a: "We maintain a strict 1:25 ratio for personalized attention." },
        { q: "Are there scholarships available?", a: "Yes, merit-based scholarships are available for Classes 11 & 12." },
        { q: "Is there an entrance test for KG?", a: "No, only a friendly interaction for pre-primary admissions." }
    ];

    return (
        <div className="w-full py-24 px-4 bg-white">
            <div className="container mx-auto max-w-3xl">
                <div className="text-center mb-12">
                    <div className="w-16 h-1 bg-indigo-500 mx-auto mb-6 rounded-full"></div>
                    <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-4">
                    {questions.map((item, idx) => (
                        <div key={idx} className="border border-slate-200 rounded-2xl p-6 hover:border-indigo-200 transition-colors bg-slate-50">
                            <h3 className="font-bold text-slate-900 flex items-start gap-3">
                                <HelpCircle className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                                {item.q}
                            </h3>
                            <p className="text-slate-600 mt-3 ml-8 text-sm">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 18: Why Admission At RK?
export const WhyRKAdmission = () => {
    return (
        <div className="w-full py-24 px-4 bg-slate-900 text-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-bold mb-8">Why Parents Choose RK High School?</h2>
                    <div className="space-y-6">
                        {[
                            "Legacy of 25+ Years of Excellence",
                            "Balanced focus on Academics & Co-curriculars",
                            "Safe, Secure, and Green Campus",
                            "Tech-enabled Smart Classrooms"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                                    <ThumbsUp className="w-4 h-4" />
                                </div>
                                <span className="text-lg font-medium text-slate-200">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 text-center">
                        <div className="text-4xl font-bold text-emerald-400 mb-2">98%</div>
                        <div className="text-xs uppercase tracking-wider text-slate-400">Parent Satisfaction</div>
                    </div>
                    <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 text-center translate-y-8">
                        <div className="text-4xl font-bold text-indigo-400 mb-2">5k+</div>
                        <div className="text-xs uppercase tracking-wider text-slate-400">Alumni Network</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 19: Apply Now (Form CTA)
export const ApplyNowCTA = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full py-24 px-4 bg-white">
            <div className="container mx-auto">
                <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <Star className="w-16 h-16 text-yellow-300 mx-auto mb-6 fill-current" />
                        <h2 className="text-4xl font-bold mb-6">Ready to Join Us?</h2>
                        <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
                            Don't wait! The future of your child begins with a single step. Start your application process today online.
                        </p>
                        <button
                            onClick={() => navigate('/admissions/form')}
                            className="px-10 py-4 bg-white text-indigo-600 font-bold rounded-full text-xl hover:bg-indigo-50 transition-colors shadow-lg"
                        >
                            Start Application Form
                        </button>
                    </div>
                    {/* Decorative Circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
                </div>
            </div>
        </div>
    );
};

// Section 20: Final CTA
export const AdmissionFinalCTA = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full py-24 px-4 bg-slate-950 text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                    Take the First Step Towards a <br />
                    <span className="text-emerald-400">Bright Future</span>
                </h2>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        onClick={() => navigate('/admissions/form')}
                        className="px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full text-lg shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center justify-center"
                    >
                        Apply Now <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-10 py-4 bg-white/5 border border-white/20 hover:bg-white/10 text-white font-bold rounded-full text-lg transition-all"
                    >
                        Contact Admission Team
                    </button>
                </div>
            </div>
        </div>
    );
};
