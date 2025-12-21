import React from 'react';
import featImg from '../../../assets/images/gallery/gallery-page-9.jpg';
import { BookOpen, Coffee, User, Clock, AlertCircle, Repeat, CreditCard, Armchair } from 'lucide-react';

// Section 8: Reading Habit Development
export const ReadingHabits = () => {
    return (
        <div className="w-full py-20 px-4 bg-indigo-50">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Cultivating Readers</h2>
                    <p className="text-slate-700 leading-relaxed mb-6">
                        We don't just lend books; we build readers. Our "DEAR" (Drop Everything And Read) program ensures every student spends dedicated time reading for pleasure, apart from academics.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 mt-1"><BookOpen className="w-3 h-3" /></div>
                            <div>
                                <h4 className="font-bold text-slate-900">Weekly Book Reviews</h4>
                                <p className="text-sm text-slate-600">Students share summaries of books they enjoyed.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 mt-1"><User className="w-3 h-3" /></div>
                            <div>
                                <h4 className="font-bold text-slate-900">Best Reader Awards</h4>
                                <p className="text-sm text-slate-600">Monthly recognition for avid readers.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-indigo-100">
                        <div className="flex items-center gap-4 mb-4 border-b border-slate-100 pb-4">
                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-xl">📖</div>
                            <div>
                                <h4 className="font-bold text-slate-800">Review of the Month</h4>
                                <p className="text-xs text-slate-500">By Ananya, Class 8</p>
                            </div>
                        </div>
                        <p className="text-slate-600 italic text-sm">"The 'Harry Potter' series taught me about friendship and bravery. It felt like I was in Hogwarts!"</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 9: Reading Environment
export const ReadingEnvironment = () => {
    return (
        <div id="reading" className="w-full py-20 px-4 bg-white scroll-mt-20">
            <div className="container mx-auto">
                <div className="relative rounded-[3rem] overflow-hidden h-[400px]">
                    <img
                        src={featImg}
                        alt="Quiet Library"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-center p-8 md:p-16">
                        <div className="max-w-xl">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">A Sanctuary of Silence</h2>
                            <p className="text-slate-200 text-lg mb-8">
                                Ergonomic seating, ample natural light, and strictly maintained silence create the perfect atmosphere for concentration and deep reading.
                            </p>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-2 text-white/90 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                                    <Armchair className="w-5 h-5" /> Comfortable Seating
                                </div>
                                <div className="flex items-center gap-2 text-white/90 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                                    <Coffee className="w-5 h-5" /> Relaxed Vibe
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 10: Library Staff
export const LibraryStaff = () => {
    return (
        <div className="w-full py-16 px-4 bg-slate-50">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Meet Our Librarian</h2>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 inline-flex flex-col md:flex-row items-center gap-8 text-left">
                    <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center text-4xl">👩‍🏫</div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">Mrs. S. Verghese</h3>
                        <p className="text-indigo-600 font-medium mb-3">Head Librarian (M.Lib.Sc)</p>
                        <p className="text-slate-600 text-sm max-w-md">
                            "I believe every child has a book waiting for them. My goal is to help them find it. I am available to assist students with research and recommendations."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 11: Timings
export const LibraryTimings = () => {
    return (
        <div className="w-full py-12 px-4 bg-white border-y border-slate-100">
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"><Clock className="w-6 h-6" /></div>
                    <div>
                        <h4 className="font-bold text-slate-900">School Hours</h4>
                        <p className="text-sm text-slate-500">8:00 AM - 2:30 PM</p>
                    </div>
                </div>
                <div className="h-12 w-px bg-slate-200 hidden md:block"></div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><BookOpen className="w-6 h-6" /></div>
                    <div>
                        <h4 className="font-bold text-slate-900">Post-School Access</h4>
                        <p className="text-sm text-slate-500">2:30 PM - 3:30 PM (Seniors)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 12: Rules
export const LibraryRules = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Library Discipline</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "Silence is Golden", desc: "Maintain complete silence to respect others' concentration." },
                        { title: "Handle with Care", desc: "Keep books in good condition. Do not fold pages or write." },
                        { title: "Return on Time", desc: "Return books within 7 days to allow others to read." }
                    ].map((rule, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col items-center text-center hover:border-red-200 transition-colors">
                            <AlertCircle className="w-8 h-8 text-red-400 mb-4" />
                            <h4 className="font-bold text-slate-900 mb-2">{rule.title}</h4>
                            <p className="text-slate-600 text-sm">{rule.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 13: Issue Process
export const IssueProcess = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Book Issue Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
                    <div className="md:absolute top-1/2 left-0 w-full h-1 bg-indigo-100 -z-10 hidden md:block transform -translate-y-1/2"></div>

                    {[
                        { step: "1", title: "Select", desc: "Choose a book from shelves." },
                        { step: "2", title: "Scan", desc: "Present ID card & book at desk." },
                        { step: "3", title: "Read", desc: "Enjoy reading for 7 days." }
                    ].map((s, i) => (
                        <div key={i} className="bg-white p-6">
                            <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-indigo-200">
                                {s.step}
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h4>
                            <p className="text-slate-600">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 14: Membership
export const LibraryMembership = () => {
    return (
        <div className="w-full py-16 px-4 bg-slate-900 text-white text-center">
            <div className="container mx-auto max-w-2xl">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CreditCard className="w-8 h-8 text-indigo-400" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Automatic Membership</h2>
                <p className="text-slate-300 mb-8">
                    All registered students and staff are automatically members of the library. Your School ID Smart Card acts as your Library Card.
                </p>
                <div className="inline-block px-6 py-3 bg-white/10 rounded-xl border border-white/20">
                    <span className="font-bold text-indigo-300">Limit:</span> 2 Books for 7 Days
                </div>
            </div>
        </div>
    );
};
