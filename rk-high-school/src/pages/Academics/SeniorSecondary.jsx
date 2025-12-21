import React, { useEffect } from 'react';
import SlideSection from '../../components/SlideSection';
import Footer from '../../components/home/Footer';
import {
    SeniorHero,
    SeniorIntro,
    StreamsOffered,
    ScienceStream,
    CommerceStream,
    ArtsStream,
    TeachingMethodology
} from '../../components/academics/senior-secondary/SeniorSegments1';
import {
    BoardExamPrep,
    PracticalsLabs,
    CompetitiveFoundation,
    AssessmentSystem,
    FacultyMentorship,
    CareerGuidance,
    StudentSupport
} from '../../components/academics/senior-secondary/SeniorSegments2';
import {
    DisciplineCulture,
    SafetyWellbeing,
    ParentCommunication,
    ResultsAchievements,
    AdmissionDetails,
    SeniorCTA
} from '../../components/academics/senior-secondary/SeniorSegments3';

const SeniorSecondary = () => {
    // Ensure page starts at top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-x-hidden bg-background min-h-screen flex flex-col font-sans">
            {/* Section 1: Hero */}
            <SeniorHero />

            {/* Section 2: Intro */}
            <SlideSection direction="up">
                <SeniorIntro />
            </SlideSection>

            {/* Section 3: Main Streams Cards */}
            <SlideSection direction="up">
                <StreamsOffered />
            </SlideSection>

            {/* Section 4: Science Detail */}
            <SlideSection direction="right">
                <ScienceStream />
            </SlideSection>

            {/* Section 5: Commerce Detail */}
            <SlideSection direction="left">
                <CommerceStream />
            </SlideSection>

            {/* Section 6: Arts Detail */}
            <SlideSection direction="right">
                <ArtsStream />
            </SlideSection>

            {/* Section 7: Methodology */}
            <SlideSection direction="up">
                <TeachingMethodology />
            </SlideSection>

            {/* Section 8: Board Prep */}
            <SlideSection direction="up">
                <BoardExamPrep />
            </SlideSection>

            {/* Section 9: Labs */}
            <SlideSection direction="up">
                <PracticalsLabs />
            </SlideSection>

            {/* Section 10: Comparative */}
            <SlideSection direction="up">
                <CompetitiveFoundation />
            </SlideSection>

            {/* Section 11: Assessment */}
            <SlideSection direction="up">
                <AssessmentSystem />
            </SlideSection>

            {/* Section 12: Faculty */}
            <SlideSection direction="left">
                <FacultyMentorship />
            </SlideSection>

            {/* Section 13: Guidance */}
            <SlideSection direction="right">
                <CareerGuidance />
            </SlideSection>

            {/* Section 14: Support */}
            <SlideSection direction="up">
                <StudentSupport />
            </SlideSection>

            {/* Section 15: Discipline */}
            <SlideSection direction="up">
                <DisciplineCulture />
            </SlideSection>

            {/* Section 16: Safety */}
            <SlideSection direction="up">
                <SafetyWellbeing />
            </SlideSection>

            {/* Section 17: Parents */}
            <SlideSection direction="up">
                <ParentCommunication />
            </SlideSection>

            {/* Section 18: Results */}
            <SlideSection direction="up">
                <ResultsAchievements />
            </SlideSection>

            {/* Section 19: Admission */}
            <SlideSection direction="up">
                <AdmissionDetails />
            </SlideSection>

            {/* Section 20: CTA */}
            <SlideSection direction="up">
                <SeniorCTA />
            </SlideSection>

            <Footer />
        </div>
    );
};

export default SeniorSecondary;
