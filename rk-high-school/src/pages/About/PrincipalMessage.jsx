import React, { useEffect } from 'react';
import SlideSection from '../../components/SlideSection';
import Footer from '../../components/home/Footer';

// Importing all 20 sections from modular files
import { PrincipalHero, WelcomeNote, PrincipalProfile, MessageIntro, CoreMessage } from '../../components/about/principal/PrincipalSegments1';
import { Philosophy, RoleInSociety, AcademicVision, CharacterDiscipline, StudentDevFocus } from '../../components/about/principal/PrincipalSegments2';
import { TeacherLeadership, TechModernEdu, SafetyWellbeing, ParentPartnershipSection, InclusiveHolistic } from '../../components/about/principal/PrincipalSegments3';
import { FutureVision, MsgToStudents, MsgToParents, PrincipalPromise, PrincipalCTA } from '../../components/about/principal/PrincipalSegments4';

const PrincipalMessage = () => {
    // Smooth scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-x-hidden bg-background min-h-screen flex flex-col">

            {/* Section 1: Hero */}
            <SlideSection direction="up">
                <PrincipalHero />
            </SlideSection>

            {/* Section 2: Welcome */}
            <SlideSection direction="left">
                <WelcomeNote />
            </SlideSection>

            {/* Section 3: Profile */}
            <SlideSection direction="right">
                <PrincipalProfile />
            </SlideSection>

            {/* Section 4: Intro Msg */}
            <SlideSection direction="up">
                <MessageIntro />
            </SlideSection>

            {/* Section 5: Core Msg */}
            <SlideSection direction="left">
                <CoreMessage />
            </SlideSection>

            {/* Section 6: Philosophy */}
            <SlideSection direction="right">
                <Philosophy />
            </SlideSection>

            {/* Section 7: Role in Society */}
            <SlideSection direction="up">
                <RoleInSociety />
            </SlideSection>

            {/* Section 8: Academic Vision */}
            <SlideSection direction="left">
                <AcademicVision />
            </SlideSection>

            {/* Section 9: Character */}
            <SlideSection direction="right">
                <CharacterDiscipline />
            </SlideSection>

            {/* Section 10: Student Dev */}
            <SlideSection direction="up">
                <StudentDevFocus />
            </SlideSection>

            {/* Section 11: Teachers */}
            <SlideSection direction="left">
                <TeacherLeadership />
            </SlideSection>

            {/* Section 12: Tech */}
            <SlideSection direction="right">
                <TechModernEdu />
            </SlideSection>

            {/* Section 13: Safety */}
            <SlideSection direction="up">
                <SafetyWellbeing />
            </SlideSection>

            {/* Section 14: Parents */}
            <SlideSection direction="left">
                <ParentPartnershipSection />
            </SlideSection>

            {/* Section 15: Inclusive */}
            <SlideSection direction="right">
                <InclusiveHolistic />
            </SlideSection>

            {/* Section 16: Future */}
            <SlideSection direction="up">
                <FutureVision />
            </SlideSection>

            {/* Section 17: To Students */}
            <SlideSection direction="left">
                <MsgToStudents />
            </SlideSection>

            {/* Section 18: To Parents */}
            <SlideSection direction="right">
                <MsgToParents />
            </SlideSection>

            {/* Section 19: Promise */}
            <SlideSection direction="up">
                <PrincipalPromise />
            </SlideSection>

            {/* Section 20: CTA */}
            <SlideSection direction="up">
                <PrincipalCTA />
            </SlideSection>

            <Footer />
        </div>
    );
};

export default PrincipalMessage;
