import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Quote, ChevronDown, ChevronUp, MapPin, Phone, Mail, Clock } from 'lucide-react';

const InfoSections = () => {
    const navigate = useNavigate();
    const [activeAccordion, setActiveAccordion] = useState(0);

    const testimonials = [
        { name: "Mr. S. Kumar", role: "Parent (Class 10)", text: "RK High School provides excellent academic support. The teachers are very approachable and dedicated." },
        { name: "Mrs. A. Patel", role: "Parent (Class 5)", text: "The holistic development my child receives here is unmatched. The sports facilities are amazing." },
        { name: "Dr. R. Singh", role: "Alumni (2015)", text: "The foundation I got at RK High School helped me clear medical entrance in the first attempt. Forever grateful." },
    ];

    const notices = [
        { date: "18 Dec", title: "Winter Vacation Schedule announced", tag: "Exam" },
        { date: "15 Dec", title: "Annual Sports Meet Registration open", tag: "Sports" },
        { date: "10 Dec", title: "Parent Teacher Meeting regarding Unit Test", tag: "Academic" },
        { date: "05 Dec", title: "Science Exhibition Winners list", tag: "Event" },
    ];

    const faqs = [
        { q: "What is the age criteria for Nursery admission?", a: "The child should be 3+ years of age as of 31st March of the academic year." },
        { q: "Is transport facility available?", a: "Yes, we have a fleet of GPS-enabled buses covering all major routes in the city." },
        { q: "What is the student-teacher ratio?", a: "We maintain a healthy ratio of 25:1 to ensure personalized attention for every student." },
    ];

    return (
        <div className="py-20 bg-background">
            <div className="container mx-auto px-4">

                {/* Section 16 & 17: Testimonials & Notices */}
                <div className="grid md:grid-cols-2 gap-12 mb-24">

                    {/* Testimonials */}
                    <div>
                        <h2 className="text-3xl font-bold text-textDark mb-8">What Parents Say</h2>
                        <div className="space-y-6">
                            {testimonials.map((testi, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-secondary relative">
                                    <Quote className="absolute top-4 right-4 text-gray-100 w-10 h-10" />
                                    <p className="text-gray-600 mb-4 italic relative z-10">"{testi.text}"</p>
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                                            {testi.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800">{testi.name}</h4>
                                            <span className="text-xs text-secondary font-bold uppercase">{testi.role}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 17: Notice Board */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                        <div className="flex justify-between items-center mb-6 border-b pb-4">
                            <h2 className="text-2xl font-bold text-textDark flex items-center">
                                <span className="w-2 h-8 bg-accent rounded-full mr-3"></span>
                                Notice Board
                            </h2>
                            <button
                                onClick={() => navigate('/notices/board')}
                                className="text-sm font-bold text-primary hover:underline"
                            >
                                View All
                            </button>
                        </div>
                        <div className="h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                            <ul className="space-y-4">
                                {notices.map((notice, index) => (
                                    <li key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer border-l-4 border-gray-300 hover:border-primary">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs font-bold text-white bg-primary px-2 py-1 rounded">{notice.date}</span>
                                            <span className="text-[10px] font-bold text-gray-400 uppercase border px-1 rounded">{notice.tag}</span>
                                        </div>
                                        <h4 className="text-gray-800 font-medium hover:text-primary">{notice.title}</h4>
                                    </li>
                                ))}
                                {/* Dummy duplicates to show scroll */}
                                {notices.map((notice, index) => (
                                    <li key={`dup-${index}`} className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer border-l-4 border-gray-300 hover:border-primary">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs font-bold text-white bg-primary px-2 py-1 rounded">{notice.date}</span>
                                            <span className="text-[10px] font-bold text-gray-400 uppercase border px-1 rounded">{notice.tag}</span>
                                        </div>
                                        <h4 className="text-gray-800 font-medium hover:text-primary">{notice.title}</h4>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 18: FAQs */}
                <div className="max-w-3xl mx-auto mb-24">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-textDark">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                                <button
                                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                                    className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 focus:outline-none hover:bg-gray-50 bg-white"
                                >
                                    {faq.q}
                                    {activeAccordion === index ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-gray-400" />}
                                </button>
                                <div className={`px-5 text-gray-600 transition-all duration-300 ease-in-out ${activeAccordion === index ? 'max-h-40 py-5 border-t' : 'max-h-0 py-0 overflow-hidden'}`}>
                                    {faq.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 19: Contact Quick Info */}
                <div className="bg-primary rounded-2xl shadow-2xl overflow-hidden text-white">
                    <div className="grid md:grid-cols-2">
                        <div className="p-10">
                            <span className="text-secondary font-bold uppercase tracking-wider mb-2 block">Visit Us</span>
                            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Our Location</h4>
                                        <p className="text-blue-100">123 Education Lane, Knowledge City, State - 400001</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Phone Number</h4>
                                        <p className="text-blue-100">+91 98765 43210</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Email Address</h4>
                                        <p className="text-blue-100">info@rkhighschool.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Office Hours</h4>
                                        <p className="text-blue-100">Mon - Sat: 8:00 AM - 4:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Map Embed */}
                        <div className="h-[400px] md:h-auto bg-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.114757519362!2d77.209021!3d28.613939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1652331575000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="School Location"
                            ></iframe>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InfoSections;
