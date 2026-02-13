import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import AboutSchool from '../pages/About/AboutSchool';
import VisionMission from '../pages/About/VisionMission';
import PrincipalMessage from '../pages/About/PrincipalMessage';
import ManagementTeam from '../pages/About/ManagementTeam';
import PrePrimary from '../pages/Academics/PrePrimary';
import Primary from '../pages/Academics/Primary';
import Middle from '../pages/Academics/Middle';
import SeniorSecondary from '../pages/Academics/SeniorSecondary';
import AdmissionProcess from '../pages/Admissions/AdmissionProcess';
import EligibilityCriteria from '../pages/Admissions/EligibilityCriteria';
import FeeStructure from '../pages/Admissions/FeeStructure';
import OnlineAdmissionForm from '../pages/Admissions/OnlineAdmissionForm';
import WhyChooseUs from '../pages/Admissions/WhyChooseUs';
import Science from '../pages/Departments/Science';
import Commerce from '../pages/Departments/Commerce';
import Arts from '../pages/Departments/Arts';
import Library from '../pages/Facilities/Library';
import ComputerLab from '../pages/Facilities/ComputerLab';
import ScienceLab from '../pages/Facilities/ScienceLab';
import Sports from '../pages/Facilities/Sports';
import Activities from '../pages/StudentLife/Activities';
import Clubs from '../pages/StudentLife/Clubs';
import Events from '../pages/StudentLife/Events';
import PhotoGallery from '../pages/Gallery/PhotoGallery';
import VideoGallery from '../pages/Gallery/VideoGallery';
import NoticeBoard from '../pages/Notices/NoticeBoard';
import Circulars from '../pages/Notices/Circulars';
import ContactUs from '../pages/ContactUs';

// Placeholder for other pages to avoid import errors
const Placeholder = ({ title }) => (
    <div className="p-10 text-center">
        <h1 className="text-3xl font-bold text-primary">{title}</h1>
        <p>Coming Soon</p>
    </div>
);

import ScrollToTop from '../components/ScrollToTop';
import ScrollToHash from '../components/ScrollToHash';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <ScrollToHash />
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />

                    {/* About Us */}
                    <Route path="/about/school" element={<AboutSchool />} />
                    <Route path="/about/vision" element={<VisionMission />} />
                    <Route path="/about/principal" element={<PrincipalMessage />} />
                    <Route path="/about/management" element={<ManagementTeam />} />

                    {/* Academics */}
                    <Route path="/academics/pre-primary" element={<PrePrimary />} />
                    <Route path="/academics/primary" element={<Primary />} />
                    <Route path="/academics/middle" element={<Middle />} />
                    <Route path="/academics/senior-secondary" element={<SeniorSecondary />} />


                    {/* Admissions */}
                    <Route path="/admissions/why-us" element={<WhyChooseUs />} />
                    <Route path="/admissions/process" element={<AdmissionProcess />} />
                    <Route path="/admissions/criteria" element={<EligibilityCriteria />} />
                    <Route path="/admissions/fee-structure" element={<FeeStructure />} />
                    <Route path="/admissions/form" element={<OnlineAdmissionForm />} />

                    {/* Departments */}
                    <Route path="/departments/science" element={<Science />} />
                    <Route path="/departments/commerce" element={<Commerce />} />
                    <Route path="/departments/arts" element={<Arts />} />

                    {/* Facilities */}
                    <Route path="/facilities/library" element={<Library />} />
                    <Route path="/facilities/computer-lab" element={<ComputerLab />} />
                    <Route path="/facilities/science-lab" element={<ScienceLab />} />
                    <Route path="/facilities/sports" element={<Sports />} />

                    {/* Student Life */}
                    <Route path="/student-life/activities" element={<Activities />} />
                    <Route path="/student-life/clubs" element={<Clubs />} />
                    <Route path="/student-life/events" element={<Events />} />

                    {/* Gallery */}
                    <Route path="/gallery/photos" element={<PhotoGallery />} />
                    <Route path="/gallery/videos" element={<VideoGallery />} />

                    {/* Notices */}
                    <Route path="/notices/board" element={<NoticeBoard />} />
                    <Route path="/notices/circulars" element={<Circulars />} />

                    {/* Contact */}
                    <Route path="/contact" element={<ContactUs />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
