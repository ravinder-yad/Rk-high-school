import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import QuickActions from '../components/home/QuickActions';
import AboutAndVision from '../components/home/AboutAndVision';
import AcademicLevels from '../components/home/AcademicLevels';
import AdmissionAndFacilities from '../components/home/AdmissionAndFacilities';
import WhyChooseAndPeople from '../components/home/WhyChooseAndPeople';
import StudentLifeAndEvents from '../components/home/StudentLifeAndEvents';
import AchievementsAndGallery from '../components/home/AchievementsAndGallery';
import InfoSections from '../components/home/InfoSections';
import Footer from '../components/home/Footer';

const Home = () => {
    // Smooth scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background min-h-screen flex flex-col">
            {/* Section 1: Hero */}
            <HeroSection />

            {/* Section 2: Quick Actions */}
            <QuickActions />

            {/* Sections 3 & 4: About & Vision */}
            <AboutAndVision />

            {/* Section 5: Academic Levels */}
            <AcademicLevels />

            {/* Sections 6 & 7: Admission Process & Facilities */}
            <AdmissionAndFacilities />

            {/* Sections 8, 9, 10: Why Choose, Principal, Teachers */}
            <WhyChooseAndPeople />

            {/* Sections 11 & 12: Student Life & Events */}
            <StudentLifeAndEvents />

            {/* Sections 13, 14, 15: Achievements & Galleries */}
            <AchievementsAndGallery />

            {/* Sections 16, 17, 18, 19: Testimonials, Notices, FAQ, Contact */}
            <InfoSections />

            {/* Section 20: Footer */}
            <Footer />
        </div>
    );
};

export default Home;
