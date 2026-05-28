import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-900 bg-zinc-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-8 lg:px-12">
        <Link to="/" className="flex items-center gap-4 text-2xl font-bold tracking-tighter group">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600 shadow-xl shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <span className="font-bold text-white">R</span>
          </div>
          <span className="text-white hidden sm:block group-hover:text-sky-500 transition-colors">
            Rodelyn
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-14">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-bold uppercase tracking-[0.25em] transition-all ${
                location.pathname === link.path 
                  ? 'text-sky-500'
                  : 'text-zinc-400'
              } hover:text-white`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 h-1 w-full bg-sky-500 rounded-full shadow-[0_0_12px_rgba(14,165,233,0.6)]"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute w-full border-b border-zinc-800 bg-zinc-950/40 px-6 py-12 md:hidden"
        >
          <div className="flex flex-col gap-10 text-center">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-bold uppercase tracking-[0.3em] transition-colors ${
                  location.pathname === link.path ? 'text-sky-500' : 'text-zinc-500'
                } hover:text-white`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;








