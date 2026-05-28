import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import GlassCard from '../components/GlassCard';
import ImageCarousel from '../components/ImageCarousel';
import { Star, X, ArrowRight, Tag, Cpu } from 'lucide-react';

// --- IMAGE IMPORTS ---
import photography1 from '../assets/images/First Year/IT111 Adventures/Rule of thirds.png';
import photography2 from '../assets/images/First Year/IT111 Adventures/Fill the frame.png';
import photography3 from '../assets/images/First Year/IT111 Adventures/Leading Lines.png';
import photography4 from '../assets/images/First Year/IT111 Adventures/Rule of Space.png';
import photography5 from '../assets/images/First Year/IT111 Adventures/Portrait.jpg';
import photography6 from '../assets/images/First Year/IT111 Adventures/After edit.png';
import photography7 from '../assets/images/First Year/IT111 Adventures/Before edit.png';
import photography8 from '../assets/images/First Year/IT111 Adventures/Rule of evem.png';
import photography9 from '../assets/images/First Year/IT111 Adventures/Rule of thirdss.png';

import it211_1 from '../assets/images/First Year/IT211 Adventures/Final Project/Homepage.png';
import it211_2 from '../assets/images/First Year/IT211 Adventures/Final Project/1.png';
import it211_3 from '../assets/images/First Year/IT211 Adventures/Final Project/2.png';
import it211_4 from '../assets/images/First Year/IT211 Adventures/Final Project/3.png';
import it211_5 from '../assets/images/First Year/IT211 Adventures/Final Project/4.png';
import it211_6 from '../assets/images/First Year/IT211 Adventures/Final Project/5.png';

import periodicTable from '../assets/images/First Year/Web System/Periodic Table.png';
import flight1 from '../assets/images/First Year/Web System/Booking Flight System/1.png';
import flight2 from '../assets/images/First Year/Web System/Booking Flight System/2.png';
import flight3 from '../assets/images/First Year/Web System/Booking Flight System/3.png';
import flight4 from '../assets/images/First Year/Web System/Booking Flight System/4.png';
import flight5 from '../assets/images/First Year/Web System/Booking Flight System/450579710_1008812213791458_3873051699732865062_n.png';
import flight6 from '../assets/images/First Year/Web System/Booking Flight System/5.png';
import flight7 from '../assets/images/First Year/Web System/Booking Flight System/6.png';

import dell1 from '../assets/images/First Year/Web System/Dell/1.png';
import dell2 from '../assets/images/First Year/Web System/Dell/2.png';
import dell3 from '../assets/images/First Year/Web System/Dell/3.png';
import dell4 from '../assets/images/First Year/Web System/Dell/4.png';

import php1 from '../assets/images/Second Year/IT221 and PHP/1.png';
import php2 from '../assets/images/Second Year/IT221 and PHP/2.png';
import php3 from '../assets/images/Second Year/IT221 and PHP/3.png';
import php4 from '../assets/images/Second Year/IT221 and PHP/4.png';
import php5 from '../assets/images/Second Year/IT221 and PHP/5.png';
import php6 from '../assets/images/Second Year/IT221 and PHP/6.png';
import php7 from '../assets/images/Second Year/IT221 and PHP/7.png';

import it223_1 from '../assets/images/Second Year/IT223/1.png';
import it223_2 from '../assets/images/Second Year/IT223/2.png';
import it223_3 from '../assets/images/Second Year/IT223/3.png';
import it223_4 from '../assets/images/Second Year/IT223/4.png';
import it223_5 from '../assets/images/Second Year/IT223/5.png';

// --- FOURTH YEAR / CAPSTONE ---
import solarImage from '../assets/images/Fourth Year/Capstone/iOt.jpeg';

// --- THIRD YEAR ---
import cipher1 from '../assets/images/Third Year/Cipher Application/26346.jpg';
import cipher2 from '../assets/images/Third Year/Cipher Application/26347.jpg';
import cipher3 from '../assets/images/Third Year/Cipher Application/26348.jpg';
import cipher4 from '../assets/images/Third Year/Cipher Application/26349.jpg';
import cipher5 from '../assets/images/Third Year/Cipher Application/26350.jpg';

