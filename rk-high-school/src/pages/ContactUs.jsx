import React, { useEffect } from 'react';
import Footer from '../components/home/Footer';
import {
    ContactHero, ContactIntro, QuickContactCards, DetailedContactInfo,
    DepartmentContacts, ContactFormSection, FAQSection, ContactFinalCTA
} from '../components/contact/ContactComponents';
import SlideSection from '../components/SlideSection';

const ContactUs = () => {
    // Scroll top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-x-hidden bg-white min-h-screen flex flex-col font-sans">
            <ContactHero />

            <SlideSection direction="up">
                <ContactIntro />
            </SlideSection>

            <SlideSection direction="up" delay={0.2}>
                <QuickContactCards />
            </SlideSection>

            <DetailedContactInfo />

            <ContactFormSection />

            <SlideSection direction="up">
                <DepartmentContacts />
            </SlideSection>

            <FAQSection />

            <ContactFinalCTA />

            <Footer />
        </div>
    );
};

export default ContactUs;
