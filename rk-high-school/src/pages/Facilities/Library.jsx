import React, { useEffect } from 'react';
import SlideSection from '../../components/SlideSection';
import Footer from '../../components/home/Footer';

// Import all library segments
import {
    LibraryHero,
    LibraryIntro,
    LibraryOverview,
    BookCollection,
    MagazinesSection,
    DigitalLibrary,
    ClassResources
} from '../../components/facilities/library/LibrarySegments1';

import {
    ReadingHabits,
    ReadingEnvironment,
    LibraryStaff,
    LibraryTimings,
    LibraryRules,
    IssueProcess,
    LibraryMembership
} from '../../components/facilities/library/LibrarySegments2';

import {
    ResearchSupport,
    LibraryEvents,
    WhyOurLibrary,
    LibraryGallery,
    LibraryFinalCTA
} from '../../components/facilities/library/LibrarySegments3';

const Library = () => {
    // Scroll top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-x-hidden bg-white min-h-screen flex flex-col font-sans">
            <LibraryHero />

            <SlideSection direction="up">
                <LibraryIntro />
            </SlideSection>

            <SlideSection direction="up">
                <LibraryOverview />
            </SlideSection>

            {/* Collections */}
            <SlideSection direction="up"><BookCollection /></SlideSection>
            <SlideSection direction="up"><MagazinesSection /></SlideSection>
            <SlideSection direction="up"><DigitalLibrary /></SlideSection>
            <SlideSection direction="up"><ClassResources /></SlideSection>

            {/* Environment & Rules */}
            <SlideSection direction="left"><ReadingHabits /></SlideSection>
            <SlideSection direction="up"><ReadingEnvironment /></SlideSection>
            <SlideSection direction="up"><LibraryStaff /></SlideSection>
            <SlideSection direction="up"><LibraryTimings /></SlideSection>
            <SlideSection direction="up"><LibraryRules /></SlideSection>
            <SlideSection direction="up"><IssueProcess /></SlideSection>
            <SlideSection direction="up"><LibraryMembership /></SlideSection>

            {/* Support & Activities */}
            <SlideSection direction="up"><ResearchSupport /></SlideSection>
            <SlideSection direction="up"><LibraryEvents /></SlideSection>
            <SlideSection direction="up"><WhyOurLibrary /></SlideSection>
            <SlideSection direction="up"><LibraryGallery /></SlideSection>

            <LibraryFinalCTA />

            <Footer />
        </div>
    );
};

export default Library;
