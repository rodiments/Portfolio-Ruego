const Footer = () => {
  return (
    <footer className="mt-48 border-t border-zinc-800 bg-transparent py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-white">Rodelyn<span className="text-sky-500">.</span></h3>
            <p className="mt-4 text-base text-zinc-400 font-light leading-relaxed max-w-sm">
              Crafting thoughtful, user-centered digital experiences. Specializing in UI/UX design that solves real problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-sky-500 mb-6">Explore</h4>
            <div className="flex flex-col gap-3">
              <a href="/projects" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Work & Projects</a>
              <a href="/experience" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Experience</a>
              <a href="/certificates" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Certifications</a>
              <a href="/contact" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Contact</a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-sky-500 mb-6">Connect</h4>
            <div className="flex flex-col gap-3">
              <a href="https://www.facebook.com/rodelyn.lorica.ruego" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-sky-500 transition-all text-sm font-medium hover:translate-x-1 inline-block">Facebook →</a>
              <a href="mailto:rodelynruego8@gmail.com" className="text-zinc-400 hover:text-sky-500 transition-all text-sm font-medium hover:translate-x-1 inline-block">Email →</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-600">
            © 2026 Rodelyn. All rights reserved.
          </p>
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-600">
            Designed & Built with attention to detail.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;









