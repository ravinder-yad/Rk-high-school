import React, { useEffect } from 'react';
import SlideSection from '../../components/SlideSection';
import Footer from '../../components/home/Footer';
import {
    PrePrimaryHero,
    PrePrimaryIntro,
    PrePrimaryClasses,
    LearningApproach,
    WhatChildrenLearn
} from '../../components/academics/pre-primary/PrePrimarySegments1';
import {
    DailyRoutine,
    ClassroomEnvironment,
    TeachersAndCare,
    SafetyHygiene,
    CoCurricular
} from '../../components/academics/pre-primary/PrePrimarySegments2';
import {
    ParentCommunication,
    AssessmentMethod,
    WhyPrePrimary,
    AdmissionInfo,
    PrePrimaryCTA
} from '../../components/academics/pre-primary/PrePrimarySegments3';

const PrePrimary = () => {
    // Ensure page starts at top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-x-hidden bg-background min-h-screen flex flex-col font-sans">
            {/* Section 1: Hero */}
            <PrePrimaryHero />

            {/* Section 2: Intro */}
            <SlideSection direction="up">
                <PrePrimaryIntro />
            </SlideSection>

            {/* Section 3: Age & Classes */}
            <SlideSection direction="up">
                <PrePrimaryClasses />
            </SlideSection>

            {/* Section 4: Learning Approach */}
            <SlideSection direction="up">
                <LearningApproach />
            </SlideSection>

            {/* Section 5: What they learn */}
            <SlideSection direction="up">
                <WhatChildrenLearn />
            </SlideSection>

            {/* Section 6: Routine */}
            <SlideSection direction="left">
                <DailyRoutine />
            </SlideSection>

            {/* Section 7: Classroom */}
            <SlideSection direction="right">
                <ClassroomEnvironment />
            </SlideSection>

            {/* Section 8: Teachers */}
            <SlideSection direction="up">
                <TeachersAndCare />
            </SlideSection>

            {/* Section 9: Safety */}
            <SlideSection direction="up">
                <SafetyHygiene />
            </SlideSection>

            {/* Section 10: Activities */}
            <SlideSection direction="up">
                <CoCurricular />
            </SlideSection>

            {/* Section 11: Parents */}
            <SlideSection direction="up">
                <ParentCommunication />
            </SlideSection>

            {/* Section 12: Assessment */}
            <SlideSection direction="up">
                <AssessmentMethod />
            </SlideSection>

            {/* Section 13: Why Us */}
            <SlideSection direction="left">
                <WhyPrePrimary />
            </SlideSection>

            {/* Section 14: Admission */}
            <SlideSection direction="right">
                <AdmissionInfo />
            </SlideSection>

            {/* Section 15: CTA */}
            <SlideSection direction="up">
                <PrePrimaryCTA />
            </SlideSection>

            <Footer />
        </div>
    );
};

export default PrePrimary;
