import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, BookOpen, GraduationCap } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
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
        { title: 'Home', path: '/' },
        {
            title: 'About Us',
            submenu: [
                { title: 'About School', path: '/about/school' },
                { title: 'Vision & Mission', path: '/about/vision' },
                { title: 'Principal\'s Message', path: '/about/principal' },
                { title: 'Management Team', path: '/about/management' },
            ]
        },
        {
            title: 'Academics',
            submenu: [
                { title: 'Pre-Primary', path: '/academics/pre-primary' },
                { title: 'Primary School', path: '/academics/primary' },
                { title: 'Middle School', path: '/academics/middle' },
                { title: 'Senior Secondary', path: '/academics/senior-secondary' },
            ]
        },
        {
            title: 'Admissions',
            submenu: [
                { title: 'Admission Process', path: '/admissions/process' },
                { title: 'Eligibility Criteria', path: '/admissions/criteria' },
                { title: 'Fee Structure', path: '/admissions/fee-structure' },
                { title: 'Online Admission Form', path: '/admissions/form' },
            ]
        },
        {
            title: 'Departments',
            submenu: [
                { title: 'Science Department', path: '/departments/science' },
                { title: 'Commerce Department', path: '/departments/commerce' },
                { title: 'Arts Department', path: '/departments/arts' },
            ]
        },
        {
            title: 'Facilities',
            submenu: [
                { title: 'Library', path: '/facilities/library' },
                { title: 'Computer Lab', path: '/facilities/computer-lab' },
                { title: 'Science Lab', path: '/facilities/science-lab' },
                { title: 'Sports Facilities', path: '/facilities/sports' },
            ]
        },
        {
            title: 'Student Life',
            submenu: [
                { title: 'Student Activities', path: '/student-life/activities' },
                { title: 'Clubs & Societies', path: '/student-life/clubs' },
                { title: 'School Events', path: '/student-life/events' },
            ]
        },
        {
            title: 'Gallery',
            submenu: [
                { title: 'Photo Gallery', path: '/gallery/photos' },
                { title: 'Video Gallery', path: '/gallery/videos' },
            ]
        },
        {
            title: 'Notices',
            submenu: [
                { title: 'Notice Board', path: '/notices/board' },
                { title: 'Circulars', path: '/notices/circulars' },
            ]
        },
        { title: 'Contact Us', path: '/contact' },
    ];

    const handleDropdownToggle = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    return (
        <nav
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white shadow-lg py-2'
                : 'bg-white shadow-md py-4'
                }`}
        >
            <div className="container mx-auto px-4 lg:px-6">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="relative w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-105">
                            <BookOpen className="text-white w-6 h-6 md:w-7 md:h-7" />
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-white"></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg md:text-xl font-bold text-primary leading-tight">RK High School</span>
                            <span className="text-xs md:text-sm text-gray-500 font-medium tracking-wide">Excellence in Education</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden xl:flex items-center space-x-1">
                        {menuItems.map((item, index) => (
                            item.submenu ? (
                                <div key={index} className="relative group px-2">
                                    <button className="flex items-center text-gray-700 hover:text-primary font-medium transition-colors py-2">
                                        {item.title}
                                        <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                                    </button>

                                    {/* Desktop Dropdown */}
                                    <div className="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 border-t-4 border-secondary">
                                        <div className="py-2">
                                            {item.submenu.map((sub, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    to={sub.path}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                                >
                                                    {sub.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className="px-3 py-2 text-gray-700 hover:text-primary font-medium transition-colors"
                                >
                                    {item.title}
                                </Link>
                            )
                        ))}
                    </div>

                    {/* Right Section: CTA & Mobile Toggle */}
                    <div className="flex items-center space-x-4">
                        <Link
                            to="/admissions/form"
                            className="hidden md:flex items-center px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full shadow-md hover:bg-blue-800 transition-all hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            <GraduationCap className="w-4 h-4 mr-2" />
                            Admission Open
                        </Link>

                        <button
                            className="xl:hidden p-2 text-gray-700 hover:text-primary transition-colors focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`xl:hidden fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                style={{ top: '70px' }} // Approx navbar height
            >
                <div className="h-full overflow-y-auto pb-20 px-4 pt-4">
                    {menuItems.map((item, index) => (
                        <div key={index} className="border-b border-gray-100 last:border-none">
                            {item.submenu ? (
                                <div>
                                    <button
                                        onClick={() => handleDropdownToggle(index)}
                                        className="flex items-center justify-between w-full py-4 text-left text-gray-800 font-medium"
                                    >
                                        {item.title}
                                        <ChevronDown
                                            className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180 text-primary' : 'text-gray-400'
                                                }`}
                                        />
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 bg-gray-50 rounded-lg ${activeDropdown === index ? 'max-h-96' : 'max-h-0'
                                            }`}
                                    >
                                        {item.submenu.map((sub, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                to={sub.path}
                                                className="block px-5 py-3 text-sm text-gray-600 hover:text-primary border-l-4 border-transparent hover:border-secondary hover:bg-gray-100"
                                            >
                                                {sub.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    to={item.path}
                                    className="block py-4 text-gray-800 font-medium hover:text-primary transition-colors"
                                >
                                    {item.title}
                                </Link>
                            )}
                        </div>
                    ))}
                    <div className="mt-6 space-y-3">
                        <Link
                            to="/admissions/form"
                            className="flex items-center justify-center w-full px-5 py-3 bg-primary text-white text-base font-semibold rounded-lg shadow-md"
                        >
                            <GraduationCap className="w-5 h-5 mr-2" />
                            Apply for Admission
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
