import React from 'react';
import img1 from '../../../assets/images/gallery/gallery-page-9.jpg';
import img2 from '../../../assets/images/student-life/gallery-page-5.jpg';
import img3 from '../../../assets/images/student-life/gallery-page-7.jpg';
import { Search, Trophy, GraduationCap, Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Section 15: Reference & Research
export const ResearchSupport = () => {
    return (
        <div id="reference" className="w-full py-20 px-4 bg-white scroll-mt-20">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                    <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2 block">Academic Support</span>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Reference & Research</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        For students working on projects, dissertations, or competitive exam preparation, our reference section provides specialized encyclopedias, yearbooks, and manuals.
                    </p>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600"><Search className="w-5 h-5" /></div>
                            <div className="font-bold text-slate-700">Project Assistance</div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600"><GraduationCap className="w-5 h-5" /></div>
                            <div className="font-bold text-slate-700">Exam Guides (JEE/NEET/Olympiad)</div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-emerald-50 rounded-3xl p-8 border border-emerald-100 text-center">
                    <h3 className="text-xl font-bold text-emerald-900 mb-4">Reference Policy</h3>
                    <p className="text-emerald-800 text-sm mb-6">Reference books are for in-library use only to ensure availability for all students at all times.</p>
                    <button className="px-6 py-2 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-500 transition-colors">
                        Browse Reference List
                    </button>
                </div>
            </div>
        </div>
    );
};

// Section 16: Events & Activities
export const LibraryEvents = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Library Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "Annual Book Fair", date: "October", desc: "Inviting publishers to showcase diverse genres." },
                        { title: "Reading Week", date: "July", desc: "A week dedicated to reading challenges and storytelling." },
                        { title: "Literary Quiz", date: "January", desc: "Inter-house competition on literature and authors." }
                    ].map((evt, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                            <div className="text-xs font-bold text-indigo-500 uppercase mb-2">{evt.date}</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{evt.title}</h3>
                            <p className="text-slate-600 text-sm">{evt.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 17 & 18: Role & Features
export const WhyOurLibrary = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why Our Library Matters?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        "Supports Classroom Learning with Extra Materials",
                        "Provides a Quiet Space for Self-Study",
                        "Develops Research and Information Literacy",
                        "Regularly Updated with New Releases",
                        "Digital Access to Global Journals",
                        "Comfortable and Inspiring Environment"
                    ].map((point, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center shrink-0">
                                <Check className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-indigo-900">{point}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 19: Gallery
export const LibraryGallery = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Inside the Library</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
                    <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
                        <img
                            src={img1}
                            alt="Reading Area"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                        <img
                            src={img2}
                            alt="Bookshelf"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                        <img
                            src={img3}
                            alt="Student Reading"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <div className="col-span-2 rounded-2xl overflow-hidden bg-indigo-900 flex items-center justify-center text-white/50 font-bold text-xl">
                        + More Moments
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 20: Final CTA
export const LibraryFinalCTA = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full py-24 px-4 bg-gradient-to-r from-slate-800 to-indigo-900 text-center text-white">
            <div className="container mx-auto">
                <Trophy className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                    Cultivating Knowledge<br />One Book at a Time
                </h2>
                <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                    Visit us to explore our collection or reach out to the librarian for specific academic resources.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-10 py-4 bg-white text-indigo-900 font-bold rounded-full text-lg shadow-xl hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2"
                    >
                        Visit Library <ArrowRight className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-10 py-4 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold rounded-full text-lg transition-all"
                    >
                        Contact Librarian
                    </button>
                </div>
            </div>
        </div>
    );
};
