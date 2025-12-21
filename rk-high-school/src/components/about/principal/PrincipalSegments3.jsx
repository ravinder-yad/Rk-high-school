import React from 'react';
import teachImg from '../../../assets/images/home/teacher1.jpg';
import techImg from '../../../assets/images/home/classroom.jpg';
import { Shield, Users, HeartHandshake } from 'lucide-react';

export const TeacherLeadership = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Teacher Leadership</h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg mb-10">
                "Our teachers are not just instructors; they are leaders who inspire, mentors who guide, and role models who exemplify the values we teach."
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-48 rounded-xl bg-gray-200 overflow-hidden relative group">
                        <img src={teachImg} alt="Teacher" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-white font-bold">Expert Faculty</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export const TechModernEdu = () => (
    <section className="py-20 bg-background">
        <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
                <img src={techImg} alt="Tech" className="rounded-2xl shadow-xl" />
            </div>
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Embracing Modern Education</h2>
                <div className="space-y-4">
                    <p className="text-gray-600">We leverage technology to enhance the learning process, making it more interactive and engaging.</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 font-medium ml-4">
                        <li>Smart Classrooms & Digital Boards</li>
                        <li>Robotics & Coding Labs</li>
                        <li>E-Library & Online Resources</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

export const SafetyWellbeing = () => (
    <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 text-center">
            <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-green-900 mb-6">Safety & Well-being</h2>
            <p className="max-w-2xl mx-auto text-green-800">
                A safe child is a happy child. We ensure strict safety protocols and provide counseling support to nurture the mental and emotional well-being of every student.
            </p>
        </div>
    </section>
);

export const ParentPartnershipSection = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Partners in Progress</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-100">
                    <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center"><Users className="w-6 h-6 mr-2" /> Role of Parents</h3>
                    <p className="text-gray-700">Your engagement is crucial. Support your child's learning journey and reinforce the values taught at school.</p>
                </div>
                <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center"><HeartHandshake className="w-6 h-6 mr-2" /> School's Commitment</h3>
                    <p className="text-gray-700">We promise transparent communication, regular feedback, and an open-door policy for all your concerns.</p>
                </div>
            </div>
        </div>
    </section>
);

export const InclusiveHolistic = () => (
    <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Inclusive & Holistic</h2>
            <p className="text-xl text-gray-400 font-light max-w-4xl mx-auto">
                "We do not discriminate. Every child, regardless of ability, background, or circumstance, deserves the best education. Our campus is inclusive, and our hearts are open."
            </p>
        </div>
    </section>
);
