import React from 'react';
import philImg from '../../assets/images/home/classroom.jpg';
import { Brain, Lightbulb, Users, Layers } from 'lucide-react';

const AcademicPhilosophy = () => {
    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-4">

                {/* Section 10: Academic Philosophy */}
                <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
                    <div className="lg:w-1/2">
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm">Pedagogy</span>
                        <h2 className="text-4xl font-bold text-textDark mt-2 mb-6">Our Academic Philosophy</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            We believe that education is not a "one size fits all" process. Our philosophy is centered around the child, focusing on distinct learning styles and multiple intelligences.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Constructivist approach to learning",
                                "Emphasis on critical thinking and problem solving",
                                "Integration of technology in everyday learning",
                                "Continuous comprehensive evaluation"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="bg-blue-50 rounded-full w-[400px] h-[400px] absolute -top-10 -right-10 z-0 opacity-50 blur-3xl"></div>
                        <img
                            src={philImg}
                            alt="Philosophy"
                            className="rounded-2xl shadow-xl relative z-10 w-full"
                        />
                    </div>
                </div>

                {/* Section 12: Teaching Methodology */}
                <div className="bg-gray-50 rounded-3xl p-10 md:p-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-textDark">Teaching Methodology</h2>
                        <p className="text-gray-600">Blending tradition with modern innovation</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { icon: <Brain className="w-8 h-8 text-purple-500" />, title: "Conceptual", desc: "Focus on understanding core concepts clearly." },
                            { icon: <Lightbulb className="w-8 h-8 text-yellow-500" />, title: "Experiential", desc: "Learning by doing through experiments and projects." },
                            { icon: <Users className="w-8 h-8 text-blue-500" />, title: "Collaborative", desc: "Group activities to foster teamwork skills." },
                            { icon: <Layers className="w-8 h-8 text-green-500" />, title: "Digital", desc: "Smart classes and e-resources for better retention." },
                        ].map((method, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-all hover:-translate-y-1">
                                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                    {method.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{method.title}</h3>
                                <p className="text-sm text-gray-500">{method.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AcademicPhilosophy;
