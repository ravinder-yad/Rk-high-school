import React from 'react';
import { Monitor, Book, Microscope, Dumbbell, Music, Coffee } from 'lucide-react';
import labImg from '../../assets/images/student-life/gallery-page-5.jpg';
import libImg from '../../assets/images/gallery/gallery-page-9.jpg';
import sciImg from '../../assets/images/student-life/event-science.jpg';
import sportImg from '../../assets/images/student-life/event-sports.jpg';
import artImg from '../../assets/images/gallery/gallery-page-10.jpg';
import cafeImg from '../../assets/images/student-life/gallery-page-7.jpg';

const InfrastructurePreviews = () => {
    const infra = [
        { title: "Smart Labs", icon: <Monitor className="w-8 h-8 text-blue-500" />, img: labImg },
        { title: "Library", icon: <Book className="w-8 h-8 text-yellow-500" />, img: libImg },
        { title: "Science Hub", icon: <Microscope className="w-8 h-8 text-green-500" />, img: sciImg },
        { title: "Sports Arena", icon: <Dumbbell className="w-8 h-8 text-red-500" />, img: sportImg },
        { title: "Performing Arts", icon: <Music className="w-8 h-8 text-purple-500" />, img: artImg },
        { title: "Cafeteria", icon: <Coffee className="w-8 h-8 text-orange-500" />, img: cafeImg },
    ];

    return (
        <div className="py-20 bg-gray-900 text-white overflow-hidden">
            <div className="container mx-auto px-4 mb-10">
                <h2 className="text-3xl font-bold">State-of-the-Art Infrastructure</h2>
                <p className="text-gray-400">Designed to inspire innovation</p>
            </div>

            {/* Horizontal Scroll Area */}
            <div className="flex overflow-x-auto pb-8 space-x-6 px-4 md:px-0 container mx-auto scrollbar-hide">
                {infra.map((item, index) => (
                    <div key={index} className="min-w-[280px] bg-gray-800 rounded-2xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-2xl hover:shadow-primary/20 transition-all border border-gray-700">
                        <div className="h-40 overflow-hidden relative">
                            <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute top-4 right-4 bg-gray-900/80 p-2 rounded-lg backdrop-blur-sm">
                                {item.icon}
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-400">Click to explore details</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfrastructurePreviews;
