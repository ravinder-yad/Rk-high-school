import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import video from "../../assets/7c44087d-aff1-438d-aa67-2a493c48504f (1).mp4";

const HeroSection = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  // 🔹 FORM STATE (NEW)
  const [StudentName, setStudentName] = useState("");
  const [ClassApplyingFor, setClassApplyingFor] = useState("");
  const [ParentMobile, setParentMobile] = useState("");

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
    }
  }, []);

  // 🔹 SUBMIT HANDLER
  const handleSubmit = async () => {
    if (!StudentName || !ClassApplyingFor || !ParentMobile) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:7000/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          StudentName,
          ClassApplyingFor,
          ParentMobile,
        }),
      });

      const result = await response.json();
      console.log(result);

      alert("Admission Form Submitted ✅");
      navigate("/admissions/form");

      // reset
      setStudentName("");
      setClassApplyingFor("");
      setParentMobile("");
    } catch (error) {
      console.error(error);
      alert("Server Error ❌");
    }
  };

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">

      {/* overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-between pt-20">

        {/* LEFT TEXT (UNCHANGED) */}
        <div className="text-white text-center md:text-left max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <br />
            <span className="text-secondary">RK High School</span>
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Shaping Future Leaders with Excellence in Education
          </p>
        </div>

        {/* RIGHT FORM (DESIGN SAME) */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 md:p-8">

          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-primary">
              Admissions Open
            </h3>
            <p className="text-gray-500 text-sm">
              Academic Session 2025-26
            </p>
          </div>

          <div className="space-y-4">

            <div>
              <label className="block text-sm font-medium mb-1">
                Student Name
              </label>
              <input
                type="text"
                value={StudentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter Student Name"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Class Applying For
              </label>
              <select
                value={ClassApplyingFor}
                onChange={(e) => setClassApplyingFor(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
              >
                <option value="">Select Class</option>
                <option>Pre-Primary</option>
                <option>Class 1 - 5</option>
                <option>Class 6 - 8</option>
                <option>Class 9 - 10</option>
                <option>Class 11 - 12</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Parent Mobile
              </label>
              <input
                type="tel"
                value={ParentMobile}
                onChange={(e) => setParentMobile(e.target.value)}
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-3 bg-accent hover:bg-green-600 text-white font-bold rounded-lg"
            >
              Apply Now
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
