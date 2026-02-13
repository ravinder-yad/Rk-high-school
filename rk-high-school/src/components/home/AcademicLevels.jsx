import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Baby, Book, BookOpen, GraduationCap, ChevronRight, ArrowRight } from 'lucide-react';

const AcademicLevels = () => {
    const navigate = useNavigate();

    const levels = [
        {
            title: "Pre-Primary",
            desc: "Nursery to UKG",
            details: "Play-based learning foundation",
            icon: <Baby className="w-8 h-8 text-white" />,
            bg: "bg-rose-500",
            path: "/academics/pre-primary"
        },
        {
            title: "Primary",
            desc: "Class 1 to 5",
            details: "Building core competencies",
            icon: <Book className="w-8 h-8 text-white" />,
            bg: "bg-sky-500",
            path: "/academics/primary"
        },
        {
            title: "Middle School",
            desc: "Class 6 to 8",
            details: "Conceptual understanding",
            icon: <BookOpen className="w-8 h-8 text-white" />,
            bg: "bg-emerald-500",
            path: "/academics/middle"
        },
        {
            title: "Senior Secondary",
            desc: "Class 9 to 12",
            details: "Career-focused preparation",
            icon: <GraduationCap className="w-8 h-8 text-white" />,
            bg: "bg-violet-500",
            path: "/academics/senior-secondary"
        }
    ];

    return (
        <div className="py-24 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-secondary font-bold tracking-wider uppercase text-xs mb-2 block">Academic Excellence</span>
                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 font-display">
                        A Complete <span className="text-primary">Learning Journey</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        From the first steps in education to the final leap towards a career, we provide a structured and nurturing environment for every stage of your child's growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {levels.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(item.path)}
                            className="group relative bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-2"
                        >
                            {/* Top Color Bar */}
                            <div className={`${item.bg} h-2 w-full`}></div>

                            <div className="p-8">
                                <div className={`${item.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {item.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-2 font-display">{item.title}</h3>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">{item.desc}</p>

                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    {item.details}
                                </p>

                                <div className="flex items-center text-slate-900 font-bold group-hover:text-primary transition-colors">
                                    <span className="mr-2 text-sm uppercase tracking-wide">Explore</span>
                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>

                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 ${item.bg} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AcademicLevels;
