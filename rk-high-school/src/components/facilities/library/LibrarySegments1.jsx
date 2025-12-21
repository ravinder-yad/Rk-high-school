import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Monitor, Armchair, BookCopy, Newspaper, GraduationCap, ArrowRight, Library } from 'lucide-react';
import heroImg from '../../../assets/images/gallery/video-thumb-7.jpg';

// Shared PW Card Component
const PWCard = ({ title, desc, icon, color = "indigo", children }) => (
    <div className={`group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-full`}>
        <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110`}></div>
        <div className={`w-14 h-14 bg-${color}-100 rounded-2xl flex items-center justify-center text-${color}-600 mb-6 relative z-10 group-hover:rotate-6 transition-transform`}>
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3 relative z-10 group-hover:text-indigo-600 transition-colors">{title}</h3>
        <p className="text-slate-600 mb-4 relative z-10 leading-relaxed">{desc}</p>

        {children && <div className="relative z-10 mt-4">{children}</div>}

        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
            <ArrowRight className={`w-5 h-5 text-${color}-500`} />
        </div>
    </div>
);

// Section 1: Hero Section
export const LibraryHero = () => {
    return (
        <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900">
            <div className="absolute inset-0">
                <img
                    src={heroImg}
                    alt="School Library"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/40"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 bg-indigo-500/20 backdrop-blur-md rounded-full text-indigo-200 font-bold mb-6 border border-indigo-500/30">
                        Central Library
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        A World of Knowledge <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-slate-200">Under One Roof</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium mb-10">
                        Fostering a culture of reading, research, and lifelong learning in a calm and disciplined environment.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-indigo-500/25">
                            Explore Collection
                        </button>
                        <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/20 backdrop-blur-sm transition-all">
                            Library Rules
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// Section 2: Library Intro
export const LibraryIntro = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-white rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-slate-500 to-indigo-500"></div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Heart of Academics</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        The RK High School Library is more than just a collection of books; it is a <span className="text-indigo-600 font-bold">sanctuary for scholars</span>. We provide a quiet, resource-rich space that supports the curriculum and encourages intellectual curiosity.
                    </p>
                    <div className="flex justify-center gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-indigo-500 rounded-full"></div> Silence</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-slate-500 rounded-full"></div> Knowledge</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Discovery</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 3: Library Overview (Card Wall)
export const LibraryOverview = () => {
    const sections = [
        { title: "Books Collection", icon: <BookCopy className="w-6 h-6" />, color: "indigo", id: "books" },
        { title: "Digital Resources", icon: <Monitor className="w-6 h-6" />, color: "blue", id: "digital" },
        { title: "Reading Area", icon: <Armchair className="w-6 h-6" />, color: "slate", id: "reading" },
        { title: "Reference Section", icon: <Library className="w-6 h-6" />, color: "emerald", id: "reference" },
    ];

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="w-full py-12 px-4 bg-slate-50">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {sections.map((sec, idx) => (
                        <div
                            key={idx}
                            onClick={() => scrollToSection(sec.id)}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-300 cursor-pointer flex flex-col items-center justify-center gap-3 transition-all hover:-translate-y-1 group"
                        >
                            <div className={`w-12 h-12 bg-${sec.color}-50 rounded-full flex items-center justify-center text-${sec.color}-600 group-hover:scale-110 transition-transform`}>
                                {sec.icon}
                            </div>
                            <span className="font-bold text-slate-700">{sec.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 4: Book Collection
export const BookCollection = () => {
    return (
        <div id="books" className="w-full py-20 px-4 bg-white scroll-mt-20">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-2 block">Vast Repository</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Carefully Curated Books</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            Our shelves are stocked with a diverse range of 15,000+ titles, catering to every grade level and subject interest.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {['Academic Textbooks', 'Fiction & Storybooks', 'Biographies', 'Encyclopedias'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600"><BookCopy className="w-3 h-3" /></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 w-full grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                            <div className="text-3xl font-bold text-indigo-600 mb-2">15k+</div>
                            <div className="text-sm text-slate-500">Total Books</div>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                            <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
                            <div className="text-sm text-slate-500">New Additions/Year</div>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center col-span-2">
                            <div className="text-xl font-bold text-slate-700 mb-1">Diverse Genres</div>
                            <div className="text-sm text-slate-500">Sci-Fi, History, Literature & More</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 5: Magazines & Newspapers
export const MagazinesSection = () => {
    return (
        <div className="w-full py-16 px-4 bg-slate-50">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Current Affairs & Periodicals</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <PWCard title="Daily Newspapers" desc="Subscriptions to top national and local dailies to keep students updated." icon={<Newspaper className="w-6 h-6" />} color="slate" />
                    <PWCard title="Educational Magazines" desc="Monthly journals on Science, GK, and Literature." icon={<BookOpen className="w-6 h-6" />} color="indigo" />
                    <PWCard title="Research Journals" desc="Subject-specific periodicals for senior secondary students." icon={<GraduationCap className="w-6 h-6" />} color="blue" />
                </div>
            </div>
        </div>
    );
};

// Section 6: Digital Library
export const DigitalLibrary = () => {
    return (
        <div id="digital" className="w-full py-20 px-4 bg-slate-900 text-white scroll-mt-20">
            <div className="container mx-auto max-w-4xl text-center">
                <Monitor className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Digital Learning Resources</h2>
                <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                    We integrate technology with tradition. Our library offers access to a wealth of digital content for modern learners.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                    {['E-Book Repository', 'Online Logic Games', 'Subject Video Lectures'].map((item, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <h4 className="font-bold text-indigo-300 mb-2">{item}</h4>
                            <p className="text-sm text-slate-400">Available on School Intranet</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 7: Class-wise Resources
export const ClassResources = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Resources for Every Age</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="border border-slate-100 p-8 rounded-3xl bg-slate-50">
                        <h3 className="text-xl font-bold text-slate-800 mb-4">Primary Section</h3>
                        <p className="text-slate-600 text-sm mb-4">Colorful storybooks, pop-up books, and beginner non-fiction to spark imagination.</p>
                        <div className="flex gap-2 text-xs font-bold text-indigo-600">
                            <span className="bg-indigo-100 px-3 py-1 rounded-full">Storytelling</span>
                            <span className="bg-indigo-100 px-3 py-1 rounded-full">Picture Books</span>
                        </div>
                    </div>
                    <div className="border border-slate-100 p-8 rounded-3xl bg-white shadow-lg relative transform md:-translate-y-4">
                        <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-3xl">Most Popular</div>
                        <h3 className="text-xl font-bold text-slate-800 mb-4">Middle School</h3>
                        <p className="text-slate-600 text-sm mb-4">Mystery novels, young adult fiction, and science encyclopedias to build reading habits.</p>
                        <div className="flex gap-2 text-xs font-bold text-indigo-600">
                            <span className="bg-indigo-100 px-3 py-1 rounded-full">Fiction</span>
                            <span className="bg-indigo-100 px-3 py-1 rounded-full">Biographies</span>
                        </div>
                    </div>
                    <div className="border border-slate-100 p-8 rounded-3xl bg-slate-50">
                        <h3 className="text-xl font-bold text-slate-800 mb-4">Senior Secondary</h3>
                        <p className="text-slate-600 text-sm mb-4">Reference guides, competitive exam prep books, and research journals.</p>
                        <div className="flex gap-2 text-xs font-bold text-indigo-600">
                            <span className="bg-indigo-100 px-3 py-1 rounded-full">JEE/NEET</span>
                            <span className="bg-indigo-100 px-3 py-1 rounded-full">Guides</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
