import React from 'react';
import img1 from '../../../assets/images/gallery/gallery-page-10.jpg';
import img2 from '../../../assets/images/gallery/gallery-page-11.jpg';
import img3 from '../../../assets/images/gallery/gallery-page-12.jpg';
import { Heart, Users, Medal, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Section 16, 17: Community & Planning
export const EventCommunity = () => {
    return (
        <div className="w-full py-20 px-4 bg-orange-50 border-y border-orange-100">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
                <div>
                    <Heart className="w-10 h-10 text-red-500 mb-4 mx-auto md:mx-0" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Community Events</h3>
                    <p className="text-slate-700 leading-relaxed">
                        We extend our joy to the society. Blood donation camps, tree plantation drives, and charity fetes are organized regularly, involving parents and locals.
                    </p>
                </div>
                <div>
                    <Users className="w-10 h-10 text-indigo-500 mb-4 mx-auto md:mx-0" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Student Organizers</h3>
                    <p className="text-slate-700 leading-relaxed">
                        Students are at the heart of every event. From decoration to anchoring and management, the Student Council takes the lead, learning event management skills.
                    </p>
                </div>
            </div>
        </div>
    );
};

// Section 18: Achievements
export const EventAchievements = () => {
    return (
        <div className="w-full py-16 px-4 bg-white">
            <div className="container mx-auto">
                <div className="bg-slate-900 rounded-[3rem] p-10 text-white text-center">
                    <Medal className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold mb-8">Event Milestones</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20">
                        <div>
                            <div className="text-5xl font-bold text-orange-400 mb-2">20+</div>
                            <div className="text-sm text-slate-400 font-bold uppercase tracking-widest">Annual Events</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-indigo-400 mb-2">5000+</div>
                            <div className="text-sm text-slate-400 font-bold uppercase tracking-widest">Audience</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-green-400 mb-2">100%</div>
                            <div className="text-sm text-slate-400 font-bold uppercase tracking-widest">Fun</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 19: Gallery
export const EventGallery = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Captured Moments</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
                    <div className="rounded-2xl overflow-hidden shadow-md">
                        <img
                            src={img1}
                            alt="Concert"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-md">
                        <img
                            src={img2}
                            alt="Group"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-md">
                        <img
                            src={img3}
                            alt="Stage"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <div className="col-span-2 rounded-2xl overflow-hidden bg-orange-600 flex items-center justify-center text-white/80 font-bold text-xl">
                        + Event Albums
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 20: CTA
export const EventsCTA = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full py-24 px-4 bg-gradient-to-r from-orange-500 to-indigo-600 text-center text-white">
            <div className="container mx-auto">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                    Be Part of Our Story
                </h2>
                <p className="text-orange-100 text-lg mb-10 max-w-2xl mx-auto">
                    Every event is a chapter in the beautiful journey of school life. Come, celebrate with us.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        onClick={() => navigate('/admissions/form')}
                        className="px-10 py-4 bg-white text-orange-700 font-bold rounded-full text-lg shadow-xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
                    >
                        Join RK High School <ArrowRight className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-10 py-4 bg-orange-800/50 border border-white/20 hover:bg-orange-800/70 text-white font-bold rounded-full text-lg transition-all"
                    >
                        View Calendar
                    </button>
                </div>
            </div>
        </div>
    );
};
