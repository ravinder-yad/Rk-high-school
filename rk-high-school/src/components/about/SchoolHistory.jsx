import React from 'react';

const SchoolHistory = () => {
    const milestones = [
        { year: '2005', title: 'Foundation Stone', desc: 'RK High School was established with a vision to provide quality education to the local community.' },
        { year: '2010', title: 'First Expansion', desc: 'Added a new wing for Senior Secondary classes and inaugurated the Science Block.' },
        { year: '2015', title: 'Decade of Excellence', desc: 'Celebrated 10 years with over 1500 students and 100% board results.' },
        { year: '2020', title: 'Digital Transformation', desc: 'Implemented Smart Classes and online learning platforms for all grades.' },
        { year: '2023', title: 'Awards & Recognition', desc: 'Awarded "Best School in the District" for holistic development and infrastructure.' },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm">Our Journey</span>
                    <h2 className="text-4xl font-bold text-textDark mt-2">Milestones of Success</h2>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 border-l-2 border-dashed border-primary/30"></div>

                    {milestones.map((item, index) => (
                        <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-secondary rounded-full flex items-center justify-center z-10 shadow-lg"></div>

                            {/* Content Card */}
                            <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                    <span className="inline-block px-3 py-1 bg-blue-50 text-primary font-bold rounded-lg mb-2 text-sm">{item.year}</span>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SchoolHistory;
