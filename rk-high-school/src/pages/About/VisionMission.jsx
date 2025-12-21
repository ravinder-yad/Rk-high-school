import React, { useEffect } from 'react';
import SlideSection from '../../components/SlideSection';
import Footer from '../../components/home/Footer';

// Importing all 20 sections from modular files
import { VisionHero, VisionIntro, VisionHighlight, VisionOneLine, KeyPillars } from '../../components/about/vision/VisionSegments1';
import { MissionSection, MissionBreakdown, EducationalPhilosophy, CoreValuesGrid, LearningApproach } from '../../components/about/vision/VisionSegments2';
import { StudentDevGoals, TeacherRole, RoleOfTech, MoralEducation, GlobalReady } from '../../components/about/vision/VisionSegments3';
import { InclusiveEducation, ParentPartnership, CommunitySocial, CommitmentStatement, VisionCTA } from '../../components/about/vision/VisionSegments4';

const VisionMission = () => {
    // Smooth scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-x-hidden bg-background min-h-screen flex flex-col">

            {/* Section 1: Hero */}
            <SlideSection direction="up">
                <VisionHero />
            </SlideSection>

            {/* Section 2: Intro */}
            <SlideSection direction="left">
                <VisionIntro />
            </SlideSection>

            {/* Section 3: Vision Highlight */}
            <SlideSection direction="up">
                <VisionHighlight />
            </SlideSection>

            {/* Section 4: One Line */}
            <SlideSection direction="right">
                <VisionOneLine />
            </SlideSection>

            {/* Section 5: Pillars */}
            <SlideSection direction="left">
                <KeyPillars />
            </SlideSection>

            {/* Section 6: Mission */}
            <SlideSection direction="right">
                <MissionSection />
            </SlideSection>

            {/* Section 7: Mission Breakdown */}
            <SlideSection direction="up">
                <MissionBreakdown />
            </SlideSection>

            {/* Section 8: Philosophy */}
            <SlideSection direction="left">
                <EducationalPhilosophy />
            </SlideSection>

            {/* Section 9: Core Values */}
            <SlideSection direction="right">
                <CoreValuesGrid />
            </SlideSection>

            {/* Section 10: Learning Approach */}
            <SlideSection direction="up">
                <LearningApproach />
            </SlideSection>

            {/* Section 11: Student Goals */}
            <SlideSection direction="left">
                <StudentDevGoals />
            </SlideSection>

            {/* Section 12: Teacher Role */}
            <SlideSection direction="right">
                <TeacherRole />
            </SlideSection>

            {/* Section 13: Technology */}
            <SlideSection direction="left">
                <RoleOfTech />
            </SlideSection>

            {/* Section 14: Moral Edu */}
            <SlideSection direction="up">
                <MoralEducation />
            </SlideSection>

            {/* Section 15: Global Ready */}
            <SlideSection direction="right">
                <GlobalReady />
            </SlideSection>

            {/* Section 16: Inclusive */}
            <SlideSection direction="left">
                <InclusiveEducation />
            </SlideSection>

            {/* Section 17: Partnership */}
            <SlideSection direction="up">
                <ParentPartnership />
            </SlideSection>

            {/* Section 18: Community */}
            <SlideSection direction="right">
                <CommunitySocial />
            </SlideSection>

            {/* Section 19: Commitment */}
            <SlideSection direction="up">
                <CommitmentStatement />
            </SlideSection>

            {/* Section 20: CTA */}
            <SlideSection direction="up">
                <VisionCTA />
            </SlideSection>

            <Footer />
        </div>
    );
};

export default VisionMission;
