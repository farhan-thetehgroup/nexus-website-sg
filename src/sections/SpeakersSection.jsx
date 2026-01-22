/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mic } from "lucide-react";
import { SPEAKERS } from "../constants";

const SpeakerCard = ({ speaker, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const isExclusive = speaker.isExclusive || false;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative w-full">
      {/* Enhanced glow effect for exclusive speakers */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${isExclusive ? 'from-purple-500/70 via-emerald-500/70 to-cyan-500/70' : 'from-emerald-500/50 to-cyan-500/50'} rounded-2xl blur-xl ${isExclusive ? 'opacity-30' : 'opacity-0'} group-hover:opacity-75 transition-opacity duration-500`} />
      
      {/* Exclusive badge */}
      {isExclusive && (
        <div className="absolute -top-3 -right-3 z-20 px-3 py-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-white text-xs font-bold shadow-lg shadow-emerald-500/50">
          EXCLUSIVE
        </div>
      )}
      
      {/* Card */}
      <motion.div
        className={`relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl ${isExclusive ? 'border-2 border-emerald-400/60 hover:border-emerald-300/90 shadow-2xl shadow-emerald-500/30' : 'border border-emerald-500/30 hover:border-emerald-400/70'} overflow-hidden h-full min-h-[420px]`}
        whileHover={{ y: -12, scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}>
        
        {/* Enhanced background gradient effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.2),transparent)]" />
        
        {/* Animated border glow for exclusive */}
        {isExclusive && (
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
        )}
        
        {/* Top glow orb */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 rounded-full blur-3xl opacity-30 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative p-8 flex flex-col items-center text-center h-full min-h-[420px]">
          {/* Speaker Image */}
          <div className="relative mb-4">
            {/* Enhanced glow ring for exclusive */}
            <div className={`absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-lg ${isExclusive ? 'opacity-30' : 'opacity-0'} group-hover:opacity-50 transition-opacity duration-500`} />
            
            {/* Image container - same size for all */}
            <motion.div
              className="relative w-40 h-40 border-4 rounded-full overflow-hidden border-emerald-500/50 group-hover:border-emerald-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}>
              <img
                alt={speaker.fullName}
                className="w-full h-full object-cover"
                src={speaker.image}
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>

          {/* Name - same size for all */}
          <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors duration-300">
            {speaker.fullName}
          </h3>

          {/* Job Title - same size for all */}
          <p className="text-emerald-400 font-semibold text-base mb-1 min-h-[24px]">
            {speaker.jobTitle}
          </p>

          {/* Company - same size for all */}
          <p className="text-gray-400 text-base mb-2 group-hover:text-gray-300 transition-colors duration-300 min-h-[48px] flex items-center justify-center">
            {speaker.company}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const SpeakersSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-12 px-4 overflow-hidden"
      id="speakers"
      ref={containerRef}>
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}>
          
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/40 mb-4 backdrop-blur-sm"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}>
            <Mic className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">
              Industry Experts
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}>
            <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
              Our Speakers
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}>
            Learn from leading experts in AI, Cybersecurity, and Enterprise Technology
          </motion.p>
        </motion.div>

        {/* Speakers Grid */}
        <div>
          {/* First row - all speakers except last 2 */}
          {SPEAKERS.length > 2 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mb-6">
              {SPEAKERS.slice(0, SPEAKERS.length - 2).map((speaker, index) => (
                <div key={speaker.id || index} className="w-full">
                  <SpeakerCard
                    index={index}
                    speaker={speaker}
                  />
                </div>
              ))}
            </div>
          )}
          
          {/* Last 2 speakers - centered using grid with empty columns */}
          {SPEAKERS.length >= 2 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
              {/* Empty columns on large screens to center the 2 speakers */}
              <div className="hidden lg:block w-full"></div>
              <div className="hidden lg:block w-full"></div>
              {/* Last 2 speakers */}
              {SPEAKERS.slice(-2).map((speaker, index) => (
                <div key={speaker.id || SPEAKERS.length - 2 + index} className="w-full">
                  <SpeakerCard
                    index={SPEAKERS.length - 2 + index}
                    speaker={speaker}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

