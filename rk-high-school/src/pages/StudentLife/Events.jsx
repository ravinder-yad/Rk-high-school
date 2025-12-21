import React, { useEffect } from 'react';
import SlideSection from '../../components/SlideSection';
import Footer from '../../components/home/Footer';

// Import all segments
import {
    EventsHero,
    EventsIntro,
    EventsOverview,
    MajorEvents
} from '../../components/student-life/events/EventsSegments1';

import {
    NationalDays,
    SpecialEvents
} from '../../components/student-life/events/EventsSegments2';

import {
    EventCommunity,
    EventAchievements,
    EventGallery,
    EventsCTA
} from '../../components/student-life/events/EventsSegments3';

const Events = () => {
    // Scroll top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-x-hidden bg-white min-h-screen flex flex-col font-sans">
            <EventsHero />

            <SlideSection direction="up">
                <EventsIntro />
            </SlideSection>

            <SlideSection direction="up">
                <EventsOverview />
            </SlideSection>

            {/* Major Events */}
            <SlideSection direction="up"><MajorEvents /></SlideSection>

            {/* Festivals & Special Days */}
            <SlideSection direction="up"><NationalDays /></SlideSection>
            <SlideSection direction="up"><SpecialEvents /></SlideSection>

            {/* Community & End */}
            <SlideSection direction="up"><EventCommunity /></SlideSection>
            <SlideSection direction="up"><EventAchievements /></SlideSection>
            <SlideSection direction="up"><EventGallery /></SlideSection>

            <EventsCTA />

            <Footer />
        </div>
    );
};

export default Events;
