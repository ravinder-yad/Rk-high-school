import React from 'react';
import img1 from '../../../assets/images/home/teacher1.jpg';
import { User, Shield, Briefcase, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ManagementCard = ({ name, role, img, icon, link }) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => link && navigate(link)}
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
            <div className="h-48 bg-gray-200 relative overflow-hidden">
                <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow-md text-primary">
                {icon}
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-primary transition-colors">{name}</h3>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{role}</p>
            </div>
        </div>
    );
};

export const CoreTeamGrid = () => (
    <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Core Management Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <ManagementCard
                    name="Mr. Amit Singh"
                    role="Vice Principal"
                    img={img1}
                    icon={<User className="w-5 h-5" />}
                />
                <ManagementCard
                    name="Mrs. Rina Roy"
                    role="Academic Coordinator"
                    img={img1}
                    icon={<BookOpen className="w-5 h-5" />}
                />
                <ManagementCard
                    name="Mr. K. Sharma"
                    role="Admin Head"
                    img={img1}
                    icon={<Shield className="w-5 h-5" />}
                />
                <ManagementCard
                    name="Ms. Priya D."
                    role="Finance Officer"
                    img={img1}
                    icon={<Briefcase className="w-5 h-5" />}
                />
            </div>
        </div>
    </section>
);

export const AdvisoryBoard = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Advisory Board</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-gray-50 border border-gray-100 p-6 rounded-xl min-w-[280px] text-center hover:bg-blue-50 transition-colors">
                        <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                            <img src={img1} alt="Advisor" className="w-full h-full object-cover" />
                        </div>
                        <h4 className="font-bold text-lg text-slate-800">Dr. S. K. Rao</h4>
                        <p className="text-gray-500 text-sm">Ex-Education Minister</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export const AcademicLeadership = () => (
    <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Academic Leadership</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {['Science Dept Head', 'Commerce Dept Head', 'Arts Dept Head'].map((role, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-secondary">
                        <h3 className="font-bold text-lg text-slate-800 mb-1">{role}</h3>
                        <p className="text-gray-500">Leading Excellence</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export const AdminTeam = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Administrative Pillars</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {['Transport Manager', 'Estate Manager', 'HR Manager', 'IT Head'].map((role, i) => (
                    <div key={i} className="flex items-center p-4 bg-gray-50 rounded-lg border hover:border-primary transition-colors cursor-default">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-primary font-bold mr-3">{role[0]}</div>
                        <div>
                            <h4 className="font-bold text-sm text-slate-700">{role}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export const ManagementPhilosophy = () => (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-serif italic mb-6">"Governance with Empathy"</h2>
                <p className="text-xl font-light text-gray-300">
                    We believe that true management is not about commanding, but about serving. Serving the students, the parents, and the teachers to create an ecosystem of growth.
                </p>
            </div>
        </div>
    </section>
);
