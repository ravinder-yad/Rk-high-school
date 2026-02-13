import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const PageHeader = ({ title, subtitle, bgImage }) => {
    return (
        <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax Effect */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
                style={{ backgroundImage: `url(${bgImage || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1600'})` }}
            >
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
                <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white/80 text-xs font-bold tracking-widest uppercase mb-4 border border-white/20 backdrop-blur-md">
                    {subtitle || 'Discover Our School'}
                </span>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 font-display tracking-tight drop-shadow-lg">
                    {title}
                </h1>

                {/* Custom Breadcrumb */}
                <div className="flex items-center justify-center gap-2 text-white/70 text-sm font-medium">
                    <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
                        <Home className="w-4 h-4" />
                        <span>Home</span>
                    </Link>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                    <span className="text-white">{title}</span>
                </div>
            </div>

            {/* Decorative Bottom Curve */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-neutral-50 block fill-current">
                    <path d="M0 0C240 60 480 100 720 100C960 100 1200 60 1440 0V100H0V0Z" />
                </svg>
            </div>
        </div>
    );
};

export default PageHeader;
