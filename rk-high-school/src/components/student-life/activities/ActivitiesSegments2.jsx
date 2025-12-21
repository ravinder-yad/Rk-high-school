import React from 'react';
import actImg from '../../../assets/images/home/gallery2.jpg';
import { Mic2, Music, BookOpen, Terminal, Users, Globe, Award, Sparkles } from 'lucide-react';

// Section 7, 8, 9: Cultural, Music, Drama
export const CulturalActivities = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Performing Arts & Culture</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-purple-300 transition-colors">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-6">
                            <Music className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Music & Vocal</h3>
                        <p className="text-slate-600 text-sm">
                            Training in classical and contemporary vocal music, as well as instruments like Guitar, Keyboard, and Tabla.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-colors">
                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-6">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Dance & Rhythm</h3>
                        <p className="text-slate-600 text-sm">
                            Exploring various dance forms including Bharatnatyam, Folk, and Western dance to improve coordination and expression.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-pink-300 transition-colors">
                        <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mb-6">
                            <Mic2 className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Drama & Theatre</h3>
                        <p className="text-slate-600 text-sm">
                            Workshops on acting, scriptwriting, and stage presence to boost confidence and public speaking skills.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 10, 11: Literary & Quiz
export const LiteraryTech = () => {
    return (
        <div id="literary" className="w-full py-20 px-4 bg-white scroll-mt-20">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Literary */}
                    <div className="bg-indigo-50 rounded-[2.5rem] p-8 border border-indigo-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-bl-[50%] -mr-10 -mt-10"></div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3 relative z-10">
                            <BookOpen className="w-8 h-8 text-indigo-500" /> Literary Pursuits
                        </h3>
                        <ul className="space-y-4 relative z-10">
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                                <span className="text-slate-700 font-bold">Debates & Elocutions</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                                <span className="text-slate-700 font-bold">Creative Writing Workshops</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                                <span className="text-slate-700 font-bold">Spelling Bee Competitions</span>
                            </li>
                        </ul>
                    </div>

                    {/* Tech */}
                    <div id="tech" className="bg-sky-50 rounded-[2.5rem] p-8 border border-sky-100 relative overflow-hidden scroll-mt-20">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-bl-[50%] -mr-10 -mt-10"></div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3 relative z-10">
                            <Terminal className="w-8 h-8 text-sky-500" /> Tech & Innovation
                        </h3>
                        <ul className="space-y-4 relative z-10">
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                                <span className="text-slate-700 font-bold">Robotics Club</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                                <span className="text-slate-700 font-bold">Coding Hackathons</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                                <span className="text-slate-700 font-bold">Science Olympiads</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 13, 14: Social & Leadership
export const LeadershipSocial = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-900 text-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-2 block">Community First</span>
                        <h2 className="text-3xl font-bold text-white mb-6">Social Awareness & Leadership</h2>
                        <p className="text-slate-300 text-lg leading-relaxed mb-8">
                            We mold future leaders who are empathetic and socially responsible. Students lead initiatives that impact the school and society.
                        </p>
                        <div className="flex gap-4">
                            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                                <Users className="w-6 h-6 text-emerald-300 mb-2" />
                                <h4 className="font-bold">Student Council</h4>
                            </div>
                            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                                <Globe className="w-6 h-6 text-emerald-300 mb-2" />
                                <h4 className="font-bold">Eco Drive</h4>
                            </div>
                            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                                <Award className="w-6 h-6 text-emerald-300 mb-2" />
                                <h4 className="font-bold">Outreach</h4>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-emerald-500/20 blur-2xl rounded-full"></div>
                        <img
                            src={actImg}
                            alt="Student Leadership"
                            className="relative rounded-3xl shadow-2xl border-4 border-white/10"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
