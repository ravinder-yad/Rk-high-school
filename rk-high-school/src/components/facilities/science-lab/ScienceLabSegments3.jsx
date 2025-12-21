import React from 'react';
import img1 from '../../../assets/images/student-life/event-science.jpg';
import img2 from '../../../assets/images/student-life/gallery-page-5.jpg';
import img3 from '../../../assets/images/student-life/gallery-page-8.jpg';
import { PenTool, Lightbulb, GraduationCap, ArrowRight, FlaskConical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Section 15: Exam Prep
export const ExamPrep = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl text-center">
                <div className="inline-block p-3 rounded-full bg-teal-50 text-teal-600 mb-6">
                    <PenTool className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Board Exam Readiness</h2>
                <p className="text-slate-600 mb-8">
                    We ensure every student is thoroughly prepared for CBSE Board Practical Exams. Regular mock practicals, viva-voce practice, and record file maintenance are strictly monitored.
                </p>
                <div className="flex justify-center gap-4">
                    <span className="px-4 py-2 bg-slate-100 rounded-lg text-slate-700 font-bold text-sm">Mock Tests</span>
                    <span className="px-4 py-2 bg-slate-100 rounded-lg text-slate-700 font-bold text-sm">Viva Practice</span>
                    <span className="px-4 py-2 bg-slate-100 rounded-lg text-slate-700 font-bold text-sm">Record Files</span>
                </div>
            </div>
        </div>
    );
};

// Section 16 & 17: Projects & Innovation
export const LabInnovation = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                        <Lightbulb className="w-6 h-6 text-orange-500" /> Science Fair & Projects
                    </h3>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                        Annual Science Exhibition allows students to showcase working models, robots, and research projects. We encourage creative thinking beyond the syllabus.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                        <GraduationCap className="w-6 h-6 text-indigo-500" /> Academic Excellence
                    </h3>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                        Practical work reinforces theoretical concepts. Students who perform experiments understand concepts better and score higher in theory exams too.
                    </p>
                </div>
            </div>
        </div>
    );
};

// Section 19: Gallery
export const LabGallery = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">In Action</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
                    <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
                        <img
                            src={img1}
                            alt="Chemistry Experiment"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                        <img
                            src={img2}
                            alt="Microscope"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                        <img
                            src={img3}
                            alt="Physics Setup"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <div className="col-span-2 rounded-2xl overflow-hidden bg-teal-900 flex items-center justify-center text-white/50 font-bold text-xl">
                        + Student Projects
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 20: CTA
export const LabFinalCTA = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full py-24 px-4 bg-gradient-to-r from-teal-600 to-indigo-600 text-center text-white">
            <div className="container mx-auto">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <FlaskConical className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                    Learn Science by Doing
                </h2>
                <p className="text-teal-100 text-lg mb-10 max-w-2xl mx-auto">
                    Experience the thrill of discovery at RK High School's advanced laboratories.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        onClick={() => navigate('/admissions/form')}
                        className="px-10 py-4 bg-white text-teal-700 font-bold rounded-full text-lg shadow-xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
                    >
                        Apply Now <ArrowRight className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-10 py-4 bg-teal-800/50 border border-white/20 hover:bg-teal-800/70 text-white font-bold rounded-full text-lg transition-all"
                    >
                        Schedule Visit
                    </button>
                </div>
            </div>
        </div>
    );
};
