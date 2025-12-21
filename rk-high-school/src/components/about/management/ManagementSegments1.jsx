import React from 'react';
import heroImg from '../../../assets/images/home/campus.jpg';
import chairImg from '../../../assets/images/home/principal.jpg';
import dirImg from '../../../assets/images/home/teacher2.jpg';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

export const ManagementHero = () => (
    <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-slate-900">
            <img src={heroImg} alt="Management" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Management Team</h1>
            <p className="text-xl md:text-2xl font-light italic text-yellow-400">“Leadership That Shapes the Future”</p>
        </div>
    </div>
);

export const ManagementIntro = () => (
    <section className="py-16 bg-white -mt-10 relative z-20">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-xl border border-gray-200 p-8 rounded-2xl shadow-xl text-center">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Strategic Leadership</h2>
                <p className="text-gray-600 text-lg">
                    Our management team provides strategic direction and strong leadership, ensuring that RK High School remains a beacon of educational excellence and innovation.
                </p>
            </div>
        </div>
    </section>
);

export const ChairmanCard = () => {
    const navigate = useNavigate();
    return (
        <section className="py-20 bg-blue-50">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-w-6xl mx-auto transform hover:scale-[1.01] transition-transform duration-500">
                    <div className="md:w-2/5 relative">
                        <img src={chairImg} alt="Chairman" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 md:hidden">
                            <div className="text-white">
                                <h3 className="text-2xl font-bold">Mr. Rajesh Kumar</h3>
                                <p>Chairman</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center">
                        <h4 className="text-primary font-bold tracking-wider uppercase mb-2">Chairman & Founder</h4>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Mr. Rajesh Kumar</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            "My vision was to create a sanctuary of learning where Indian values meet global standards. Today, RK High School stands as a testament to that dream."
                        </p>
                        <button
                            onClick={() => navigate('/management/chairman')}
                            className="inline-flex items-center text-secondary font-bold hover:text-yellow-600 transition-colors group"
                        >
                            View Full Profile <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const DirectorCard = () => {
    const navigate = useNavigate();
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row-reverse max-w-6xl mx-auto transform hover:scale-[1.01] transition-transform duration-500">
                    <div className="md:w-2/5 relative">
                        <img src={dirImg} alt="Director" className="w-full h-full object-cover" />
                    </div>
                    <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center text-right md:text-left">
                        <h4 className="text-yellow-400 font-bold tracking-wider uppercase mb-2">Director</h4>
                        <h2 className="text-4xl font-bold text-white mb-6">Mrs. Suman Gupta</h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            "Education is about empowering young minds to question, explore, and create. We are committed to providing the best resources for our students."
                        </p>
                        <button
                            onClick={() => navigate('/management/director')}
                            className="inline-flex items-center text-yellow-400 font-bold hover:text-yellow-300 transition-colors group justify-end md:justify-start"
                        >
                            View Full Profile <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const PrincipalManagementRef = () => {
    const navigate = useNavigate();
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer group" onClick={() => navigate('/about/principal')}>
                    <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
                        <Star className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors">Academic Head & Principal</h3>
                    <p className="text-gray-600 mb-4">Leading the academic and pedagogical vision of the school.</p>
                    <span className="text-secondary font-bold text-sm uppercase">Click to Read Message</span>
                </div>
            </div>
        </section>
    );
};
