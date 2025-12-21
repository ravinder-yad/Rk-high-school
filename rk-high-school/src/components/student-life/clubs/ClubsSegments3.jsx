import React from 'react';
import img1 from '../../../assets/images/home/gallery1.jpg';
import img2 from '../../../assets/images/student-life/gallery-page-1.jpg';
import img3 from '../../../assets/images/student-life/gallery-page-2.jpg';
import { Calendar, Users, Award, ArrowRight, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Section 16, 17: Activities & Leadership
export const ClubLeadership = () => {
    return (
        <div className="w-full py-20 px-4 bg-indigo-900 text-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
                    <Calendar className="w-10 h-10 text-purple-400 mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">Meetings & Activities</h3>
                    <p className="text-indigo-200 leading-relaxed mb-6">
                        Clubs meet weekly during the 'Activity Hour'. Students plan events, work on projects, and collaborate across grades.
                    </p>
                    <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 font-bold text-sm">
                        Every Saturday
                    </div>
                </div>

                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
                    <Users className="w-10 h-10 text-purple-400 mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">Student Leadership</h3>
                    <p className="text-indigo-200 leading-relaxed mb-6">
                        Each club is led by a President and Secretary elected by members. This provides real-world leadership experience.
                    </p>
                    <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 font-bold text-sm">
                        Elections in April
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 18: Achievements
export const ClubAchievements = () => {
    return (
        <div className="w-full py-16 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center flex items-center justify-center gap-3">
                    <Award className="w-8 h-8 text-yellow-500" /> Club Achievements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="text-4xl font-bold text-purple-600 mb-2">1st</div>
                        <p className="text-slate-600 font-medium">Inter-School Debate 2024</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="text-4xl font-bold text-purple-600 mb-2">Best</div>
                        <p className="text-slate-600 font-medium">Science Exhibition Model</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="text-4xl font-bold text-purple-600 mb-2">Top 10</div>
                        <p className="text-slate-600 font-medium">Regional Coding Hackathon</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 19: Gallery
export const ClubGallery = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Club Moments</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
                    <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-md">
                        <img
                            src={img1}
                            alt="Club Meeting"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-md">
                        <img
                            src={img2}
                            alt="Learning"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-md">
                        <img
                            src={img3}
                            alt="Teamwork"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <div className="col-span-2 rounded-2xl overflow-hidden bg-purple-600 flex items-center justify-center text-white/80 font-bold text-xl">
                        + Join a Club
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 20: CTA
export const ClubsCTA = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full py-24 px-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-center text-white">
            <div className="container mx-auto">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <Zap className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                    Find Your Tribe
                </h2>
                <p className="text-purple-100 text-lg mb-10 max-w-2xl mx-auto">
                    Don't just study. Create, perform, and lead. Join a club today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        onClick={() => navigate('/admissions/form')}
                        className="px-10 py-4 bg-white text-purple-700 font-bold rounded-full text-lg shadow-xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
                    >
                        Register Interest <ArrowRight className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-10 py-4 bg-purple-800/50 border border-white/20 hover:bg-purple-800/70 text-white font-bold rounded-full text-lg transition-all"
                    >
                        Talk to Coordinators
                    </button>
                </div>
            </div>
        </div>
    );
};