const academicContent = [
  {
    id: 'capstone',
    year: 'Current / Capstone',
    title: 'SolarTrack: An IoT Based Solar Panel Tracking and Monitoring System',
    summary: 'The culmination of my engineering journey—where hardware precision meets user-centric dashboard design to solve real-world sustainability challenges.',
    description: 'A sophisticated dual-axis solar tracking system integrated with an IoT dashboard for real-time performance monitoring and efficiency analysis. This project emphasizes user-centric dashboard design and sustainable energy data visualization.',
    tags: ['IoT', 'UI/UX', 'Sustainability', 'Sensors'],
    image: solarImage,
    isFeatured: true,
    role: 'Lead UI/UX & Systems Architect',
    outcome: 'Deployment Phase'
  },
  {
    id: 'year3',
    year: 'Third Year',
    summary: 'A year of specialization—shifting focus toward the intersection of complex system security and intuitive interaction design.',
    projects: [
      {
        title: 'Advanced Cipher Application',
        description: 'A secure encryption/decryption platform implementing multiple cryptographic algorithms. Focused on creating a streamlined UI/UX for complex security operations, ensuring technical power is accessible to users.',
        tags: ['Cryptography', 'UI/UX', 'Security', 'Java'],
        isCarousel: true,
        carouselImages: [cipher1, cipher2, cipher3, cipher4, cipher5],
        role: 'Full-stack Developer & Designer'
      }
    ]
  },
  {
    id: 'year2',
    year: 'Second Year',
    summary: 'Strengthening the technical backbone—focusing on robust backend logic, database integrity, and algorithmic efficiency.',
    projects: [
      {
        title: 'IT221 & PHP: Advanced Web Development',
        description: 'Deep dive into dynamic applications focusing on backend integration and complex user authentication.',
        tags: ['PHP', 'MySQL', 'Backend'],
        isCarousel: true,
        carouselImages: [php1, php2, php3, php4, php5, php6, php7],
        role: 'Full-stack Developer'
      },
      {
        title: 'IT223: Data Structures & Algorithms',
        description: 'Implementation of complex algorithmic solutions and efficient data processing patterns.',
        tags: ['Java', 'Algorithms', 'DSA'],
        isCarousel: true,
        carouselImages: [it223_1, it223_2, it223_3, it223_4, it223_5],
        role: 'Systems Engineer'
      }
    ]
  },
  {
    id: 'year1',
    year: 'First Year',
    summary: 'Discovering the fundamentals—exploring the synergy between visual composition and structured system design.',
    projects: [
      {
        title: 'IT111: Digital Photography',
        description: 'Mastery of fundamental photography principles including Rule of Thirds and Leading Lines.',
        tags: ['Photography', 'Design'],
        isCarousel: true,
        carouselImages: [photography1, photography2, photography3, photography4, photography5, photography6, photography7, photography8, photography9],
        role: 'Visual Designer'
      },
      {
        title: 'IT211: Systems Design',
        description: 'Comprehensive information technology project demonstrating full-system architecture.',
        tags: ['UI/UX', 'Architecture'],
        isCarousel: true,
        carouselImages: [it211_1, it211_2, it211_3, it211_4, it211_5, it211_6],
        role: 'UI Designer'
      },
      {
        title: 'Flight Booking Platform',
        description: 'Full-featured web application for flight reservations with optimized user experience.',
        tags: ['Web App', 'Frontend'],
        isCarousel: true,
        carouselImages: [flight1, flight2, flight3, flight4, flight5, flight6, flight7],
        role: 'Web Developer'
      }
    ]
  }
];

