import React, { useEffect } from 'react';
import Footer from '../../components/home/Footer';
import { GalleryHero, GalleryIntro, GalleryMain, GalleryCTA } from '../../components/gallery/PhotoGalleryComponents';
import SlideSection from '../../components/SlideSection';

const PhotoGallery = () => {
    // Scroll top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-x-hidden bg-white min-h-screen flex flex-col font-sans">
            <GalleryHero />

            <SlideSection direction="up">
                <GalleryIntro />
            </SlideSection>

            <GalleryMain />

            <GalleryCTA />

            <Footer />
        </div>
    );
};

export default PhotoGallery;
