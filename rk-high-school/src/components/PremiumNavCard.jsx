import React from 'react';
import { useNavigate } from "react-router-dom";

const PremiumNavCard = ({ title, subtitle, image, link }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(link)}
            className="group relative h-[380px] rounded-3xl overflow-hidden cursor-pointer
      shadow-xl transition-all duration-500 hover:-translate-y-2 mt-4"
        >
            {/* Background Image */}
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover 
        group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t 
      from-black/90 via-black/40 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 p-8 text-white w-full">
                <h3 className="text-2xl font-bold mb-2 text-white">
                    {title}
                </h3>
                <p className="text-sm text-gray-200 mb-6 font-medium leading-relaxed opacity-90">
                    {subtitle}
                </p>

                <span className="inline-flex items-center gap-2 text-indigo-300 font-bold uppercase tracking-wider text-sm">
                    Explore <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </span>
            </div>
        </div>
    );
};

export default PremiumNavCard;
