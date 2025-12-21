import React, { useEffect } from 'react';
import Footer from '../../components/home/Footer';
import { NC_Hero, NC_Intro, NoticeBoardBody, NC_CTA } from '../../components/notices-circulars/NoticeCircularComponents';
import SlideSection from '../../components/SlideSection';

const NoticeBoard = () => {
    // Scroll top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-x-hidden bg-white min-h-screen flex flex-col font-sans">
            <NC_Hero
                title="Notice Board"
                subtitle="Stay updated with the latest announcements, schedules, and important information from the school administration."
                theme="indigo"
            />

            <SlideSection direction="up">
                <NC_Intro
                    text="Please check this section regularly for"
                    highlight="daily updates & urgent announcements."
                />
            </SlideSection>

            <NoticeBoardBody />

            <NC_CTA
                title="Need clarification on a notice?"
                btnText="Contact School Office"
                link="/contact"
            />

            <Footer />
        </div>
    );
};

export default NoticeBoard;
