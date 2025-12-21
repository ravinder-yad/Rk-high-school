import React, { useEffect } from 'react';
import Footer from '../../components/home/Footer';
import { NC_Hero, NC_Intro, CircularsBody, NC_CTA } from '../../components/notices-circulars/NoticeCircularComponents';
import SlideSection from '../../components/SlideSection';

const Circulars = () => {
    // Scroll top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-x-hidden bg-white min-h-screen flex flex-col font-sans">
            <NC_Hero
                title="School Circulars"
                subtitle="Repository of official documents, policies, and administrative communications."
                theme="slate"
            />

            <SlideSection direction="up">
                <NC_Intro
                    text="All official policies & circulars are published here for"
                    highlight="record and compliance."
                />
            </SlideSection>

            <CircularsBody />

            <NC_CTA
                title="Looking for an older circular?"
                btnText="Contact Admin Dept"
                link="/contact"
            />

            <Footer />
        </div>
    );
};

export default Circulars;
