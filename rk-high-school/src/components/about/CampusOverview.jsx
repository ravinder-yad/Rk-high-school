import React from 'react';
import buildImg from '../../assets/images/home/campus.jpg';
import sportsImg from '../../assets/images/student-life/event-sports.jpg';
import libImg from '../../assets/images/gallery/gallery-page-9.jpg';
import audImg from '../../assets/images/gallery/gallery-page-10.jpg';

const CampusOverview = () => {
    return (
        <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm">Infrastructure</span>
                        <h2 className="text-4xl font-bold mt-2">Campus Overview</h2>
                    </div>
                    <p className="text-gray-400 max-w-md text-right mt-4 md:mt-0">
                        A sprawling 5-acre eco-friendly campus designed to stimulate learning and creativity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
                    <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl">
                        <img src={buildImg} alt="Main Building" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                            <h3 className="text-2xl font-bold">Main Academic Block</h3>
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-2xl">
                        <img src={sportsImg} alt="Sports" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 p-4">
                            <span className="font-bold text-lg">Sports Complex</span>
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-2xl">
                        <img src={libImg} alt="Library" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 p-4">
                            <span className="font-bold text-lg">Digital Library</span>
                        </div>
                    </div>

                    <div className="md:col-span-2 relative group overflow-hidden rounded-2xl">
                        <img src={audImg} alt="Auditorium" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                            <h3 className="text-xl font-bold">Auditorium & Arts Center</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CampusOverview;
