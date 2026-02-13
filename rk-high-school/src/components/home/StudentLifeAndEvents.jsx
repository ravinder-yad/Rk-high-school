import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight, Music, FlaskConical, Trophy } from 'lucide-react';

const StudentLifeAndEvents = () => {
    const navigate = useNavigate();

    const events = [
        { title: "Annual Sports Day", date: "25", month: "DEC", loc: "School Ground", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800", cat: "Sports" },
        { title: "Science Exhibition", date: "10", month: "JAN", loc: "Main Hall", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800", cat: "Academic" },
        { title: "Cultural Fest", date: "15", month: "FEB", loc: "Auditorium", img: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?auto=format&fit=crop&q=80&w=800", cat: "Cultural" },
    ];

    return (
        <div className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">

                {/* Section 11: Student Life (Bento Grid) */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold tracking-wider uppercase text-xs mb-3 block">Beyond Academics</span>
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 font-display">
                            Student Life at <span className="text-primary">RKHS</span>
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Education isn't just about books. It's about exploring passions, building friendships, and creating memories.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">

                        {/* Large Main Item */}
                        <div
                            onClick={() => navigate('/student-life/events')}
                            className="md:col-span-2 md:row-span-2 group relative rounded-3xl overflow-hidden cursor-pointer shadow-xl"
                        >
                            <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800" alt="Cultural Events" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                                <div className="bg-primary/90 w-fit p-3 rounded-xl mb-4 text-white">
                                    <Music className="w-6 h-6" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2 font-display">Cultural Events</h3>
                                <p className="text-gray-200">Celebrating diversity through music, dance, and drama.</p>
                            </div>
                        </div>

                        {/* Secondary Item 1 */}
                        <div
                            onClick={() => navigate('/student-life/clubs')}
                            className="md:col-span-2 group relative rounded-3xl overflow-hidden cursor-pointer shadow-xl min-h-[250px]"
                        >
                            <img src="https://images.unsplash.com/photo-1564325724739-bae0bd08762c?auto=format&fit=crop&q=80&w=800" alt="Science Club" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                                <div className="flex items-center gap-3">
                                    <div className="bg-secondary/90 p-2 rounded-lg text-white">
                                        <FlaskConical className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white font-display">Innovation Clubs</h3>
                                </div>
                            </div>
                        </div>

                        {/* Secondary Item 2 */}
                        <div
                            onClick={() => navigate('/student-life/activities')}
                            className="md:col-span-1 group relative rounded-3xl overflow-hidden cursor-pointer shadow-xl min-h-[250px]"
                        >
                            <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800" alt="Sports" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                                <div className="bg-orange-500/90 w-fit p-2 rounded-lg mb-2 text-white">
                                    <Trophy className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-white font-display">Sports</h3>
                            </div>
                        </div>

                        {/* See All Box */}
                        <div
                            onClick={() => navigate('/student-life/activities')}
                            className="md:col-span-1 bg-slate-900 rounded-3xl p-8 flex flex-col justify-between cursor-pointer group hover:bg-slate-800 transition-colors shadow-xl"
                        >
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 text-white transition-all">
                                <ArrowRight className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white font-display mb-2">Explore All<br />Activities</h3>
                                <p className="text-slate-400 text-sm">Discover your passion.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 12: Events & News */}
                <div>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">Happenings</span>
                            <h2 className="text-4xl font-black text-slate-900 font-display">Upcoming Events</h2>
                        </div>
                        <button
                            onClick={() => navigate('/student-life/events')}
                            className="px-6 py-3 bg-white border border-slate-200 rounded-full font-bold text-slate-900 hover:bg-slate-50 transition-colors shadow-sm flex items-center"
                        >
                            View All Events
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {events.map((event, index) => (
                            <div key={index} className="group bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                                <div className="h-56 overflow-hidden relative">
                                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 uppercase tracking-wide z-10">
                                        {event.cat}
                                    </div>
                                    <img src={event.img} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>

                                <div className="p-8 relative">
                                    {/* Date Badge */}
                                    <div className="absolute -top-10 right-8 bg-white p-3 rounded-2xl shadow-xl text-center min-w-[80px] border border-slate-50">
                                        <span className="block text-2xl font-black text-primary font-display">{event.date}</span>
                                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">{event.month}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-4 pr-16 group-hover:text-primary transition-colors font-display leading-tight">{event.title}</h3>

                                    <div className="space-y-3">
                                        <div className="flex items-center text-slate-500 text-sm">
                                            <Calendar className="w-4 h-4 mr-3 text-secondary" />
                                            <span>{event.month} {event.date}, 2026</span>
                                        </div>
                                        <div className="flex items-center text-slate-500 text-sm">
                                            <MapPin className="w-4 h-4 mr-3 text-secondary" />
                                            <span>{event.loc}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StudentLifeAndEvents;
