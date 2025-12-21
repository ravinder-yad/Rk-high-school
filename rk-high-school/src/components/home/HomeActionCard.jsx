import React from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowRight } from 'lucide-react';

const HomeActionCard = ({ title, desc, icon, link, color }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(link)}
            className="group cursor-pointer relative overflow-visible rounded-2xl 
      bg-white/90 backdrop-blur-xl shadow-lg hover:shadow-2xl 
      transition-all duration-500 hover:-translate-y-2 border border-white/50 mt-8"
        >

            {/* Gradient Strip */}
            <div
                className="h-1.5 w-full absolute top-0 left-0 rounded-t-2xl"
                style={{ backgroundColor: color }}
            ></div>

            {/* Icon */}
            <div
                className="absolute -top-6 left-6 w-14 h-14 rounded-full 
        flex items-center justify-center text-white text-2xl shadow-lg
        transform group-hover:scale-110 transition-transform duration-300 ring-4 ring-white"
                style={{ backgroundColor: color }}
            >
                {icon}
            </div>

            {/* Content */}
            <div className="pt-12 px-6 pb-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors">
                    {title}
                </h3>

                <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                    {desc}
                </p>

                <button
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide group-hover:gap-3 transition-all"
                    style={{ color: color }}
                >
                    Explore More <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default HomeActionCard;
