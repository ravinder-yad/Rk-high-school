import React from 'react';

import PWStyleCard from '../PWStyleCard';

const QuickActions = () => {
    return (
        <div className="relative -mt-20 z-30 container mx-auto px-4 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <PWStyleCard
                    title="Apply for Admission"
                    desc="Start your journey with us. Applications open for 2025."
                    link="/admissions/form"
                />

                <PWStyleCard
                    title="Academic Programs"
                    desc="Explore structured learning from Pre-Primary to Senior Secondary."
                    link="/academics/primary"
                />

                <PWStyleCard
                    title="Smart Facilities"
                    desc="World-class infrastructure with modern labs and digital classrooms."
                    link="/facilities/computer-lab"
                />

                <PWStyleCard
                    title="Contact School"
                    desc="Have questions? We are here to help you anytime."
                    link="/contact"
                />

            </div>
        </div>
    );
};

export default QuickActions;
