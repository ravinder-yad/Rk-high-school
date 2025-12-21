import React from 'react';
import img1 from '../../../assets/images/student-life/gallery-page-4.jpg';
import { Compass, Layers, Heart, Shield, Award, CheckCircle } from 'lucide-react';

export const MissionSection = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <div className="flex items-center gap-2 mb-4">
                    <Compass className="w-6 h-6 text-primary" />
                    <span className="text-primary font-bold uppercase tracking-wider">Our Mission</span>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Nurturing Potential,<br /> Fostering Growth</h2>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                    <p>
                        To provide a safe, secure, and stimulating learning environment where every student is valued and encouraged to reach their full potential.
                        We are committed to preparing students not just for exams, but for life.
                    </p>
                </div>
            </div>
            <div className="md:w-1/2">
                <img
                    src={img1}
                    alt="Mission Illustration"
                    className="rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
                />
            </div>
        </div>
    </section>
);

export const MissionBreakdown = () => (
    <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
            {[
                { title: "Quality Education", desc: "Delivering excellence through best pedagogical practices." },
                { title: "Student-Centered", desc: "Focusing on individual learning styles and needs." },
                { title: "Holistic Development", desc: "Balancing academics with sports, arts, and life skills." }
            ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 border-l-4 border-secondary">
                    <h3 className="text-xl font-bold mb-2 text-slate-800">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                </div>
            ))}
        </div>
    </section>
);

export const EducationalPhilosophy = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Educational Philosophy</h2>
            <div className="relative max-w-3xl mx-auto space-y-8">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -z-10"></div>

                {[
                    "Rooted in Indian Values",
                    "Adapted for Global Context",
                    "Experiential Learning Model",
                    "Technology Integrated"
                ].map((text, i) => (
                    <div key={i} className={`flex items-center ${i % 2 === 0 ? 'md:flex-row-reverse text-right' : ''}`}>
                        <div className="w-1/2 hidden md:block"></div>
                        <div className="w-8 h-8 rounded-full bg-primary border-4 border-white shadow-lg mx-auto md:mx-4 flex-shrink-0 z-10"></div>
                        <div className={`flex-1 bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 mx-4 md:mx-0 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                            <h4 className="font-bold text-lg text-slate-700">{text}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export const CoreValuesGrid = () => (
    <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Core Values</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {[
                    { name: "Discipline", icon: <Shield className="w-8 h-8 text-blue-400" /> },
                    { name: "Integrity", icon: <Award className="w-8 h-8 text-yellow-400" /> },
                    { name: "Respect", icon: <Heart className="w-8 h-8 text-red-400" /> },
                    { name: "Responsibility", icon: <Layers className="w-8 h-8 text-green-400" /> },
                    { name: "Compassion", icon: <Heart className="w-8 h-8 text-pink-400" /> }
                ].map((val, i) => (
                    <div key={i} className="bg-slate-800 p-6 rounded-2xl hover:bg-slate-700 transition-colors group">
                        <div className="mb-4 transform group-hover:scale-110 transition-transform inline-block">{val.icon}</div>
                        <h3 className="font-bold text-lg">{val.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export const LearningApproach = () => (
    <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Learning Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {['Learn', 'Practice', 'Apply', 'Excel'].map((step, i) => (
                    <div key={i} className="relative bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary text-center">
                        <div className="text-6xl font-black text-gray-100 absolute top-2 right-4 z-0">{i + 1}</div>
                        <h3 className="text-2xl font-bold text-slate-800 relative z-10 mb-2">{step}</h3>
                        <p className="text-sm text-gray-500 relative z-10">Step-by-step mastery focused.</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
