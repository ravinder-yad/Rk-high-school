import React, { useEffect } from 'react';
import { Quote, GraduationCap, Award, BookOpen, Clock } from 'lucide-react';
import Footer from '../../components/home/Footer';
import PageHeader from '../../components/PageHeader';

const PrincipalMessage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const focusAreas = [
        { icon: GraduationCap, title: "Academic Rigor", desc: "Ensuring deep understanding of concepts beyond rote learning." },
        { icon: Award, title: "Character Building", desc: "Instilling values of discipline, empathy, and respect." },
        { icon: BookOpen, title: "Innovation", desc: "Encouraging creative problem-solving and critical thinking." },
    ];

    return (
        <div className="bg-neutral-50 min-h-screen font-sans text-slate-900">
            <PageHeader
                title="Principal's Message"
                subtitle="Leadership & Vision"
                bgImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1600"
            />

            <div className="container mx-auto px-4 py-20">

                {/* Profile Section */}
                <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
                    {/* Image Column */}
                    <div className="w-full lg:w-1/3 relative">
                        <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                                alt="Principal"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8 text-white">
                                <h2 className="text-3xl font-bold font-display">Dr. Emily Sharma</h2>
                                <p className="text-primary-light font-medium tracking-wide">PhD in Educational Leadership</p>
                            </div>
                        </div>
                        {/* Decorative Background Element */}
                        <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-primary/20 rounded-3xl hidden md:block"></div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full lg:w-2/3">
                        <div className="mb-10">
                            <Quote className="w-16 h-16 text-primary/20 mb-6" />
                            <h3 className="text-3xl md:text-4xl font-black font-display text-slate-900 mb-8 leading-snug">
                                "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
                            </h3>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    Welcome to RK High School. Since our inception, we have strived to create an environment where every child is not just a student, but a creator of their own destiny.
                                </p>
                                <p>
                                    In today's rapidly changing world, the role of a school extends beyond textbooks. We are committed to nurturing critical thinkers who are socially responsible and emotionally resilient. Our curriculum is designed to balance academic excellence with co-curricular brilliance.
                                </p>
                                <p>
                                    My promise to you is that we will continue to provide a safe, inclusive, and stimulating environment where your child can thrive. Let us work together to build a generation of leaders.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mt-8">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png"
                                alt="Signature"
                                className="h-12 opacity-50 filter invert-0"
                            />
                            <div>
                                <p className="font-bold text-slate-900">Dr. Emily Sharma</p>
                                <p className="text-sm text-slate-500">Principal, RK High School</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Focus Grid */}
                <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-slate-100">
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-wider uppercase text-xs mb-3 block">My Vision</span>
                        <h2 className="text-3xl md:text-4xl font-black font-display text-slate-900">Strategic Pillars</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {focusAreas.map((area, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-16 h-16 mx-auto bg-slate-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <area.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">{area.title}</h3>
                                <p className="text-slate-500">{area.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default PrincipalMessage;
