import React, { useEffect } from 'react';
import { Palette, Music, Shapes, Smile, Clock, Sun } from 'lucide-react';
import Footer from '../../components/home/Footer';
import PageHeader from '../../components/PageHeader';

const PrePrimary = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const activities = [
        { icon: Palette, title: "Art & Craft", desc: "Expressing creativity through colors and textures." },
        { icon: Music, title: "Music & Movement", desc: "Building rhythm and coordination through dance." },
        { icon: Shapes, title: "Cognitive Play", desc: "Puzzles and building blocks for problem-solving." },
        { icon: Smile, title: "Social Skills", desc: "Learning to share, care, and communicate." },
    ];

    return (
        <div className="bg-neutral-50 min-h-screen font-sans text-slate-900">
            <PageHeader
                title="Pre-Primary Wing"
                subtitle="Nursery • LKG • UKG"
                bgImage="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1600"
            />

            <div className="container mx-auto px-4 py-20">

                {/* Intro Section */}
                <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
                    <div className="w-full md:w-1/2">
                        <span className="text-secondary font-bold tracking-wider uppercase text-xs mb-3 block">Foundation Years</span>
                        <h2 className="text-4xl md:text-5xl font-black font-display text-slate-900 mb-6 leading-tight">
                            Where Learning is <span className="text-primary">Joy</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <p>
                                At RK High School, we believe that the early years are crucial for a child's holistic development. Our Pre-Primary wing provides a safe, nurturing, and stimulating environment where toddlers transform into confident learners.
                            </p>
                            <p>
                                We follow a <strong>Play-Way Methodology</strong> mixed with Montessori principles, ensuring that education is not forced but absorbed naturally through curiosity and exploration.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 mt-8">
                                <img src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg w-full h-48 object-cover" alt="Kids Playing" />
                                <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg w-full h-32 object-cover" alt="Classroom" />
                            </div>
                            <div className="space-y-4">
                                <img src="https://images.unsplash.com/photo-1545558728-e812d8e2bf0e?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg w-full h-32 object-cover" alt="Drawing" />
                                <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg w-full h-48 object-cover" alt="Park" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Methodology Grid */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 font-display">Holistic Development Areas</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {activities.map((act, index) => (
                            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all text-center group">
                                <div className="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                                    <act.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold font-display text-slate-900 mb-2">{act.title}</h3>
                                <p className="text-slate-500">{act.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Day In Life */}
                <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

                    <div className="relative z-10 text-center mb-12">
                        <span className="text-secondary font-bold tracking-wider uppercase text-xs mb-3 block">Routine</span>
                        <h2 className="text-3xl md:text-4xl font-black font-display">A Day in Kindegarten</h2>
                    </div>

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { time: "09:00 AM", icon: Sun, title: "Circle Time", desc: "Morning prayers & rhymes" },
                            { time: "10:30 AM", icon: Palette, title: "Activity", desc: "Learning via play" },
                            { time: "12:00 PM", icon: Clock, title: "Snack Break", desc: "Healthy eating habits" },
                            { time: "01:00 PM", icon: Music, title: "Story Telling", desc: "Language development" },
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="text-secondary font-bold text-sm mb-2 font-display">{item.time}</div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default PrePrimary;
