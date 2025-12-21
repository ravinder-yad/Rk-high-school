import React from 'react';
import artImg from '../../assets/images/student-life/gallery-page-2.jpg';
import musImg from '../../assets/images/gallery/gallery-page-10.jpg';
import danImg from '../../assets/images/gallery/video-thumb-4.jpg';
import { Users, HeartHandshake, Palette, Trophy } from 'lucide-react';

const CommunityAndCollaboration = () => {
    return (
        <div className="py-20 bg-background">
            <div className="container mx-auto px-4">

                {/* Section 16: Parent-Teacher Collaboration */}
                <div className="mb-20 bg-white rounded-3xl p-8 md:p-12 shadow-lg flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-1/2 text-center md:text-left">
                        <span className="text-secondary font-bold uppercase tracking-wider text-sm">Partnership</span>
                        <h2 className="text-3xl font-bold text-textDark mt-2 mb-4">Parent-Teacher Collaboration</h2>
                        <p className="text-gray-600 mb-6">
                            We view parents as active partners in their child's educational journey. Regular PTMs, workshops, and open houses ensure seamless communication.
                        </p>
                        <button className="text-primary font-bold hover:underline bg-blue-50 px-4 py-2 rounded-lg">
                            Join Parent Council &rarr;
                        </button>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-6 rounded-xl text-center">
                            <Users className="w-10 h-10 mx-auto text-blue-500 mb-2" />
                            <span className="font-bold text-gray-800">Regular PTMs</span>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl text-center">
                            <HeartHandshake className="w-10 h-10 mx-auto text-red-500 mb-2" />
                            <span className="font-bold text-gray-800">Workshops</span>
                        </div>
                    </div>
                </div>

                {/* Sections 17 & 18: Co-Curricular & Social Responsibility */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Co-Curricular */}
                    <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-yellow-500">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <Palette className="w-6 h-6 mr-2 text-yellow-500" />
                            Co-Curricular Activities
                        </h2>
                        <div className="grid grid-cols-3 gap-4">
                            <img src={artImg} className="rounded-lg h-24 w-full object-cover" alt="Art" />
                            <img src={musImg} className="rounded-lg h-24 w-full object-cover" alt="Music" />
                            <img src={danImg} className="rounded-lg h-24 w-full object-cover" alt="Dance" />
                        </div>
                        <p className="mt-4 text-gray-600 text-sm">Music, Dance, Art, Drama, and more for holistic growth.</p>
                    </div>

                    {/* Social Responsibility */}
                    <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-green-500">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <Trophy className="w-6 h-6 mr-2 text-green-500" />
                            Social Responsibility
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-center text-gray-700 bg-gray-50 p-2 rounded">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                Tree Plantation Drives
                            </li>
                            <li className="flex items-center text-gray-700 bg-gray-50 p-2 rounded">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                Community Service at Local NGOs
                            </li>
                            <li className="flex items-center text-gray-700 bg-gray-50 p-2 rounded">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                Swachh Bharat Abhiyan
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CommunityAndCollaboration;
