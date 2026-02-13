import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Quote, ChevronDown, ChevronUp, MapPin, Phone, Mail, Clock, Calendar, ArrowRight } from 'lucide-react';

const InfoSections = () => {
    const navigate = useNavigate();
    const [activeAccordion, setActiveAccordion] = useState(0);

    const testimonials = [
        { name: "Mr. S. Kumar", role: "Parent (Class 10)", text: "RK High School provides excellent academic support. The teachers are very approachable and truly dedicated to student success." },
        { name: "Mrs. A. Patel", role: "Parent (Class 5)", text: "The holistic development my child receives here is unmatched. The sports facilities and extra-curriculars are amazing." },
        { name: "Dr. R. Singh", role: "Alumni (2015)", text: "The foundation I got at RK High School helped me clear medical entrance in the first attempt. I am forever grateful." },
    ];

    const notices = [
        { date: "18", month: "DEC", title: "Winter Vacation Schedule announced", tag: "Exam", color: "bg-red-100 text-red-600" },
        { date: "15", month: "DEC", title: "Annual Sports Meet Registration open", tag: "Sports", color: "bg-green-100 text-green-600" },
        { date: "10", month: "DEC", title: "Parent Teacher Meeting regarding Unit Test", tag: "Academic", color: "bg-blue-100 text-blue-600" },
        { date: "05", month: "DEC", title: "Science Exhibition Winners list declared", tag: "Event", color: "bg-purple-100 text-purple-600" },
    ];

    const faqs = [
        { q: "What is the age criteria for Nursery admission?", a: "The child should be 3+ years of age as of 31st March of the academic year." },
        { q: "Is transport facility available?", a: "Yes, we have a fleet of GPS-enabled buses covering all major routes in the city with female attendants." },
        { q: "What is the student-teacher ratio?", a: "We maintain a healthy ratio of 25:1 to ensure personalized attention for every student." },
    ];

    return (
        <div className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">

                {/* Section 16 & 17: Testimonials & Notices */}
                <div className="grid lg:grid-cols-2 gap-16 mb-32">

                    {/* Testimonials */}
                    <div>
                        <span className="text-secondary font-bold tracking-wider uppercase text-xs mb-3 block">Testimonials</span>
                        <h2 className="text-3xl font-black text-slate-900 mb-8 font-display">Parents & Alumni Say</h2>

                        <div className="space-y-6">
                            {testimonials.map((testi, index) => (
                                <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative group hover:shadow-lg transition-all">
                                    <Quote className="absolute top-8 right-8 text-primary/10 w-12 h-12 transform group-hover:rotate-12 transition-transform" />
                                    <p className="text-slate-600 mb-6 italic relative z-10 text-lg leading-relaxed">"{testi.text}"</p>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-md">
                                            {testi.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg">{testi.name}</h4>
                                            <span className="text-xs text-secondary font-bold uppercase tracking-wide">{testi.role}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 17: Notice Board */}
                    <div>
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Updates</span>
                                <h2 className="text-3xl font-black text-slate-900 font-display">Notice Board</h2>
                            </div>
                            <button
                                onClick={() => navigate('/notices/board')}
                                className="text-sm font-bold text-primary hover:text-primary-dark flex items-center hover:underline"
                            >
                                View All Notices <ArrowRight className="w-4 h-4 ml-1" />
                            </button>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden h-[500px] flex flex-col">
                            <div className="bg-primary p-4 text-white text-center font-bold uppercase tracking-widest text-sm">
                                Latest Announcements
                            </div>
                            <div className="overflow-y-auto p-2 custom-scrollbar flex-1">
                                <ul className="space-y-2">
                                    {notices.map((notice, index) => (
                                        <li key={index} className="p-4 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer group border border-transparent hover:border-slate-100">
                                            <div className="flex items-start gap-4">
                                                <div className="min-w-[60px] text-center bg-slate-100 rounded-xl p-2 group-hover:bg-white group-hover:shadow-md transition-all">
                                                    <span className="block text-xl font-black text-slate-900 leading-none">{notice.date}</span>
                                                    <span className="block text-[10px] font-bold text-slate-500 uppercase">{notice.month}</span>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center mb-2">
                                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${notice.color}`}>{notice.tag}</span>
                                                    </div>
                                                    <h4 className="text-slate-800 font-bold group-hover:text-primary transition-colors leading-snug">{notice.title}</h4>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                    {/* Duplicates for scroll feel */}
                                    {notices.map((notice, index) => (
                                        <li key={`dup-${index}`} className="p-4 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer group border border-transparent hover:border-slate-100">
                                            <div className="flex items-start gap-4">
                                                <div className="min-w-[60px] text-center bg-slate-100 rounded-xl p-2 group-hover:bg-white group-hover:shadow-md transition-all">
                                                    <span className="block text-xl font-black text-slate-900 leading-none">{notice.date}</span>
                                                    <span className="block text-[10px] font-bold text-slate-500 uppercase">{notice.month}</span>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center mb-2">
                                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${notice.color}`}>{notice.tag}</span>
                                                    </div>
                                                    <h4 className="text-slate-800 font-bold group-hover:text-primary transition-colors leading-snug">{notice.title}</h4>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 18: FAQs */}
                <div className="max-w-4xl mx-auto mb-32">
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-wider uppercase text-xs mb-3 block">Got Questions?</span>
                        <h2 className="text-3xl font-black text-slate-900 font-display">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden transition-all hover:shadow-md">
                                <button
                                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                                    className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-900 focus:outline-none"
                                >
                                    <span className="text-lg">{faq.q}</span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeAccordion === index ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
                                        {activeAccordion === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                    </div>
                                </button>
                                <div className={`px-6 text-slate-600 transition-all duration-300 ease-in-out font-medium leading-relaxed ${activeAccordion === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                    {faq.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 19: Contact Quick Info */}
                <div className="bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden text-white relative">
                    {/* Split Layout */}
                    <div className="grid lg:grid-cols-2 relative z-10">
                        <div className="p-12 lg:p-16">
                            <span className="text-secondary font-bold uppercase tracking-wider mb-2 block">Visit Us</span>
                            <h2 className="text-4xl font-black mb-10 font-display">Get in Touch</h2>
                            <div className="space-y-8">
                                <div className="flex items-start space-x-6 group">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors border border-white/10">
                                        <MapPin className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-1">Our Location</h4>
                                        <p className="text-slate-400 font-light">123 Education Lane, Knowledge City,<br /> State - 400001</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-6 group">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors border border-white/10">
                                        <Phone className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-1">Phone Number</h4>
                                        <p className="text-slate-400 font-light">+91 98765 43210</p>
                                        <p className="text-slate-400 font-light text-sm">Mon-Sat, 9am to 4pm</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-6 group">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors border border-white/10">
                                        <Mail className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-1">Email Address</h4>
                                        <p className="text-slate-400 font-light">admissions@rkhighschool.com</p>
                                        <p className="text-slate-400 font-light text-sm">info@rkhighschool.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Map Embed */}
                        <div className="h-[400px] lg:h-auto bg-slate-800 relative min-h-[400px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.4745814238547!2d77.2069!3d28.6143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUxLjUiTiA3N8KwMTInMjQuOCJF!5e0!3m2!1sen!2sin!4v1652331575000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(1) contrast(1.2)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="School Location"
                                className="absolute inset-0"
                            ></iframe>
                            {/* Overlay to blend map */}
                            <div className="absolute inset-0 bg-slate-900/20 pointer-events-none"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InfoSections;
