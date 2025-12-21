import React from 'react';
import { Link } from 'react-router-dom';
import {
    Facebook, Youtube, Linkedin, Instagram, MapPin, Phone, Mail,
    ChevronRight, Send, GraduationCap, Globe, ShieldQuestion
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const FooterLink = ({ to, children }) => (
        <li>
            <Link
                to={to}
                className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center group text-sm"
            >
                <ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300" />
                {children}
            </Link>
        </li>
    );

    return (
        <footer className="bg-[#020617] text-white pt-20 pb-10 border-t border-slate-900">
            <div className="container mx-auto px-4">

                {/* Top Section: Brand + Newsletter */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 pb-12 border-b border-slate-800">
                    {/* Brand */}
                    <div className="max-w-md">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/20">
                                <GraduationCap className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-white">RK High School</h2>
                                <p className="text-xs text-indigo-400 uppercase tracking-widest font-semibold">Excellence & Integrity</p>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Shaping future leaders by fostering a culture of academic excellence, critical thinking, and moral integrity. Join us in building a brighter tomorrow.
                        </p>
                    </div>

                    {/* Newsletter */}
                    <div className="w-full lg:w-auto bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                            <Mail className="w-5 h-5 text-indigo-400" /> Stay Updated
                        </h3>
                        <p className="text-slate-500 text-sm mb-4">Get the latest notices & news directly to your inbox.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-slate-950 border border-slate-700 text-white px-4 py-2 rounded-lg text-sm focus:outline-none focus:border-indigo-500 w-full sm:w-64"
                            />
                            <button className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center">
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Middle Section: Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">

                    {/* Column 1: Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-slate-200">Quick Links</h4>
                        <ul className="space-y-3">
                            <FooterLink to="/">Home</FooterLink>
                            <FooterLink to="/about/school">About School</FooterLink>
                            <FooterLink to="/admissions/process">Admissions</FooterLink>
                            <FooterLink to="/contact">Contact Us</FooterLink>
                            <FooterLink to="/sitemap">Sitemap</FooterLink>
                        </ul>
                    </div>

                    {/* Column 2: Academics */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-slate-200">Academics</h4>
                        <ul className="space-y-3">
                            <FooterLink to="/academics/pre-primary">Pre-Primary</FooterLink>
                            <FooterLink to="/academics/primary">Primary School</FooterLink>
                            <FooterLink to="/academics/middle">Middle School</FooterLink>
                            <FooterLink to="/academics/senior-secondary">Senior Secondary</FooterLink>
                            <FooterLink to="/departments/science">Science Stream</FooterLink>
                        </ul>
                    </div>

                    {/* Column 3: Student Life */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-slate-200">Student Life</h4>
                        <ul className="space-y-3">
                            <FooterLink to="/student-life/activities">Activities</FooterLink>
                            <FooterLink to="/student-life/clubs">Clubs & Societies</FooterLink>
                            <FooterLink to="/student-life/events">School Events</FooterLink>
                            <FooterLink to="/gallery/photos">Photo Gallery</FooterLink>
                            <FooterLink to="/facilities/sports">Sports</FooterLink>
                        </ul>
                    </div>

                    {/* Column 4: Information */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-slate-200">Information</h4>
                        <ul className="space-y-3">
                            <FooterLink to="/notices/board">Notice Board</FooterLink>
                            <FooterLink to="/notices/circulars">Circulars</FooterLink>
                            <FooterLink to="/admissions/fee-structure">Fee Structure</FooterLink>
                            <FooterLink to="/admissions/criteria">Eligibility</FooterLink>
                            <FooterLink to="/notices/calendar">Academic Calendar</FooterLink>
                        </ul>
                    </div>

                    {/* Column 5: Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-slate-200">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-400 text-sm">Sector-5, Pratap Nagar, Tonk Road, Jaipur, Rajasthan - 302033</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-slate-400 text-sm">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                                <span className="text-slate-400 text-sm">info@rkhighschool.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm text-center md:text-left">
                        &copy; {currentYear} <span className="text-slate-300 font-semibold">RK High School</span>. All Rights Reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white transition-all transform hover:-translate-y-1">
                            <Facebook className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#E4405F] hover:text-white transition-all transform hover:-translate-y-1">
                            <Instagram className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#FF0000] hover:text-white transition-all transform hover:-translate-y-1">
                            <Youtube className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#0A66C2] hover:text-white transition-all transform hover:-translate-y-1">
                            <Linkedin className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
