/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Calendar, Clock, DoorOpen, ExternalLink, Maximize2 } from "lucide-react";
import { LOCATION_DATA } from "../constants";
import { GalleryModal } from "../components/GalleryModal";

export const LocationSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [showGallery, setShowGallery] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const location = LOCATION_DATA;

  const handleGoogleMapsClick = () => {
    if (location.googleMapsUrl) {
      window.open(location.googleMapsUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-32 px-4 overflow-hidden"
      id="location"
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}>
          
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/40 mb-6 backdrop-blur-sm"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}>
            <MapPin className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">
              Event Venue
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}>
            <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
              Event Location
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}>
            Venue information will be announced soon
          </motion.p>
        </motion.div>

        {/* Location Card */}
        <motion.div
          className="relative group max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.4 }}>
          
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/50 to-cyan-500/50 rounded-3xl blur-2xl opacity-0 group-hover:opacity-75 transition-opacity duration-500" />
          
          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-3xl border border-emerald-500/30 hover:border-emerald-400/70 overflow-hidden">
            
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.1),transparent)]" />
            
            {/* Top glow orb */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

            {/* Coming Soon Content */}
            <div className="relative p-12 md:p-16 lg:p-20 flex flex-col items-center justify-center min-h-[500px]">
              <motion.div
                className="text-center space-y-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.5 }}>
                
                {/* Coming Soon Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 backdrop-blur-sm mb-4"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.6 }}>
                  <Clock className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold text-sm md:text-base">
                    Coming Soon
                  </span>
                </motion.div>

                {/* Main Title */}
                <motion.h3
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 py-4 md:py-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}>
                  Venue Details Coming Soon
                </motion.h3>

                {/* Location Indicator */}
                <motion.div
                  className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.8 }}>
                  <MapPin className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <p className="text-xl md:text-2xl font-semibold text-white">
                    Singapore
                  </p>
                </motion.div>

                {/* Description */}
                <motion.p
                  className="text-gray-300 text-lg md:text-xl leading-relaxed mt-6"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}>
                  We are currently finalizing the venue details for this exceptional event. 
                  <br className="hidden md:block" />
                  <span className="text-emerald-400 font-medium">We will update this information soon.</span>
                </motion.p>

                {/* Decorative Elements */}
                <motion.div
                  className="flex items-center justify-center gap-2 mt-8"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}>
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom gradient bar */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500"
              initial={{ scaleX: 0 }}
              style={{ originX: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileInView={{ scaleX: 1 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Gallery Modal - Disabled for coming soon */}
      {/* <AnimatePresence>
        {showGallery && location.images && location.images.length > 0 && (
          <GalleryModal
            backdropGradient="from-brand-900/80 via-tech-green-700/70 to-tech-green-900"
            images={location.images}
            index={galleryIndex}
            onClose={() => setShowGallery(false)}
            onIndexChange={setGalleryIndex}
          />
        )}
      </AnimatePresence> */}
    </section>
  );
};

