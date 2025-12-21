import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import activitiesImg from '../../assets/images/student-life/activities.jpg';
import clubsImg from '../../assets/images/student-life/clubs.jpg';
import eventsMainImg from '../../assets/images/student-life/events-main.jpg';
import eventSportsImg from '../../assets/images/student-life/event-sports.jpg';
import eventScienceImg from '../../assets/images/student-life/event-science.jpg';
import eventCulturalImg from '../../assets/images/student-life/event-cultural.jpg';

const StudentLifeAndEvents = () => {
    const navigate = useNavigate();

    const events = [
        { title: "Annual Sports Day", date: "25 Dec 2025", loc: "School Ground", img: eventSportsImg },
        { title: "Science Exhibition", date: "10 Jan 2026", loc: "Main Hall", img: eventScienceImg },
        { title: "Cultural Fest", date: "15 Feb 2026", loc: "Auditorium", img: eventCulturalImg },
    ];

    return (
        <div className="py-20 bg-background">
            <div className="container mx-auto px-4">

                {/* Section 11: Student Life */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm">Beyond Academics</span>
                        <h2 className="text-3xl font-bold text-textDark mt-2">Student Life at RKHS</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer shadow-lg" onClick={() => navigate('/student-life/activities')}>
                            <img src={activitiesImg} alt="Activities" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Activities</h3>
                                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">Dance, Music, Art & Craft</p>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer shadow-lg" onClick={() => navigate('/student-life/clubs')}>
                            <img src={clubsImg} alt="Clubs" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Clubs</h3>
                                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">Robotics, Debate, Eco Club</p>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer shadow-lg" onClick={() => navigate('/student-life/events')}>
                            <img src={eventsMainImg} alt="Events" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Events</h3>
                                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">Annual Day, Sports Meet</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 12: Events & News */}
                <div>
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <span className="text-accent font-bold tracking-wider uppercase text-sm">Happenings</span>
                            <h2 className="text-3xl font-bold text-textDark mt-2">Upcoming Events</h2>
                        </div>
                        <button
                            onClick={() => navigate('/student-life/events')}
                            className="px-6 py-2 border-2 border-gray-200 rounded-full font-medium hover:border-primary hover:text-primary transition-all"
                        >
                            View All Events
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {events.map((event, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all group cursor-pointer" onClick={() => navigate('/student-life/events')}>
                                <div className="relative h-48">
                                    <img src={event.img} alt={event.title} className="w-full h-full object-cover" />
                                    <div className="absolute top-4 right-4 bg-white rounded-lg p-2 text-center shadow-lg min-w-[60px]">
                                        <span className="block text-sm font-bold text-primary uppercase">{event.date.split(' ')[1]}</span>
                                        <span className="block text-2xl font-bold text-gray-800">{event.date.split(' ')[0]}</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-textDark mb-3 group-hover:text-primary transition-colors">{event.title}</h3>
                                    <div className="flex items-center text-gray-500 mb-2 text-sm">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center text-gray-500 text-sm">
                                        <MapPin className="w-4 h-4 mr-2" />
                                        <span>{event.loc}</span>
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
