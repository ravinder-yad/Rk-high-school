import React from 'react';
import img1 from '../../../assets/images/home/gallery6.jpg';
import { BookOpen, Users, Star, UserCheck, TrendingUp } from 'lucide-react';

export const Philosophy = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Educational Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Student-First", desc: "Prioritizing the needs and well-being of every learner." },
                    { title: "Value-Based", desc: "Integrating ethics and morals into the daily curriculum." },
                    { title: "Future-Ready", desc: "Equipping students with skills for the 21st century." }
                ].map((item, i) => (
                    <div key={i} className="p-8 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors text-center border mr-0 md:mr-4 last:mr-0">
                        <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export const RoleInSociety = () => (
    <section className="py-20 bg-background">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <img src={img1} alt="Society" className="rounded-2xl shadow-xl" />
            </div>
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">School's Role in Society</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Schools are the foundation of a civilized society. We take our responsibility seriously—to shape citizens who contribute positively to their communities, respect diversity, and uphold democratic values.
                </p>
            </div>
        </div>
    </section>
);

export const AcademicVision = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Academic Excellence</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { label: "Rigorous Curriculum", icon: <BookOpen className="w-8 h-8 text-blue-500" /> },
                    { label: "Consistent Results", icon: <Star className="w-8 h-8 text-yellow-500" /> },
                    { label: "Innovative Teaching", icon: <TrendingUp className="w-8 h-8 text-green-500" /> },
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-3xl">
                            {item.icon}
                        </div>
                        <h3 className="font-bold text-lg text-slate-700">{item.label}</h3>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export const CharacterDiscipline = () => (
    <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12 flex justify-center items-center">
                <UserCheck className="w-8 h-8 mr-3 text-secondary" />
                Character & Discipline
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
                {['Self-Discipline', 'Mutual Respect', 'Integrity', 'Punctuality', 'Responsibility'].map((trait, i) => (
                    <span key={i} className="px-6 py-3 bg-white/10 rounded-full text-lg font-medium border border-white/20 hover:bg-white/20 transition-colors">
                        {trait}
                    </span>
                ))}
            </div>
        </div>
    </section>
);

export const StudentDevFocus = () => (
    <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Holistic Student Development</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                <div className="w-64 h-64 bg-white rounded-full flex flex-col items-center justify-center shadow-xl border-8 border-blue-200 z-10">
                    <span className="text-4xl font-bold text-blue-600 mb-2">IQ</span>
                    <span className="text-gray-500">Academic</span>
                </div>
                <div className="hidden md:block w-16 h-2 bg-blue-200"></div>
                <div className="w-64 h-64 bg-white rounded-full flex flex-col items-center justify-center shadow-xl border-8 border-green-200 z-10">
                    <span className="text-4xl font-bold text-green-600 mb-2">EQ</span>
                    <span className="text-gray-500">Emotional</span>
                </div>
                <div className="hidden md:block w-16 h-2 bg-green-200"></div>
                <div className="w-64 h-64 bg-white rounded-full flex flex-col items-center justify-center shadow-xl border-8 border-yellow-200 z-10">
                    <span className="text-4xl font-bold text-yellow-600 mb-2">SQ</span>
                    <span className="text-gray-500">Social</span>
                </div>
            </div>
        </div>
    </section>
);
