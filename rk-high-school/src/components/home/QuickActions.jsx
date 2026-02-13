import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, BookOpen, Monitor, Phone, ArrowRight } from 'lucide-react';

const QuickActionCard = ({ title, desc, icon: Icon, link, color }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(link)}
            className="group relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-100 transform hover:-translate-y-2 overflow-hidden"
        >
            <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${color}`}>
                <Icon className="w-24 h-24 transform rotate-12 -mr-8 -mt-8" />
            </div>

            <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl ${color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${color.replace('bg-', 'text-')}`} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 font-display group-hover:text-primary transition-colors">
                    {title}
                </h3>

                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                    {desc}
                </p>

                <div className="flex items-center text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </div>
    );
};

const QuickActions = () => {
    return (
        <div className="relative -mt-24 z-30 container mx-auto px-4 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <QuickActionCard
                    title="Admissions"
                    desc="Join the RK High School family. Process, criteria, and forms."
                    icon={FileText}
                    link="/admissions/form"
                    color="bg-blue-600 text-blue-600"
                />
                <QuickActionCard
                    title="Academics"
                    desc="Comprehensive curriculum focusing on holistic development."
                    icon={BookOpen}
                    link="/academics"
                    color="bg-emerald-600 text-emerald-600"
                />
                <QuickActionCard
                    title="Facilities"
                    desc="State-of-the-art labs, library, and sports infrastructure."
                    icon={Monitor}
                    link="/facilities"
                    color="bg-purple-600 text-purple-600"
                />
                <QuickActionCard
                    title="Contact Us"
                    desc="Get in touch for inquiries, visits, and support."
                    icon={Phone}
                    link="/contact"
                    color="bg-amber-500 text-amber-500"
                />
            </div>
        </div>
    );
};

export default QuickActions;
