import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';

const Contact = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-24 sm:px-6 md:pt-32 lg:px-12 pb-20 sm:pb-32">
      <div className="mb-12 text-center sm:mb-20">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">Get in <span className="text-sky-500">Touch.</span></h1>
        <p className="mt-4 text-sm text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed sm:mt-6 sm:text-base md:mt-8 md:text-lg">
          Always open to strategic partnerships, architectural discussions, and technical challenges.
        </p>
      </div>

      <GlassCard className="p-6 sm:p-10 md:p-16 rounded-[2rem] sm:rounded-[3rem]">
        <form className="space-y-6 sm:space-y-8 md:space-y-10">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-10">
            <div>
              <label className="block text-[10px] font-black text-zinc-500 mb-2 uppercase tracking-[0.2em] sm:mb-3 sm:text-xs">Full Name</label>
              <input type="text" className="w-full rounded-xl sm:rounded-2xl bg-zinc-950/40 border border-zinc-800 p-3 sm:p-4 md:p-5 outline-none focus:border-sky-500 transition-all text-sm sm:text-lg text-white" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-[10px] font-black text-zinc-500 mb-2 uppercase tracking-[0.2em] sm:mb-3 sm:text-xs">Email Address</label>
              <input type="email" className="w-full rounded-xl sm:rounded-2xl bg-zinc-950/40 border border-zinc-800 p-3 sm:p-4 md:p-5 outline-none focus:border-sky-500 transition-all text-sm sm:text-lg text-white" placeholder="john@example.com" />
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-black text-zinc-500 mb-2 uppercase tracking-[0.2em] sm:mb-3 sm:text-xs">Message</label>
            <textarea className="w-full rounded-xl sm:rounded-2xl bg-zinc-950/40 border border-zinc-800 p-3 sm:p-4 md:p-5 h-32 sm:h-56 outline-none focus:border-sky-500 transition-all resize-none text-sm sm:text-lg text-white" placeholder="Briefly describe your project or inquiry..."></textarea>
          </div>
          <button className="w-full rounded-xl sm:rounded-2xl bg-sky-600 py-4 sm:py-5 md:py-6 font-bold text-white text-xs sm:text-base md:text-lg tracking-widest transition-all hover:bg-sky-500 hover:shadow-2xl hover:shadow-sky-500/20 active:scale-[0.99]">
            DISPATCH MESSAGE
          </button>
        </form>
      </GlassCard>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-8 md:gap-12 md:grid-cols-3 text-center sm:mt-16 md:mt-24">
        <div className="p-6 rounded-2xl bg-zinc-950/40 border border-zinc-800 hover:border-sky-500/20 transition-all sm:p-8 md:p-10 sm:rounded-[2rem]">
          <h4 className="text-sky-500 font-black mb-2 uppercase tracking-[0.3em] text-[10px] sm:mb-4 sm:text-xs">Email</h4>
          <p className="text-zinc-400 text-xs font-medium hover:text-white transition-colors cursor-pointer sm:text-base md:text-lg">rodelynruego8@gmail.com</p>
        </div>
        <div className="p-6 rounded-2xl bg-zinc-950/40 border border-zinc-800 hover:border-sky-500/20 transition-all sm:p-8 md:p-10 sm:rounded-[2rem]">
          <h4 className="text-sky-500 font-black mb-2 uppercase tracking-[0.3em] text-[10px] sm:mb-4 sm:text-xs">Facebook</h4>
          <p className="text-zinc-400 text-xs font-medium hover:text-white transition-colors cursor-pointer sm:text-base md:text-lg">Rodelyn Lorica Ruego</p>
        </div>
        <div className="p-6 rounded-2xl bg-zinc-950/40 border border-zinc-800 hover:border-sky-500/20 transition-all sm:p-8 md:p-10 sm:rounded-[2rem]">
          <h4 className="text-sky-500 font-black mb-2 uppercase tracking-[0.3em] text-[10px] sm:mb-4 sm:text-xs">Location</h4>
          <p className="text-zinc-400 text-xs font-medium sm:text-base md:text-lg">Philippines, Davao del Norte</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;









