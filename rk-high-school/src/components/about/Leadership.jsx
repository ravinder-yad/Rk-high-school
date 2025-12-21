import React from 'react';
import chairImg from '../../assets/images/home/principal.jpg';
import dirImg from '../../assets/images/home/teacher2.jpg';
import headImg from '../../assets/images/home/teacher3.jpg';
import meetImg from '../../assets/images/home/teacher1.jpg';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Leadership = () => {

    // Reusing Principal data from Home, but with a different layout
    const management = [
        { name: "Mr. Rajesh Kumar", role: "Chairman", img: chairImg },
        { name: "Mrs. Meera Singh", role: "Director", img: dirImg },
        { name: "Mr. Amit Patel", role: "Academic Head", img: headImg },
    ];

    return (
        <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">

                {/* Section 8: Principal Desk */}
                <div className="mb-24">
                    <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                        <div className="md:w-1/3 relative">
                            <img
                                src={meetImg}
                                alt="Principal"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent md:hidden flex items-end p-6">
                                <h3 className="text-white text-2xl font-bold">Dr. Anjali Verma</h3>
                                <span className="text-gray-200 text-sm ml-2">Principal</span>
                            </div>
                        </div>
                        <div className="md:w-2/3 p-10 md:p-14 flex flex-col justify-center relative">
                            {/* Decoration */}
                            <span className="text-9xl text-gray-100 font-serif absolute top-4 right-8 select-none">"</span>

                            <h2 className="text-3xl font-bold text-textDark mb-2">From the Principal's Desk</h2>
                            <div className="w-20 h-1 bg-secondary mb-6"></div>
                            <p className="text-gray-600 leading-relaxed text-lg mb-8 italic">
                                "Education is not merely the accumulation of facts; it is the discovery of the hidden values which lie within us. At RK High School, we strive to uncover the potential in every child, guiding them to be not just successful professionals, but compassionate human beings."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="font-handwriting text-2xl text-primary">Anjali Verma</div>
                                <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">Dr. Anjali Verma, PhD</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 9: Management Team */}
                <div>
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold uppercase tracking-wider text-sm">Visionaries</span>
                        <h2 className="text-3xl font-bold text-textDark mt-2">Our Management Team</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {management.map((member, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border-b-4 border-transparent hover:border-primary transition-all group hover:-translate-y-2">
                                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-100 mb-6 group-hover:border-primary transition-colors">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-xl font-bold text-center text-textDark">{member.name}</h3>
                                <p className="text-center text-secondary font-medium mb-6 uppercase text-sm tracking-wide">{member.role}</p>

                                <div className="flex justify-center space-x-4 border-t pt-4">
                                    <a href="#" className="p-2 bg-gray-50 rounded-full hover:bg-blue-50 text-gray-500 hover:text-blue-600 transition-colors"><Linkedin className="w-4 h-4" /></a>
                                    <a href="#" className="p-2 bg-gray-50 rounded-full hover:bg-blue-50 text-gray-500 hover:text-blue-400 transition-colors"><Twitter className="w-4 h-4" /></a>
                                    <a href="#" className="p-2 bg-gray-50 rounded-full hover:bg-blue-50 text-gray-500 hover:text-red-500 transition-colors"><Mail className="w-4 h-4" /></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Leadership;
