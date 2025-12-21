import React from 'react';
import img1 from '../../../assets/images/student-life/gallery-page-2.jpg';
import img2 from '../../../assets/images/student-life/gallery-page-7.jpg';
import img3 from '../../../assets/images/student-life/gallery-page-1.jpg';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Gamepad2, Music, Palette, Tent } from 'lucide-react';

// Section 6: Daily Routine (Timeline Style)
export const DailyRoutine = () => {
    const routine = [
        { time: "08:30 AM", activity: "Arrival & Free Play", icon: "☀️" },
        { time: "09:00 AM", activity: "Morning Circle", icon: "⭕" },
        { time: "09:30 AM", activity: "Learning Activities", icon: "📚" },
        { time: "10:30 AM", activity: "Healthy Snack Break", icon: "🍎" },
        { time: "11:00 AM", activity: "Outdoor Play", icon: "⚽" },
        { time: "12:00 PM", activity: "Creative Time", icon: "🎨" },
        { time: "12:30 PM", activity: "Departure", icon: "👋" },
    ];

    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">A Happy Day at RK</h2>
                    <p className="text-slate-600 mt-2">Structured routine balanced with free play.</p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6 overflow-x-auto pb-4 md:pb-0">
                    {routine.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center min-w-[140px] text-center">
                            <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center text-2xl mb-4 border-2 border-indigo-100 relative z-10">
                                {item.icon}
                            </div>
                            {/* Connector Line (Hidden for last item) */}
                            {idx !== routine.length - 1 && (
                                <div className="hidden md:block absolute w-full h-1 bg-indigo-100 -z-0 translate-x-[50%] translate-y-[30px]" style={{ width: '100px' }}></div>
                            )}
                            <div className="text-sm font-bold text-indigo-600">{item.time}</div>
                            <div className="text-sm font-medium text-slate-700">{item.activity}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 7: Classroom Environment (Image Grid)
export const ClassroomEnvironment = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <span className="text-yellow-500 font-bold uppercase tracking-wider text-sm">Our Environment</span>
                    <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6">Designed for Little Explorers</h2>
                    <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                        Our classrooms are vibrant, airy, and filled with learning materials that are accessible to children.
                        Wall-to-wall carpeting, child-sized furniture, and dedicated activity corners make learning comfortable and fun.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center text-slate-700 font-medium">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span> Colorful & Stimulating Decor
                        </li>
                        <li className="flex items-center text-slate-700 font-medium">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span> Safe, Rounded Furniture
                        </li>
                        <li className="flex items-center text-slate-700 font-medium">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span> Dedicated Reading Corners
                        </li>
                    </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <img src={img1} alt="Classroom 1" className="rounded-2xl shadow-lg w-full h-64 object-cover -translate-y-4" />
                    <img src={img2} alt="Classroom 2" className="rounded-2xl shadow-lg w-full h-64 object-cover translate-y-4" />
                </div>
            </div>
        </div>
    );
};

// Section 8: Teachers & Care
export const TeachersAndCare = () => {
    return (
        <div className="w-full py-20 px-4 bg-indigo-50/50">
            <div className="container mx-auto text-center max-w-4xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Nurturing with Love</h2>
                <p className="text-lg text-slate-600 mb-12">
                    Our teachers are not just educators but second mothers. They are trained in early childhood care, CPR, and child psychology to ensure your child receives the best emotional support.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Placeholder for Teachers - Using generic avatars/illustrations to respect privacy if photos unavailable */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                        <div className="w-24 h-24 mx-auto rounded-full bg-slate-200 mb-4 overflow-hidden">
                            {/* Placeholder pattern */}
                            <div className="w-full h-full bg-indigo-100 flex items-center justify-center text-4xl">👩‍🏫</div>
                        </div>
                        <h3 className="font-bold text-slate-900">Certified Educators</h3>
                        <p className="text-sm text-slate-500">Expertly trained</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                        <div className="w-24 h-24 mx-auto rounded-full bg-slate-200 mb-4 overflow-hidden">
                            <div className="w-full h-full bg-green-100 flex items-center justify-center text-4xl">🤝</div>
                        </div>
                        <h3 className="font-bold text-slate-900">Caring Support Staff</h3>
                        <p className="text-sm text-slate-500">Always attentive</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                        <div className="w-24 h-24 mx-auto rounded-full bg-slate-200 mb-4 overflow-hidden">
                            <div className="w-full h-full bg-yellow-100 flex items-center justify-center text-4xl">🩺</div>
                        </div>
                        <h3 className="font-bold text-slate-900">Health Checks</h3>
                        <p className="text-sm text-slate-500">Regular monitoring</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 9: Safety & Hygiene
export const SafetyHygiene = () => {
    const points = [
        { title: "24/7 CCTV Surveillance", icon: <ShieldCheck className="w-6 h-6 text-green-600" /> },
        { title: "Child-Safe Furniture", icon: <ShieldCheck className="w-6 h-6 text-green-600" /> },
        { title: "Sanitized Classrooms", icon: <ShieldCheck className="w-6 h-6 text-green-600" /> },
        { title: "Secure Pick-up & Drop", icon: <ShieldCheck className="w-6 h-6 text-green-600" /> },
    ];

    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="bg-green-50 rounded-3xl p-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full blur-2xl opacity-50 -mr-10 -mt-10"></div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4 relative z-10">Uncompromised Safety</h2>
                        <p className="text-slate-700 mb-8 relative z-10">Your child's safety is our #1 priority. We maintain strict protocols to create a worry-free environment.</p>
                        <div className="space-y-4 relative z-10">
                            {points.map((pt, idx) => (
                                <div key={idx} className="flex items-center bg-white p-4 rounded-xl shadow-sm">
                                    <div className="bg-green-100 p-2 rounded-lg mr-4">
                                        {pt.icon}
                                    </div>
                                    <span className="font-bold text-slate-800">{pt.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <img
                            src={img3}
                            alt="Safe School Environment"
                            className="rounded-3xl shadow-xl w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 10: Co-Curricular
export const CoCurricular = () => {
    const activities = [
        { title: "Music & Dance", icon: <Music className="w-8 h-8 text-pink-500" />, desc: "Rhythm and movement" },
        { title: "Art & Craft", icon: <Palette className="w-8 h-8 text-purple-500" />, desc: "Creative expression" },
        { title: "Indoor Games", icon: <Gamepad2 className="w-8 h-8 text-blue-500" />, desc: "Strategic thinking" },
        { title: "Picnics & Tours", icon: <Tent className="w-8 h-8 text-green-500" />, desc: "Nature exploration" },
    ];

    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-12">Beyond The Classroom</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {activities.map((act, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all group">
                            <div className="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                {act.icon}
                            </div>
                            <h3 className="font-bold text-slate-800">{act.title}</h3>
                            <p className="text-xs text-slate-500 mt-1">{act.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
