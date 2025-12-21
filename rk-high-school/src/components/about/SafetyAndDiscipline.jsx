import React from 'react';
import safeImg from '../../assets/images/student-life/gallery-page-4.jpg';
import { Shield, Video, Bus, UserCheck } from 'lucide-react';

const SafetyAndDiscipline = () => {
    return (
        <div className="py-20 bg-blue-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-textDark mb-6">Safety First Policy</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            The safety and security of our students is our prime concern. We have implemented comprehensive measures to ensure a secure environment within the campus.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-start">
                                <Video className="w-8 h-8 text-primary mr-3" />
                                <div>
                                    <h4 className="font-bold text-gray-800">CCTV Surveillance</h4>
                                    <p className="text-sm text-gray-500">24x7 monitoring of all common areas.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Bus className="w-8 h-8 text-yellow-500 mr-3" />
                                <div>
                                    <h4 className="font-bold text-gray-800">GPS Transport</h4>
                                    <p className="text-sm text-gray-500">Real-time tracking for parents.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <UserCheck className="w-8 h-8 text-green-500 mr-3" />
                                <div>
                                    <h4 className="font-bold text-gray-800">Verified Staff</h4>
                                    <p className="text-sm text-gray-500">Thorough background checks.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Shield className="w-8 h-8 text-red-500 mr-3" />
                                <div>
                                    <h4 className="font-bold text-gray-800">Secure Campus</h4>
                                    <p className="text-sm text-gray-500">Gated entry with security guards.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img src={safeImg} alt="Safe Campus" className="rounded-2xl shadow-xl border-4 border-white" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SafetyAndDiscipline;
