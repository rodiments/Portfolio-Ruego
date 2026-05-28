import { motion } from 'framer-motion';

const GlassCard = ({ children, className = "", hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { 
        y: -12, 
        transition: { duration: 0.4, ease: "easeOut" } 
      } : {}}
      className={`relative overflow-hidden rounded-[2.5rem] border border-zinc-800 bg-zinc-900/40 p-12 backdrop-blur-xl transition-all hover:border-emerald-500/40 hover:bg-zinc-900/60 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] ${className}`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </motion.div>
  );
};

export default GlassCard;
