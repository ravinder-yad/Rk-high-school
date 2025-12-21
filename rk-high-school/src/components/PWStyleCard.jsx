import React from "react";
import { useNavigate } from "react-router-dom";

const PWStyleCard = ({ title, desc, link }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(link)}
            className="group relative cursor-pointer rounded-3xl p-8 
      bg-white shadow-lg hover:shadow-2xl 
      transition-all duration-500 overflow-hidden border border-slate-100"
        >
            {/* Pattern Background */}
            <div className="absolute inset-0 opacity-40 
      bg-[radial-gradient(circle_at_20%_20%,#c7d2fe_2px,transparent_2px)]
      bg-[length:20px_20px]"></div>

            {/* Soft Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br 
      from-indigo-50/60 via-transparent to-indigo-100/60"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                        {title}
                    </h3>

                    <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">
                        {desc}
                    </p>
                </div>

                <span className="inline-flex items-center gap-2 
        text-indigo-600 font-bold uppercase tracking-wide text-xs">
                    Explore
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                        →
                    </span>
                </span>
            </div>
        </div>
    );
};

export default PWStyleCard;
