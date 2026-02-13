import React, { useEffect } from 'react';
import { History, Award, Users, BookOpen, Clock, Globe } from 'lucide-react';
import Footer from '../../components/home/Footer';
import PageHeader from '../../components/PageHeader';

const AboutSchool = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const timeline = [
        { year: "1995", title: "Foundation", desc: "Established with a vision to redefine education." },
        { year: "2005", title: "Expansion", desc: "Moved to a new 10-acre campus with modern facilities." },
        { year: "2015", title: "Global Recognition", desc: "Awarded 'Best International School' in the region." },
        { year: "2023", title: "Digital Transformation", desc: "Implemented Smart Classrooms and AI-driven learning." },
    ];

    const stats = [
        { icon: Users, count: "5000+", label: "Alumni Network" },
        { icon: Award, count: "150+", label: "Awards Won" },
        { icon: BookOpen, count: "50+", label: "Courses Offered" },
        { icon: Globe, count: "20+", label: "Global Partners" },
    ];

    return (
        <div className="bg-neutral-50 min-h-screen font-sans text-slate-900">
            <PageHeader
                title="About The School"
                subtitle="A Legacy of Excellence"
                bgImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1600"
            />

            <div className="container mx-auto px-4 py-20">

                {/* Intro Section */}
                <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
                    <div className="w-full md:w-1/2">
                        <span className="text-secondary font-bold tracking-wider uppercase text-xs mb-3 block">Our Story</span>
                        <h2 className="text-4xl md:text-5xl font-black font-display text-slate-900 mb-6 leading-tight">
                            Nurturing Minds since <span className="text-primary">1995</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <p>
                                RK High School was founded with a simple yet profound mission: to create an educational institution where every child is valued, challenged, and inspired.
                            </p>
                            <p>
                                over the decades, we have grown from a humble beginning into one of the most prestigious institutions in the country. Our campus is a vibrant community where tradition meets technology, ensuring our students are rooted in values while being ready for the future.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800"
                                alt="School Building"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="bg-slate-900 rounded-[3rem] p-12 mb-24 relative overflow-hidden shadow-xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                                    <stat.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-4xl font-black text-white font-display mb-2">{stat.count}</h3>
                                <p className="text-slate-400 font-medium uppercase text-sm tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Timeline Section */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Milestones</span>
                        <h2 className="text-4xl font-black text-slate-900 font-display">Our Journey</h2>
                    </div>

                    <div className="relative">
                        {/* Line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="w-full md:w-1/2"></div>
                                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md hidden md:block"></div>
                                    <div className="w-full md:w-1/2">
                                        <div className={`bg-white p-8 rounded-3xl shadow-lg border border-slate-50 hover:shadow-xl transition-all ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-center md:text-left`}>
                                            <span className="text-4xl font-black text-slate-200 font-display mb-2 block">{item.year}</span>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                            <p className="text-slate-500">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default AboutSchool;
