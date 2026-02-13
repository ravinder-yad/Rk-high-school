import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10 rounded-t-[3rem] mt-12 mb-0">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Brand */}
                    <div>
                        <Link to="/" className="flex items-center gap-3 mb-6 group">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                                RK
                            </div>
                            <div>
                                <h1 className="text-2xl font-black font-display tracking-tight text-white group-hover:text-primary transition-colors">RK High School</h1>
                                <p className="text-xs text-slate-400 font-medium tracking-widest uppercase">Excellence Since 1995</p>
                            </div>
                        </Link>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            Nurturing young minds to become global leaders through holistic education, modern infrastructure, and traditional values.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-8 text-white relative inline-block">
                            Quick Links
                            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'About Us', path: '/about/school' },
                                { name: 'Admissions', path: '/admissions/process' },
                                { name: 'Academics', path: '/academics/curriculum' },
                                { name: 'Student Life', path: '/student-life' },
                                { name: 'Gallery', path: '/gallery' },
                                { name: 'Contact', path: '/contact' }
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link
                                        to={link.path}
                                        className="text-slate-400 hover:text-primary transition-colors flex items-center group"
                                    >
                                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-8 text-white relative inline-block">
                            Contact Us
                            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-secondary rounded-full"></span>
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                                <p className="text-slate-400">123 Education Lane, Knowledge Park, Silicon Valley of India, Bangalore - 560001</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="w-6 h-6 text-secondary flex-shrink-0" />
                                <p className="text-slate-400">+91 98765 43210</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="w-6 h-6 text-secondary flex-shrink-0" />
                                <p className="text-slate-400">admissions@rkhighschool.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold mb-8 text-white relative inline-block">
                            Newsletter
                            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
                        </h3>
                        <p className="text-slate-400 mb-6">
                            Subscribe to get the latest news, updates and special offers delivered directly to your inbox.
                        </p>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:outline-none focus:border-primary text-slate-300 placeholder-slate-500 transition-colors"
                            />
                            <button className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 group">
                                Subscribe Now
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} RK High School. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-slate-500">
                        <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
