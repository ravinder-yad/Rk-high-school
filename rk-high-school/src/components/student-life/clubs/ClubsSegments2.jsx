import React from 'react';
import perfImg from '../../../assets/images/student-life/gallery-page-5.jpg';
import { Music, Mic2, Tv, Leaf, Code2, Trophy, MessageSquare, HeartHandshake } from 'lucide-react';

// Shared PW Card Component for Grid
const ClubCard = ({ title, icon, color, desc }) => (
    <div className={`bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-${color}-300 hover:shadow-md transition-all`}>
        <div className={`w-10 h-10 bg-${color}-100 rounded-full flex items-center justify-center text-${color}-600 mb-4`}>
            {icon}
        </div>
        <h4 className="font-bold text-slate-800 text-lg mb-2">{title}</h4>
        <p className="text-slate-600 text-sm">{desc}</p>
    </div>
);

// Section 8, 9, 10: Performance Clubs
export const PerformanceClubs = () => {
    return (
        <div className="w-full py-20 px-4 bg-white border-t border-slate-100">
            <div className="container mx-auto flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                    <span className="text-pink-500 font-bold tracking-widest uppercase text-sm mb-2 block">Stage & Spotlight</span>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Performing Arts Clubs</h2>
                    <p className="text-slate-600 mb-8">
                        For students who love to express themselves. These clubs organize the Annual Day and various inter-house competitions.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-pink-50 rounded-2xl">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-pink-500"><Music className="w-5 h-5" /></div>
                            <div>
                                <h4 className="font-bold text-slate-900">Music Club</h4>
                                <p className="text-xs text-slate-600">Choir & Band</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-2xl">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-500"><Mic2 className="w-5 h-5" /></div>
                            <div>
                                <h4 className="font-bold text-slate-900">Dance Club</h4>
                                <p className="text-xs text-slate-600">Classical & Western</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-2xl">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-500"><Tv className="w-5 h-5" /></div>
                            <div>
                                <h4 className="font-bold text-slate-900">Drama Club</h4>
                                <p className="text-xs text-slate-600">Theatre & Skits</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 relative h-[500px] w-full">
                    <div className="absolute inset-4 bg-gradient-to-tr from-pink-500 to-purple-500 rounded-[2.5rem] opacity-20 blur-xl rotate-3"></div>
                    <img
                        src={perfImg}
                        alt="Performance"
                        className="relative rounded-[2.5rem] shadow-2xl w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

// Section 11, 12, 13, 14, 15: Special Interest Clubs
export const InterestClubs = () => {
    return (
        <div id="social" className="w-full py-20 px-4 bg-slate-50 scroll-mt-20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Special Interest Clubs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ClubCard
                        title="Eco Club"
                        icon={<Leaf className="w-6 h-6" />}
                        color="emerald"
                        desc="Promoting green living, tree plantation drives, and waste management."
                    />
                    <ClubCard
                        title="Coding & Tech"
                        icon={<Code2 className="w-6 h-6" />}
                        color="sky"
                        desc="Building apps, websites, and learning new programming languages."
                    />
                    <ClubCard
                        title="Sports Club"
                        icon={<Trophy className="w-6 h-6" />}
                        color="orange"
                        desc="Organizing inter-class matches and fitness challenges."
                    />
                    <ClubCard
                        title="Debate Society"
                        icon={<MessageSquare className="w-6 h-6" />}
                        color="indigo"
                        desc="Sharpening public speaking and argumentation skills."
                    />
                    <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-r from-emerald-500 to-teal-600 p-8 rounded-2xl text-white flex items-center gap-6">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <HeartHandshake className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold mb-2">Social Service Club</h4>
                            <p className="text-emerald-100">
                                Serving the community through charity drives, literacy campaigns, and visiting old age homes.
                                Instilling empathy and social responsibility.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
