import React from 'react';
import { Target, Lightbulb, Trophy, Check, PenTool, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Section 14: Co-Curricular
export const ArtsCoCurricular = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center flex items-center justify-center gap-3">
                    <Lightbulb className="w-8 h-8 text-purple-500" /> Beyond Textbooks
                </h2>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 bg-purple-50 rounded-3xl p-8 border border-purple-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Model United Nations (MUN)</h3>
                        <p className="text-slate-600 mb-4">
                            Our students regularly participate in MUNs, representing nations and debating global issues, fostering diplomacy and leadership.
                        </p>
                    </div>
                    <div className="flex-1 bg-indigo-50 rounded-3xl p-8 border border-indigo-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Debate & Literary Society</h3>
                        <p className="text-slate-600 mb-4">
                            A platform for students to voice their opinions on social, political, and ethical dynamics through extempore and structured debates.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 15 & 16: Career Guidance & Pathways
export const ArtsCareers = () => {
    return (
        <div className="w-full py-20 px-4 bg-slate-50">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Endless Possibilities</h2>
                <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
                    A background in Humanities is the foundation for some of the most influential roles in society.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { title: "Civil Services (UPSC)", icon: "🏛️" },
                        { title: "Law & Judiciary", icon: "⚖️" },
                        { title: "Journalism & Media", icon: "📰" },
                        { title: "Psychology", icon: "🧠" },
                        { title: "International Relations", icon: "🤝" },
                        { title: "Design & Arts", icon: "🎨" },
                        { title: "Content & Writing", icon: "✍️" },
                        { title: "Social Work & NGO", icon: "❤️" },
                    ].map((career, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 transition-transform text-center">
                            <div className="text-4xl mb-3">{career.icon}</div>
                            <h4 className="font-bold text-slate-700">{career.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 17: Why Arts at RK?
export const WhyArtsRK = () => {
    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why Choose Humanities at RK?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        "Focus on Civil Services & Competitive Exams",
                        "Strong Debating & Literary Culture",
                        "Personalized Career Mentorship",
                        "Excellent Board Results in Humanities",
                        "Regular Workshops by Journalists & Lawyers",
                        "Holistic Personality Development"
                    ].map((point, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-purple-50 rounded-2xl border border-purple-100">
                            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center shrink-0">
                                <Check className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-purple-900">{point}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 18 & 19: Admission Info & Achievements
export const ArtsAdmissionInfo = () => {
    return (
        <div className="w-full py-16 px-4 bg-white border-t border-slate-100">
            <div className="container mx-auto max-w-3xl text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Admission Criteria</h3>
                <div className="bg-rose-50 rounded-2xl p-6 border border-rose-200 inline-block text-left">
                    <p className="text-rose-900 font-medium mb-2">For Class 11 Arts Stream:</p>
                    <ul className="list-disc list-inside text-rose-800 space-y-1 text-sm">
                        <li>Minimum <strong>60% aggregate</strong> in Class 10 Pre-Boards/Boards.</li>
                        <li>Review of creative/literary portfolio (optional).</li>
                        <li>Assessment of written communication skills.</li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto text-center mt-12">
                <div className="flex flex-wrap justify-center gap-12">
                    <div>
                        <div className="text-4xl font-bold text-purple-600 mb-1">100%</div>
                        <div className="text-sm text-slate-600 font-bold uppercase tracking-wider">Pass Percentage</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-rose-600 mb-1">Top</div>
                        <div className="text-sm text-slate-600 font-bold uppercase tracking-wider">Debate Winners</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 20: Final CTA
export const ArtsFinalCTA = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full py-24 px-4 bg-gradient-to-r from-purple-600 to-rose-600 text-center text-white">
            <div className="container mx-auto">
                <PenTool className="w-16 h-16 text-white/80 mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                    Explore Meaningful Careers
                </h2>
                <p className="text-purple-100 text-lg mb-10 max-w-2xl mx-auto">
                    Join RK High School's Humanities Department and shape your perspective to change the world.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        onClick={() => navigate('/admissions/form')}
                        className="px-10 py-4 bg-white text-purple-700 font-bold rounded-full text-lg shadow-xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
                    >
                        Apply Now <ArrowRight className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-10 py-4 bg-purple-800/50 border border-white/20 hover:bg-purple-800/70 text-white font-bold rounded-full text-lg transition-all"
                    >
                        Talk to Mentors
                    </button>
                </div>
            </div>
        </div>
    );
};
