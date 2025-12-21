import React from 'react';
import { Flag, BookOpen, Gift, Award, Globe, Mic2 } from 'lucide-react';

// Section 9, 10, 11: Festivals & National Days
export const NationalDays = () => {
    return (
        <div id="fest" className="w-full py-20 px-4 bg-orange-50 scroll-mt-20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">National Pride & Festivals</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-8 rounded-3xl border border-orange-100 text-center shadow-sm">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-4">
                            <Flag className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Independence Day</h3>
                        <p className="text-slate-600 text-sm">Flag hoisting and patriotic songs marking the nation's freedom.</p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-green-100 text-center shadow-sm">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                            <mic2 className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Republic Day</h3>
                        <p className="text-slate-600 text-sm">Parade and cultural programs honoring the constitution.</p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-indigo-100 text-center shadow-sm">
                        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-4">
                            <BookOpen className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Literary Fest</h3>
                        <p className="text-slate-600 text-sm">Celebrating languages with poetry, storytelling, and book fairs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 12, 13, 14, 15: Special Days & Awards
export const SpecialEvents = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Special Days */}
                <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Campus Celebrations</h3>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 flex-shrink-0">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">Teacher's Day</h4>
                                <p className="text-slate-600 text-sm">Students take charge and honor their mentors.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 flex-shrink-0">
                                <Gift className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">Children's Day</h4>
                                <p className="text-slate-600 text-sm">A fun-filled day with games, food stalls, and teachers performing.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Awards & Inter-school */}
                <div className="space-y-6">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-[2.5rem] text-white">
                        <div className="flex items-center gap-4 mb-4">
                            <Award className="w-10 h-10 text-yellow-300" />
                            <h3 className="text-2xl font-bold">Prize Distribution</h3>
                        </div>
                        <p className="text-indigo-100">
                            Recognizing academic toppers, sports champions, and best all-rounders. A moment of pride for parents.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden">
                        <div className="flex items-center gap-4 mb-4">
                            <Globe className="w-10 h-10 text-sky-500" />
                            <h3 className="text-2xl font-bold text-slate-900">Inter-School Meets</h3>
                        </div>
                        <p className="text-slate-600">
                            Hosting debate, quiz, and sports competitions, inviting schools from across the district.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
