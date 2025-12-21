import React, { useEffect } from 'react';
import SlideSection from '../../components/SlideSection';
import Footer from '../../components/home/Footer';
import {
    AdmissionHero,
    AdmissionOverview,
    AdmissionStepsWall,
    StepEnquiry,
    StepRegistration,
    StepApplicationForm
} from '../../components/admissions/process/AdmissionProcessSegments1';

import {
    StepInteraction,
    StepConfirmation,
    EligibilityCriteria,
    AgeCriteria,
    RequiredDocuments,
    FeeOverview,
    ImportantDates
} from '../../components/admissions/process/AdmissionProcessSegments2';

import {
    AdmissionPolicy,
    CampusVisit,
    ParentSupport,
    AdmissionFAQs,
    WhyRKAdmission,
    ApplyNowCTA,
    AdmissionFinalCTA
} from '../../components/admissions/process/AdmissionProcessSegments3';

const AdmissionProcess = () => {
    // Ensure page starts at top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-x-hidden bg-background min-h-screen flex flex-col font-sans">
            {/* Section 1: Hero */}
            <AdmissionHero />

            {/* Section 2: Overview */}
            <SlideSection direction="up">
                <AdmissionOverview />
            </SlideSection>

            {/* Section 3: Steps Card Wall (MAIN) */}
            <SlideSection direction="up">
                <AdmissionStepsWall />
            </SlideSection>

            {/* Section 4: Step 1 */}
            <SlideSection direction="left">
                <StepEnquiry />
            </SlideSection>

            {/* Section 5: Step 2 */}
            <SlideSection direction="right">
                <StepRegistration />
            </SlideSection>

            {/* Section 6: Step 3 */}
            <SlideSection direction="left">
                <StepApplicationForm />
            </SlideSection>

            {/* Section 7: Step 4 */}
            <SlideSection direction="right">
                <StepInteraction />
            </SlideSection>

            {/* Section 8: Step 5 */}
            <SlideSection direction="up">
                <StepConfirmation />
            </SlideSection>

            {/* Section 9: Eligibility */}
            <SlideSection direction="up">
                <EligibilityCriteria />
            </SlideSection>

            {/* Section 10: Age */}
            <SlideSection direction="up">
                <AgeCriteria />
            </SlideSection>

            {/* Section 11: Docs */}
            <SlideSection direction="up">
                <RequiredDocuments />
            </SlideSection>

            {/* Section 12: Fees */}
            <SlideSection direction="up">
                <FeeOverview />
            </SlideSection>

            {/* Section 13: Dates */}
            <SlideSection direction="up">
                <ImportantDates />
            </SlideSection>

            {/* Section 14: Policy */}
            <SlideSection direction="up">
                <AdmissionPolicy />
            </SlideSection>

            {/* Section 15: Visit */}
            <SlideSection direction="left">
                <CampusVisit />
            </SlideSection>

            {/* Section 16: Support */}
            <SlideSection direction="right">
                <ParentSupport />
            </SlideSection>

            {/* Section 17: FAQs */}
            <SlideSection direction="up">
                <AdmissionFAQs />
            </SlideSection>

            {/* Section 18: Why RK */}
            <SlideSection direction="up">
                <WhyRKAdmission />
            </SlideSection>

            {/* Section 19: Apply Form CTA */}
            <SlideSection direction="up">
                <ApplyNowCTA />
            </SlideSection>

            {/* Section 20: Final CTA */}
            <SlideSection direction="up">
                <AdmissionFinalCTA />
            </SlideSection>

            <Footer />
        </div>
    );
};

export default AdmissionProcess;
