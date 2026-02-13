import React, { useEffect } from 'react';
import { Book, Calculator, Microscope, Globe, Layout, Laptop } from 'lucide-react';
import Footer from '../../components/home/Footer';
import PageHeader from '../../components/PageHeader';

const Primary = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const subjects = [
        { icon: Calculator, title: "Mathematics", desc: "Building logic and problem-solving skills." },
        { icon: Microscope, title: "EVS / Science", desc: "Understanding the world around us." },
        { icon: Book, title: "English & Languages", desc: "Fostering communication and literature." },
        { icon: Laptop, title: "Computer Science", desc: "Introduction to digital literacy." },
    ];

    return (
        <div className="bg-neutral-50 min-h-screen font-sans text-slate-900">
            <PageHeader
                title="Primary Wing"
                subtitle="Grade I - Grade V"
                bgImage="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1600"
            />

            <div className="container mx-auto px-4 py-20">

                {/* Intro */}
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <span className="text-secondary font-bold tracking-wider uppercase text-xs mb-3 block">Building Foundations</span>
                    <h2 className="text-4xl md:text-5xl font-black font-display text-slate-900 mb-6 leading-tight">
                        Igniting <span className="text-primary">Curiosity</span>
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        The Primary years are focused on laying a strong foundation in core academic subjects while encouraging creativity and critical thinking. We transition from play-based learning to a more structured yet interactive curriculum.
                    </p>
                </div>

                {/* Subjects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {subjects.map((sub, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all group">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <sub.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold font-display text-slate-900 mb-2">{sub.title}</h3>
                            <p className="text-slate-500 text-sm">{sub.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Feature Highlight: Activity Based Learning */}
                <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 relative h-96 md:h-auto">
                        <img
                            src="https://images.unsplash.com/photo-1544952467-9bbb97950c4e?auto=format&fit=crop&q=80&w=800"
                            alt="Activity Learning"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                    </div>
                    <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center text-white">
                        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-6">
                            <Layout className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black font-display mb-6">Activity Based Learning</h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            We go beyond textbooks using the 'Learning by Doing' approach. Students engage in hands-on projects, field trips, and interactive workshops that make concepts come alive.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3"><div className="w-2 h-2 bg-secondary rounded-full"></div>Interactive Smart Boards</li>
                            <li className="flex items-center gap-3"><div className="w-2 h-2 bg-secondary rounded-full"></div>Science & Math Kits</li>
                            <li className="flex items-center gap-3"><div className="w-2 h-2 bg-secondary rounded-full"></div>Language Labs</li>
                        </ul>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default Primary;
