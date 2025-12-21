import React, { useEffect } from 'react';
import SlideSection from '../../components/SlideSection';
import Footer from '../../components/home/Footer';

import {
    FeeHero,
    FeeIntro,
    FeeOverviewWall,
    PrePrimaryFee,
    PrimaryFee,
    MiddleFee
} from '../../components/admissions/fees/FeeSegments1';

import {
    SecondaryFee,
    SeniorFee,
    FeeBreakdown,
    TransportFee,
    AdditionalServices,
    PaymentModes,
    PaymentSchedule
} from '../../components/admissions/fees/FeeSegments2';

import {
    LateFeePolicy,
    FeeConcessions,
    RefundPolicy,
    FeeNotes,
    FeeFAQs,
    DownloadFeeCTA,
    FeeFinalCTA
} from '../../components/admissions/fees/FeeSegments3';

const FeeStructure = () => {
    // Ensure page starts at top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-x-hidden bg-background min-h-screen flex flex-col font-sans">
            {/* Section 1: Hero */}
            <FeeHero />

            {/* Section 2: Intro */}
            <SlideSection direction="up">
                <FeeIntro />
            </SlideSection>

            {/* Section 3: Overview Wall (MAIN) */}
            <SlideSection direction="up">
                <FeeOverviewWall />
            </SlideSection>

            {/* Section 4: Pre-Primary */}
            <SlideSection direction="left">
                <PrePrimaryFee />
            </SlideSection>

            {/* Section 5: Primary */}
            <SlideSection direction="right">
                <PrimaryFee />
            </SlideSection>

            {/* Section 6: Middle */}
            <SlideSection direction="left">
                <MiddleFee />
            </SlideSection>

            {/* Section 7: Secondary */}
            <SlideSection direction="right">
                <SecondaryFee />
            </SlideSection>

            {/* Section 8: Senior */}
            <SlideSection direction="up">
                <SeniorFee />
            </SlideSection>

            {/* Section 9: Breakdown */}
            <SlideSection direction="up">
                <FeeBreakdown />
            </SlideSection>

            {/* Section 10: Transport */}
            <SlideSection direction="up">
                <TransportFee />
            </SlideSection>

            {/* Section 11: Additional */}
            <SlideSection direction="up">
                <AdditionalServices />
            </SlideSection>

            {/* Section 12: Modes */}
            <SlideSection direction="up">
                <PaymentModes />
            </SlideSection>

            {/* Section 13: Schedule */}
            <SlideSection direction="up">
                <PaymentSchedule />
            </SlideSection>

            {/* Section 14: Late Fee */}
            <SlideSection direction="up">
                <LateFeePolicy />
            </SlideSection>

            {/* Section 15: Concessions */}
            <SlideSection direction="up">
                <FeeConcessions />
            </SlideSection>

            {/* Section 16: Refund */}
            <SlideSection direction="up">
                <RefundPolicy />
            </SlideSection>

            {/* Section 17: Notes */}
            <SlideSection direction="up">
                <FeeNotes />
            </SlideSection>

            {/* Section 18: FAQs */}
            <SlideSection direction="up">
                <FeeFAQs />
            </SlideSection>

            {/* Section 19: Download CTA */}
            <SlideSection direction="up">
                <DownloadFeeCTA />
            </SlideSection>

            {/* Section 20: Final CTA */}
            <SlideSection direction="up">
                <FeeFinalCTA />
            </SlideSection>

            <Footer />
        </div>
    );
};

export default FeeStructure;
