import React from 'react';
import { Trophy, Award, Users, PieChart } from 'lucide-react';

const StatsAndAchievements = () => {
    return (
        <div className="py-20 bg-background">
            <div className="container mx-auto px-4">

                {/* Section 13: Achievements */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-textDark">Hall of Fame</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-8 text-white shadow-xl flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Best School Award</h3>
                                <p className="text-yellow-100">District Education Board, 2023</p>
                            </div>
                            <Trophy className="w-16 h-16 text-white/80" />
                        </div>
                        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-8 text-white shadow-xl flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Excellence in Sports</h3>
                                <p className="text-blue-100">National School Games, 2022</p>
                            </div>
                            <Award className="w-16 h-16 text-white/80" />
                        </div>
                    </div>
                </div>

                {/* Section 14: Student Strength */}
                <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
                    <h2 className="text-2xl font-bold text-textDark mb-8 flex items-center">
                        <Users className="w-6 h-6 mr-2 text-primary" />
                        Student Demographics
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                        <div className="p-4 text-center">
                            <div className="text-5xl font-bold text-gray-800 mb-2">3000+</div>
                            <div className="text-gray-500 font-medium uppercase tracking-wider text-sm">Total Students</div>
                        </div>
                        <div className="p-4 text-center">
                            <div className="text-5xl font-bold text-blue-500 mb-2">1600</div>
                            <div className="text-gray-500 font-medium uppercase tracking-wider text-sm">Boys</div>
                        </div>
                        <div className="p-4 text-center">
                            <div className="text-5xl font-bold text-pink-500 mb-2">1400</div>
                            <div className="text-gray-500 font-medium uppercase tracking-wider text-sm">Girls</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StatsAndAchievements;
