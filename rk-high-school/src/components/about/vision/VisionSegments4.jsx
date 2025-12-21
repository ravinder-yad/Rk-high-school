import React from 'react';
import commImg from '../../../assets/images/student-life/event-cultural.jpg';
import { Users, HandHeart, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const InclusiveEducation = () => (
    <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">Inclusive Education</h2>
            <p className="max-w-3xl mx-auto text-purple-800 text-lg">
                We celebrate diversity and ensure that every child, regardless of ability or background, finds a welcoming place to learn and grow.
            </p>
        </div>
    </section>
);

export const ParentPartnership = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Parent-School Partnership</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">School's Role</h3>
                    <p className="text-blue-800">To communicate openly, provide feedback, and create opportunities for involvement.</p>
                </div>
                <div className="bg-yellow-50 p-8 rounded-2xl border-2 border-yellow-100">
                    <h3 className="text-xl font-bold text-yellow-900 mb-4">Parent's Role</h3>
                    <p className="text-yellow-800">To support learning at home, engage with teachers, and participate in school life.</p>
                </div>
            </div>
        </div>
    </section>
);

export const CommunitySocial = () => (
    <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 flex justify-center items-center">
                <HandHeart className="w-8 h-8 text-red-500 mr-2" />
                Community & Social Responsibility
            </h2>
            <div className="relative rounded-2xl overflow-hidden h-[300px] group">
                <img src={commImg} alt="Community" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-8 text-center">
                    <p className="text-white text-2xl font-medium">"Service to humanity is service to God. Our students actively participate in social outreach programs."</p>
                </div>
            </div>
        </div>
    </section>
);

export const CommitmentStatement = () => (
    <section className="py-24 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
            <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Commitment</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
                We pledge to never waver from our mission of creating not just successful professionals, but compassionate, ethical, and visionary leaders for tomorrow.
            </p>
        </div>
    </section>
);

export const VisionCTA = () => {
    const navigate = useNavigate();
    return (
        <section className="py-20 bg-gradient-to-br from-primary to-blue-800 text-center text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-4">Be a Part of Our Vision</h2>
                <p className="mb-10 text-blue-100 text-lg">Join RK High School and give your child a foundation for life.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        onClick={() => navigate('/admissions/form')}
                        className="px-8 py-4 bg-accent hover:bg-green-600 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-all w-full sm:w-auto"
                    >
                        Apply Now
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-8 py-4 bg-white text-primary hover:bg-gray-100 font-bold rounded-full shadow-lg transform hover:scale-105 transition-all w-full sm:w-auto"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
};