const Projects = () => {
  const [activeYear, setActiveYear] = useState('capstone');
  const [savedProjects, setSavedProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  // Scroll Spy Implementation
  useEffect(() => {
    const sectionIds = ['capstone', 'year3', 'year2', 'year1'];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveYear(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('savedProjects');
    if (saved) setSavedProjects(JSON.parse(saved));
  }, []);

  const toggleSave = (e, title) => {
    e.stopPropagation();
    setSavedProjects(prev => {
      const next = prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title];
      localStorage.setItem('savedProjects', JSON.stringify(next));
      return next;
    });
  };

  const scrollToSection = (id) => {
    setActiveYear(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 md:pt-32 lg:px-12">
      {/* Header Section */}
      <header className="mb-16 sm:mb-20 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 inline-block border-l-4 border-sky-600 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-500 sm:mb-6 sm:px-6 sm:text-sm"
        >
          Project Showcase
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold tracking-tight text-white mb-4 sm:text-4xl sm:mb-6 md:text-5xl lg:text-6xl"
        >
          Design & Development <span className="text-sky-500">Journey</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-zinc-400 font-light leading-relaxed max-w-3xl sm:text-base md:text-lg lg:text-xl"
        >
          Exploring the intersection of thoughtful design and technical execution. Each project represents a learning milestone in my journey as a UI/UX designer and developer.
        </motion.p>
      </header>

      {/* Floating Quick Nav */}
      <nav className="sticky top-20 z-40 mb-12 sm:mb-16 md:mb-20 flex justify-center overflow-x-auto">
        <div className="flex items-center gap-1 sm:gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-1 sm:p-2 backdrop-blur-xl shadow-2xl">
          {academicContent.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-4 py-2 sm:px-6 sm:py-3 text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all rounded-lg sm:rounded-xl ${
                activeYear === section.id 
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-500/20' 
                : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {section.year.split(' ')[0]}
            </button>
          ))}
        </div>
      </nav>

      {/* Dynamic Content Sections */}
      {academicContent.map((section) => (
        <section key={section.id} id={section.id} className="mb-16 sm:mb-32 md:mb-48 scroll-mt-32">
          {/* Section Heading */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 sm:mb-12 md:mb-16 flex flex-col border-b border-zinc-800 pb-4 sm:pb-8 md:pb-10"
          >
            <div className="flex items-end justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-500 md:text-xs">{section.year}</span>
                <h2 className="mt-2 text-xl font-bold text-white sm:text-3xl md:text-4xl sm:mt-3">{section.isFeatured ? 'Primary Milestone' : 'Academic Explorations'}</h2>
              </div>
            </div>
            {section.summary && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-3 max-w-4xl text-xs text-zinc-400 font-light italic leading-relaxed sm:mt-5 sm:text-base md:mt-6 md:text-lg"
              >
                {section.summary}
              </motion.p>
            )}
          </motion.div>

          {section.isFeatured ? (
            /* Featured Capstone Layout */
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[3rem] bg-zinc-950/40 border border-zinc-800 shadow-2xl cursor-pointer hover:border-sky-600/40 transition-colors"
              onClick={() => setSelectedProject({ ...section, section: section })}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                  <img src={section.image} alt={section.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent lg:bg-gradient-to-r" />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-10 md:p-12 lg:p-20">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-4 sm:mb-6 md:mb-8 flex gap-3 sm:gap-4"
                  >
                    <span className="flex items-center gap-2 rounded-full bg-sky-600/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-sky-400 border border-sky-500/20 sm:px-4 sm:py-2 sm:text-[10px]">
                      <Cpu size={12} className="sm:w-4 sm:h-4" /> Systems Engineering
                    </span>
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl font-bold text-white mb-3 leading-tight sm:text-3xl md:text-4xl lg:text-5xl md:mb-4 lg:mb-6"
                  >
                    {section.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-zinc-400 text-xs font-light leading-relaxed mb-6 sm:text-base md:text-lg md:mb-8 lg:mb-10"
                  >
                    {section.description}
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-2 gap-4 mb-6 border-y border-zinc-800 py-4 sm:gap-8 sm:mb-10 md:gap-10 md:py-10 md:mb-12"
                  >
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600 block mb-1 sm:text-xs sm:mb-2">Role</span>
                      <span className="text-white text-xs sm:text-base md:text-lg font-medium">{section.role}</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600 block mb-1 sm:text-xs sm:mb-2">Status</span>
                      <span className="text-white text-xs sm:text-base md:text-lg font-medium">{section.outcome}</span>
                    </div>
                  </motion.div>

                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="flex flex-wrap gap-2"
                    >
                      {section.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-lg bg-sky-600/10 text-sky-400 text-[9px] font-bold border border-sky-500/20 uppercase tracking-widest sm:px-5 sm:py-2 sm:rounded-xl sm:text-xs">
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                    
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                      className="group/btn flex items-center justify-center gap-3 rounded-xl bg-sky-600 px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg shadow-sky-500/20 transition-all hover:bg-sky-500 hover:shadow-sky-500/40 sm:rounded-2xl sm:px-8 sm:py-4 sm:text-sm"
                    >
                      View Details <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1 sm:w-[18px] sm:h-[18px]" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* Cinematic Grid for Regular Projects */
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
              className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-10 lg:gap-12"
            >
              {section.projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.98 },
                    show: { opacity: 1, y: 0, scale: 1 }
                  }}
                  transition={{ duration: 0.6 }}
                  className="group relative flex flex-col rounded-[2rem] bg-zinc-950/40 border border-zinc-800 overflow-hidden transition-all hover:border-sky-600/40 shadow-xl cursor-pointer hover:shadow-[0_20px_60px_rgba(14,165,233,0.05)] md:rounded-[2.5rem]"
                  onClick={() => setSelectedProject({ ...project, section: section })}
                >
                  <div className="p-4 sm:p-6">
                    {project.isCarousel ? (
                      <ImageCarousel images={project.carouselImages} title={project.title} />
                    ) : (
                      <div className="aspect-video overflow-hidden rounded-[1.2rem] sm:rounded-[1.5rem]">
                        <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 pt-0 sm:p-10 sm:pt-4">
                    <div className="mb-4 flex items-center justify-between sm:mb-6">
                      <span className="text-[10px] font-black uppercase tracking-widest text-sky-500">{project.role}</span>
                      <button 
                        onClick={(e) => toggleSave(e, project.title)}
                        className={`p-2 rounded-lg transition-colors sm:p-3 sm:rounded-xl ${savedProjects.includes(project.title) ? 'text-sky-500 bg-sky-500/10' : 'text-zinc-600 hover:text-white hover:bg-zinc-800'}`}
                      >
                        <Star size={16} fill={savedProjects.includes(project.title) ? "currentColor" : "none"} className="sm:w-[18px] sm:h-[18px]" />
                      </button>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight sm:text-2xl sm:mb-4">{project.title}</h3>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6 sm:text-lg sm:mb-8">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8 sm:gap-3 sm:mb-10">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 rounded-lg bg-zinc-950/40 text-zinc-400 text-[9px] font-black uppercase tracking-widest border border-zinc-800 group-hover:border-sky-600/20 transition-colors sm:px-4 sm:py-2 sm:rounded-xl sm:text-[10px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div 
                      className="mt-auto flex items-center justify-center gap-3 rounded-xl bg-sky-600/10 py-4 text-[10px] font-bold uppercase tracking-widest text-sky-500 border border-sky-500/20 transition-all group-hover:bg-sky-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-sky-500/20 sm:rounded-2xl sm:py-5 sm:text-sm"
                    >
                      View Details <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 sm:w-[18px] sm:h-[18px]" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </section>
      ))}

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 rounded-[2rem] border border-zinc-800 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-[0_20px_100px_rgba(0,0,0,0.8)] sm:rounded-[2.5rem]"
            >
              {/* Modal Header with Close */}
              <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-zinc-800 bg-zinc-900/95 backdrop-blur sm:p-8">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-500 mb-1 sm:text-xs sm:mb-2">
                    {selectedProject.section?.year || 'Project'}
                  </p>
                  <h2 className="text-xl font-bold text-white sm:text-3xl">{selectedProject.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors text-white sm:p-3 sm:rounded-xl"
                >
                  <X size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 md:p-12">
                {/* Gallery/Images */}
                <div className="mb-8 sm:mb-12">
                  {selectedProject.isCarousel ? (
                    <div className="rounded-[1.2rem] overflow-hidden border border-zinc-800 shadow-lg sm:rounded-[1.5rem]">
                      <ImageCarousel images={selectedProject.carouselImages} title={selectedProject.title} />
                    </div>
                  ) : (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full rounded-[1.2rem] object-cover border border-zinc-800 shadow-md sm:rounded-[1.5rem]"
                    />
                  )}
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 sm:gap-8 sm:mb-12">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-1 sm:text-xs sm:mb-2">Role</p>
                    <p className="text-sm font-semibold text-white sm:text-lg">{selectedProject.role || 'Designer'}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-1 sm:text-xs sm:mb-2">Duration</p>
                    <p className="text-sm font-semibold text-white sm:text-lg">{selectedProject.section?.year || 'Ongoing'}</p>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-1 sm:text-xs sm:mb-2">Status</p>
                    <p className="text-sm font-semibold text-sky-600 sm:text-lg">{selectedProject.outcome || 'Completed'}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8 sm:mb-12">
                  <h3 className="text-lg font-bold text-white mb-3 sm:text-2xl sm:mb-4">About This Project</h3>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed mb-4 sm:text-lg sm:mb-6">
                    {selectedProject.description}
                  </p>
                  {selectedProject.summary && (
                    <p className="text-xs text-zinc-500 font-light italic leading-relaxed border-l-4 border-sky-500/30 pl-4 sm:text-base">
                      {selectedProject.summary}
                    </p>
                  )}
                </div>

                {/* Technologies/Tags */}
                <div className="mb-8 sm:mb-12">
                  <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2 sm:text-xl sm:mb-6">
                    <Tag size={18} className="text-sky-500 sm:w-5 sm:h-5" />
                    Technologies & Skills
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {selectedProject.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="px-3 py-1.5 rounded-lg bg-sky-600/10 text-sky-400 border border-sky-500/30 font-semibold text-[10px] uppercase tracking-wide hover:bg-sky-600/20 transition-colors sm:px-5 sm:py-3 sm:rounded-xl sm:text-sm"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-4 pt-6 border-t border-zinc-800 sm:pt-8"
                >
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 rounded-xl bg-sky-600 text-white font-bold py-3 px-6 transition-all hover:bg-sky-500 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] uppercase tracking-wide text-xs sm:py-4 sm:text-sm"
                  >
                    Close
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;









