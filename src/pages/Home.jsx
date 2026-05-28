import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import BentoGrid from '../components/BentoGrid';
import profilePic from '../assets/images/Me.jpg';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative mx-auto max-w-7xl px-6 pt-32 sm:px-8 lg:px-12">
      {/* Subtle Page Gradient */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 h-[800px] w-[800px] rounded-full bg-sky-400/10 blur-[120px] opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 h-[600px] w-[600px] rounded-full bg-indigo-400/10 blur-[100px] opacity-30" />
      </div>

      {/* Hero Section */}
      <section className="mb-48 flex flex-col items-center justify-between gap-20 md:flex-row md:text-left">
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full bg-sky-500/10 px-6 py-2 text-sm font-semibold tracking-wider text-sky-600 border border-sky-500/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            UI/UX Designer & Digital Craftsperson
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl leading-tight"
          >
            Hi, I'm <span className="text-sky-600">Rodelyn</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-10 max-w-2xl text-xl font-light leading-relaxed tracking-wide text-zinc-400 sm:text-2xl"
          >
            I design <span className="text-white font-medium">beautiful, intuitive digital experiences</span> that solve real problems. Specializing in user-centered design, accessible interfaces, and creating seamless interactions that users love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-14 flex flex-wrap justify-center gap-6 md:justify-start"
          >
            <button 
              onClick={() => navigate('/projects')}
              className="group relative overflow-hidden rounded-2xl bg-sky-600 px-10 py-5 text-sm font-bold tracking-widest text-white transition-all hover:bg-sky-500 hover:shadow-[0_0_40px_rgba(14,165,233,0.4)] active:scale-95 cursor-pointer"
            >
              EXPLORE MY WORK
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="group relative rounded-2xl border border-sky-500/50 bg-sky-500/5 px-10 py-5 text-sm font-bold tracking-widest text-sky-600 transition-all hover:border-sky-400 hover:bg-sky-500/10 hover:text-sky-700 active:scale-95 cursor-pointer"
            >
              START A PROJECT
            </button>
          </motion.div>
        </div>

        {/* Enhanced Profile Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Visible Pulse Ring */}
          <motion.div 
            animate={{ 
              scale: [1, 1.3],
              opacity: [0.8, 0],
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              repeatDelay: 0.5,
              ease: "easeOut" 
            }}
            className="absolute -inset-8 rounded-full border-2 border-sky-500/60 z-0" 
          />

          {/* Rotating Gradient Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-16 rounded-full border border-sky-500/20 border-dashed" 
          />
          
          <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-sky-500/30 shadow-[0_0_40px_rgba(14,165,233,0.2)] sm:h-96 sm:w-96 lg:h-[480px] lg:w-[480px] z-10 transition-all duration-700 hover:shadow-[0_0_60px_rgba(14,165,233,0.3)]">
            <img
              src={profilePic}
              alt="Rodelyn"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent" />
          </div>
          
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-8 py-3 text-xs font-black uppercase tracking-[0.5em] bg-sky-600 text-white shadow-[0_10px_40px_rgba(14,165,233,0.3)] rounded-full z-20">
            DESIGNER
          </div>
        </motion.div>
      </section>

      {/* Expertise Section */}
      <section className="mb-32">
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
          <motion.div 
            whileHover={{ backgroundColor: "rgba(14,165,233,0.03)" }}
            className="group border-b border-zinc-800 p-16 transition-all md:border-r"
          >
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-sky-600">User Interface Design</h3>
            <p className="mt-6 text-2xl font-light tracking-wide text-zinc-300 leading-relaxed">
              Creating visually stunning, accessible, and responsive interfaces that delight users across all devices.
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ backgroundColor: "rgba(14,165,233,0.03)" }}
            className="group border-b border-zinc-800 p-16 transition-all"
          >
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-sky-600">User Experience Design</h3>
            <p className="mt-6 text-2xl font-light tracking-wide text-zinc-300 leading-relaxed">
              Designing intuitive user journeys through research-backed insights, prototyping, and iterative design thinking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-48">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-[0.2em] text-white">Technical Arsenal</h2>
          <div className="h-1.5 w-20 bg-sky-600 mx-auto mt-4" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { category: "Frontend", skills: ["React", "JavaScript", "Tailwind", "Responsive Design"] },
            { category: "Backend", skills: ["PHP", "Node.js", "MySQL"] },
            { category: "Design Tools", skills: ["Figma", "Prototyping"] },
            { category: "Other", skills: ["Adobe Creative", "Photography", "Web Design"] }
          ].map((stack) => (
            <div
              key={stack.category}
              className="group relative rounded-[2.5rem] bg-zinc-950 p-8 border border-zinc-800 transition-all hover:border-sky-500/40 hover:shadow-[0_20px_50px_rgba(14,165,233,0.05)] overflow-hidden flex flex-col h-full"
            >
              {/* Background Glow */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-500/5 blur-3xl group-hover:bg-sky-500/10 transition-colors" />
              
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-sky-400 mb-8 relative z-10">{stack.category}</h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {stack.skills.map(skill => (
                  <span key={skill} className="px-4 py-2 rounded-xl bg-zinc-900/80 text-zinc-100 text-[10px] font-bold uppercase tracking-widest border border-zinc-800 group-hover:border-sky-500/30 transition-colors shadow-sm whitespace-nowrap">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section className="mb-48">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-[0.2em] text-white">Design Philosophy</h2>
          <div className="h-1.5 w-20 bg-sky-600 mx-auto mt-4" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "User-Centered",
              description: "Every design decision is rooted in understanding user needs, behaviors, and pain points through research and empathy."
            },
            {
              title: "Accessibility First",
              description: "I create inclusive designs that work for everyone, ensuring interfaces are accessible, intuitive, and easy to navigate."
            },
            {
              title: "Simplicity & Clarity",
              description: "Removing complexity to reveal elegance. Clear communication through thoughtful typography, spacing, and visual hierarchy."
            }
          ].map((philosophy, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-[2.5rem] bg-zinc-950 p-12 border border-zinc-800 hover:border-sky-500/20 hover:border-sky-500/50 transition-all shadow-sm hover:shadow-md"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{philosophy.title}</h3>
              <p className="text-lg text-zinc-400 font-light leading-relaxed">{philosophy.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Works Preview */}
      <section className="mb-48">
        <div className="mb-16 flex items-end justify-between px-2">
          <h2 className="text-3xl font-bold uppercase tracking-[0.2em] text-white">Featured Work</h2>
          <button 
            onClick={() => navigate('/projects')} 
            className="text-xs font-black uppercase tracking-[0.4em] text-sky-600 hover:text-white transition-all hover:translate-x-2 cursor-pointer"
          >
            VIEW ALL PROJECTS →
          </button>
        </div>
        <BentoGrid />
      </section>

      {/* Call to Action Section */}
      <section className="mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-sky-500/10 to-blue-600/5 border border-sky-500/30 p-20 text-center backdrop-blur-sm shadow-xl"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute -left-1/2 top-0 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[100px]" />
            <div className="absolute -right-1/2 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[100px]" />
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Let's Create Something <span className="text-sky-600">Beautiful Together</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-zinc-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Whether you need a complete design system, user experience overhaul, or a collaborative design partner, I'm ready to bring your vision to life with thoughtful, user-centered design.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            onClick={() => navigate('/contact')}
            className="inline-block rounded-2xl bg-sky-600 px-12 py-6 text-sm font-bold tracking-widest text-white transition-all hover:bg-sky-500 hover:shadow-[0_0_50px_rgba(14,165,233,0.4)] active:scale-95 cursor-pointer"
          >
            GET IN TOUCH
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;



