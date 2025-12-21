import React, { useEffect } from 'react';
import Footer from '../../components/home/Footer';
import { VideoHero, VideoIntro, VideoMain, VideoMainCTA } from '../../components/gallery/VideoGalleryComponents';
import SlideSection from '../../components/SlideSection';

const VideoGallery = () => {
    // Scroll top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full overflow-x-hidden bg-white min-h-screen flex flex-col font-sans">
            <VideoHero />

            <SlideSection direction="up">
                <VideoIntro />
            </SlideSection>

            <VideoMain />

            <VideoMainCTA />

            <Footer />
        </div>
    );
};

export default VideoGallery;
