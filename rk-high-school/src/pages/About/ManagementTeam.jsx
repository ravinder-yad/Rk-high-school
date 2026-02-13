import React, { useEffect } from 'react';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';
import Footer from '../../components/home/Footer';
import PageHeader from '../../components/PageHeader';

const ManagementTeam = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const team = [
        { name: "Mr. Sarah Jenkins", role: "Vice Chairman", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" },
        { name: "Mr. David Ross", role: "Director of Academics", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" },
        { name: "Ms. Anita Roy", role: "Head of Administration", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800" },
        { name: "Dr. James Carter", role: "Educational Advisor", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
        { name: "Mrs. Priya Mehta", role: "Finance Officer", img: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f1c?auto=format&fit=crop&q=80&w=800" },
        { name: "Mr. Robert Wilson", role: "Sports Director", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800" },
    ];

    return (
        <div className="bg-neutral-50 min-h-screen font-sans text-slate-900">
            <PageHeader
                title="Management Team"
                subtitle="The Visionaries Guide Us"
                bgImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1600"
            />

            <div className="container mx-auto px-4 py-20">

                {/* Chairman Section */}
                <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white mb-24 relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                        <div className="w-full lg:w-1/3">
                            <div className="aspect-square rounded-full border-4 border-white/20 overflow-hidden shadow-lg mx-auto lg:mx-0">
                                <img
                                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
                                    alt="Chairman"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-2/3 text-center lg:text-left">
                            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Chairman's Message</span>
                            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">Mr. Rajesh Kumar</h2>
                            <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                "Our mission is to build an institution where learning is a joy, innovation is a habit, and excellence is a way of life. We are committed to shaping the leaders of tomorrow."
                            </p>
                            <div className="flex justify-center lg:justify-start gap-4">
                                <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                                    <Linkedin className="w-5 h-5" />
                                </button>
                                <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-secondary transition-colors flex items-center justify-center">
                                    <Mail className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Grid */}
                <div className="mb-16">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Our Pillars</span>
                        <h2 className="text-4xl font-black text-slate-900 font-display">Board of Directors</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="group bg-white rounded-3xl p-4 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
                                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 relative">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                        <div className="flex gap-3">
                                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                                <Linkedin className="w-4 h-4" />
                                            </div>
                                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-secondary hover:text-white transition-colors cursor-pointer">
                                                <Mail className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center pb-4">
                                    <h3 className="text-xl font-bold font-display text-slate-900 mb-1">{member.name}</h3>
                                    <p className="text-primary font-medium text-sm">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default ManagementTeam;
