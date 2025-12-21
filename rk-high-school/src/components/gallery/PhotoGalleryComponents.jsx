import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, Image as ImageIcon, Filter, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import gallery1Img from '../../assets/images/student-life/gallery-page-1.jpg';
import gallery2Img from '../../assets/images/student-life/gallery-page-2.jpg';
import gallery3Img from '../../assets/images/student-life/gallery-page-3.jpg';
import gallery4Img from '../../assets/images/student-life/gallery-page-4.jpg';
import gallery5Img from '../../assets/images/student-life/gallery-page-5.jpg';
import gallery6Img from '../../assets/images/student-life/gallery-page-6.jpg';
import gallery7Img from '../../assets/images/student-life/gallery-page-7.jpg';
import gallery8Img from '../../assets/images/student-life/gallery-page-8.jpg';
import gallery9Img from '../../assets/images/gallery/gallery-page-9.jpg';
import gallery10Img from '../../assets/images/gallery/gallery-page-10.jpg';
import gallery11Img from '../../assets/images/gallery/gallery-page-11.jpg';
import gallery12Img from '../../assets/images/gallery/gallery-page-12.jpg';

// --- Shared Components ---

export const GalleryHero = () => {
    return (
        <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950">
            <div className="absolute inset-0">
                {/* Collage Background Effect */}
                <div className="grid grid-cols-4 grid-rows-2 w-full h-full opacity-30">
                    <img src={gallery1Img} className="w-full h-full object-cover" alt="Gallery 1" />
                    <img src={gallery2Img} className="w-full h-full object-cover" alt="Gallery 2" />
                    <img src={gallery3Img} className="w-full h-full object-cover" alt="Gallery 3" />
                    <img src={gallery4Img} className="w-full h-full object-cover" alt="Gallery 4" />
                    <img src={gallery5Img} className="w-full h-full object-cover" alt="Gallery 5" />
                    <img src={gallery6Img} className="w-full h-full object-cover" alt="Gallery 6" />
                    <img src={gallery7Img} className="w-full h-full object-cover" alt="Gallery 7" />
                    <img src={gallery8Img} className="w-full h-full object-cover" alt="Gallery 8" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/40"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 bg-indigo-500/20 backdrop-blur-md rounded-full text-indigo-300 font-bold mb-6 border border-indigo-500/30">
                        <Camera className="w-4 h-4 inline-block mr-2" /> Visual Tour
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Photo Gallery <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Captured Moments</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium mb-10">
                        A glimpse into the vibrant life at RK High School. From classrooms to playgrounds, every moment tells a story.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export const GalleryIntro = () => {
    return (
        <div className="w-full py-16 px-4 bg-white -mt-10 relative z-20">
            <div className="container mx-auto">
                <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-xl border border-slate-200 text-center max-w-4xl mx-auto">
                    <p className="text-xl text-slate-700 font-medium">
                        "Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever."
                    </p>
                </div>
            </div>
        </div>
    );
};

export const GalleryCTA = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full py-24 px-4 bg-slate-900 text-center text-white">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                    Want to See More?
                </h2>
                <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                    Pictures can only say so much. Visit our campus to experience the vibe in person.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full text-lg shadow-xl transition-all"
                    >
                        Schedule Campus Visit
                    </button>
                    <button
                        onClick={() => navigate('/gallery/videos')}
                        className="px-10 py-4 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold rounded-full text-lg transition-all"
                    >
                        Watch Videos
                    </button>
                </div>
            </div>
        </div>
    );
};


// --- Gallery Logic & Grid ---

const categories = ["All", "Events", "Sports", "Activities", "Labs", "Celebrations", "Infrastructure"];

const photos = [
    { id: 1, src: gallery1Img, category: "Activities", title: "Classroom Learning", size: "large" },
    { id: 2, src: gallery2Img, category: "Activities", title: "Art Class" },
    { id: 3, src: gallery3Img, category: "Sports", title: "Sports Day Race" },
    { id: 4, src: gallery4Img, category: "Infrastructure", title: "School Building", size: "wide" },
    { id: 5, src: gallery5Img, category: "Labs", title: "Computer Lab" },
    { id: 6, src: gallery6Img, category: "Events", title: "Annual Function" },
    { id: 7, src: gallery7Img, category: "Activities", title: "Group Study" },
    { id: 8, src: gallery8Img, category: "Labs", title: "Science Experiment", size: "tall" },
    { id: 9, src: gallery9Img, category: "Infrastructure", title: "Library Reading" },
    { id: 10, src: gallery10Img, category: "Events", title: "Cultural Fest" },
    { id: 11, src: gallery11Img, category: "Sports", title: "Football Match" },
    { id: 12, src: gallery12Img, category: "Celebrations", title: "Independence Day" },
];

export const GalleryMain = () => {
    const [filter, setFilter] = useState("All");
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const filteredPhotos = filter === "All" ? photos : photos.filter(p => p.category === filter);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % filteredPhotos.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
    };

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
                                    ? 'bg-indigo-600 text-white shadow-md'
                                    : 'text-slate-600 hover:bg-slate-100'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Masonry-ish Grid */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
                    <AnimatePresence>
                        {filteredPhotos.map((photo, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={photo.id}
                                onClick={() => openLightbox(index)}
                                className={`relative group rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-200 ${photo.size === "large" ? "md:col-span-2 md:row-span-2" :
                                    photo.size === "wide" ? "md:col-span-2" :
                                        photo.size === "tall" ? "md:row-span-2" : ""
                                    }`}
                            >
                                <img
                                    src={`${photo.src}&w=800&q=80`}
                                    alt={photo.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="text-indigo-300 uppercase text-xs font-bold tracking-widest mb-1">{photo.category}</span>
                                    <h3 className="text-white font-bold text-lg">{photo.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Lightbox */}
                <AnimatePresence>
                    {lightboxOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                            onClick={() => setLightboxOpen(false)}
                        >
                            <button
                                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                                onClick={() => setLightboxOpen(false)}
                            >
                                <X className="w-10 h-10" />
                            </button>

                            <button
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
                                onClick={prevImage}
                            >
                                <ChevronLeft className="w-8 h-8" />
                            </button>

                            <img
                                src={`${filteredPhotos[currentImageIndex].src}&w=1600&q=90`}
                                alt=" Fullscreen"
                                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            />

                            <button
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
                                onClick={nextImage}
                            >
                                <ChevronRight className="w-8 h-8" />
                            </button>

                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                                <h3 className="text-white text-xl font-bold">{filteredPhotos[currentImageIndex].title}</h3>
                                <p className="text-white/60 text-sm mt-1">
                                    {currentImageIndex + 1} / {filteredPhotos.length}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
