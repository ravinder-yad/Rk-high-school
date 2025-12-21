import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, UserCheck, ClipboardCheck, CheckCircle, Monitor, Microscope, Dumbbell, Book as LibraryIcon } from 'lucide-react';

const AdmissionAndFacilities = () => {
    const navigate = useNavigate();

    const steps = [
        { num: "01", title: "Enquiry", icon: <FileText className="w-6 h-6" /> },
        { num: "02", title: "Form Fill", icon: <ClipboardCheck className="w-6 h-6" /> },
        { num: "03", title: "Interaction", icon: <UserCheck className="w-6 h-6" /> },
        { num: "04", title: "Admission", icon: <CheckCircle className="w-6 h-6" /> },
    ];

    const facilities = [
        { title: "Smart Library", icon: <LibraryIcon className="w-8 h-8 text-primary" />, desc: "Over 10,000+ books" },
        { title: "Computer Lab", icon: <Monitor className="w-8 h-8 text-secondary" />, desc: "Latest configuration systems" },
        { title: "Science Lab", icon: <Microscope className="w-8 h-8 text-accent" />, desc: "Physics, Chemistry, Biology" },
        { title: "Sports Complex", icon: <Dumbbell className="w-8 h-8 text-red-500" />, desc: "Indoor & Outdoor games" },
    ];

    return (
        <div className="py-20 bg-background">
            <div className="container mx-auto px-4">

                {/* Section 6: Admission Process */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-textDark mb-4">Admission Process</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Simple 4-step process to become a part of the RK Family</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 transform -translate-y-1/2"></div>

                        {steps.map((step, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md border hover:border-primary text-center group cursor-default">
                                <div className="w-16 h-16 mx-auto bg-blue-50 text-primary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                    {step.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-800 mb-1">{step.title}</h4>
                                <span className="text-gray-400 font-bold text-sm">Step {step.num}</span>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <button
                            onClick={() => navigate('/admissions/process')}
                            className="px-8 py-3 bg-secondary text-black font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-yellow-500 transition-all"
                        >
                            View Detailed Process
                        </button>
                    </div>
                </div>

                {/* Section 7: Facilities */}
                <div>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <span className="text-secondary font-bold tracking-wider uppercase text-sm">Infrastructure</span>
                            <h2 className="text-3xl font-bold text-textDark mt-2">World Class Facilities</h2>
                        </div>
                        <button
                            onClick={() => navigate('/facilities/library')}
                            className="text-primary font-bold hover:underline mt-4 md:mt-0"
                        >
                            View All Facilities &rarr;
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {facilities.map((fac, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer group">
                                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    {fac.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{fac.title}</h3>
                                <p className="text-gray-500 text-sm">{fac.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdmissionAndFacilities;
