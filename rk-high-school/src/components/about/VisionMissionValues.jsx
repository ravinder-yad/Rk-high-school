import React from 'react';
import { Target, Eye, Heart, Leaf, Shield, Sun } from 'lucide-react';

const VisionMissionValues = () => {

    const values = [
        { title: "Discipline", icon: <Shield className="w-8 h-8 text-blue-600" />, desc: "Instilling self-control and responsibility." },
        { title: "Integrity", icon: <Heart className="w-8 h-8 text-red-500" />, desc: "Honesty and strong moral principles." },
        { title: "Innovation", icon: <Sun className="w-8 h-8 text-yellow-500" />, desc: "Embracing creativity and new ideas." },
        { title: "Respect", icon: <Leaf className="w-8 h-8 text-green-500" />, desc: "Valuing others and the environment." },
    ];

    return (
        <div className="py-20 bg-background">
            <div className="container mx-auto px-4">

                {/* Sections 4 & 5: Vision & Mission Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {/* Vision */}
                    <div className="bg-white rounded-2xl p-10 shadow-lg border-t-4 border-secondary hover:transform hover:-translate-y-2 transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <div className="p-4 bg-secondary/10 rounded-full mr-4">
                                <Eye className="w-8 h-8 text-secondary" />
                            </div>
                            <h2 className="text-3xl font-bold text-textDark">Our Vision</h2>
                        </div>
                        <blockquote className="text-xl text-gray-600 italic border-l-4 border-gray-200 pl-4 mb-4">
                            "To ignite the passion for learning and empower every student to become a global citizen with Indian values."
                        </blockquote>
                    </div>

                    {/* Mission */}
                    <div className="bg-white rounded-2xl p-10 shadow-lg border-t-4 border-primary hover:transform hover:-translate-y-2 transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <div className="p-4 bg-primary/10 rounded-full mr-4">
                                <Target className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold text-textDark">Our Mission</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            We are on a mission to provide holistic education that balances academic excellence with character building, ensuring our students are prepared for the challenges of tomorrow.
                        </p>
                    </div>
                </div>

                {/* Section 6: Core Values */}
                <div className="text-center mb-12">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Ethos</span>
                    <h2 className="text-4xl font-bold text-textDark mt-2">Core Values</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((val, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center group cursor-default">
                            <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                {val.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{val.title}</h3>
                            <p className="text-gray-500">{val.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default VisionMissionValues;
