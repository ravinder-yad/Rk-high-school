import React from 'react';
import heroImg from '../../assets/images/home/campus.jpg';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const AboutHero = () => {
    return (
        <div className="relative h-[400px] w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroImg})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-900/70"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">About RK High School</h1>
                <p className="text-xl md:text-2xl font-light text-gray-200 mb-8 italic">"Educating Minds, Shaping Futures since 2005"</p>

                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 text-sm md:text-base font-medium bg-white/10 px-6 py-2 rounded-full backdrop-blur-sm">
                    <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-secondary">About School</span>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;
