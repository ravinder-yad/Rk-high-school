import React from 'react';
import img1 from '../../../assets/images/student-life/gallery-page-3.jpg';
import img2 from '../../../assets/images/student-life/gallery-page-4.jpg';
import img3 from '../../../assets/images/student-life/gallery-page-5.jpg';
import { Sun, Calendar, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Section 15, 16: Outdoor & Celebrations
export const OutdoorCelebrations = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto flex flex-col md:flex-row gap-12">
                {/* Outdoor */}
                <div className="flex-1 bg-gradient-to-br from-orange-50 to-orange-100 rounded-[2.5rem] p-8 border border-orange-200">
                    <Sun className="w-10 h-10 text-orange-500 mb-6" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Outdoor Learning</h3>
                    <p className="text-slate-700 leading-relaxed mb-6">
                        Field trips, nature walks, and educational tours that take learning outside the four walls of a classroom.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm font-bold text-orange-800"><CheckCircle2 className="w-4 h-4" /> Botanical Garden Visits</li>
                        <li className="flex items-center gap-2 text-sm font-bold text-orange-800"><CheckCircle2 className="w-4 h-4" /> Museum Tours</li>
                        <li className="flex items-center gap-2 text-sm font-bold text-orange-800"><CheckCircle2 className="w-4 h-4" /> Adventure Camps</li>
                    </ul>
                </div>

                {/* Celebrations */}
                <div className="flex-1 bg-gradient-to-br from-sky-50 to-sky-100 rounded-[2.5rem] p-8 border border-sky-200">
                    <Calendar className="w-10 h-10 text-sky-500 mb-6" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Celebration Days</h3>
                    <p className="text-slate-700 leading-relaxed mb-6">
                        We celebrate diversity and culture. From festivals to national days, our calendar is marked with joy and unity.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm font-bold text-sky-800"><CheckCircle2 className="w-4 h-4" /> Independence Day</li>
                        <li className="flex items-center gap-2 text-sm font-bold text-sky-800"><CheckCircle2 className="w-4 h-4" /> Annual Sports Day</li>
                        <li className="flex items-center gap-2 text-sm font-bold text-sky-800"><CheckCircle2 className="w-4 h-4" /> Cultural Fest</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

// Section 17, 18: Highlights & Benefits
export const ActivityBenefits = () => {
    return (
        <div className="w-full py-16 px-4 bg-slate-50">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why Activities Matter?</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { title: "Teamwork", desc: "Collaborating for common goals." },
                        { title: "Confidence", desc: "Overcoming stage fright." },
                        { title: "Time Mgmt.", desc: "Balancing studies and hobbies." },
                        { title: "Creativity", desc: "Thinking outside the box." }
                    ].map((b, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm text-center hover:-translate-y-2 transition-transform">
                            <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-4 font-bold text-xl">
                                {i + 1}
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">{b.title}</h4>
                            <p className="text-slate-600 text-sm">{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 19: Gallery
export const ActivityGallery = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Memorable Moments</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
                    <div className="rounded-2xl overflow-hidden shadow-md">
                        <img
                            src={img1}
                            alt="Kids Playing"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-md">
                        <img
                            src={img2}
                            alt="Reading"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-md">
                        <img
                            src={img3}
                            alt="Group Activity"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <div className="col-span-2 rounded-2xl overflow-hidden bg-sky-600 flex items-center justify-center text-white/80 font-bold text-xl">
                        + View Full Gallery
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 20: CTA
export const ActivitiesCTA = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full py-24 px-4 bg-gradient-to-r from-sky-500 to-indigo-600 text-center text-white">
            <div className="container mx-auto">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                    Explore Student Life
                </h2>
                <p className="text-sky-100 text-lg mb-10 max-w-2xl mx-auto">
                    Join a community where learning is an adventure and every day brings a new opportunity to grow.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        onClick={() => navigate('/admissions/form')}
                        className="px-10 py-4 bg-white text-sky-700 font-bold rounded-full text-lg shadow-xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
                    >
                        Apply Now <ArrowRight className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-10 py-4 bg-sky-800/50 border border-white/20 hover:bg-sky-800/70 text-white font-bold rounded-full text-lg transition-all"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};
