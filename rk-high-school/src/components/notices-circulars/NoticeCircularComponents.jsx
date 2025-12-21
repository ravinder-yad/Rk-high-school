import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Bell, FileText, Calendar, Download, Search, AlertCircle,
    CheckCircle2, Clock, Filter, ArrowRight, Shield, Pin
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- Shared Components ---

export const NC_Hero = ({ title, subtitle, theme = "indigo" }) => {
    const bgGradient = theme === "indigo"
        ? "from-indigo-600 to-purple-600"
        : "from-slate-700 to-slate-900";

    return (
        <div className={`relative w-full h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-950`}>
            <div className={`absolute inset-0 bg-gradient-to-r ${bgGradient} opacity-90`}></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 font-bold mb-6 border border-white/20">
                        {theme === 'indigo' ? <Bell className="w-4 h-4 inline-block mr-2" /> : <FileText className="w-4 h-4 inline-block mr-2" />}
                        Official Communication
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium">
                        {subtitle}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export const NC_Intro = ({ text, highlight }) => {
    return (
        <div className="w-full py-12 px-4 bg-white -mt-8 relative z-20">
            <div className="container mx-auto">
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-slate-200 text-center max-w-3xl mx-auto flex items-center justify-center gap-4">
                    <AlertCircle className="w-8 h-8 text-indigo-500 flex-shrink-0" />
                    <p className="text-slate-700 font-medium">
                        {text} <span className="text-indigo-600 font-bold">{highlight}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export const NC_CTA = ({ title, btnText, link }) => {
    const navigate = useNavigate();
    return (
        <div className="w-full py-16 px-4 bg-slate-50 border-t border-slate-200 text-center">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{title}</h2>
                <button
                    onClick={() => navigate(link)}
                    className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full shadow-lg transition-all flex items-center justify-center gap-2 mx-auto"
                >
                    {btnText} <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

// --- NOTICE BOARD SPECIFIC ---

const notices = [
    { id: 1, title: "Half Yearly Examination Schedule", date: "Today", category: "Examination", important: true, new: true, text: "Exams will begin from 10th October for Classes 6–12. Please download the date sheet." },
    { id: 2, title: "Winter Uniform Guidelines", date: "Yesterday", category: "Academic", important: false, new: true, text: "Students must wear the full winter uniform starting Nov 1st." },
    { id: 3, title: "Diwali Holidays Announcement", date: "20 Oct", category: "Holidays", important: true, new: false, text: "School will remain closed from Oct 24th to Oct 28th." },
    { id: 4, title: "Annual Sports Day Registration", date: "18 Oct", category: "Events", important: false, new: false, text: "Interested students can register with their PET." },
    { id: 5, title: "Science Olympiad Results", date: "15 Oct", category: "Academic", important: false, new: false, text: "Results for the SOF Olympiad are now out." },
    { id: 6, title: "Pre-Primary Admission Open", date: "10 Oct", category: "Admissions", important: true, new: false, text: "Forms available for Nursery & KG." },
];

export const NoticeBoardBody = () => {
    const [filter, setFilter] = useState("All");
    const categories = ["All", "Academic", "Examination", "Events", "Holidays", "Admissions"];

    const filteredNotices = filter === "All" ? notices : notices.filter(n => n.category === filter);
    const highlightNotice = notices.find(n => n.important && n.new);

    return (
        <div className="w-full pb-20 px-4 bg-slate-50">
            <div className="container mx-auto max-w-5xl space-y-12">

                {/* 3. Highlight Notice */}
                {highlightNotice && (
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-8 relative overflow-hidden shadow-sm">
                        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">NEW UPDATE</div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 flex-shrink-0">
                                <Bell className="w-6 h-6 animate-pulse" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{highlightNotice.title}</h3>
                                <p className="text-slate-700 mb-4">{highlightNotice.text}</p>
                                <button className="text-indigo-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                    Read Full Notice <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* 4. Filter Bar */}
                <div className="flex flex-wrap gap-2 items-center justify-center">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-bold transition-all border ${filter === cat
                                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                                    : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* 5-11. Sectioned / Today's Notices - Visually mixed into the list for cleaner UI */}
                {/* 12. Notice List */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-indigo-500" /> Latest Notices
                    </h3>
                    <div className="grid gap-4">
                        {filteredNotices.map((notice) => (
                            <motion.div
                                layout
                                key={notice.id}
                                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all group cursor-pointer flex flex-col md:flex-row items-start md:items-center gap-4"
                            >
                                <div className="flex-shrink-0 w-full md:w-24 bg-slate-50 rounded-xl p-2 text-center border border-slate-100">
                                    <span className="block text-xs font-bold text-slate-400 uppercase">DATE</span>
                                    <span className="block text-sm font-bold text-slate-700">{notice.date}</span>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center gap-2 mb-1">
                                        {notice.new && <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full">NEW</span>}
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${notice.category === 'Examination' ? 'bg-purple-100 text-purple-600' :
                                                notice.category === 'Holidays' ? 'bg-green-100 text-green-600' :
                                                    'bg-blue-100 text-blue-600'
                                            }`}>{notice.category}</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{notice.title}</h4>
                                    <p className="text-slate-500 text-sm line-clamp-1">{notice.text}</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <button className="p-3 bg-slate-50 rounded-full text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-500 transition-colors">
                                        <Download className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 17. Instructions Card */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 flex gap-4 items-start">
                    <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-yellow-800 mb-1">Important Instruction</h4>
                        <p className="text-yellow-700 text-sm">
                            Parents are requested to check the Notice Board daily. For urgent matters, an SMS is also sent to the registered mobile number.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};


// --- CIRCULARS SPECIFIC ---

const circulars = [
    { id: "CIR-103", date: "20 Oct 2024", title: "Fee Payment Schedule - Q3", category: "Fee", size: "1.2 MB" },
    { id: "CIR-102", date: "15 Oct 2024", title: "Revised Bus Routes (Route 5 & 8)", category: "Transport", size: "800 KB" },
    { id: "CIR-101", date: "10 Oct 2024", title: "Winter Uniform Policy 2024", category: "Admin", size: "2.5 MB" },
    { id: "CIR-099", date: "05 Oct 2024", title: "Parent Teacher Meeting Guidelines", category: "Academic", size: "1.0 MB" },
    { id: "CIR-098", date: "01 Oct 2024", title: "Cyber Safety Workshop for Parents", category: "Academic", size: "500 KB" },
    { id: "CIR-097", date: "28 Sep 2024", title: "School Timing Change (Winter)", category: "Admin", size: "150 KB" },
];

export const CircularsBody = () => {
    const [filter, setFilter] = useState("All");
    const categories = ["All", "Academic", "Fee", "Transport", "Admin"];

    const filteredCirculars = filter === "All" ? circulars : circulars.filter(c => c.category === filter);

    return (
        <div className="w-full pb-20 px-4 bg-slate-50">
            <div className="container mx-auto max-w-6xl space-y-16">

                {/* 3. Highlight Circular */}
                <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/3 aspect-[3/4] bg-slate-100 rounded-xl border border-slate-200 relative p-4 flex flex-col items-center justify-center text-slate-400">
                        <FileText className="w-16 h-16 mb-2 opacity-50" />
                        <span className="text-xs uppercase font-bold tracking-widest">Preview</span>
                        <div className="absolute top-2 right-2 bg-indigo-500 text-white text-[10px] font-bold px-2 py-1 rounded">LATEST</div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <span className="text-indigo-500 font-bold tracking-widest uppercase text-xs mb-2 block">Circular No. {circulars[0].id}</span>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">{circulars[0].title}</h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Please download and read the detailed guidelines regarding the upcoming fee submission deadlines and accepted payment modes.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl flex items-center gap-2 hover:bg-indigo-500 transition-colors shadow-lg">
                                <Download className="w-5 h-5" /> Download PDF
                            </button>
                            <button className="px-6 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors">
                                View Online
                            </button>
                        </div>
                    </div>
                </div>

                {/* 4. Filter & 10. Matrix */}
                <div>
                    <div className="flex flex-wrap gap-2 items-center justify-between mb-8">
                        <h3 className="text-2xl font-bold text-slate-900">Archive & Downloads</h3>
                        <div className="flex gap-2">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${filter === cat
                                            ? 'bg-slate-800 text-white'
                                            : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCirculars.map((circ) => (
                            <div key={circ.id} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">{circ.id}</span>
                                </div>
                                <h4 className="font-bold text-slate-900 mb-2 h-14 line-clamp-2">{circ.title}</h4>
                                <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {circ.date}</span>
                                    <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> {circ.category}</span>
                                </div>
                                <button className="w-full py-2 border border-slate-200 rounded-lg text-slate-600 font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all">
                                    <Download className="w-4 h-4" /> Download ({circ.size})
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 18. Authority */}
                <div className="flex justify-end mt-12">
                    <div className="text-right">
                        <div className="text-slate-400 font-cursive text-2xl mb-2">Principal</div>
                        <div className="text-xs font-bold text-slate-900 uppercase tracking-widest border-t border-slate-200 pt-2">Authorized Signatory</div>
                    </div>
                </div>

            </div>
        </div>
    );
};
