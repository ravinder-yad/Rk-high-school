import React from 'react';
import { Upload, Home, Truck, Phone, Users, FileText } from 'lucide-react';

// Shared Input Component
const FormInput = ({ label, type = "text", placeholder, value, onChange }) => (
    <div className="mb-4">
        <label className="block text-sm font-semibold text-slate-700 mb-2">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            value={value || ""}
            onChange={onChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder:text-slate-400 font-medium"
        />
    </div>
);

// Section 7: Academic Performance
export const AcademicPerformance = ({ data, onChange }) => {
    return (
        <div className="w-full py-4 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Last Class Performance</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <FormInput
                            label="Last Class Passed"
                            placeholder="e.g. Class 5"
                            value={data?.lastClass}
                            onChange={(e) => onChange("lastClass", e.target.value)}
                        />
                        <FormInput
                            label="Year of Passing"
                            type="number"
                            placeholder="YYYY"
                            value={data?.year}
                            onChange={(e) => onChange("year", e.target.value)}
                        />
                        <FormInput
                            label="Overall Percentage / Grade"
                            placeholder="e.g. 85% or A1"
                            value={data?.percentage}
                            onChange={(e) => onChange("percentage", e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 8: Parent / Guardian Details
export const ParentDetails = ({ data, onChange }) => {
    return (
        <div className="w-full py-4 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Users className="text-indigo-500 w-5 h-5" /> Parent Information
                    </h3>
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">Father's Details</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormInput
                                    label="Name"
                                    placeholder="Father's Full Name"
                                    value={data?.fatherName}
                                    onChange={(e) => onChange("fatherName", e.target.value)}
                                />
                                <FormInput
                                    label="Occupation"
                                    placeholder="Designation / Business"
                                    value={data?.fatherOcc}
                                    onChange={(e) => onChange("fatherOcc", e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">Mother's Details</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormInput
                                    label="Name"
                                    placeholder="Mother's Full Name"
                                    value={data?.motherName}
                                    onChange={(e) => onChange("motherName", e.target.value)}
                                />
                                <FormInput
                                    label="Occupation"
                                    placeholder="Designation / Business"
                                    value={data?.motherOcc}
                                    onChange={(e) => onChange("motherOcc", e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 9: Contact Information
export const ContactInfo = ({ data, onChange }) => {
    return (
        <div className="w-full py-4 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Phone className="text-indigo-500 w-5 h-5" /> Contact Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormInput
                            label="Primary Mobile Number"
                            type="tel"
                            placeholder="10-digit number"
                            value={data?.mobile}
                            onChange={(e) => onChange("mobile", e.target.value)}
                        />
                        <FormInput
                            label="Alternate Number"
                            type="tel"
                            placeholder="For Emergency"
                            value={data?.alternate}
                            onChange={(e) => onChange("alternate", e.target.value)}
                        />
                        <div className="md:col-span-2">
                            <FormInput
                                label="Email Address"
                                type="email"
                                placeholder="parent@example.com"
                                value={data?.email}
                                onChange={(e) => onChange("email", e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 10: Residential Address
export const AddressDetails = ({ data, onChange }) => {
    return (
        <div className="w-full py-4 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Home className="text-indigo-500 w-5 h-5" /> Residential Address
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <FormInput
                                label="Address Line 1"
                                placeholder="House No, Building, Street"
                                value={data?.line1}
                                onChange={(e) => onChange("line1", e.target.value)}
                            />
                        </div>
                        <FormInput
                            label="City"
                            placeholder="City Name"
                            value={data?.city}
                            onChange={(e) => onChange("city", e.target.value)}
                        />
                        <FormInput
                            label="State"
                            placeholder="State Name"
                            value={data?.state}
                            onChange={(e) => onChange("state", e.target.value)}
                        />
                        <FormInput
                            label="ZIP / PIN Code"
                            type="number"
                            placeholder="000000"
                            value={data?.zip}
                            onChange={(e) => onChange("zip", e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 11: Document Upload
export const DocumentUpload = ({ data, onChange }) => {
    const docMap = [
        { label: 'Birth Certificate', key: 'birthCertificate' },
        { label: 'Student Photo', key: 'studentPhoto' },
        { label: 'Last Report Card', key: 'reportCard' }
    ];

    const handleFileChange = (key, file) => {
        if (onChange) {
            onChange(key, file);
        }
    };

    return (
        <div className="w-full py-4 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-indigo-50 rounded-3xl p-6 md:p-8 border border-indigo-100">
                    <h3 className="text-xl font-bold text-indigo-900 mb-6 flex items-center gap-2">
                        <FileText className="w-5 h-5" /> Upload Documents
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {docMap.map((doc, i) => (
                            <div key={i} className="relative">
                                <input
                                    type="file"
                                    id={doc.key}
                                    className="hidden"
                                    accept="image/*,.pdf"
                                    onChange={(e) => handleFileChange(doc.key, e.target.files[0])}
                                />
                                <label
                                    htmlFor={doc.key}
                                    className={`block bg-white rounded-2xl p-6 text-center border-2 border-dashed ${data?.[doc.key] ? 'border-emerald-500 bg-emerald-50' : 'border-indigo-200 hover:border-indigo-400'} cursor-pointer transition-colors group h-full`}
                                >
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${data?.[doc.key] ? 'bg-emerald-100' : 'bg-indigo-50 group-hover:bg-indigo-100'} transition-colors`}>
                                        <Upload className={`w-6 h-6 ${data?.[doc.key] ? 'text-emerald-600' : 'text-indigo-500'}`} />
                                    </div>
                                    <h4 className="font-bold text-slate-700 text-sm mb-1">{doc.label}</h4>
                                    <p className="text-xs text-slate-400 truncate px-2">
                                        {data?.[doc.key] ? data[doc.key].name : "PDF or JPG (Max 2MB)"}
                                    </p>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 12: Transport Requirement
export const TransportSelection = ({ data, onChange }) => {
    return (
        <div className="w-full py-4 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                            <Truck className="text-indigo-500 w-5 h-5" /> Transport Facility
                        </h3>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <span className="text-slate-600 font-medium">Opt-in</span>
                            <div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
                                <input
                                    type="checkbox"
                                    checked={data?.optIn || false}
                                    onChange={(e) => onChange("optIn", e.target.checked)}
                                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-300 checked:right-0 checked:border-indigo-600"
                                />
                                <label className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-300 cursor-pointer checked:bg-indigo-600"></label>
                            </div>
                        </label>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl">
                        <p className="text-slate-500 text-sm">
                            * Route and pickup point details will be finalized after admission confirmation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
