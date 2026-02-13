import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, ArrowRight, Instagram } from 'lucide-react';

const AchievementsAndGallery = () => {
    const navigate = useNavigate();

    const galleryImages = [
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1560785496-4c9f2c27749c?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1427504746696-ea5abd7dfe83?auto=format&fit=crop&q=80&w=600"
    ];

    return (
        <div className="py-24 bg-white">
            <div className="container mx-auto px-4">

                {/* Section 13: Achievements (Counters) */}
                <div className="bg-slate-900 rounded-[3rem] p-12 mb-32 relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {[
                            { count: "25+", label: "Years of Excellence" },
                            { count: "3k+", label: "Happy Students" },
                            { count: "100%", label: "College Placement" },
                            { count: "50+", label: "Awards Won" },
                        ].map((stat, index) => (
                            <div key={index} className="text-center group">
                                <h3 className="text-5xl lg:text-6xl font-black text-white mb-2 group-hover:text-primary transition-colors font-display">{stat.count}</h3>
                                <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 14: Photo Gallery */}
                <div className="mb-32">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <span className="text-secondary font-bold tracking-wider uppercase text-xs mb-3 block">Campus Life</span>
                            <h2 className="text-4xl font-black text-slate-900 font-display">Moments of Joy</h2>
                        </div>
                        <button
                            onClick={() => navigate('/gallery/photos')}
                            className="px-6 py-3 border-2 border-slate-900 text-slate-900 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all flex items-center"
                        >
                            View All Photos
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </div>

                    <div className="columns-1 md:columns-3 gap-6 space-y-6">
                        {galleryImages.map((img, index) => (
                            <div key={index} className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer">
                                <img src={img} alt="Gallery" className="w-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Instagram className="text-white w-8 h-8" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 15: Video Gallery Preview */}
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[500px] group">
                    <img
                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1600"
                        alt="Video Background"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent"></div>

                    <div className="absolute inset-0 flex flex-col justify-center p-12 md:p-24 max-w-2xl">
                        <span className="inline-block px-4 py-1 rounded-full bg-red-600 text-white font-bold text-xs uppercase tracking-wider mb-6 w-fit animate-pulse">
                            Live Tour
                        </span>
                        <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 font-display leading-tight">
                            Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Vibrancy</span>
                        </h2>
                        <p className="text-lg text-slate-300 mb-10 leading-relaxed font-light">
                            Watch our campus tour video to get a glimpse of the state-of-the-art facilities and the energetic atmosphere that defines RK High School.
                        </p>
                        <div className="flex flex-wrap items-center gap-6">
                            <button
                                onClick={() => navigate('/gallery/videos')}
                                className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-lg hover:scale-110 transition-transform duration-300"
                            >
                                <Play className="w-6 h-6 ml-1" fill="currentColor" />
                            </button>
                            <span className="text-white font-bold text-lg tracking-wide">Watch Full Video</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AchievementsAndGallery;
