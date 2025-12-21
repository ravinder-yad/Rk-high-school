import React from 'react';
import meetImg from '../../../assets/images/student-life/gallery-page-7.jpg';
import { Target, Users, TrendingUp, Award, Layers } from 'lucide-react';

export const RolesResponsibilities = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Roles & Responsibilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Academic Excellence", icon: <Target className="w-8 h-8 text-blue-500" />, desc: "Monitoring curriculum and performance." },
                    { title: "Governance", icon: <Layers className="w-8 h-8 text-indigo-500" />, desc: "Ensuring compliance and ethical standards." },
                    { title: "Student Welfare", icon: <Users className="w-8 h-8 text-green-500" />, desc: "Focusing on safety and holistic growth." },
                ].map((item, i) => (
                    <div key={i} className="text-center p-8 border rounded-2xl hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">{item.icon}</div>
                        <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export const DecisionProcess = () => (
    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Strategic Decision Making</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 text-center">
                <div className="bg-white px-8 py-6 rounded-xl shadow-md font-bold text-lg text-slate-800">Strategy</div>
                <div className="h-8 w-1 md:h-1 md:w-16 bg-gray-300"></div>
                <div className="bg-white px-8 py-6 rounded-xl shadow-md font-bold text-lg text-slate-800">Planning</div>
                <div className="h-8 w-1 md:h-1 md:w-16 bg-gray-300"></div>
                <div className="bg-white px-8 py-6 rounded-xl shadow-md font-bold text-lg text-secondary">Execution</div>
            </div>
        </div>
    </section>
);

export const ExperienceExpertise = () => (
    <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-around text-center">
            <div className="mb-8 md:mb-0">
                <h3 className="text-6xl font-black mb-2">25+</h3>
                <p className="text-xl font-medium">Years of Excellence</p>
            </div>
            <div>
                <h3 className="text-6xl font-black mb-2">100+</h3>
                <p className="text-xl font-medium">Years Combined Experience</p>
            </div>
        </div>
    </section>
);

export const ManagementAchievements = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 flex justify-center items-center">
                <Award className="w-8 h-8 text-yellow-500 mr-2" />
                Milestones Under Leadership
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-primary">01</div>
                    <div>
                        <h4 className="font-bold text-lg">Best School Infrastructure Award 2022</h4>
                        <p className="text-gray-600">Recognized for state-of-the-art facilities.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-primary">02</div>
                    <div>
                        <h4 className="font-bold text-lg">100% Board Results (Last 5 Years)</h4>
                        <p className="text-gray-600">Consistent academic performance.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export const TeacherCollab = () => (
    <section className="py-20 bg-background">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <img src={meetImg} alt="Meeting" className="rounded-2xl shadow-xl transform skew-y-2 hover:skew-y-0 transition-transform duration-500" />
            </div>
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Empowering Our Teachers</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    We view our teachers as partners. Regular training, open dialogue, and a supportive environment ensure that they can give their best to the students.
                </p>
            </div>
        </div>
    </section>
);
