import React, { useState } from 'react';
import heroImg from '../../assets/images/home/campus.jpg';
import { motion } from 'framer-motion';
import {
    Phone, Mail, MapPin, Clock, Send, MessageSquare,
    Facebook, Youtube, Linkedin, Instagram, ArrowRight,
    ShieldCheck, HelpCircle, Building2
} from 'lucide-react';

// --- Shared Components for Contact Page ---

export const ContactHero = () => {
    return (
        <div className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-950">
            <div className="absolute inset-0">
                <img
                    src={heroImg}
                    alt="School Building"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/40"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 bg-indigo-500/20 backdrop-blur-md rounded-full text-indigo-300 font-bold mb-6 border border-indigo-500/30">
                        <MessageSquare className="w-4 h-4 inline-block mr-2" /> We're Here to Help
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Contact Us <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-green-400">Let's Connect</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium">
                        Have a query or want to visit? Reach out to us directly.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export const ContactIntro = () => {
    return (
        <div className="w-full py-12 px-4 bg-white -mt-10 relative z-20">
            <div className="container mx-auto">
                <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] p-8 shadow-xl border border-slate-200 text-center max-w-4xl mx-auto">
                    <p className="text-xl text-slate-700 font-medium">
                        "Communication is the key to a strong parent-school partnership. We are always reachable."
                    </p>
                </div>
            </div>
        </div>
    );
};

export const QuickContactCards = () => {
    const contacts = [
        { icon: <Phone className="w-6 h-6" />, title: "Call Us", action: "tel:+919876543210", label: "+91 98765 43210", color: "indigo" },
        { icon: <Mail className="w-6 h-6" />, title: "Email Us", action: "mailto:info@rkhighschool.com", label: "info@rkhighschool.com", color: "green" },
        { icon: <MapPin className="w-6 h-6" />, title: "Visit Campus", action: "#map", label: "Get Directions", color: "orange" },
    ];

    return (
        <div className="w-full py-12 px-4 bg-slate-50">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {contacts.map((contact, index) => (
                        <a
                            key={index}
                            href={contact.action}
                            className={`bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col items-center text-center`}
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-${contact.color}-50 flex items-center justify-center text-${contact.color}-600 mb-4 group-hover:scale-110 transition-transform`}>
                                {contact.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{contact.title}</h3>
                            <span className="text-slate-600 font-medium">{contact.label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const DetailedContactInfo = () => {
    return (
        <div className="w-full py-16 px-4 bg-white">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Info Column */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Details</h2>

                    {/* Phone */}
                    <div className="flex gap-6 items-start p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 flex-shrink-0">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Phone Numbers</h3>
                            <p className="text-slate-600 flex justify-between w-full md:w-64 mb-1">
                                <span>Main Office:</span> <span className="font-bold text-slate-800">0141-2345678</span>
                            </p>
                            <p className="text-slate-600 flex justify-between w-full md:w-64">
                                <span>Admission:</span> <span className="font-bold text-slate-800">+91 98765 43210</span>
                            </p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex gap-6 items-start p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Email Addresses</h3>
                            <p className="text-slate-600 mb-1">General: <span className="font-bold text-slate-800">info@rkhighschool.com</span></p>
                            <p className="text-slate-600">Admissions: <span className="font-bold text-slate-800">admissions@rkhighschool.com</span></p>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex gap-6 items-start p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 flex-shrink-0">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">School Campus</h3>
                            <p className="text-slate-600 mb-4 max-w-xs">
                                RK High School, Sector-5, Pratap Nagar, Tonk Road, Jaipur, Rajasthan - 302033
                            </p>
                            <button className="text-indigo-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                                Get Directions <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Timings */}
                    <div className="flex gap-6 items-start p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 flex-shrink-0">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Office Hours</h3>
                            <p className="text-slate-600 mb-1 flex justify-between w-full md:w-64"><span>Mon - Sat:</span> <span className="font-bold text-slate-800">8:00 AM - 3:00 PM</span></p>
                            <p className="text-red-500 text-sm font-medium mt-2">Closed on Sundays & Public Holidays</p>
                        </div>
                    </div>
                </div>

                {/* Map Column */}
                <div id="map" className="h-full min-h-[500px] w-full bg-slate-200 rounded-3xl overflow-hidden shadow-lg border border-slate-200 relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.0768910076!2d75.753896!3d26.885346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c439a8c143394!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                        className="absolute inset-0 w-full h-full border-0"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="School Location"
                    ></iframe>
                </div>

            </div>
        </div>
    );
};


export const DepartmentContacts = () => {
    const depts = [
        { name: "Admission Office", desc: "For new applications & fee structure queries.", icon: <Building2 className="w-6 h-6" /> },
        { name: "Accounts Dept", desc: "For fee payments, dues, and receipts.", icon: <Building2 className="w-6 h-6" /> },
        { name: "Transport Dept", desc: "For bus routes, timings, and stops.", icon: <Building2 className="w-6 h-6" /> },
        { name: "Admin Office", desc: "For general queries, TC, and certificates.", icon: <Building2 className="w-6 h-6" /> },
    ];

    return (
        <div className="w-full py-16 px-4 bg-slate-50">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Department Contacts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {depts.map((dept, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-indigo-200 transition-all group cursor-pointer">
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl text-indigo-600 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                {dept.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{dept.name}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{dept.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export const ContactFormSection = () => {
    const [formData, setFormData] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Phone: "",
        Message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        const { FirstName, LastName, Email, Phone, Message } = formData;
        if (!FirstName || !LastName || !Email || !Phone || !Message) {
            alert("Please fill all fields");
            return;
        }

        try {
            const response = await fetch("http://localhost:7000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                alert("Message sent successfully ✅");
                setFormData({
                    FirstName: "",
                    LastName: "",
                    Email: "",
                    Phone: "",
                    Message: ""
                });
            } else {
                alert("Error sending message ❌");
                console.error(result);
            }
        } catch (error) {
            console.error(error);
            alert("Server connection failed ❌");
        }
    };

    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">

                    {/* Form Side */}
                    <div className="w-full md:w-3/5 p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Send us a Message</h2>
                        <p className="text-slate-500 mb-8">We usually respond within 24 hours.</p>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">First Name</label>
                                    <input
                                        type="text"
                                        name="FirstName"
                                        value={formData.FirstName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Last Name</label>
                                    <input
                                        type="text"
                                        name="LastName"
                                        value={formData.LastName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Email Address</label>
                                <input
                                    type="email"
                                    name="Email"
                                    value={formData.Email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Phone Number</label>
                                <input
                                    type="tel"
                                    name="Phone"
                                    value={formData.Phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                                    placeholder="+91 98765 43210"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Message</label>
                                <textarea
                                    rows="4"
                                    name="Message"
                                    value={formData.Message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all text-lg flex items-center justify-center gap-2"
                            >
                                Send Message <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>

                    {/* Visual Side */}
                    <div className="w-full md:w-2/5 bg-indigo-900 text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-900 opacity-90"></div>
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6">Parent Support Desk</h3>
                            <p className="text-indigo-200 mb-8 leading-relaxed">
                                Our dedicated support team is here to assist parents with everything from portal access to academic queries.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                        <ShieldCheck className="w-5 h-5 text-green-400" />
                                    </div>
                                    <span className="font-medium">24-48 Hour Response</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                        <ShieldCheck className="w-5 h-5 text-green-400" />
                                    </div>
                                    <span className="font-medium">Data Privacy Guaranteed</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-12">
                            <h4 className="font-bold mb-4">Connect on Social</h4>
                            <div className="flex gap-4">
                                <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"><Facebook className="w-5 h-5" /></a>
                                <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"><Instagram className="w-5 h-5" /></a>
                                <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"><Youtube className="w-5 h-5" /></a>
                                <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"><Linkedin className="w-5 h-5" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const FAQSection = () => {
    return (
        <div className="w-full py-16 px-4 bg-slate-50">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {[
                        "WHAT ARE THE OFFICE TIMINGS FOR FEE SUBMISSION?",
                        "HOW CAN I SCHEDULE A CAMPUS VISIT?",
                        "WHO SHOULD I CONTACT FOR TRANSPORT QUERIES?",
                        "IS THERE A SEPARATE HELPLINE FOR ADMISSIONS?"
                    ].map((q, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex justify-between items-center cursor-pointer hover:border-indigo-400 transition-colors">
                            <span className="font-bold text-slate-700 text-sm">{q}</span>
                            <HelpCircle className="w-5 h-5 text-indigo-400" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const ContactFinalCTA = () => {
    return (
        <div className="w-full py-24 px-4 bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 text-white text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                    Start Your Journey With Us
                </h2>
                <p className="text-indigo-200 text-lg mb-10 max-w-2xl mx-auto">
                    We look forward to welcoming you to the RK High School family. Admission applications are now open.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button className="px-10 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-full text-lg shadow-xl shadow-green-500/30 transition-all">
                        Apply for Admission
                    </button>
                    <button className="px-10 py-4 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold rounded-full text-lg transition-all">
                        Download Brochure
                    </button>
                </div>
            </div>
        </div>
    );
};
