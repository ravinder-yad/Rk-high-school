import React from 'react';
import teachImg from '../../../assets/images/home/teacher1.jpg';
import classImg from '../../../assets/images/home/classroom.jpg';
import { User, Monitor, BookOpen, Globe, TrendingUp } from 'lucide-react';

export const StudentDevGoals = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Student Development Goals</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Academic Growth", pct: "100%", color: "bg-blue-500" },
                    { title: "Emotional Intelligence", pct: "100%", color: "bg-pink-500" },
                    { title: "Social Responsibility", pct: "100%", color: "bg-green-500" }
                ].map((item, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-2xl shadow-sm">
                        <h3 className="font-bold text-lg mb-4">{item.title}</h3>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
                            <div className={`${item.color} h-2.5 rounded-full`} style={{ width: item.pct }}></div>
                        </div>
                        <p className="text-right text-xs text-gray-500 mt-2">Target: Excellence</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export const TeacherRole = () => (
    <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
                <img src={teachImg} alt="Teacher" className="rounded-full border-8 border-blue-800 shadow-2xl" />
            </div>
            <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-6">Teachers as Mentors</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                        <User className="w-6 h-6 mr-3 text-yellow-500" />
                        <p>Facilitators of curiosity and critical thinking.</p>
                    </div>
                    <div className="flex items-start">
                        <Heart className="w-6 h-6 mr-3 text-red-500" />
                        <p>Emotional support and guidance counselors.</p>
                    </div>
                    <div className="flex items-start">
                        <TrendingUp className="w-6 h-6 mr-3 text-green-500" />
                        <p>Partners in every student's success story.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

import { Heart } from 'lucide-react';

export const RoleOfTech = () => (
    <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
                    <Monitor className="w-8 h-8 text-primary mr-3" />
                    Role of Technology
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    We integrate cutting-edge technology to make learning immersive. From smart boards to coding labs, we ensure our students are digital natives.
                </p>
                <span className="inline-block px-4 py-2 bg-blue-100 text-primary rounded-full font-bold text-sm">Future Ready Campus</span>
            </div>
            <div className="md:w-1/2">
                <img src={classImg} alt="Tech" className="rounded-2xl shadow-xl" />
            </div>
        </div>
    </section>
);

export const MoralEducation = () => (
    <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4 text-center">
            <BookOpen className="w-12 h-12 text-yellow-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Moral & Ethical Education</h2>
            <p className="max-w-2xl mx-auto text-gray-700 text-lg italic">
                "Intelligence plus character—that is the goal of true education."
            </p>
        </div>
    </section>
);

export const GlobalReady = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 flex justify-center items-center">
                <Globe className="w-8 h-8 text-blue-500 mr-2" />
                Global & Future Ready
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {['Critical Thinking', 'Digital Literacy', 'Cross-Cultural Skills', 'Adaptability'].map((skill, i) => (
                    <div key={i} className="p-6 border border-gray-200 rounded-xl text-center hover:bg-blue-50 transition-colors cursor-default">
                        <h3 className="font-bold text-slate-700">{skill}</h3>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
