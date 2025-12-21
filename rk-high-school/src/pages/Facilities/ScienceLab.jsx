import React, { useEffect } from 'react';
import SlideSection from '../../components/SlideSection';
import Footer from '../../components/home/Footer';

// Import all segments
import {
    ScienceLabHero,
    ScienceLabIntro,
    LabsOverview,
    PhysicsLab,
    ChemistryLab,
    BiologyLab,
    MathLab
} from '../../components/facilities/science-lab/ScienceLabSegments1';

import {
    LabInfra,
    LabMethodology,
    LabSafety,
    LabDetails
} from '../../components/facilities/science-lab/ScienceLabSegments2';

import {
    ExamPrep,
    LabInnovation,
    LabGallery,
    LabFinalCTA
} from '../../components/facilities/science-lab/ScienceLabSegments3';

const ScienceLab = () => {
    // Scroll top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-x-hidden bg-white min-h-screen flex flex-col font-sans">
            <ScienceLabHero />

            <SlideSection direction="up">
                <ScienceLabIntro />
            </SlideSection>

            <SlideSection direction="up">
                <LabsOverview />
            </SlideSection>

            {/* Specific Labs */}
            <SlideSection direction="up"><PhysicsLab /></SlideSection>
            <SlideSection direction="up"><ChemistryLab /></SlideSection>
            <SlideSection direction="up"><BiologyLab /></SlideSection>
            <SlideSection direction="up"><MathLab /></SlideSection>

            {/* Infrastructure & Safety */}
            <SlideSection direction="up"><LabInfra /></SlideSection>
            <SlideSection direction="up"><LabMethodology /></SlideSection>
            <SlideSection direction="up"><LabSafety /></SlideSection>
            <SlideSection direction="up"><LabDetails /></SlideSection>

            {/* Academic & End */}
            <SlideSection direction="up"><ExamPrep /></SlideSection>
            <SlideSection direction="up"><LabInnovation /></SlideSection>
            <SlideSection direction="up"><LabGallery /></SlideSection>

            <LabFinalCTA />

            <Footer />
        </div>
    );
};

export default ScienceLab;
