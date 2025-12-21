import React, { useEffect } from 'react';
import SlideSection from '../../components/SlideSection';
import Footer from '../../components/home/Footer';

// Import all segments
import {
    ActivitiesHero,
    ActivitiesIntro,
    ActivitiesOverview,
    ActivityCategories
} from '../../components/student-life/activities/ActivitiesSegments1';

import {
    CulturalActivities,
    LiteraryTech,
    LeadershipSocial
} from '../../components/student-life/activities/ActivitiesSegments2';

import {
    OutdoorCelebrations,
    ActivityBenefits,
    ActivityGallery,
    ActivitiesCTA
} from '../../components/student-life/activities/ActivitiesSegments3';

const Activities = () => {
    // Scroll top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-x-hidden bg-white min-h-screen flex flex-col font-sans">
            <ActivitiesHero />

            <SlideSection direction="up">
                <ActivitiesIntro />
            </SlideSection>

            <SlideSection direction="up">
                <ActivitiesOverview />
            </SlideSection>

            {/* Categories */}
            <SlideSection direction="up"><ActivityCategories /></SlideSection>

            {/* Cultural & Tech */}
            <SlideSection direction="up"><CulturalActivities /></SlideSection>
            <SlideSection direction="up"><LiteraryTech /></SlideSection>
            <SlideSection direction="up"><LeadershipSocial /></SlideSection>

            {/* Outdoor & End */}
            <SlideSection direction="up"><OutdoorCelebrations /></SlideSection>
            <SlideSection direction="up"><ActivityBenefits /></SlideSection>
            <SlideSection direction="up"><ActivityGallery /></SlideSection>

            <ActivitiesCTA />

            <Footer />
        </div>
    );
};

export default Activities;
