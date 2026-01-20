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
      className="relative min-h-screen flex items-center justify-center py-12 px-4 overflow-hidden"
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
          className="text-center mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}>
          
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/40 mb-4 backdrop-blur-sm"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}>
            <MapPin className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">
              Event Venue
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-4"
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
            Join us at an exceptional venue in the heart of Singapore
          </motion.p>
        </motion.div>

        {/* Location Card with Gallery on Left */}
        <motion.div
          className="relative group max-w-7xl mx-auto"
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

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Gallery on Left - 4 Photo Grid */}
              {location.images && location.images.length > 0 && (
                <motion.div
                  className="relative p-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: 0.5 }}>
                  <div className="grid grid-cols-2 gap-2 h-full min-h-[500px] lg:min-h-[600px]">
                    {location.images.slice(0, 4).map((image, idx) => (
                      <div
                        key={idx}
                        className="relative overflow-hidden rounded-lg cursor-pointer group"
                        onClick={() => {
                          setGalleryIndex(idx);
                          setShowGallery(true);
                        }}>
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Venue Details on Right */}
              <div className="relative p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.8, delay: 0.6 }}>
                  
                  {/* Date Badge */}
                  {location.date && (
                    <motion.div
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 backdrop-blur-sm"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.7 }}>
                      <Calendar className="w-5 h-5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold text-sm md:text-base">
                        {location.date}
                      </span>
                    </motion.div>
                  )}

                  {/* Main Title */}
                  <motion.h3
                    className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}>
                    {location.title}
                  </motion.h3>

                  {/* Location Details */}
                  <div className="space-y-4">
                    {/* Address */}
                    <motion.div
                      className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 backdrop-blur-sm"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.6, delay: 0.9 }}>
                      <MapPin className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-emerald-400 font-semibold mb-1">Address</p>
                        <p className="text-white text-lg">
                          {location.address}
                        </p>
                      </div>
                    </motion.div>

                    {/* Additional Info */}
                    {location.additionalInfo && (
                      <motion.div
                        className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.6, delay: 1.0 }}>
                        <DoorOpen className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-emerald-400 font-semibold mb-1">Facilities</p>
                          <p className="text-white text-lg">
                            {location.additionalInfo}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Action Button */}
                  {location.googleMapsUrl && (
                    <motion.div
                      className="pt-4"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.8, delay: 1.1 }}>
                      <button
                        onClick={handleGoogleMapsClick}
                        className="group w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 rounded-lg font-semibold text-gray-900 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50">
                        <MapPin className="w-5 h-5" />
                        View on Google Maps
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              </div>
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

      {/* Gallery Modal */}
      <AnimatePresence>
        {showGallery && location.images && location.images.length > 0 && (
          <GalleryModal
            backdropGradient="from-brand-900/80 via-tech-green-700/70 to-tech-green-900"
            images={location.images}
            index={galleryIndex}
            onClose={() => setShowGallery(false)}
            onIndexChange={setGalleryIndex}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

