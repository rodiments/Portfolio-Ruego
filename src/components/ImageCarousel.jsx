import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const autoPlayTimerRef = useRef(null);

  // Advanced Auto-play with Pause on Hover
  useEffect(() => {
    if (isAutoPlay && !isHovered) {
      autoPlayTimerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    } else {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    }

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlay, isHovered, images.length]);

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const paginate = (newDirection) => {
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + images.length) % images.length);
    setIsAutoPlay(false);
    
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <div 
      className="relative overflow-hidden rounded-[2rem] bg-zinc-900 border border-zinc-800 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video flex items-center justify-center overflow-hidden bg-black/20">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              opacity: { duration: 0.8, ease: "easeInOut" }
            }}
            className="absolute h-full w-full object-contain p-6"
            alt={`${title} - image ${currentIndex + 1}`}
          />
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => paginate(-1)}
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black/60 text-white backdrop-blur-md border border-white/10 hover:bg-emerald-600 hover:scale-110 transition-all shadow-xl"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black/60 text-white backdrop-blur-md border border-white/10 hover:bg-emerald-600 hover:scale-110 transition-all shadow-xl"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Minimalist Progress Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/5">
          {images.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentIndex ? 'w-8 bg-emerald-500' : 'w-1.5 bg-zinc-600'
              }`}
            />
          ))}
        </div>
        
        {/* Page Counter */}
        <div className="absolute top-6 right-6 rounded-2xl bg-black/60 px-4 py-2 text-xs font-black uppercase tracking-widest text-zinc-300 backdrop-blur-md border border-white/10">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      
      {/* Refined Thumbnail Bar */}
      <div className="flex gap-4 p-4 overflow-x-auto bg-black/30 scrollbar-hide border-t border-zinc-800">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlay(false);
              setTimeout(() => setIsAutoPlay(true), 10000);
            }}
            className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-300 ${
              index === currentIndex 
              ? 'border-emerald-500 ring-4 ring-emerald-500/10 scale-[1.05]' 
              : 'border-transparent opacity-50 hover:opacity-100'
            }`}
          >
            <img src={image} className="h-full w-full object-cover" alt="" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
