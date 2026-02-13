import React, { useEffect } from 'react';
import { Atom, Microscope, FlaskConical, Dna, BrainCircuit, Globe } from 'lucide-react';
import Footer from '../../components/home/Footer';
import PageHeader from '../../components/PageHeader';

const Science = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const labs = [
        {
            icon: Atom,
            title: "Physics Lab",
            desc: "Equipped with advanced apparatus for mechanics, optics, and electronics experiments.",
            color: "text-blue-500",
            bg: "bg-blue-50"
        },
        {
            icon: FlaskConical,
            title: "Chemistry Lab",
            desc: "State-of-the-art workstations for organic and inorganic analysis with highest safety standards.",
            color: "text-green-500",
            bg: "bg-green-50"
        },
        {
            icon: Dna,
            title: "Biology Lab",
            desc: "Detailed models, powerful microscopes, and specimens for exploring the living world.",
            color: "text-pink-500",
            bg: "bg-pink-50"
        },
    ];

    return (
        <div className="bg-neutral-50 min-h-screen font-sans text-slate-900">
            <PageHeader
                title="Department of Science"
                subtitle="Innovating for Tomorrow"
                bgImage="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1600"
            />

            <div className="container mx-auto px-4 py-20">

                {/* Intro */}
                <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
                    <div className="w-full lg:w-1/2">
                        <span className="text-secondary font-bold tracking-wider uppercase text-xs mb-3 block">Exploration & Discovery</span>
                        <h2 className="text-4xl md:text-5xl font-black font-display text-slate-900 mb-6 leading-tight">
                            Unraveling the Mysteries of the <span className="text-primary">Universe</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <p>
                                The Science Department at RK High School is dedicated to fostering a spirit of inquiry and scientific temper. We move beyond rote learning to hands-on experimentation and critical analysis.
                            </p>
                            <p>
                                From dissecting biological systems to understanding quantum mechanics, our students are prepared for premier institutes like IITs, AIIMS, and IISc.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 relative">
                        <div className="absolute inset-0 bg-primary rounded-[3rem] rotate-3 opacity-20 transform translate-x-4 translate-y-4"></div>
                        <img
                            src="https://images.unsplash.com/photo-1581093196277-9f608ee1b285?auto=format&fit=crop&q=80&w=800"
                            className="relative rounded-[3rem] shadow-2xl w-full object-cover z-10"
                            alt="Robotics Lab"
                        />
                    </div>
                </div>

                {/* Labs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {labs.map((lab, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-slate-50 hover:shadow-2xl hover:-translate-y-2 transition-all group">
                            <div className={`w-16 h-16 ${lab.bg} rounded-2xl flex items-center justify-center ${lab.color} mb-6 group-hover:scale-110 transition-transform`}>
                                <lab.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold font-display text-slate-900 mb-3">{lab.title}</h3>
                            <p className="text-slate-500 leading-relaxed">{lab.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Stats / Faculty */}
                <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        <div>
                            <div className="text-5xl font-black text-secondary mb-2">15+</div>
                            <div className="text-sm font-bold uppercase tracking-wider text-slate-400">Labs & Workshops</div>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-primary mb-2">20+</div>
                            <div className="text-sm font-bold uppercase tracking-wider text-slate-400">Expert Faculty</div>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-secondary mb-2">100%</div>
                            <div className="text-sm font-bold uppercase tracking-wider text-slate-400">Practical Exposure</div>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-primary mb-2">50+</div>
                            <div className="text-sm font-bold uppercase tracking-wider text-slate-400">Science Projects</div>
                        </div>
                    </div>
                </div>

                {/* Activities Row */}
                <div className="mt-24 mb-10">
                    <h2 className="text-3xl font-black font-display text-slate-900 mb-12 text-center">Beyond Thty Classroom</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group relative overflow-hidden rounded-[2rem] h-64 shadow-xl">
                            <img src="https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Exhibition" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex items-end p-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Annual Science Exhibition</h3>
                                    <p className="text-slate-300">Showcasing innovative models and research projects by students.</p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-[2rem] h-64 shadow-xl">
                            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Olympiad" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex items-end p-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Olympiads & Competitions</h3>
                                    <p className="text-slate-300">Regular preparation and participation in NSO, IMO, and KVPY.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default Science;
