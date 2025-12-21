import React, { useEffect } from 'react';
import SlideSection from '../../components/SlideSection';
import AboutHero from '../../components/about/AboutHero';
import Introduction from '../../components/about/Introduction';
import SchoolHistory from '../../components/about/SchoolHistory';
import VisionMissionValues from '../../components/about/VisionMissionValues';
import CampusOverview from '../../components/about/CampusOverview';
import Leadership from '../../components/about/Leadership';
import AcademicPhilosophy from '../../components/about/AcademicPhilosophy';
import InfrastructurePreviews from '../../components/about/InfrastructurePreviews';
import StatsAndAchievements from '../../components/about/StatsAndAchievements';
import SafetyAndDiscipline from '../../components/about/SafetyAndDiscipline';
import CommunityAndCollaboration from '../../components/about/CommunityAndCollaboration';
import WhyUsCta from '../../components/about/WhyUsCta';
import Footer from '../../components/home/Footer';

const AboutSchool = () => {
    // Smooth scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-x-hidden bg-background min-h-screen flex flex-col">
            {/* Section 1: Hero Banner */}
            <SlideSection direction="up">
                <AboutHero />
            </SlideSection>

            {/* Section 2: Introduction */}
            <SlideSection direction="left">
                <Introduction />
            </SlideSection>

            {/* Section 3: Timeline */}
            <SlideSection direction="right">
                <SchoolHistory />
            </SlideSection>

            {/* Sections 4, 5, 6: Vision, Mission, Values */}
            <SlideSection direction="up">
                <VisionMissionValues />
            </SlideSection>

            {/* Section 7: Campus Overview */}
            <SlideSection direction="left">
                <CampusOverview />
            </SlideSection>

            {/* Sections 8, 9: Leadership */}
            <SlideSection direction="right">
                <Leadership />
            </SlideSection>

            {/* Section 10 & 12: Philosophy & Methodology */}
            <SlideSection direction="up">
                <AcademicPhilosophy />
            </SlideSection>

            {/* Section 11: Infrastructure */}
            <SlideSection direction="left">
                <InfrastructurePreviews />
            </SlideSection>

            {/* Sections 13 & 14: Achievements & Stats */}
            <SlideSection direction="right">
                <StatsAndAchievements />
            </SlideSection>

            {/* Section 15: Safety */}
            <SlideSection direction="up">
                <SafetyAndDiscipline />
            </SlideSection>

            {/* Sections 16, 17, 18: Community */}
            <SlideSection direction="left">
                <CommunityAndCollaboration />
            </SlideSection>

            {/* Sections 19 & 20: Why Us & CTA */}
            <SlideSection direction="up">
                <WhyUsCta />
            </SlideSection>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AboutSchool;
