import React, { useEffect } from 'react';
import { Award, Users, BookOpen, Globe, ShieldCheck, Trophy } from 'lucide-react';
import Footer from '../../components/home/Footer';
import PageHeader from '../../components/PageHeader';

const WhyChooseUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const reasons = [
        {
            icon: Award,
            title: "Academic Excellence",
            desc: "Consistently achieving 100% board results with city toppers."
        },
        {
            icon: Users,
            title: "Expert Faculty",
            desc: "Highly qualified teachers with average 10+ years of experience."
        },
        {
            icon: BookOpen,
            title: "Holistic Curriculum",
            desc: "A balanced blend of academics, sports, arts, and life skills."
        },
        {
            icon: Globe,
            title: "Global Exposure",
            desc: "International exchange programs and global partnerships."
        },
        {
            icon: ShieldCheck,
            title: "Safe Environment",
            desc: "24/7 CCTV surveillance and verified support staff."
        },
        {
            icon: Trophy,
            title: "State-of-the-Art Facilities",
            desc: "Smart classrooms, modern labs, and vast sports grounds."
        },
    ];

    return (
        <div className="bg-neutral-50 min-h-screen font-sans text-slate-900">
            <PageHeader
                title="Why Choose RK High School"
                subtitle="Excellence in Every Dimension"
                bgImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1600"
            />

            <div className="container mx-auto px-4 py-20">

                {/* Intro */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="text-secondary font-bold tracking-wider uppercase text-xs mb-3 block"> The RK Advantage</span>
                    <h2 className="text-4xl md:text-5xl font-black font-display text-slate-900 mb-6 leading-tight">
                        More Than Just a <span className="text-primary">School</span>
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Choosing the right school is one of the most important decisions for your child's future. At RK High School, we don't just teach subjects; we shape character, ignite curiosity, and build leaders for tomorrow.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {reasons.map((reason, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-50 hover:shadow-2xl hover:-translate-y-2 transition-all group">
                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <reason.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold font-display text-slate-900 mb-3">{reason.title}</h3>
                            <p className="text-slate-500 leading-relaxed">{reason.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Alumni/Success Highlight */}
                <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black font-display mb-8">Join a Legacy of Success</h2>
                        <div className="grid grid-cols-3 gap-8 mb-10">
                            <div>
                                <div className="text-4xl md:text-6xl font-black text-secondary mb-2">25+</div>
                                <div className="text-sm md:text-base text-slate-400 font-bold uppercase tracking-wider">Years of Excellence</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-6xl font-black text-secondary mb-2">5k+</div>
                                <div className="text-sm md:text-base text-slate-400 font-bold uppercase tracking-wider">Happy Alumni</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-6xl font-black text-secondary mb-2">100%</div>
                                <div className="text-sm md:text-base text-slate-400 font-bold uppercase tracking-wider">University Placements</div>
                            </div>
                        </div>
                        <p className="text-slate-300 text-lg mb-10">
                            Give your child the best start in life. Be part of a community that values growth, integrity, and innovation.
                        </p>
                        <a href="/admissions/form" className="inline-block px-10 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-secondary hover:text-white transition-all shadow-lg text-lg">
                            Apply for Admission
                        </a>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default WhyChooseUs;
