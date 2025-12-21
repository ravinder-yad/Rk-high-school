import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play } from 'lucide-react';
import gallery1Img from '../../assets/images/home/gallery1.jpg';
import gallery2Img from '../../assets/images/home/gallery2.jpg';
import gallery3Img from '../../assets/images/home/gallery3.jpg';
import gallery4Img from '../../assets/images/home/gallery4.jpg';
import gallery5Img from '../../assets/images/home/gallery5.jpg';
import gallery6Img from '../../assets/images/home/gallery6.jpg';

const AchievementsAndGallery = () => {
    const navigate = useNavigate();

    return (
        <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">

                {/* Section 13: Achievements (Counters) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
                    {[
                        { count: "20+", label: "Years of Excellence" },
                        { count: "3000+", label: "Happy Students" },
                        { count: "150+", label: "Qualified Teachers" },
                        { count: "100%", label: "Result Success" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.count}</h3>
                            <p className="text-gray-600 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Section 14: Photo Gallery */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-textDark">Campus Life Gallery</h2>
                        <p className="text-gray-600 mt-2">Capturing moments of joy and learning</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            gallery1Img,
                            gallery2Img,
                            gallery3Img,
                            gallery4Img,
                            gallery5Img,
                            gallery6Img,
                        ].map((img, index) => (
                            <div key={index} className={`overflow-hidden rounded-xl shadow-md cursor-pointer group ${index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                                <img src={img} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <button
                            onClick={() => navigate('/gallery/photos')}
                            className="px-8 py-3 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-blue-800 transition-all"
                        >
                            View Full Gallery
                        </button>
                    </div>
                </div>

                {/* Section 15: Video Gallery Preview */}
                <div className="bg-textDark rounded-3xl overflow-hidden shadow-2xl relative">
                    <div className="absolute inset-0 bg-primary/20"></div>
                    <div className="grid md:grid-cols-2">
                        <div className="p-12 flex flex-col justify-center text-white relative z-10">
                            <span className="text-secondary font-bold uppercase tracking-wider mb-2">Watch Us in Action</span>
                            <h2 className="text-4xl font-bold mb-6">Experience RK High School</h2>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                Take a virtual tour of our sprawling campus, state-of-the-art facilities, and witness the vibrant life of our students.
                            </p>
                            <button
                                onClick={() => navigate('/gallery/videos')}
                                className="self-start px-6 py-3 border-2 border-white rounded-full font-bold hover:bg-white hover:text-textDark transition-all flex items-center"
                            >
                                Watch More Videos
                            </button>
                        </div>
                        <div className="relative h-[400px] md:h-auto">
                            <img
                                src={gallery2Img}
                                alt="Video Thumbnail"
                                className="w-full h-full object-cover opacity-60"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-white shadow-lg animate-pulse hover:scale-110 transition-transform">
                                    <Play className="w-8 h-8 ml-1" fill="currentColor" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AchievementsAndGallery;
