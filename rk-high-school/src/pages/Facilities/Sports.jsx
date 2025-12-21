import React, { useEffect } from 'react';
import SlideSection from '../../components/SlideSection';
import Footer from '../../components/home/Footer';

// Import all segments
import {
    SportsHero,
    SportsIntro,
    SportsOverview,
    SportsFacilitiesList,
    SportsEquipment
} from '../../components/facilities/sports/SportsSegments1';

import {
    CoachingStaff,
    YogaCurriculum,
    SportsEvents,
    SportsAchievements
} from '../../components/facilities/sports/SportsSegments2';

import {
    SportsSafetyValues,
    SportsDetails,
    SportsGallery,
    SportsFinalCTA
} from '../../components/facilities/sports/SportsSegments3';

const Sports = () => {
    // Scroll top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-x-hidden bg-white min-h-screen flex flex-col font-sans">
            <SportsHero />

            <SlideSection direction="up">
                <SportsIntro />
            </SlideSection>

            <SlideSection direction="up">
                <SportsOverview />
            </SlideSection>

            {/* Facilities & Equipment */}
            <SlideSection direction="up"><SportsFacilitiesList /></SlideSection>
            <SlideSection direction="up"><SportsEquipment /></SlideSection>

            {/* Coaching & Activities */}
            <SlideSection direction="up"><CoachingStaff /></SlideSection>
            <SlideSection direction="up"><YogaCurriculum /></SlideSection>
            <SlideSection direction="up"><SportsEvents /></SlideSection>
            <SlideSection direction="up"><SportsAchievements /></SlideSection>

            {/* Values & End */}
            <SlideSection direction="up"><SportsSafetyValues /></SlideSection>
            <SlideSection direction="up"><SportsDetails /></SlideSection>
            <SlideSection direction="up"><SportsGallery /></SlideSection>

            <SportsFinalCTA />

            <Footer />
        </div>
    );
};

export default Sports;
