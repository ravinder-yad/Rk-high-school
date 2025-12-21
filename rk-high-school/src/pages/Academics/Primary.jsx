import React, { useEffect } from 'react';
import SlideSection from '../../components/SlideSection';
import Footer from '../../components/home/Footer';
import {
    PrimaryHero,
    PrimaryIntro,
    PrimaryClasses,
    TeachingApproach,
    CoreSubjects,
    SkillDevelopment
} from '../../components/academics/primary/PrimarySegments1';
import {
    DailyRoutine,
    LearningResources,
    AssessmentEvaluation,
    CoCurricular,
    StudentCare
} from '../../components/academics/primary/PrimarySegments2';
import {
    SafetyWellbeing,
    ParentInvolvement,
    WhyPrimary,
    AdmissionInfo,
    PrimaryCTA
} from '../../components/academics/primary/PrimarySegments3';

const Primary = () => {
    // Ensure page starts at top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-x-hidden bg-background min-h-screen flex flex-col font-sans">
            {/* Section 1: Hero */}
            <PrimaryHero />

            {/* Section 2: Intro */}
            <SlideSection direction="up">
                <PrimaryIntro />
            </SlideSection>

            {/* Section 3: Classes */}
            <SlideSection direction="up">
                <PrimaryClasses />
            </SlideSection>

            {/* Section 4: Teaching Approach */}
            <SlideSection direction="up">
                <TeachingApproach />
            </SlideSection>

            {/* Section 5: Core Subjects */}
            <SlideSection direction="up">
                <CoreSubjects />
            </SlideSection>

            {/* Section 6: Skills */}
            <SlideSection direction="left">
                <SkillDevelopment />
            </SlideSection>

            {/* Section 7: Routine */}
            <SlideSection direction="up">
                <DailyRoutine />
            </SlideSection>

            {/* Section 8: Resources */}
            <SlideSection direction="right">
                <LearningResources />
            </SlideSection>

            {/* Section 9: Assessment */}
            <SlideSection direction="up">
                <AssessmentEvaluation />
            </SlideSection>

            {/* Section 10: Co-Curricular */}
            <SlideSection direction="up">
                <CoCurricular />
            </SlideSection>

            {/* Section 11: Care */}
            <SlideSection direction="up">
                <StudentCare />
            </SlideSection>

            {/* Section 12: Safety */}
            <SlideSection direction="up">
                <SafetyWellbeing />
            </SlideSection>

            {/* Section 13: Parents */}
            <SlideSection direction="up">
                <ParentInvolvement />
            </SlideSection>

            {/* Section 14: Why Us */}
            <SlideSection direction="left">
                <WhyPrimary />
            </SlideSection>

            {/* Section 15: Admission */}
            <SlideSection direction="right">
                <AdmissionInfo />
            </SlideSection>

            {/* Section 16: CTA */}
            <SlideSection direction="up">
                <PrimaryCTA />
            </SlideSection>

            <Footer />
        </div>
    );
};

export default Primary;
