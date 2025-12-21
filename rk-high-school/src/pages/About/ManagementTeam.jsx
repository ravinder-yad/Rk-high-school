import React, { useEffect } from 'react';
import SlideSection from '../../components/SlideSection';
import Footer from '../../components/home/Footer';

// Importing all 20 sections from modular files
import { ManagementHero, ManagementIntro, ChairmanCard, DirectorCard, PrincipalManagementRef } from '../../components/about/management/ManagementSegments1';
import { CoreTeamGrid, AdvisoryBoard, AcademicLeadership, AdminTeam, ManagementPhilosophy } from '../../components/about/management/ManagementSegments2';
import { RolesResponsibilities, DecisionProcess, ExperienceExpertise, ManagementAchievements, TeacherCollab } from '../../components/about/management/ManagementSegments3';
import { ParentConnect, Governance, FutureRoadmap, MeetTheTeamGrid, ManagementCTA } from '../../components/about/management/ManagementSegments4';

const ManagementTeam = () => {
    // Smooth scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-x-hidden bg-background min-h-screen flex flex-col">

            {/* Section 1: Hero */}
            <SlideSection direction="up">
                <ManagementHero />
            </SlideSection>

            {/* Section 2: Intro */}
            <SlideSection direction="left">
                <ManagementIntro />
            </SlideSection>

            {/* Section 3: Chairman */}
            <SlideSection direction="right">
                <ChairmanCard />
            </SlideSection>

            {/* Section 4: Director */}
            <SlideSection direction="left">
                <DirectorCard />
            </SlideSection>

            {/* Section 5: Principal Ref */}
            <SlideSection direction="up">
                <PrincipalManagementRef />
            </SlideSection>

            {/* Section 6: Core Team */}
            <SlideSection direction="up">
                <CoreTeamGrid />
            </SlideSection>

            {/* Section 7: Advisory */}
            <SlideSection direction="right">
                <AdvisoryBoard />
            </SlideSection>

            {/* Section 8: Academic Leadership */}
            <SlideSection direction="left">
                <AcademicLeadership />
            </SlideSection>

            {/* Section 9: Admin Team */}
            <SlideSection direction="right">
                <AdminTeam />
            </SlideSection>

            {/* Section 10: Philosophy */}
            <SlideSection direction="up">
                <ManagementPhilosophy />
            </SlideSection>

            {/* Section 11: Roles */}
            <SlideSection direction="left">
                <RolesResponsibilities />
            </SlideSection>

            {/* Section 12: Decisions */}
            <SlideSection direction="right">
                <DecisionProcess />
            </SlideSection>

            {/* Section 13: Experience */}
            <SlideSection direction="up">
                <ExperienceExpertise />
            </SlideSection>

            {/* Section 14: Achievements */}
            <SlideSection direction="left">
                <ManagementAchievements />
            </SlideSection>

            {/* Section 15: Teacher Collab */}
            <SlideSection direction="right">
                <TeacherCollab />
            </SlideSection>

            {/* Section 16: Parent Connect */}
            <SlideSection direction="up">
                <ParentConnect />
            </SlideSection>

            {/* Section 17: Governance */}
            <SlideSection direction="left">
                <Governance />
            </SlideSection>

            {/* Section 18: Roadmap */}
            <SlideSection direction="right">
                <FutureRoadmap />
            </SlideSection>

            {/* Section 19: Meet Team */}
            <SlideSection direction="up">
                <MeetTheTeamGrid />
            </SlideSection>

            {/* Section 20: CTA */}
            <SlideSection direction="up">
                <ManagementCTA />
            </SlideSection>

            <Footer />
        </div>
    );
};

export default ManagementTeam;
