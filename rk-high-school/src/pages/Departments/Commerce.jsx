import React, { useEffect } from 'react';
import SlideSection from '../../components/SlideSection';
import Footer from '../../components/home/Footer';

// Import all commerce segments
import {
    CommerceHero,
    CommerceIntro,
    CommerceSubjects,
    AccountancyDept,
    BusinessStudiesDept,
    EconomicsDept,
    CommMathSupport
} from '../../components/departments/commerce/CommerceSegments1';

import {
    CommerceMethodology,
    CommerceCurriculum,
    CommAssessmentBoard,
    CommerceFaculty,
    PracticalSkills
} from '../../components/departments/commerce/CommerceSegments2';

import {
    CommCompetitive,
    CommCareers,
    WhyCommerceRK,
    CommAdmissionInfo,
    CommAchievements,
    CommerceFinalCTA
} from '../../components/departments/commerce/CommerceSegments3';

const Commerce = () => {
    // Scroll top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-x-hidden bg-white min-h-screen flex flex-col font-sans">
            <CommerceHero />

            <SlideSection direction="up">
                <CommerceIntro />
            </SlideSection>

            <SlideSection direction="up">
                <CommerceSubjects />
            </SlideSection>

            {/* Department Details */}
            <SlideSection direction="up"><AccountancyDept /></SlideSection>
            <SlideSection direction="up"><BusinessStudiesDept /></SlideSection>
            <SlideSection direction="up"><EconomicsDept /></SlideSection>
            <SlideSection direction="up"><CommMathSupport /></SlideSection>

            {/* Teaching & Academics */}
            <SlideSection direction="up"><CommerceMethodology /></SlideSection>
            <SlideSection direction="up"><CommerceCurriculum /></SlideSection>
            <SlideSection direction="up"><CommAssessmentBoard /></SlideSection>
            <SlideSection direction="up"><CommerceFaculty /></SlideSection>
            <SlideSection direction="left"><PracticalSkills /></SlideSection>

            {/* Career & Future */}
            <SlideSection direction="up"><CommCompetitive /></SlideSection>
            <SlideSection direction="up"><CommCareers /></SlideSection>

            {/* Trust & Closing */}
            <SlideSection direction="up"><WhyCommerceRK /></SlideSection>
            <SlideSection direction="up"><CommAchievements /></SlideSection>
            <SlideSection direction="up"><CommAdmissionInfo /></SlideSection>

            <CommerceFinalCTA />

            <Footer />
        </div>
    );
};

export default Commerce;
