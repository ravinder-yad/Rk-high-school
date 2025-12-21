import React, { useEffect } from 'react';
import SlideSection from '../../components/SlideSection';
import Footer from '../../components/home/Footer';

// Import all arts segments
import {
    ArtsHero,
    ArtsIntro,
    ArtsSubjects,
    HistoryDept,
    PolSciDept,
    GeographyDept,
    SocialScienceDept
} from '../../components/departments/arts/ArtsSegments1';

import {
    ArtsMethodology,
    ArtsCurriculum,
    ArtsAssessmentBoard,
    ArtsFaculty,
    ArtsSkills
} from '../../components/departments/arts/ArtsSegments2';

import {
    ArtsCoCurricular,
    ArtsCareers,
    WhyArtsRK,
    ArtsAdmissionInfo,
    ArtsFinalCTA
} from '../../components/departments/arts/ArtsSegments3';

const Arts = () => {
    // Scroll top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-x-hidden bg-white min-h-screen flex flex-col font-sans">
            <ArtsHero />

            <SlideSection direction="up">
                <ArtsIntro />
            </SlideSection>

            <SlideSection direction="up">
                <ArtsSubjects />
            </SlideSection>

            {/* Department Details */}
            <SlideSection direction="up"><HistoryDept /></SlideSection>
            <SlideSection direction="up"><PolSciDept /></SlideSection>
            <SlideSection direction="up"><GeographyDept /></SlideSection>
            <SlideSection direction="up"><SocialScienceDept /></SlideSection>

            {/* Teaching & Academics */}
            <SlideSection direction="up"><ArtsMethodology /></SlideSection>
            <SlideSection direction="up"><ArtsCurriculum /></SlideSection>
            <SlideSection direction="up"><ArtsAssessmentBoard /></SlideSection>
            <SlideSection direction="up"><ArtsFaculty /></SlideSection>
            <SlideSection direction="left"><ArtsSkills /></SlideSection>

            {/* Extra & Career */}
            <SlideSection direction="up"><ArtsCoCurricular /></SlideSection>
            <SlideSection direction="up"><ArtsCareers /></SlideSection>

            {/* Trust & Closing */}
            <SlideSection direction="up"><WhyArtsRK /></SlideSection>
            <SlideSection direction="up"><ArtsAdmissionInfo /></SlideSection>

            <ArtsFinalCTA />

            <Footer />
        </div>
    );
};

export default Arts;
