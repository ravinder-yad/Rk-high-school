import React from 'react';
import libImg from '../../../assets/images/gallery/gallery-page-9.jpg';
import compImg from '../../../assets/images/student-life/gallery-page-5.jpg';
import { Clock, Download, Trophy, Music, Shield, HeartHandshake } from 'lucide-react';
import PWStyleCard from '../../PWStyleCard';

// Section 7: Daily School Routine
export const DailyRoutine = () => {
    const routine = [
        { time: "07:50 AM", activity: "Assembly & Prayer", desc: "Starting the day with gratitude." },
        { time: "08:15 AM", activity: "First Session", desc: "Focus on core subjects." },
        { time: "10:30 AM", activity: "Snack Break", desc: "Nutritious recharge." },
        { time: "11:00 AM", activity: "Activity Session", desc: "Labs, Library, or Sports." },
        { time: "01:45 PM", activity: "Departure", desc: "Leaving with new knowledge." },
    ];

    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">A Disciplined Day</h2>
                    <p className="text-slate-600 mt-2">Balancing focus and recreation.</p>
                </div>

                <div className="relative">
                    {/* Vertical Line for Mobile, Horizontal for Desktop */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-indigo-200 md:hidden"></div>
                    <div className="hidden md:block absolute top-[24px] left-0 right-0 h-0.5 bg-indigo-200"></div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {routine.map((item, idx) => (
                            <div key={idx} className="relative flex md:flex-col items-start md:items-center pl-10 md:pl-0">
                                {/* Dot */}
                                <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 top-0 md:top-4 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-sm z-10"></div>

                                <div className="md:mt-10 md:text-center">
                                    <h4 className="font-bold text-indigo-700 text-lg">{item.time}</h4>
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
                    <img src={libImg} alt="Library" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
                    <img src={compImg} alt="Computer Lab" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" />
                </div>
                <div className="order-1 lg:order-2">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Tools for Modern Learning</h2>
                    <p className="text-slate-600 mb-8 text-lg">
                        We empower our students with the best resources to facilitate their understanding.
                    </p>
                    <div className="space-y-6">
                        <PWStyleCard
                            title="Smart Classrooms"
                            desc="Digital boards and audio-visual aids for interactive sessions."
                            link="/facilities/computer-lab"
                        />
                        <PWStyleCard
                            title="Well-Stocked Library"
                            desc="Thousands of age-appropriate books to encourage reading habits."
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
        <div className="w-full py-16 px-4 bg-indigo-50">
            <div className="container mx-auto text-center max-w-3xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Assessment Without Stress</h2>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                    <p className="text-lg text-slate-600 leading-relaxed">
                        We follow a <span className="font-bold text-emerald-600">Continuous & Comprehensive Evaluation (CCE)</span> pattern.
                        Instead of burdening students with only year-end exams, we assess them through class performance, daily assignments,
                        projects, and periodic cycle tests. This ensures consistent learning habits.
                    </p>
                </div>
            </div>
        </div>
    );
};

// Section 10: Co-Curricular Activities
export const CoCurricular = () => {
    const activities = [
        { title: "Art & Craft", icon: "🎨", color: "bg-pink-100" },
        { title: "Music", icon: "🎵", color: "bg-blue-100" },
        { title: "Sports", icon: "⚽", color: "bg-green-100" },
        { title: "Yoga", icon: "🧘", color: "bg-orange-100" },
    ];

    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-12">Holistic Development</h2>
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
                    <div className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-indigo-500">
                        <HeartHandshake className="w-10 h-10 text-indigo-500 mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Positive Discipline</h3>
                        <p className="text-slate-600">We guide students to understand right from wrong through mentorship, not harsh punishment.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-green-500">
                        <Shield className="w-10 h-10 text-green-500 mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Anti-Bullying Policy</h3>
                        <p className="text-slate-600">A strict zero-tolerance policy towards bullying to ensure every child feels safe.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-yellow-500">
                        <Trophy className="w-10 h-10 text-yellow-500 mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Reward System</h3>
                        <p className="text-slate-600">Recognizing good behavior and academic feedback with stars, badges, and certificates.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
