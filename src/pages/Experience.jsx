import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';

const experiencesByYear = {
  '1st Year': [
    {
      title: 'Foundational Systems Design',
      company: 'Academic Milestone',
      period: 'Year 1',
      description: 'Explored initial web system architectures and user interface basics for information management platforms.',
      type: 'edu',
    },
  ],
  '2nd Year': [
    {
      title: 'Cisco Introduction to Packet Tracer',
      company: 'Cisco Networking Academy',
      period: 'Year 2',
      description: 'Gained expertise in network simulation and configuration through the Cisco Networking Academy.',
      type: 'edu',
    },
  ],
  '3rd Year': [
    {
      title: '3rd Place in the Level App 2.0 Pitching Competition',
      company: 'Level App 2.0',
      period: 'Year 3',
      description: 'Achieved 3rd place in a competitive pitching competition, showcasing innovation and entrepreneurial skills.',
      type: 'edu',
    },
    {
      title: 'Participation for Showcasing Startup Project',
      company: 'Startup Showcase',
      period: 'Year 3',
      description: 'Represented and showcased a startup project, demonstrating technical implementation and business potential.',
      type: 'edu',
    },
    {
      title: 'Competing for the Final Pitching',
      company: 'Pitching Competition',
      period: 'Year 3',
      description: 'Advanced to the final stages of a pitching competition, presenting strategic business models and technical solutions.',
      type: 'edu',
    },
    {
      title: 'Cisco Ethical Hacker',
      company: 'Cisco Networking Academy',
      period: 'Year 3',
      description: 'Completed professional certification in Ethical Hacking, mastering penetration testing and network security protocols.',
      type: 'edu',
    },
    {
      title: 'Advanced Seminar Series',
      company: 'Professional Development',
      period: 'Year 3',
      description: 'Engaged in professional development through advanced technical seminars, staying updated on industry trends and concepts.',
      type: 'edu',
    },
  ],
  '4th Year': [
    {
      title: 'Lead UI/UX & Systems Architect',
      company: 'Capstone (Solar Monitoring System)',
      period: 'Year 4 - Present',
      description: 'Leading the design and development of an IoT-based solar tracking dashboard, transforming raw data into actionable visual insights.',
      type: 'work',
    },
    {
      title: 'Professional Visual Storyteller',
      company: 'Freelance Photography',
      period: 'Year 4',
      description: 'Combining technical precision with artistic vision to deliver high-end photography and cinematic compositions.',
      type: 'work',
    },
  ],
};

const Experience = () => {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-32 sm:px-8 lg:px-12">
      <div className="mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block border-l-4 border-emerald-600 px-6 py-2 text-sm font-bold uppercase tracking-[0.3em] text-emerald-500"
        >
          Career Timeline
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-6xl font-bold tracking-tight text-white sm:text-7xl"
        >
          Professional <span className="text-emerald-500">Journey.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed"
        >
          The technical evolution from foundational logic to high-scale digital product architecture.
        </motion.p>
      </div>

      {Object.entries(experiencesByYear).map(([year, exps], yearIdx) => (
        <div key={year} className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center text-2xl font-black uppercase tracking-[0.4em] text-zinc-700"
          >
            {year}
          </motion.h2>
          <div className="relative space-y-16 before:absolute before:inset-0 before:ml-5 before:h-full before:w-px before:bg-zinc-800 md:before:mx-auto md:before:translate-x-0">
            {exps.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse"
              >
                {/* Minimalist Indicator */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
                  className="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 shadow-xl md:left-1/2 md:-ml-6 z-10"
                >
                  <div className={`h-3 w-3 rounded-full ${exp.type === 'work' ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.6)]' : 'bg-zinc-700'}`} />
                </motion.div>

                {/* Content */}
                <div className="ml-20 w-full md:ml-0 md:w-[45%]">
                  <GlassCard className="group hover:border-emerald-500/40 transition-all p-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-500 group-hover:text-emerald-400 transition-colors">
                      {exp.period}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-white transition-colors">{exp.title}</h3>
                    <p className="mt-1 text-lg font-medium text-zinc-400">{exp.company}</p>
                    <p className="mt-6 text-lg text-zinc-500 leading-relaxed font-light">{exp.description}</p>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
