import React, { useEffect } from 'react';
import { Microscope, Cpu, Music, Trophy, BookOpen, Layers } from 'lucide-react';
import Footer from '../../components/home/Footer';
import PageHeader from '../../components/PageHeader';

const Middle = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        { icon: Microscope, title: "Science & Math Labs", desc: "Dedicated laboratories for Physics, Chemistry, Biology, and Mathematics." },
        { icon: Cpu, title: "Robotics & Coding", desc: "Introducing students to programming, AI basics, and electronics." },
        { icon: Layers, title: "Project Based Learning", desc: "Interdisciplinary projects that connect classroom concepts to real-world problems." },
    ];

    return (
        <div className="bg-neutral-50 min-h-screen font-sans text-slate-900">
            <PageHeader
                title="Middle Wing"
                subtitle="Grade VI - Grade VIII"
                bgImage="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=1600"
            />

            <div className="container mx-auto px-4 py-20">

                {/* Intro */}
                <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
                    <div className="w-full lg:w-1/2">
                        <span className="text-secondary font-bold tracking-wider uppercase text-xs mb-3 block">Exploration Phase</span>
                        <h2 className="text-4xl md:text-5xl font-black font-display text-slate-900 mb-6 leading-tight">
                            Bridging the Gap to <span className="text-primary">High School</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <p>
                                Middle school is a time of significant transition. At RK High School, we focus on guiding students from dependent to independent learning. The curriculum expands to include specialized subjects and deeper inquiry.
                            </p>
                            <p>
                                We emphasize critical thinking, communication, and collaboration—skills essential for the 21st century.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-primary">
                            <Trophy className="w-8 h-8 text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-1">Sports Integration</h3>
                            <p className="text-sm text-slate-500">Regular coaching in Football, Cricket, Basketball.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-secondary translate-y-8">
                            <Music className="w-8 h-8 text-secondary mb-4" />
                            <h3 className="font-bold text-lg mb-1">Arts & Culture</h3>
                            <p className="text-sm text-slate-500">Music, Dance, Theater, and Fine Arts clubs.</p>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 font-display">Academic Enrichment</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feat, i) => (
                            <div key={i} className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-50 hover:border-primary/20 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 group-hover:bg-primary/5 transition-colors"></div>
                                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-primary group-hover:text-white transition-colors relative z-10">
                                    <feat.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold font-display text-slate-900 mb-3 relative z-10">{feat.title}</h3>
                                <p className="text-slate-500 relative z-10">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Library Highlight */}
                <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <BookOpen className="w-16 h-16 text-secondary mx-auto mb-8" />
                        <h2 className="text-4xl md:text-5xl font-black font-display mb-6">A World of Knowledge</h2>
                        <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                            Our state-of-the-art library fosters a love for reading with a collection of over 10,000 books, digital resources, and quiet reading zones.
                        </p>
                        <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-secondary hover:text-white transition-all shadow-lg">
                            Explore Library
                        </button>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default Middle;
