import React, { useState, useEffect } from 'react';
import SlideSection from '../../components/SlideSection';
import Footer from '../../components/home/Footer';

// Import all form segments
import {
    FormHero,
    FormIntro,
    LevelSelection,
    StudentBasicDetails,
    ClassSelection,
    PreviousSchool
} from '../../components/admissions/form/FormSegments1';

import {
    AcademicPerformance,
    ParentDetails,
    ContactInfo,
    AddressDetails,
    DocumentUpload,
    TransportSelection
} from '../../components/admissions/form/FormSegments2';

import {
    AdditionalOptions,
    MedicalInfo,
    ParentDeclaration,
    FormReview,
    SubmitApplication,
    SubmissionSuccess,
    NextSteps
} from '../../components/admissions/form/FormSegments3';

const OnlineAdmissionForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    // 🔹 GLOBAL FORM STATE
    const [formData, setFormData] = useState({
        level: "",
        student: { firstName: "", lastName: "", dob: "", gender: "" },
        classDetails: { grade: "", session: "", stream: "" },
        previousSchool: { schoolName: "", board: "", city: "" },
        academic: { lastClass: "", year: "", percentage: "" },
        parents: {
            fatherName: "", fatherOcc: "",
            motherName: "", motherOcc: ""
        },
        contact: { mobile: "", alternate: "", email: "" },
        address: { line1: "", city: "", state: "", zip: "" },
        transport: { optIn: false },
        additional: { cafeteria: false, dayCare: false },
        medical: { bloodGroup: "", allergies: "" },

        documents: { birthCertificate: null, studentPhoto: null, reportCard: null },
        declaration: false
    });

    // Scroll top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // 🔹 HANDLE INPUT CHANGE (Nested Support)
    const handleChange = (section, field, value) => {
        setFormData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };

    // 🔹 HANDLE DIRECT CHANGE (For simple fields like level)
    const handleDirectChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    // 🔹 SUBMIT TO BACKEND
    const handleSubmit = async () => {
        if (!formData.declaration) {
            alert("Please agree to the declaration before submitting.");
            return;
        }

        try {
            const formDataToSend = new FormData();

            // Separate documents from data
            const { documents, ...rest } = formData;

            // Append JSON data
            formDataToSend.append('jsonData', JSON.stringify(rest));

            // Append Files
            if (documents.birthCertificate) formDataToSend.append('birthCertificate', documents.birthCertificate);
            if (documents.studentPhoto) formDataToSend.append('studentPhoto', documents.studentPhoto);
            if (documents.reportCard) formDataToSend.append('reportCard', documents.reportCard);

            const response = await fetch("http://localhost:7000/admission", {
                method: "POST",
                body: formDataToSend, // No Content-Type header manually set!
            });

            const result = await response.json();

            if (response.ok) {
                console.log("Success:", result);
                setIsSubmitted(true);
                window.scrollTo(0, 0);
            } else {
                alert("Error submitting form: " + result.message);
                console.error(result);
            }
        } catch (error) {
            console.error(error);
            alert("Server connection failed ❌");
        }
    };

    return (
        <div className="w-full overflow-x-hidden bg-slate-50 min-h-screen flex flex-col font-sans">
            {isSubmitted && <SubmissionSuccess />}

            <FormHero />

            <div className="max-w-5xl mx-auto w-full -mt-20 relative z-20 pb-20">
                <SlideSection direction="up">
                    <FormIntro />
                </SlideSection>

                <SlideSection direction="up">
                    <LevelSelection
                        value={formData.level}
                        onChange={(val) => handleDirectChange("level", val)}
                    />
                </SlideSection>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
                    <SlideSection direction="up">
                        <StudentBasicDetails
                            data={formData.student}
                            onChange={(field, val) => handleChange("student", field, val)}
                        />
                    </SlideSection>

                    <SlideSection direction="up">
                        <ClassSelection
                            data={formData.classDetails}
                            onChange={(field, val) => handleChange("classDetails", field, val)}
                        />
                    </SlideSection>

                    <SlideSection direction="up">
                        <PreviousSchool
                            data={formData.previousSchool}
                            onChange={(field, val) => handleChange("previousSchool", field, val)}
                        />
                    </SlideSection>

                    <SlideSection direction="up">
                        <AcademicPerformance
                            data={formData.academic}
                            onChange={(field, val) => handleChange("academic", field, val)}
                        />
                    </SlideSection>

                    <SlideSection direction="up">
                        <ParentDetails
                            data={formData.parents}
                            onChange={(field, val) => handleChange("parents", field, val)}
                        />
                    </SlideSection>

                    <SlideSection direction="up">
                        <ContactInfo
                            data={formData.contact}
                            onChange={(field, val) => handleChange("contact", field, val)}
                        />
                    </SlideSection>

                    <SlideSection direction="up">
                        <AddressDetails
                            data={formData.address}
                            onChange={(field, val) => handleChange("address", field, val)}
                        />
                    </SlideSection>

                    <SlideSection direction="up">
                        <DocumentUpload
                            data={formData.documents}
                            onChange={(field, val) => handleChange("documents", field, val)}
                        />
                    </SlideSection>

                    <SlideSection direction="up">
                        <TransportSelection
                            data={formData.transport}
                            onChange={(field, val) => handleChange("transport", field, val)}
                        />
                    </SlideSection>

                    <SlideSection direction="up">
                        <AdditionalOptions
                            data={formData.additional}
                            onChange={(field, val) => handleChange("additional", field, val)}
                        />
                    </SlideSection>

                    <SlideSection direction="up">
                        <MedicalInfo
                            data={formData.medical}
                            onChange={(field, val) => handleChange("medical", field, val)}
                        />
                    </SlideSection>

                    <SlideSection direction="up">
                        <ParentDeclaration
                            value={formData.declaration}
                            onChange={(val) => handleDirectChange("declaration", val)}
                        />
                    </SlideSection>

                    <SlideSection direction="up"><FormReview /></SlideSection>

                    <SlideSection direction="up">
                        <SubmitApplication onSubmit={handleSubmit} />
                    </SlideSection>
                </form>
            </div>

            <NextSteps />
            <Footer />
        </div>
    );
};

export default OnlineAdmissionForm;
