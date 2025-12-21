import React, { useEffect } from 'react';
import SlideSection from '../../components/SlideSection';
import Footer from '../../components/home/Footer';

// Import all segments
import {
    ClubsHero,
    ClubsIntro,
    ClubsOverview,
    AcademicArtsClubs
} from '../../components/student-life/clubs/ClubsSegments1';

import {
    PerformanceClubs,
    InterestClubs
} from '../../components/student-life/clubs/ClubsSegments2';

import {
    ClubLeadership,
    ClubAchievements,
    ClubGallery,
    ClubsCTA
} from '../../components/student-life/clubs/ClubsSegments3';

const Clubs = () => {
    // Scroll top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-x-hidden bg-white min-h-screen flex flex-col font-sans">
            <ClubsHero />

            <SlideSection direction="up">
                <ClubsIntro />
            </SlideSection>

            <SlideSection direction="up">
                <ClubsOverview />
            </SlideSection>

            {/* Core Clubs */}
            <SlideSection direction="up"><AcademicArtsClubs /></SlideSection>

            {/* Special & Performance */}
            <SlideSection direction="up"><PerformanceClubs /></SlideSection>
            <SlideSection direction="up"><InterestClubs /></SlideSection>

            {/* Leadership & End */}
            <SlideSection direction="up"><ClubLeadership /></SlideSection>
            <SlideSection direction="up"><ClubAchievements /></SlideSection>
            <SlideSection direction="up"><ClubGallery /></SlideSection>

            <ClubsCTA />

            <Footer />
        </div>
    );
};

export default Clubs;
