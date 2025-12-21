import React from 'react';
import { Rocket, Send, PenTool } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const FutureVision = () => (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
            <Rocket className="w-12 h-12 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-3xl font-bold mb-6">Vision for the Future</h2>
            <p className="text-lg max-w-3xl mx-auto text-blue-100 leading-relaxed">
                "We are constantly evolving. My vision is to see RK High School as a hub of innovation, where students are not just consumers of knowledge, but creators of solutions for a better tomorrow."
            </p>
        </div>
    </section>
);

export const MsgToStudents = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-orange-50 rounded-2xl p-10 border-l-8 border-orange-500 shadow-sm relative">
                <Send className="absolute top-6 right-6 text-orange-200 w-16 h-16" />
                <h3 className="text-2xl font-bold text-orange-800 mb-4">Dear Students,</h3>
                <p className="text-gray-700 text-lg italic mb-4">
                    "Dream big, work hard, and never be afraid of failure. Remember, success is not a destination, but a journey of continuous improvement. The school is your canvas—paint it with your brightest colors."
                </p>
            </div>
        </div>
    </section>
);

export const MsgToParents = () => (
    <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-blue-50 rounded-2xl p-10 border-l-8 border-blue-500 shadow-sm relative">
                <div className="absolute top-6 right-6 text-blue-200 w-16 h-16 font-bold text-6xl">P</div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">To The Parents,</h3>
                <p className="text-gray-700 text-lg italic mb-4">
                    "Thank you for entrusting us with your most precious treasure. Let us work together to give them roots to grow and wings to fly. Your trust is our biggest motivation."
                </p>
            </div>
        </div>
    </section>
);

export const PrincipalPromise = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 uppercase tracking-widest">My Promise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 font-serif">
                "I promise to always put the interest of the students first and to lead this institution with transparency, fairness, and love."
            </p>
            <div className="flex flex-col items-center">
                <div className="font-handwriting text-4xl text-blue-600 mb-2">Anjali Verma</div>
                <div className="w-16 h-1 bg-gray-300"></div>
            </div>
        </div>
    </section>
);

export const PrincipalCTA = () => {
    const navigate = useNavigate();
    return (
        <section className="py-24 bg-slate-900 text-white text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-4">Join Us in Shaping a Bright Future</h2>
                <p className="text-gray-400 mb-10 text-lg">Admissions Open for Academic Year 2025-26</p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        onClick={() => navigate('/admissions/form')}
                        className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-all"
                    >
                        Apply Now
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-all"
                    >
                        Contact School
                    </button>
                </div>
            </div>
        </section>
    );
};
