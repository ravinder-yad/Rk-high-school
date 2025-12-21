import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Youtube, Film, MonitorPlay, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import videoHeroImg from '../../assets/images/gallery/video-hero.jpg';
import videoThumb1Img from '../../assets/images/gallery/video-thumb-1.jpg';
import videoThumb2Img from '../../assets/images/gallery/video-thumb-2.jpg';
import videoThumb3Img from '../../assets/images/gallery/video-thumb-3.jpg';
import videoThumb4Img from '../../assets/images/gallery/video-thumb-4.jpg';
import videoThumb5Img from '../../assets/images/gallery/video-thumb-5.jpg';
import videoThumb6Img from '../../assets/images/gallery/video-thumb-6.jpg';
import videoThumb7Img from '../../assets/images/gallery/video-thumb-7.jpg';
import videoThumb8Img from '../../assets/images/gallery/video-thumb-8.jpg';

// --- Shared Components ---

export const VideoHero = () => {
    return (
        <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950">
            <div className="absolute inset-0">
                <img
                    src={videoHeroImg}
                    alt="Video Gallery"
                    className="w-full h-full object-cover opacity-30 blur-sm scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/40"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 bg-red-500/20 backdrop-blur-md rounded-full text-red-300 font-bold mb-6 border border-red-500/30">
                        <Play className="w-4 h-4 inline-block mr-2 fill-current" /> Cinematic Experience
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Video Gallery <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Experience RK High</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium mb-10">
                        Watch our stories unfold. From virtual tours to event highlights, see what makes our school special.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export const VideoIntro = () => {
    return (
        <div className="w-full py-16 px-4 bg-white -mt-10 relative z-20">
            <div className="container mx-auto">
                <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-xl border border-slate-200 text-center max-w-4xl mx-auto">
                    <p className="text-xl text-slate-700 font-medium">
                        "Stories are best told through motion. Integrating technology and creativity to showcase our vibrant campus life."
                    </p>
                </div>
            </div>
        </div>
    );
};

export const VideoMainCTA = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full py-24 px-4 bg-gradient-to-r from-red-900 to-slate-900 text-center text-white">
            <div className="container mx-auto">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-red-600/50 animate-pulse">
                    <Youtube className="w-10 h-10 text-white fill-current" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                    Subscribe to Our Channel
                </h2>
                <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                    Stay updated with the latest events, tutorials, and success stories on our official YouTube channel.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        onClick={() => window.open('https://youtube.com', '_blank')}
                        className="px-10 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-full text-lg shadow-xl transition-all flex items-center justify-center gap-2"
                    >
                        Visit YouTube Channel <ArrowRight className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-10 py-4 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold rounded-full text-lg transition-all"
                    >
                        Admission Enquiry
                    </button>
                </div>
            </div>
        </div>
    );
};


// --- Video Logic & Grid ---

const categories = ["All", "Campus Tour", "Events", "Sports", "Activities"];

// Dummy video data
const videos = [
    { id: 1, title: "Virtual Campus Tour 2024", duration: "5:30", thumb: videoThumb1Img, category: "Campus Tour", featured: true },
    { id: 2, title: "Annual Day Highlights", duration: "10:15", thumb: videoThumb2Img, category: "Events" },
    { id: 3, title: "Sports Meet Finances", duration: "3:45", thumb: videoThumb3Img, category: "Sports" },
    { id: 4, title: "Science Exhibition Walkthrough", duration: "4:20", thumb: videoThumb4Img, category: "Activities" },
    { id: 5, title: "Kindergarten Graduation", duration: "2:50", thumb: videoThumb5Img, category: "Events" },
    { id: 6, title: "Football Finals 2024", duration: "8:00", thumb: videoThumb6Img, category: "Sports" },
    { id: 7, title: "Library Opening Ceremony", duration: "3:10", thumb: videoThumb7Img, category: "Campus Tour" },
    { id: 8, title: "Robotics Club Demo", duration: "6:45", thumb: videoThumb8Img, category: "Activities" },
];

export const VideoMain = () => {
    const [filter, setFilter] = useState("All");
    const [videoPopup, setVideoPopup] = useState(null);

    const filteredVideos = filter === "All" ? videos : videos.filter(v => v.category === filter);
    const featuredVideo = videos.find(v => v.featured);
    const gridVideos = filteredVideos.filter(v => v.id !== featuredVideo?.id);

    return (
        <div className="w-full pb-20 px-4 bg-slate-50 min-h-screen">
            <div className="container mx-auto">

                {/* Filter Bar */}
                <div className="sticky top-20 z-30 mb-12 flex justify-center">
                    <div className="bg-white/90 backdrop-blur-md p-2 rounded-full shadow-lg border border-slate-200 flex flex-wrap justify-center gap-1">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === cat
                                    ? 'bg-red-600 text-white shadow-md'
                                    : 'text-slate-600 hover:bg-slate-100'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-12">
                    {/* Featured Video - Only Show on 'All' or 'Campus Tour' */}
                    {(filter === "All" || filter === "Campus Tour") && featuredVideo && (
                        <div
                            onClick={() => setVideoPopup(featuredVideo)}
                            className="relative w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer group"
                        >
                            <img
                                src={`${featuredVideo.thumb}&w=1920&q=80`}
                                alt={featuredVideo.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                                <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center shadow-red-600/50 shadow-2xl group-hover:scale-110 transition-transform">
                                    <Play className="w-10 h-10 text-white fill-current ml-1" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
                                <span className="text-red-400 font-bold uppercase tracking-widest text-sm mb-2 block">Featured Video</span>
                                <h2 className="text-2xl md:text-4xl font-bold text-white">{featuredVideo.title}</h2>
                            </div>
                        </div>
                    )}

                    {/* Video Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {gridVideos.map((video) => (
                            <div
                                key={video.id}
                                onClick={() => setVideoPopup(video)}
                                className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer group"
                            >
                                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                                    <img
                                        src={`${video.thumb}&w=600&q=80`}
                                        alt={video.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
                                            <Play className="w-5 h-5 text-white fill-current ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded-md text-white text-xs font-bold">
                                        {video.duration}
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-indigo-500 text-xs font-bold uppercase tracking-wide">{video.category}</span>
                                    </div>
                                    <h3 className="font-bold text-slate-900 line-clamp-2 group-hover:text-indigo-600 transition-colors">{video.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Video Popup Modal */}
                <AnimatePresence>
                    {videoPopup && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                            onClick={() => setVideoPopup(null)}
                        >
                            <button
                                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                                onClick={() => setVideoPopup(null)}
                            >
                                <X className="w-10 h-10" />
                            </button>

                            <div className="w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative">
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
