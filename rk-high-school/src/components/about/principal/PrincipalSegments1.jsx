import React from 'react';
import heroImg from '../../../assets/images/home/campus.jpg';
import prinImg from '../../../assets/images/home/principal.jpg';
import { Quote } from 'lucide-react';

export const PrincipalHero = () => (
    <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-slate-900">
            <img src={heroImg} alt="School" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Principal's Message</h1>
            <p className="text-xl md:text-2xl font-light italic text-yellow-400">“Leading with Vision, Integrity & Excellence”</p>
        </div>
    </div>
);

export const WelcomeNote = () => (
    <section className="py-16 bg-white relative -mt-10 z-20">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center border-t-4 border-secondary">
                <Quote className="w-8 h-8 mx-auto text-primary mb-4 opacity-50" />
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Welcome to RK High School</h2>
                <p className="text-gray-600">A warm greeting to all students, parents, and visitors.</p>
            </div>
        </div>
    </section>
);

export const PrincipalProfile = () => (
    <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex justify-center">
                <div className="relative w-72 h-72 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                    <img src={prinImg} alt="Principal" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="md:w-2/3">
                <h2 className="text-4xl font-bold text-slate-800 mb-2">Dr. Anjali Verma</h2>
                <p className="text-xl text-primary font-medium mb-6">Principal, RK High School</p>
                <div className="space-y-2 text-gray-700">
                    <p><strong>Qualification:</strong> PhD in Education, M.Sc (Physics), B.Ed</p>
                    <p><strong>Experience:</strong> 25+ Years in Academic Leadership</p>
                    <p><strong>Awards:</strong> "Best Principal of the Year 2023" by District Board</p>
                </div>
            </div>
        </div>
    </section>
);

export const MessageIntro = () => (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl leading-relaxed text-gray-700 drop-cap">
                    <span className="text-5xl float-left mr-3 mt-[-10px] text-primary font-serif font-bold">E</span>ducation is the passport to the future, for tomorrow belongs to those who prepare for it today. It gives me immense pride to welcome you to RK High School, an institution where we don't just teach chapters, but we build lives.
                </p>
            </div>
        </div>
    </section>
);

export const CoreMessage = () => (
    <section className="py-20 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] bg-fixed bg-blue-900">
        <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-10 md:p-16 border border-white/20 text-center text-white">
                <Quote className="w-12 h-12 mx-auto text-yellow-400 mb-6" />
                <h2 className="text-3xl font-bold mb-6">"My Vision for Every Child"</h2>
                <p className="text-lg md:text-xl leading-relaxed font-light opacity-90">
                    "I believe that every child is unique and has infinite potential. My goal is to create an environment where students feel safe to explore, question, and innovate. We strive to nurture not just academic toppers, but compassionate human beings who will make a positive difference in the world."
                </p>
            </div>
        </div>
    </section>
);
