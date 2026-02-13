import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Menu, X, ChevronDown, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, MapPin,
    Search, GraduationCap, BookOpen, Users, Target, MessageSquare, Briefcase,
    Baby, School, FileText, ListChecks, CreditCard, MousePointerClick,
    FlaskConical, Calculator, Palette, Library, Microscope, Trophy,
    Music, Calendar, Image, Video, ClipboardList, Bell, ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeHover, setActiveHover] = useState(null);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
    }, [location]);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { title: 'Home', path: '/', icon: null },
        {
            title: 'About Us',
            path: '/about',
            submenu: [
                { title: 'About School', path: '/about/school', icon: <School className="w-4 h-4" /> },
                { title: 'Vision & Mission', path: '/about/vision', icon: <Target className="w-4 h-4" /> },
                { title: "Principal's Message", path: '/about/principal', icon: <MessageSquare className="w-4 h-4" /> },
                { title: 'Management Team', path: '/about/management', icon: <Users className="w-4 h-4" /> },
            ]
        },
        {
            title: 'Academics',
            path: '/academics',
            submenu: [
                { title: 'Pre-Primary', path: '/academics/pre-primary', icon: <Baby className="w-4 h-4" /> },
                { title: 'Primary School', path: '/academics/primary', icon: <BookOpen className="w-4 h-4" /> },
                { title: 'Middle School', path: '/academics/middle', icon: <School className="w-4 h-4" /> },
                { title: 'Senior Secondary', path: '/academics/senior-secondary', icon: <GraduationCap className="w-4 h-4" /> },
            ]
        },
        {
            title: 'Admissions',
            path: '/admissions',
            submenu: [
                { title: 'Why Choose Us?', path: '/admissions/why-us', icon: <Target className="w-4 h-4" /> },
                { title: 'Admission Process', path: '/admissions/process', icon: <ListChecks className="w-4 h-4" /> },
                { title: 'Fee Structure', path: '/admissions/fee-structure', icon: <CreditCard className="w-4 h-4" /> },
                { title: 'Apply Online', path: '/admissions/form', icon: <MousePointerClick className="w-4 h-4" /> },
            ]
        },
        {
            title: 'Departments',
            path: '/departments',
            submenu: [
                { title: 'Science', path: '/departments/science', icon: <FlaskConical className="w-4 h-4" /> },
                { title: 'Commerce', path: '/departments/commerce', icon: <Calculator className="w-4 h-4" /> },
                { title: 'Arts & Humanities', path: '/departments/arts', icon: <Palette className="w-4 h-4" /> },
            ]
        },
        {
            title: 'Facilities',
            path: '/facilities',
            submenu: [
                { title: 'Library', path: '/facilities/library', icon: <Library className="w-4 h-4" /> },
                { title: 'Laboratories', path: '/facilities/science-lab', icon: <Microscope className="w-4 h-4" /> },
                { title: 'Sports Complex', path: '/facilities/sports', icon: <Trophy className="w-4 h-4" /> },
            ]
        },
        {
            title: 'Campus Life',
            path: '/student-life',
            submenu: [
                { title: 'Co-Curricular', path: '/student-life/activities', icon: <Music className="w-4 h-4" /> },
                { title: 'Clubs', path: '/student-life/clubs', icon: <Users className="w-4 h-4" /> },
                { title: 'Annual Events', path: '/student-life/events', icon: <Calendar className="w-4 h-4" /> },
            ]
        },
        {
            title: 'Gallery',
            path: '/gallery',
            submenu: [
                { title: 'Photos', path: '/gallery/photos', icon: <Image className="w-4 h-4" /> },
                { title: 'Videos', path: '/gallery/videos', icon: <Video className="w-4 h-4" /> },
            ]
        },
        { title: 'Contact', path: '/contact', icon: null },
    ];

    return (
        <header className="w-full z-50 font-sans relative">
            {/* Top Bar - Ultra Dark Navy for Contrast */}
            <div className="bg-slate-900 text-slate-300 py-2.5 px-4 hidden lg:block border-b border-white/5">
                <div className="max-w-[1440px] mx-auto flex justify-between items-center text-[12px] font-medium tracking-wide">
                    <div className="flex items-center space-x-8">
                        <div className="flex items-center hover:text-white transition-colors cursor-pointer">
                            <MapPin className="w-3.5 h-3.5 mr-2 text-secondary" />
                            <span>123 Knowledge Park, Education City, New Delhi</span>
                        </div>
                        <div className="flex items-center space-x-6">
                            <a href="tel:+919876543210" className="flex items-center hover:text-white transition-colors">
                                <Phone className="w-3.5 h-3.5 mr-2 text-secondary" />
                                <span>+91 98765 43210</span>
                            </a>
                            <a href="mailto:contact@rkhighschool.com" className="flex items-center hover:text-white transition-colors">
                                <Mail className="w-3.5 h-3.5 mr-2 text-secondary" />
                                <span>contact@rkhighschool.com</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="flex space-x-3 border-r border-white/10 pr-4">
                            <a href="#" className="hover:text-secondary hover:scale-110 transition-all"><Facebook className="w-3.5 h-3.5" /></a>
                            <a href="#" className="hover:text-secondary hover:scale-110 transition-all"><Twitter className="w-3.5 h-3.5" /></a>
                            <a href="#" className="hover:text-secondary hover:scale-110 transition-all"><Instagram className="w-3.5 h-3.5" /></a>
                            <a href="#" className="hover:text-secondary hover:scale-110 transition-all"><Linkedin className="w-3.5 h-3.5" /></a>
                        </div>
                        <Link to="/login" className="flex items-center hover:text-white transition-colors font-semibold uppercase tracking-wider text-[11px]">
                            <Briefcase className="w-3.5 h-3.5 mr-1.5" />
                            Staff Portal
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`transition-all duration-500 w-full z-40 border-b border-gray-100 ${scrolled
                ? 'fixed top-0 bg-white/95 backdrop-blur-xl shadow-lg py-1.5'
                : 'relative bg-white py-3'
                }`}>
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">

                        {/* Logo Area */}
                        <Link to="/" className="flex items-center group shrink-0 mr-6">
                            <div className="relative flex items-center justify-center w-10 h-10 mr-3 bg-primary rounded-lg shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform duration-300">
                                <GraduationCap className="text-white w-6 h-6" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-[20px] font-extrabold text-slate-900 tracking-tight leading-none group-hover:text-primary transition-colors font-display whitespace-nowrap">
                                    RK<span className="text-primary">High</span>School
                                </h1>
                                <span className="text-[9px] font-bold text-slate-500 tracking-[0.25em] uppercase mt-0.5 whitespace-nowrap">
                                    Since 1995
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden xl:flex items-center space-x-1 flex-grow justify-center">
                            {menuItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative group h-16 flex items-center"
                                    onMouseEnter={() => setActiveHover(index)}
                                    onMouseLeave={() => setActiveHover(null)}
                                >
                                    {item.submenu ? (
                                        <>
                                            <button className={`relative px-2.5 py-2 text-[13px] font-bold tracking-wide transition-colors duration-200 flex items-center outline-none whitespace-nowrap ${activeHover === index ? 'text-primary' : 'text-slate-700'
                                                } font-display`}>
                                                {item.title}
                                                <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-300 ${activeHover === index ? 'rotate-180 text-primary' : 'text-slate-400'
                                                    }`} />


                                            </button>

                                            {/* Dropdown Menu */}
                                            <div className="absolute top-[90%] left-1/2 -translate-x-1/2 pt-4 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                                                <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden p-1.5 ring-1 ring-black/5 relative">
                                                    {/* Triangle/Arrow for tooltip effect */}
                                                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-slate-100 transform rotate-45"></div>

                                                    <div className="relative z-10 bg-white">
                                                        {item.submenu.map((sub, subIndex) => (
                                                            <Link
                                                                key={subIndex}
                                                                to={sub.path}
                                                                className="flex items-center px-3 py-2.5 text-[13px] font-semibold text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg transition-all group/item"
                                                            >
                                                                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-50 text-primary/70 mr-3 group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300">
                                                                    {sub.icon}
                                                                </span>
                                                                <div className="flex flex-col">
                                                                    <span className="leading-none whitespace-nowrap">{sub.title}</span>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            to={item.path}
                                            className={`relative px-2.5 py-2 text-[13px] font-bold tracking-wide transition-colors duration-200 whitespace-nowrap ${activeHover === index ? 'text-primary' : 'text-slate-700'
                                                } font-display`}
                                        >
                                            {item.title}

                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center space-x-4 shrink-0 ml-auto">
                            {/* Staff Portal Link - Visible on Desktop */}
                            <Link to="/login" className="hidden xl:flex items-center text-slate-500 hover:text-primary transition-colors font-bold uppercase tracking-wider text-[11px] mr-2">
                                <Briefcase className="w-3.5 h-3.5 mr-1.5" />
                                Staff Portal
                            </Link>

                            <Link
                                to="/admissions/form"
                                className="hidden lg:flex items-center px-5 py-2.5 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white text-[13px] font-bold rounded-full shadow-lg shadow-primary/25 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 font-display tracking-wide whitespace-nowrap"
                            >
                                <span className="mr-2">Apply Now</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            {/* Mobile Menu Button */}
                            <button
                                className="xl:hidden p-2 text-slate-700 hover:text-primary transition-colors focus:outline-none bg-slate-50 rounded-lg"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay & Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="xl:hidden fixed inset-0 bg-slate-900/60 z-40 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="xl:hidden fixed inset-y-0 right-0 z-50 w-[300px] bg-white shadow-2xl overflow-y-auto border-l border-slate-100"
                        >
                            <div className="p-6 flex justify-between items-center border-b border-slate-100 bg-slate-50">
                                <h2 className="text-xl font-black text-slate-800 font-display">Menu</h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="p-4 space-y-1">
                                {menuItems.map((item, index) => (
                                    <div key={index} className="border-b border-slate-50 last:border-none">
                                        {item.submenu ? (
                                            <div className="py-1">
                                                <button
                                                    onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                                                    className={`flex items-center justify-between w-full px-4 py-3.5 text-left font-bold text-[14px] rounded-lg transition-colors ${activeDropdown === index
                                                        ? 'text-primary bg-primary/5'
                                                        : 'text-slate-700 hover:bg-slate-50'
                                                        }`}
                                                >
                                                    {item.title}
                                                    <ChevronDown
                                                        className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === index ? 'rotate-180 text-primary' : 'text-slate-400'
                                                            }`}
                                                    />
                                                </button>

                                                <AnimatePresence>
                                                    {activeDropdown === index && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="overflow-hidden bg-slate-50/50"
                                                        >
                                                            <div className="py-2 px-2 space-y-1">
                                                                {item.submenu.map((sub, subIndex) => (
                                                                    <Link
                                                                        key={subIndex}
                                                                        to={sub.path}
                                                                        className="flex items-center px-4 py-3 text-sm font-medium text-slate-600 hover:text-primary hover:bg-white rounded-lg transition-all"
                                                                    >
                                                                        <span className="text-slate-400 mr-3 opacity-70">
                                                                            {sub.icon}
                                                                        </span>
                                                                        {sub.title}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <Link
                                                to={item.path}
                                                className="block px-4 py-3.5 text-[14px] font-bold text-slate-700 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors"
                                            >
                                                {item.title}
                                            </Link>
                                        )}
                                    </div>
                                ))}

                                <div className="pt-6 mt-4 px-2">
                                    <Link
                                        to="/admissions/form"
                                        className="flex items-center justify-center w-full px-5 py-4 bg-primary text-white text-sm font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors"
                                    >
                                        Apply Online Now
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
