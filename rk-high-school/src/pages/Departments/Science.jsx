import React, { useEffect } from 'react';
import SlideSection from '../../components/SlideSection';
import Footer from '../../components/home/Footer';

// Import all science segments
import {
    ScienceHero,
    ScienceIntro,
    ScienceStreams,
    PhysicsDept,
    ChemistryDept,
    BiologyDept,
    MathSupport
} from '../../components/departments/science/ScienceSegments1';

import {
    TeachingMethodology,
    LabFacilities,
    PracticalApproach,
    ScienceFaculty,
    ScienceCurriculum,
    AssessmentBoardPrep
} from '../../components/departments/science/ScienceSegments2';

import {
    CompetitiveFoundation,
    ScienceProjects,
    CareerPathways,
    WhyScienceRK,
    ScienceAdmissionInfo,
    ScienceFinalCTA
} from '../../components/departments/science/ScienceSegments3';

const Science = () => {
    // Scroll top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-x-hidden bg-white min-h-screen flex flex-col font-sans">
            <ScienceHero />

            <SlideSection direction="up">
                <ScienceIntro />
            </SlideSection>

            <SlideSection direction="up">
                <ScienceStreams />
            </SlideSection>

            {/* Department Details */}
            <SlideSection direction="up"><PhysicsDept /></SlideSection>
            <SlideSection direction="up"><ChemistryDept /></SlideSection>
            <SlideSection direction="up"><BiologyDept /></SlideSection>
            <SlideSection direction="up"><MathSupport /></SlideSection>

            {/* Methods & Labs */}
            <SlideSection direction="up"><TeachingMethodology /></SlideSection>
            <SlideSection direction="left"><LabFacilities /></SlideSection>
            <SlideSection direction="up"><PracticalApproach /></SlideSection>

            {/* Academics */}
            <SlideSection direction="up"><ScienceFaculty /></SlideSection>
            <SlideSection direction="up"><ScienceCurriculum /></SlideSection>
            <SlideSection direction="up"><AssessmentBoardPrep /></SlideSection>

            {/* Future & Career */}
            <SlideSection direction="up"><CompetitiveFoundation /></SlideSection>
            <SlideSection direction="up"><ScienceProjects /></SlideSection>
            <SlideSection direction="up"><CareerPathways /></SlideSection>

            {/* Closing */}
            <SlideSection direction="up"><WhyScienceRK /></SlideSection>
            <SlideSection direction="up"><ScienceAdmissionInfo /></SlideSection>

            <ScienceFinalCTA />

            <Footer />
        </div>
    );
};

export default Science;
