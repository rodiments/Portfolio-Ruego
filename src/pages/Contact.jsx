import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';

const Contact = () => {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-32 sm:px-8 lg:px-12 pb-32">
      <div className="mb-20 text-center">
        <h1 className="text-6xl font-bold tracking-tight sm:text-7xl text-white">Get in <span className="text-emerald-500">Touch.</span></h1>
        <p className="mt-8 text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
          Always open to strategic partnerships, architectural discussions, and technical challenges.
        </p>
      </div>

      <GlassCard className="p-10 md:p-16 rounded-[3rem]">
        <form className="space-y-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <label className="block text-xs font-black text-zinc-500 mb-4 uppercase tracking-[0.3em]">Full Name</label>
              <input type="text" className="w-full rounded-2xl bg-zinc-950 border border-zinc-800 p-5 outline-none focus:border-emerald-500 transition-all text-lg text-white" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs font-black text-zinc-500 mb-4 uppercase tracking-[0.3em]">Email Address</label>
              <input type="email" className="w-full rounded-2xl bg-zinc-950 border border-zinc-800 p-5 outline-none focus:border-emerald-500 transition-all text-lg text-white" placeholder="john@example.com" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-black text-zinc-500 mb-4 uppercase tracking-[0.3em]">Message</label>
            <textarea className="w-full rounded-2xl bg-zinc-950 border border-zinc-800 p-5 h-56 outline-none focus:border-emerald-500 transition-all resize-none text-lg text-white" placeholder="Briefly describe your project or inquiry..."></textarea>
          </div>
          <button className="w-full rounded-2xl bg-emerald-600 py-6 font-bold text-white text-lg tracking-widest transition-all hover:bg-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/20 active:scale-[0.99]">
            DISPATCH MESSAGE
          </button>
        </form>
      </GlassCard>

      <div className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-3 text-center">
        <div className="p-10 rounded-[2rem] bg-zinc-900/30 border border-zinc-800 hover:border-emerald-500/20 transition-all">
          <h4 className="text-emerald-500 font-black mb-4 uppercase tracking-[0.4em] text-xs">Email</h4>
          <p className="text-zinc-400 text-lg font-medium hover:text-white transition-colors cursor-pointer">rodelyn@example.com</p>
        </div>
        <div className="p-10 rounded-[2rem] bg-zinc-900/30 border border-zinc-800 hover:border-emerald-500/20 transition-all">
          <h4 className="text-emerald-500 font-black mb-4 uppercase tracking-[0.4em] text-xs">LinkedIn</h4>
          <p className="text-zinc-400 text-lg font-medium hover:text-white transition-colors cursor-pointer">linkedin.com/in/rodelyn</p>
        </div>
        <div className="p-10 rounded-[2rem] bg-zinc-900/30 border border-zinc-800 hover:border-emerald-500/20 transition-all">
          <h4 className="text-emerald-500 font-black mb-4 uppercase tracking-[0.4em] text-xs">Location</h4>
          <p className="text-zinc-400 text-lg font-medium">Digital World, Mars</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
