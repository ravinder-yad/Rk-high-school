import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Baby, Book, BookOpen, GraduationCap, ChevronRight } from 'lucide-react';

const AcademicLevels = () => {
    const navigate = useNavigate();

    const levels = [
        {
            title: "Pre-Primary",
            desc: "Nursery to UKG",
            icon: <Baby className="w-10 h-10 text-white" />,
            color: "bg-pink-500",
            path: "/academics/pre-primary"
        },
        {
            title: "Primary",
            desc: "Class 1 to 5",
            icon: <Book className="w-10 h-10 text-white" />,
            color: "bg-blue-500",
            path: "/academics/primary"
        },
        {
            title: "Middle School",
            desc: "Class 6 to 8",
            icon: <BookOpen className="w-10 h-10 text-white" />,
            color: "bg-green-500",
            path: "/academics/middle"
        },
        {
            title: "Senior Secondary",
            desc: "Class 9 to 12",
            icon: <GraduationCap className="w-10 h-10 text-white" />,
            color: "bg-purple-500",
            path: "/academics/senior-secondary"
        }
    ];

    return (
        <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm">Academic Excellence</span>
                    <h2 className="text-4xl font-bold text-textDark mt-2">Programs We Offer</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {levels.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(item.path)}
                            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className={`${item.color} p-6 flex justify-center items-center`}>
                                <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-500 mb-4">{item.desc}</p>
                                <span className="text-primary font-semibold text-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    View Details
                                    <ChevronRight className="w-4 h-4 ml-1" />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AcademicLevels;
