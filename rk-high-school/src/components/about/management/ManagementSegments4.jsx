import React from 'react';
import { CheckCircle, ShieldCheck, Map, Users, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ParentConnect = () => (
    <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Parent & Management Connect</h2>
            <div className="flex justify-center flex-wrap gap-4">
                {['Open Door Policy', 'Regular Townhalls', 'Feedback Loops'].map((item, i) => (
                    <div key={i} className="bg-white px-6 py-3 rounded-full shadow-sm border border-blue-100 flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="font-medium text-slate-700">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export const Governance = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
            <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Transparency & Integrity</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
                We adhere to the highest standards of financial transparency and ethical governance, ensuring every resource is utilized for the betterment of the school.
            </p>
        </div>
    </section>
);

export const FutureRoadmap = () => (
    <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 flex justify-center items-center">
                <Map className="w-8 h-8 text-yellow-400 mr-2" />
                Future Roadmap
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">2025</h3>
                    <p className="text-gray-300">Launch of International Exchange Programs.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">2027</h3>
                    <p className="text-gray-300">New Sports Complex & Auditorium.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">2030</h3>
                    <p className="text-gray-300">Carbon Neutral Campus Initiative.</p>
                </div>
            </div>
        </div>
    </section>
);

export const MeetTheTeamGrid = () => (
    <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Meet Our Extended Team</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Behind every successful student is a team of dedicated professionals working tirelessly.
            </p>
            <button className="text-primary font-bold hover:underline flex items-center justify-center mx-auto">
                View All Staff <Users className="ml-2 w-5 h-5" />
            </button>
        </div>
    </section>
);

export const ManagementCTA = () => {
    const navigate = useNavigate();
    return (
        <section className="py-24 bg-gradient-to-br from-blue-800 to-indigo-900 text-white text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-4">Learn With Leaders Who Care</h2>
                <p className="text-blue-100 mb-10 text-lg">Join a community led by visionaries.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        onClick={() => navigate('/admissions/form')}
                        className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-all"
                    >
                        Apply Now
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-8 py-4 bg-white text-primary hover:bg-gray-100 font-bold rounded-full shadow-lg transform hover:scale-105 transition-all flex items-center justify-center"
                    >
                        <Phone className="w-5 h-5 mr-2" />
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
};
