import React from 'react';
import { ShieldCheck, Heart, Clock, Users, ArrowRight, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import runningImg from '../../../assets/images/student-life/gallery-page-3.jpg';
import teamImg from '../../../assets/images/student-life/event-sports.jpg';
import actionImg from '../../../assets/images/gallery/video-thumb-6.jpg';

// Section 15 & 16: Safety & Discipline
export const SportsSafetyValues = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto flex flex-col md:flex-row gap-12">
                <div className="flex-1 space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                        <ShieldCheck className="w-6 h-6 text-emerald-500" /> Safety Protocols
                    </h3>
                    <p className="text-slate-600">
                        Student safety is paramount. All sports activities are supervised. Basic first-aid is available on the ground, with tailored warm-up and cool-down routines to prevent injuries.
                    </p>
                </div>
                <div className="flex-1 space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                        <Heart className="w-6 h-6 text-red-500" /> Team Spirit
                    </h3>
                    <p className="text-slate-600">
                        We emphasize Fair Play. Win or lose, respect for opponents and officials is non-negotiable. Sports instills the grace to handle both victory and defeat.
                    </p>
                </div>
            </div>
        </div>
    );
};

// Section 17 & 18: Timings & Inclusivity
export const SportsDetails = () => {
    return (
        <div className="w-full py-16 px-4 bg-indigo-50 border-y border-indigo-100">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl flex items-center gap-4 border border-indigo-100">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                        <Clock className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">Practice Schedules</h4>
                        <p className="text-sm text-slate-600">Morning: 6:00 AM - 7:30 AM | Evening: 4:00 PM - 6:00 PM</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl flex items-center gap-4 border border-indigo-100">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                        <Users className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">Sports For All</h4>
                        <p className="text-sm text-slate-600">Inclusive programs ensuring every child finds a sport they enjoy.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 19: Gallery
export const SportsGallery = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">In Action</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
                    <div className="rounded-2xl overflow-hidden shadow-md">
                        <img
                            src={runningImg}
                            alt="Running"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-md">
                        <img
                            src={teamImg}
                            alt="Sports Team"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-md">
                        <img
                            src={actionImg}
                            alt="Basketball"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <div className="col-span-2 rounded-2xl overflow-hidden bg-orange-600 flex items-center justify-center text-white/80 font-bold text-xl">
                        + More Memories
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 20: CTA
export const SportsFinalCTA = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full py-24 px-4 bg-gradient-to-r from-orange-500 to-indigo-600 text-center text-white">
            <div className="container mx-auto">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <Trophy className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                    Play. Train. Excel.
                </h2>
                <p className="text-orange-100 text-lg mb-10 max-w-2xl mx-auto">
                    Unleash your potential on the field. Join the champions at RK High School.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        onClick={() => navigate('/admissions/form')}
                        className="px-10 py-4 bg-white text-orange-700 font-bold rounded-full text-lg shadow-xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
                    >
                        Join Sports Program <ArrowRight className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-10 py-4 bg-orange-800/50 border border-white/20 hover:bg-orange-800/70 text-white font-bold rounded-full text-lg transition-all"
                    >
                        Contact Coach
                    </button>
                </div>
            </div>
        </div>
    );
};
