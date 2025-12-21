import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Shield, Layout, Smile } from 'lucide-react';
import classroomImg from '../../assets/images/home/classroom.jpg';
import principalImg from '../../assets/images/home/principal.jpg';
import teacher1Img from '../../assets/images/home/teacher1.jpg';
import teacher2Img from '../../assets/images/home/teacher2.jpg';
import teacher3Img from '../../assets/images/home/teacher3.jpg';
import teacher4Img from '../../assets/images/home/teacher4.jpg';

const WhyChooseAndPeople = () => {
    const navigate = useNavigate();

    const highlights = [
        { title: "Experienced Faculty", icon: <Star className="w-6 h-6 text-yellow-500" /> },
        { title: "Smart Classrooms", icon: <Layout className="w-6 h-6 text-blue-500" /> },
        { title: "Safe Campus", icon: <Shield className="w-6 h-6 text-green-500" /> },
        { title: "Holistic Growth", icon: <Smile className="w-6 h-6 text-purple-500" /> },
    ];

    return (
        <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">

                {/* Section 8: Why Choose Us */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm">Why Choose Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-textDark mt-2 mb-6">Building Foundations for Success</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {highlights.map((item, index) => (
                                <div key={index} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-primary transition-colors">
                                    <div className="p-2 bg-gray-50 rounded-lg">{item.icon}</div>
                                    <span className="font-semibold text-gray-800">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src={classroomImg}
                            alt="Classroom"
                            className="rounded-2xl shadow-xl w-full"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
                            <p className="text-gray-600 italic">"Education is the most powerful weapon which you can use to change the world."</p>
                            <p className="mt-2 font-bold text-primary">- Nelson Mandela</p>
                        </div>
                    </div>
                </div>

                {/* Section 9: Principal Message */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-bl-full -mr-16 -mt-16"></div>
                    <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                        <div className="md:w-1/3 text-center">
                            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                                <img
                                    src={principalImg}
                                    alt="Principal"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-textDark">Dr. Anjali Verma</h3>
                            <p className="text-primary font-medium">Principal, RK High School</p>
                        </div>
                        <div className="md:w-2/3">
                            <h2 className="text-3xl font-bold text-textDark mb-4">Principal's Message</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                "We believe that every child is unique and has the potential to achieve greatness. At RK High School, we provide the nurturing environment and resources necessary for students to discover their talents and excel in their chosen paths. Our focus is on holistic development, academic excellence, and character building."
                            </p>
                            <button
                                onClick={() => navigate('/about/principal')}
                                className="px-6 py-2 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all"
                            >
                                Read Full Message
                            </button>
                        </div>
                    </div>
                </div>

                {/* Section 10: Teachers Preview */}
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-textDark">Meet Our Expert Faculty</h2>
                        <p className="text-gray-600">Dedicated educators shaping the future</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Mr. R. Sharma", subject: "Mathematics", img: teacher1Img },
                            { name: "Ms. P. Gupta", subject: "Science", img: teacher2Img },
                            { name: "Mr. A. Khan", subject: "English", img: teacher3Img },
                            { name: "Mrs. S. Singh", subject: "Social Studies", img: teacher4Img },
                        ].map((teacher, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all group">
                                <div className="h-48 overflow-hidden">
                                    <img src={teacher.img} alt={teacher.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-4 text-center">
                                    <h4 className="font-bold text-lg text-gray-800">{teacher.name}</h4>
                                    <p className="text-primary text-sm">{teacher.subject}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhyChooseAndPeople;
