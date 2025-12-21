import React from 'react';
import facilImg from '../../../assets/images/gallery/video-thumb-6.jpg';
import { Users, Timer, Calendar, Medal, Award, HeartPulse, ChevronRight } from 'lucide-react';

// Section 8 & 9: PE & Coaches
export const CoachingStaff = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 bg-white p-8 rounded-[2.5rem] border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <HeartPulse className="w-8 h-8 text-red-500" /> Physical Education
                        </h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Mandatory PT periods for all classes ensure every student stays active. The curriculum focuses on motor skills, flexibility, and endurance.
                        </p>
                        <button className="text-indigo-600 font-bold flex items-center text-sm gap-1 hover:gap-2 transition-all">
                            View Weekly Schedule <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="flex-1 bg-white p-8 rounded-[2.5rem] border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <Users className="w-8 h-8 text-orange-500" /> Expert Coaching
                        </h3>
                        <div className="flex gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-400">?</div>
                            <div>
                                <h4 className="font-bold text-slate-900">Mr. A. Singh</h4>
                                <p className="text-xs text-slate-500">M.P.Ed, NIS Coach</p>
                            </div>
                        </div>
                        <p className="text-slate-600 text-sm">
                            Our team of certified coaches identifies talent early and provides specialized training for state and national level competitions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 10 & 11: Yoga & Curriculum
export const YogaCurriculum = () => {
    return (
        <div id="yoga" className="w-full py-20 px-4 bg-white scroll-mt-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-lg">
                    <img
                        src={facilImg}
                        alt="Yoga Session"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent flex items-end p-8">
                        <h3 className="text-2xl font-bold text-white">Holistic Wellness</h3>
                    </div>
                </div>
                <div>
                    <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2 block">Mind & Body</span>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Yoga & Meditation</h2>
                    <p className="text-slate-600 mb-6">
                        Weekly yoga sessions help students manage stress and improve concentration. We teach posture correction and breathing techniques.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-emerald-50 p-4 rounded-xl">
                            <div className="font-bold text-emerald-800 mb-1">Surya Namaskar</div>
                            <div className="text-xs text-emerald-600">Morning routine</div>
                        </div>
                        <div className="bg-emerald-50 p-4 rounded-xl">
                            <div className="font-bold text-emerald-800 mb-1">Meditation</div>
                            <div className="text-xs text-emerald-600">Mental peace</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 12 & 13: Events & Competitions
export const SportsEvents = () => {
    return (
        <div className="w-full py-16 px-4 bg-orange-50">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Competition & Spirit</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 hover:-translate-y-1 transition-transform">
                        <Calendar className="w-10 h-10 text-orange-500 mb-4" />
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Annual Sports Meet</h4>
                        <p className="text-slate-600 text-sm">
                            A week-long celebration of sportsmanship where all four houses compete for the championship trophy.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-100 hover:-translate-y-1 transition-transform">
                        <Timer className="w-10 h-10 text-indigo-500 mb-4" />
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Inter-School Tournaments</h4>
                        <p className="text-slate-600 text-sm">
                            Hosting district-level cricket and football tournaments to give our students competitive exposure.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 hover:-translate-y-1 transition-transform">
                        <Award className="w-10 h-10 text-emerald-500 mb-4" />
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Talent Hunt</h4>
                        <p className="text-slate-600 text-sm">
                            Periodic trials to identify and nurture natural athletic ability in younger students.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 14: Achievements
export const SportsAchievements = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-900 text-white text-center">
            <div className="container mx-auto">
                <Medal className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-12">Hall of Fame</h2>
                <div className="flex flex-wrap justify-center gap-16">
                    <div>
                        <div className="text-5xl font-bold text-orange-400 mb-2">15+</div>
                        <div className="text-sm text-slate-400 uppercase tracking-widest">District Trophies</div>
                    </div>
                    <div>
                        <div className="text-5xl font-bold text-indigo-400 mb-2">5</div>
                        <div className="text-sm text-slate-400 uppercase tracking-widest">State Players</div>
                    </div>
                    <div>
                        <div className="text-5xl font-bold text-emerald-400 mb-2">100%</div>
                        <div className="text-sm text-slate-400 uppercase tracking-widest">Student Participation</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
