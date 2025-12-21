import React, { useEffect } from 'react';
import SlideSection from '../../components/SlideSection';
import Footer from '../../components/home/Footer';

// Import all segments
import {
    ComputerHero,
    ComputerIntro,
    ComputerOverview,
    ComputerInfra,
    SoftwareTools,
    PrimaryComputers
} from '../../components/facilities/computer-lab/ComputerSegments1';

import {
    MiddleSeniorComputers,
    ComputerMethodology,
    CodingFocus,
    DigitalSafety
} from '../../components/facilities/computer-lab/ComputerSegments2';

import {
    PracticalProjects,
    StaffAndTimings,
    TechAchievements,
    LabRules,
    ComputerFinalCTA
} from '../../components/facilities/computer-lab/ComputerSegments3';

const ComputerLab = () => {
    // Scroll top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-x-hidden bg-white min-h-screen flex flex-col font-sans">
            <ComputerHero />

            <SlideSection direction="up">
                <ComputerIntro />
            </SlideSection>

            <SlideSection direction="up">
                <ComputerOverview />
            </SlideSection>

            {/* Infrastructure & Basics */}
            <SlideSection direction="up"><ComputerInfra /></SlideSection>
            <SlideSection direction="up"><SoftwareTools /></SlideSection>
            <SlideSection direction="up"><PrimaryComputers /></SlideSection>

            {/* Advanced & Methodology */}
            <SlideSection direction="up"><MiddleSeniorComputers /></SlideSection>
            <SlideSection direction="up"><ComputerMethodology /></SlideSection>
            <SlideSection direction="left"><CodingFocus /></SlideSection>
            <SlideSection direction="up"><DigitalSafety /></SlideSection>

            {/* Practical & Support */}
            <SlideSection direction="up"><PracticalProjects /></SlideSection>
            <SlideSection direction="up"><StaffAndTimings /></SlideSection>
            <SlideSection direction="up"><TechAchievements /></SlideSection>
            <SlideSection direction="up"><LabRules /></SlideSection>

            <ComputerFinalCTA />

            <Footer />
        </div>
    );
};

export default ComputerLab;
