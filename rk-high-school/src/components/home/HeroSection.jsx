import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Award, Users } from 'lucide-react';
import video from "../../assets/7c44087d-aff1-438d-aa67-2a493c48504f (1).mp4";

const HeroSection = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    classGrade: '',
    mobile: ''
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Slow down for cinematic feel
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    console.log("Form Submitted", formData);
    navigate('/admissions/form');
  };

  return (
    <div className="relative w-full h-screen min-h-[650px] overflow-hidden flex items-center font-sans">

      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-80" />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left text-white max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-secondary-light text-sm font-semibold tracking-wide mb-6"
            >
              <Star className="w-4 h-4 mr-2 fill-current" />
              Admissions Open for 2025-26
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-black font-display tracking-tight leading-[1.1] mb-6 drop-shadow-2xl">
              Empowering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-secondary">Future Leaders</span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
              At <span className="font-semibold text-white">RK High School</span>, we blend academic excellence with holistic development, creating an environment where every student thrives.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => navigate('/admissions/process')}
                className="px-8 py-4 bg-secondary hover:bg-secondary-light text-primary-dark font-bold rounded-full transition-all transform hover:scale-105 flex items-center shadow-lg shadow-secondary/20"
              >
                <span>Full Admission Guide</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button
                onClick={() => navigate('/about')}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold rounded-full transition-all flex items-center"
              >
                Explore Campus
              </button>
            </div>

            {/* Quick Stats Strip */}
            <div className="mt-12 pt-8 border-t border-white/10 flex justify-center lg:justify-start gap-8 lg:gap-12">
              <div className="text-left">
                <p className="text-3xl font-black text-white font-display">25+</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Years of Excellence</p>
              </div>
              <div className="text-left">
                <p className="text-3xl font-black text-white font-display">100%</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Pass Result</p>
              </div>
              <div className="text-left">
                <p className="text-3xl font-black text-white font-display">50+</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Expert Faculty</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Glassmorphic Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-full max-w-md"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
              {/* Decorative Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl group-hover:bg-secondary/40 transition-all duration-1000"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2 font-display">Quick Inquiry</h3>
                <p className="text-gray-300 text-sm mb-6">Take the first step towards your child's bright future.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Student Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 bg-black/20 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <select
                      name="classGrade"
                      value={formData.classGrade}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 bg-black/20 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all appearance-none cursor-pointer"
                      required
                    >
                      <option value="" className="text-gray-800">Select Grade</option>
                      <option value="Pre-Primary" className="text-gray-800">Pre-Primary</option>
                      <option value="1-5" className="text-gray-800">Primary (1-5)</option>
                      <option value="6-8" className="text-gray-800">Middle (6-8)</option>
                      <option value="9-10" className="text-gray-800">Secondary (9-10)</option>
                      <option value="11-12" className="text-gray-800">Senior Secondary (11-12)</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Parent's Mobile Number"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 bg-black/20 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-secondary hover:bg-secondary-light text-primary-dark font-display font-bold text-lg rounded-xl shadow-lg shadow-black/20 transform hover:-translate-y-1 transition-all duration-300 flex justify-center items-center group/btn"
                  >
                    Send Inquiry
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </form>

                <p className="text-xs text-center text-gray-400 mt-4">
                  *Our admission team will contact you within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 cursor-pointer hover:text-white transition-colors"
      >
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-current rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
