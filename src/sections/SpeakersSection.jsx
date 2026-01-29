/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mic } from "lucide-react";
import { SPEAKERS } from "../constants";

const CARD_MIN_HEIGHT = 420;

const SpeakerCard = ({ speaker, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const isExclusive = Boolean(speaker.isExclusive);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative w-full h-full flex"
    >
      {/* Glow (exclusive only) */}
      {isExclusive && (
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/70 via-emerald-500/70 to-cyan-500/70 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 -z-10" />
      )}

      {/* Card */}
      <motion.div
        className={`relative w-full h-full flex flex-col bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl overflow-hidden border ${
          isExclusive
            ? "border-2 border-emerald-400/60 shadow-xl shadow-emerald-500/20 hover:border-emerald-300/80"
            : "border border-emerald-500/30 hover:border-emerald-400/60"
        }`}
        style={{ minHeight: CARD_MIN_HEIGHT }}
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Exclusive badge */}
        {isExclusive && (
          <div className="absolute top-3 right-3 z-10 px-2.5 py-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-white text-xs font-bold shadow-lg">
            EXCLUSIVE
          </div>
        )}

        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.15),transparent)] pointer-events-none" />

        {/* Content */}
        <div className="relative flex flex-col items-center text-center p-6 sm:p-8 flex-1">
          {/* Avatar */}
          <div className="relative mb-4 flex-shrink-0">
            <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-emerald-500/50 group-hover:border-emerald-400 transition-colors duration-300">
              <img
                alt={speaker.fullName}
                className="w-full h-full object-cover"
                src={speaker.image}
              />
            </div>
          </div>

          {/* Name */}
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2 line-clamp-2">
            {speaker.fullName}
          </h3>

          {/* Job title */}
          <p className="text-emerald-400 font-semibold text-sm sm:text-base mb-1 line-clamp-2 min-h-[2.5rem] flex items-center justify-center">
            {speaker.jobTitle}
          </p>

          {/* Company */}
          <p className="text-gray-400 text-sm sm:text-base line-clamp-2 min-h-[2.5rem] flex items-center justify-center">
            {speaker.company}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const SpeakersSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  const hasLastRowOfTwo = SPEAKERS.length > 4 && SPEAKERS.length % 4 === 2;
  const firstRowSpeakers = hasLastRowOfTwo ? SPEAKERS.slice(0, -2) : SPEAKERS;
  const lastRowSpeakers = hasLastRowOfTwo ? SPEAKERS.slice(-2) : [];

  return (
    <section
      ref={containerRef}
      id="speakers"
      className="relative min-h-screen flex items-center justify-center py-12 px-4 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Mic className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">Industry Experts</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Our Speakers
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Learn from leading experts in AI, Cybersecurity, and Enterprise Technology
          </p>
        </motion.div>

        {/* Speakers grid */}
        <div className="space-y-6">
          {/* First row(s) - all speakers except last 2 when we have a partial row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full justify-items-center items-stretch">
            {firstRowSpeakers.map((speaker, index) => (
              <div key={speaker.id ?? index} className="w-full max-w-[320px] flex">
                <SpeakerCard speaker={speaker} index={index} />
              </div>
            ))}
          </div>

          {/* Last row: 2 speakers centered (when 6, 10, 14... speakers) */}
          {lastRowSpeakers.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center items-stretch w-full">
              <div className="hidden lg:block w-full max-w-[320px]" aria-hidden />
              {lastRowSpeakers.map((speaker, index) => (
                <div
                  key={speaker.id ?? firstRowSpeakers.length + index}
                  className="w-full max-w-[320px] flex"
                >
                  <SpeakerCard
                    speaker={speaker}
                    index={firstRowSpeakers.length + index}
                  />
                </div>
              ))}
              <div className="hidden lg:block w-full max-w-[320px]" aria-hidden />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
