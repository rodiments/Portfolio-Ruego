import { motion } from 'framer-motion';
import photography1 from '../assets/images/First Year/IT111 Adventures/Rule of thirds.png';
import solarImage from '../assets/images/Fourth Year/Capstone/iOt.jpeg';

const projects = [
  {
    title: 'SolarTrack: An IoT Based Solar Panel Tracking & Monitoring',
    category: 'Capstone Project',
    description: 'High-efficiency dual-axis tracking system with a focus on intuitive UI/UX data visualization.',
    tags: ['IoT', 'UI/UX', 'Solar'],
    image: solarImage,
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Stock Inventory',
    category: 'Information Management',
    description: 'Efficient PHP-based data management.',
    tags: ['PHP', 'SQL'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Civil Registry System',
    category: 'System Design',
    description: 'A comprehensive multi-module data recording system for civil records.',
    tags: ['Java', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Visual Storytelling',
    category: 'Photography',
    description: 'Cinematic study of light and composition.',
    tags: ['Arts', 'Design'],
    image: photography1,
    className: 'md:col-span-3 md:row-span-1',
  },
];

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-10 md:grid-cols-3 md:grid-rows-3 px-0 sm:px-2">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`${project.className} group relative overflow-hidden rounded-[2.5rem] bg-zinc-950/40 border border-zinc-800 shadow-xl`}
        >
          {/* Image Layer */}
          <div className="absolute inset-0 z-0">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />
          </div>

          {/* Content Layer */}
          <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8 md:p-10">
            <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
              <span className="mb-4 inline-block text-xs font-black uppercase tracking-[0.4em] text-sky-500 group-hover:text-sky-400 transition-colors">
                {project.category}
              </span>
              <h3 className="mb-4 text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
                {project.title}
              </h3>
              <p className="mb-8 max-w-sm text-lg font-light leading-relaxed text-zinc-300 opacity-0 transition-all duration-500 group-hover:opacity-100">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-xl bg-sky-500/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-sky-400 backdrop-blur-md border border-sky-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              </div>
              </div>

              {/* Hover Border Glow */}
              <div className="absolute inset-0 border-2 border-sky-500/0 transition-all duration-500 group-hover:border-sky-500/30 rounded-[2.5rem]" />
        </motion.div>
      ))}
    </div>
  );
};

export default BentoGrid;









