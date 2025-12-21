import React from 'react';
import labImg from '../../../assets/images/student-life/gallery-page-5.jpg';
import roboticsImg from '../../../assets/images/student-life/event-science.jpg';
import { Clock, Trophy, HeartHandshake, Microscope, BookOpen, Music, Activity } from 'lucide-react';
import PWStyleCard from '../../PWStyleCard';

// Section 7: Daily School Routine
export const DailyRoutine = () => {
    const routine = [
        { time: "07:50 AM", activity: "Assembly", desc: "Morning prayer and news analysis." },
        { time: "08:20 AM", activity: "Academic Sessions", desc: "Subject periods including Lab work." },
        { time: "10:30 AM", activity: "Nutrition Break", desc: "Balanced diet recharge." },
        { time: "11:00 AM", activity: "Skill Periods", desc: "Computer Lab / Library / Music." },
        { time: "02:00 PM", activity: "Sports & Clubs", desc: "House activities and team sports." },
    ];

    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">A Day at Middle School</h2>
                    <p className="text-slate-600 mt-2">Structured learning mixed with practical application.</p>
                </div>

                <div className="relative">
                    {/* Vertical Line for Mobile, Horizontal for Desktop */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-emerald-200 md:hidden"></div>
                    <div className="hidden md:block absolute top-[24px] left-0 right-0 h-0.5 bg-emerald-200"></div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {routine.map((item, idx) => (
                            <div key={idx} className="relative flex md:flex-col items-start md:items-center pl-10 md:pl-0">
                                {/* Dot */}
                                <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 top-0 md:top-4 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-sm z-10"></div>

                                <div className="md:mt-10 md:text-center">
                                    <h4 className="font-bold text-emerald-700 text-lg">{item.time}</h4>
                                    <h5 className="font-bold text-slate-900 mt-1">{item.activity}</h5>
                                    <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 8: Learning Resources
export const LearningResources = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                    <img src={labImg} alt="Lab" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
                    <img src={roboticsImg} alt="Robotics" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" />
                </div>
                <div className="order-1 lg:order-2">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Facilities for Explorers</h2>
                    <p className="text-slate-600 mb-8 text-lg">
                        We provide state-of-the-art facilities to support the advanced curriculum of middle school.
                    </p>
                    <div className="space-y-6">
                        <PWStyleCard
                            title="Composite Science Labs"
                            desc="Fully equipped labs for Physics, Chemistry, and Biology experiments."
                            link="/facilities/science-lab"
                        />
                        <PWStyleCard
                            title="Digital Library"
                            desc="Access to e-books, research journals, and reference materials."
                            link="/facilities/library"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 9: Assessment & Evaluation
export const AssessmentEvaluation = () => {
    return (
        <div className="w-full py-16 px-4 bg-emerald-50">
            <div className="container mx-auto text-center max-w-3xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Comprehensive Evaluation</h2>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Evaluations move beyond pen-and-paper. We assess students on
                        <span className="font-bold text-emerald-600"> Lab Skills, Project Presentations, Debates, and Written Exams</span>.
                        This holistic approach ensures they are prepared for board-style assessments in the future.
                    </p>
                </div>
            </div>
        </div>
    );
};

// Section 10: Co-Curricular Activities
export const CoCurricular = () => {
    const activities = [
        { title: "Robotics Club", icon: "🤖", color: "bg-blue-100" },
        { title: "Dramatics", icon: "🎭", color: "bg-purple-100" },
        { title: "Eco Club", icon: "🌱", color: "bg-green-100" },
        { title: "Debate Society", icon: "🎙️", color: "bg-orange-100" },
    ];

    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-12">Clubs & Societies</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {activities.map((act, idx) => (
                        <div key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:shadow-lg transition-all group cursor-default">
                            <div className={`w-20 h-20 mx-auto ${act.color} rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                                {act.icon}
                            </div>
                            <h3 className="font-bold text-slate-800 text-lg">{act.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 11: Student Care & Discipline
export const StudentCare = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-emerald-500">
                        <HeartHandshake className="w-10 h-10 text-emerald-500 mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Adolescent Mentorship</h3>
                        <p className="text-slate-600">Guidance programs to help students navigate the physical and emotional changes of puberty.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-blue-500">
                        <Activity className="w-10 h-10 text-blue-500 mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Physical Well-being</h3>
                        <p className="text-slate-600">Compulsory sports and yoga sessions to ensure physical fitness along with mental growth.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-purple-500">
                        <Trophy className="w-10 h-10 text-purple-500 mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Leadership Roles</h3>
                        <p className="text-slate-600">Class prefects and house captains appointed to instill responsibility and leadership.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
