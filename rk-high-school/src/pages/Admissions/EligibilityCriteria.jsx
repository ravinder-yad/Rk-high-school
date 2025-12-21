import React, { useEffect } from 'react';
import SlideSection from '../../components/SlideSection';
import Footer from '../../components/home/Footer';

import {
    EligibilityHero,
    EligibilityIntro,
    EligibilityOverviewWall,
    PrePrimaryEligibility,
    PrimaryEligibility,
    MiddleEligibility
} from '../../components/admissions/criteria/EligibilitySegments1';

import {
    SecondaryEligibility,
    SeniorEligibility,
    StreamWiseCriteria,
    DocumentReqs,
    AgeCriteriaTable,
    TransferEligibility,
    OtherBoards
} from '../../components/admissions/criteria/EligibilitySegments2';

import {
    AdmissionTestInfo,
    SpecialConsiderations,
    FairPolicy,
    EligibilityFAQs,
    ImportantNotes,
    CheckEligibilityCTA,
    EligibilityFinalCTA
} from '../../components/admissions/criteria/EligibilitySegments3';

const EligibilityCriteria = () => {
    // Ensure page starts at top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-x-hidden bg-background min-h-screen flex flex-col font-sans">
            {/* Section 1: Hero */}
            <EligibilityHero />

            {/* Section 2: Intro */}
            <SlideSection direction="up">
                <EligibilityIntro />
            </SlideSection>

            {/* Section 3: Overview Wall (MAIN) */}
            <SlideSection direction="up">
                <EligibilityOverviewWall />
            </SlideSection>

            {/* Section 4: Pre-Primary */}
            <SlideSection direction="left">
                <PrePrimaryEligibility />
            </SlideSection>

            {/* Section 5: Primary */}
            <SlideSection direction="right">
                <PrimaryEligibility />
            </SlideSection>

            {/* Section 6: Middle */}
            <SlideSection direction="left">
                <MiddleEligibility />
            </SlideSection>

            {/* Section 7: Secondary */}
            <SlideSection direction="right">
                <SecondaryEligibility />
            </SlideSection>

            {/* Section 8: Senior */}
            <SlideSection direction="up">
                <SeniorEligibility />
            </SlideSection>

            {/* Section 9: Streams */}
            <SlideSection direction="up">
                <StreamWiseCriteria />
            </SlideSection>

            {/* Section 10: Docs */}
            <SlideSection direction="up">
                <DocumentReqs />
            </SlideSection>

            {/* Section 11: Age Table */}
            <SlideSection direction="up">
                <AgeCriteriaTable />
            </SlideSection>

            {/* Section 12: Transfer */}
            <SlideSection direction="left">
                <TransferEligibility />
            </SlideSection>

            {/* Section 13: Boards */}
            <SlideSection direction="right">
                <OtherBoards />
            </SlideSection>

            {/* Section 14: Test */}
            <SlideSection direction="up">
                <AdmissionTestInfo />
            </SlideSection>

            {/* Section 15: Special */}
            <SlideSection direction="up">
                <SpecialConsiderations />
            </SlideSection>

            {/* Section 16: Policy */}
            <SlideSection direction="up">
                <FairPolicy />
            </SlideSection>

            {/* Section 17: FAQs */}
            <SlideSection direction="up">
                <EligibilityFAQs />
            </SlideSection>

            {/* Section 18: Notes */}
            <SlideSection direction="up">
                <ImportantNotes />
            </SlideSection>

            {/* Section 19: Apply CTA */}
            <SlideSection direction="up">
                <CheckEligibilityCTA />
            </SlideSection>

            {/* Section 20: Final CTA */}
            <SlideSection direction="up">
                <EligibilityFinalCTA />
            </SlideSection>

            <Footer />
        </div>
    );
};

export default EligibilityCriteria;
