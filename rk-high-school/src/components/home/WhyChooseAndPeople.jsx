import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Shield, Layout, Smile, Quote, ArrowRight } from 'lucide-react';

const WhyChooseAndPeople = () => {
    const navigate = useNavigate();

    const highlights = [
        { title: "Experienced Faculty", desc: "Mentors with 10+ years of avg experience.", icon: <Star className="w-8 h-8 text-yellow-500" /> },
        { title: "Smart Classrooms", desc: "Digital learning with interactive panels.", icon: <Layout className="w-8 h-8 text-blue-500" /> },
        { title: "Safe Campus", desc: "24/7 CCTV surveillance & security.", icon: <Shield className="w-8 h-8 text-green-500" /> },
        { title: "Holistic Growth", desc: "Focus on sports, arts, and academics.", icon: <Smile className="w-8 h-8 text-purple-500" /> },
    ];

    const teachers = [
        { name: "Mrs. S. Sharma", subject: "Mathematics", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=350" },
        { name: "Mr. A. Verma", subject: "Science", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=300&h=350" },
        { name: "Ms. P. Das", subject: "English", img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=300&h=350" },
        { name: "Mr. K. Singh", subject: "Sports", img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=300&h=350" },
    ];

    return (
        <div className="py-24 bg-white">
            <div className="container mx-auto px-4">

                {/* Section 8: Why Choose Us */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
                    <div className="lg:w-1/2">
                        <span className="text-secondary font-bold tracking-wider uppercase text-xs mb-3 block">Why Choose Us</span>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 font-display leading-tight">
                            Building Foundations <br /> for <span className="text-primary">Lifelong Success</span>
                        </h2>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            We go beyond textbooks to provide an education that prepares students for life. Our campus is designed to foster creativity, critical thinking, and collaboration.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {highlights.map((item, index) => (
                                <div key={index} className="bg-slate-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-primary/20 group">
                                    <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                            <img
                                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000"
                                alt="Modern Classroom"
                                className="w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <p className="text-xl font-medium italic mb-4">"Education is the most powerful weapon which you can use to change the world."</p>
                                <p className="font-bold text-secondary uppercase tracking-widest text-sm">- Nelson Mandela</p>
                            </div>
                        </div>
                        {/* Decorative Pattern */}
                        <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-slate-100 rounded-3xl"></div>
                    </div>
                </div>

                {/* Section 9: Principal Message */}
                <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 mb-32 relative overflow-hidden shadow-2xl">
                    {/* Background Texture */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

                    <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                        <div className="md:w-1/3 relative">
                            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-secondary shadow-2xl relative z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
                                    alt="Principal"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-4 right-8 bg-white text-slate-900 px-6 py-2 rounded-full font-bold shadow-lg z-20">
                                Principal
                            </div>
                        </div>

                        <div className="md:w-2/3 text-center md:text-left">
                            <Quote className="w-16 h-16 text-secondary/30 mb-6 mx-auto md:mx-0" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">A Message from the Desk</h2>
                            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 font-light italic">
                                "We believe that every child is unique and has the potential to achieve greatness. At RK High School, we provide the nurturing environment and resources necessary for students to discover their talents and excel in their chosen paths. Our focus is on holistic development, academic excellence, and character building."
                            </p>
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div>
                                    <h4 className="text-2xl font-bold text-white">Dr. Anjali Verma</h4>
                                    <p className="text-secondary font-medium">PhD in Education, Gold Medalist</p>
                                </div>
                                <button
                                    onClick={() => navigate('/about/principal')}
                                    className="px-8 py-3 border border-white/30 text-white font-bold rounded-full hover:bg-white hover:text-slate-900 transition-all flex items-center ml-auto"
                                >
                                    Read Full Message
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 10: Teachers Preview */}
                <div>
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold tracking-wider uppercase text-xs mb-3 block">Expert Mentors</span>
                        <h2 className="text-4xl font-black text-slate-900 mb-4 font-display">Meet Our Faculty</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Our team of dedicated educators is committed to shaping the future of every student.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {teachers.map((teacher, index) => (
                            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="h-80 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors z-10 transition-all"></div>
                                    <img src={teacher.img} alt={teacher.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-6 text-center relative bg-white">
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        {teacher.subject}
                                    </div>
                                    <h4 className="font-bold text-xl text-slate-900 mb-1 font-display">{teacher.name}</h4>
                                    <p className="text-primary font-medium text-sm">{teacher.subject} Faculty</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhyChooseAndPeople;
