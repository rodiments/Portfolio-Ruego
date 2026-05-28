import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

// Import local certificate images
import cert1 from '../assets/images/Certificates/1.jpg';
import cert2 from '../assets/images/Certificates/2.jpg';
import cert3 from '../assets/images/Certificates/3.jpg';
import cert4 from '../assets/images/Certificates/4.jpg';
import cert5 from '../assets/images/Certificates/5.jpg';
import cert6 from '../assets/images/Certificates/6.png';
import ojtCert from '../assets/images/Certificates/OJT.jpg';
import capstoneCert from '../assets/images/Certificates/capstone cert.jfif';

const certificates = [
  {
    title: 'SolarTrack: IoT-Based Solar Tracking System Deployment',
    issuer: 'CLM Solar Lights Trading',
    date: 'February 2026 - March 2026',
    category: 'Capstone',
    skills: ['IoT Architecture', 'Solar Technology', 'System Implementation'],
    credentialId: 'SOLAR-CLM-2026',
    image: capstoneCert,
  },
  {
    title: 'On-the-Job Training (OJT) Program Completion',
    issuer: 'Davao del Norte State College - Institute of Computing',
    date: 'February 2026 - May 2026',
    category: 'OJT',
    skills: ['Professionalism', 'System Management', 'Software Development'],
    credentialId: 'OJT-486-2026',
    image: ojtCert,
  },
  {
    title: '3rd Place in the Level App 2.0 Pitching Competition',
    issuer: 'Level App 2.0',
    date: 'Year 3',
    category: 'Competition',
    skills: ['Pitching', 'Innovation', 'Entrepreneurship'],
    credentialId: 'LEVEL-2022-001',
    image: cert1,
  },
  {
    title: 'Participation for Showcasing Startup Project',
    issuer: 'Startup Showcase',
    date: 'Year 3',
    category: 'Entrepreneurship',
    skills: ['Product Demo', 'Networking', 'Presentation'],
    credentialId: 'STARTUP-2022-002',
    image: cert2,
  },
  {
    title: 'Competing for the Final Pitching',
    issuer: 'Academic Milestone',
    date: 'Year 3',
    category: 'Competition',
    skills: ['Public Speaking', 'Strategy', 'Business Model'],
    credentialId: 'PITCH-2023-003',
    image: cert3,
  },
  {
    title: 'Cisco Ethical Hacker',
    issuer: 'Cisco Networking Academy',
    date: 'Year 3',
    category: 'Cybersecurity',
    skills: ['Penetration Testing', 'Network Security', 'Ethics'],
    credentialId: 'CISCO-EH-2023-004',
    image: cert4,
  },
  {
    title: 'Cisco Introduction to Packet Tracer',
    issuer: 'Cisco Networking Academy',
    date: 'Year 2',
    category: 'Networking',
    skills: ['Network Simulation', 'Configuration', 'Troubleshooting'],
    credentialId: 'CISCO-PT-2024-005',
    image: cert5,
  },
  {
    title: 'Advanced Seminar Series',
    issuer: 'Professional Development',
    date: 'Year 3',
    category: 'Seminar',
    skills: ['Technical Trends', 'Advanced Concepts', 'Knowledge Sharing'],
    credentialId: 'SEM-2024-006',
    image: cert6,
  },
];

const Certificates = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-sky-200/20 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-sky-600/5 blur-[100px]" />
        <div className="absolute top-[30%] right-[10%] h-[300px] w-[300px] rounded-full bg-slate-200/10 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 sm:px-6 md:pt-32 lg:px-12 pb-24 sm:pb-32 md:pb-48">
        <div className="mb-16 sm:mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-block border-l-4 border-sky-600 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-500 sm:mb-6 sm:px-6 sm:text-sm"
          >
            Credentials & Awards
          </motion.div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">Certifi<span className="text-sky-500">cates.</span></h1>
          <p className="mt-4 max-w-3xl text-sm text-zinc-400 font-light leading-relaxed sm:mt-6 sm:text-base md:mt-10 md:text-lg">
            A collection of verified academic achievements and professional certifications that validate technical expertise.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 lg:gap-14 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-zinc-950/40 border border-zinc-800/50 hover:border-sky-500/40 transition-all duration-500 shadow-2xl backdrop-blur-sm md:rounded-[2.5rem]">
                {/* Certificate Preview Image */}
                <div className="relative aspect-[4/3] overflow-hidden p-3 shrink-0 sm:p-4">
                  {/* Glowing Circle Animation Overlay */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="h-32 w-32 rounded-full border border-sky-500/30 bg-sky-500/5 blur-sm scale-0 group-hover:scale-150 transition-transform duration-700 ease-out" />
                  </div>

                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-60" />
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover rounded-[1.2rem] transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 sm:rounded-[1.5rem]"
                  />
                  <div className="absolute top-6 left-6 z-30 sm:top-8 sm:left-8">
                    <span className="rounded-full bg-sky-600/90 px-4 py-1.5 text-[9px] font-black uppercase tracking-widest text-white backdrop-blur-md shadow-xl border border-sky-400/20 sm:px-5 sm:py-2 sm:text-[10px]">
                      {cert.category}
                    </span>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="flex flex-1 flex-col p-6 pt-2 sm:p-10 sm:pt-4">
                  <div className="mb-4 flex items-center gap-2 text-zinc-500 sm:mb-6 sm:gap-3">
                    <Calendar size={14} className="text-sky-500/70 sm:w-4 sm:h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] sm:text-xs">{cert.date}</span>
                  </div>
                  
                  <h3 className="mb-3 text-lg font-bold text-white group-hover:text-sky-400 transition-colors leading-tight min-h-[3rem] sm:mb-4 sm:text-2xl sm:min-h-[4rem]">
                    {cert.title}
                  </h3>
                  <p className="mb-6 text-sm font-medium text-zinc-400 sm:mb-8 sm:text-lg">{cert.issuer}</p>

                  <div className="mb-8 mt-auto space-y-4 sm:mb-10 sm:space-y-5">
                     <div className="flex items-center gap-2 text-[10px] text-zinc-500 sm:gap-3 sm:text-sm">
                        <CheckCircle size={14} className="text-sky-500 sm:w-4 sm:h-4" />
                        <span className="font-bold uppercase tracking-widest text-[9px]">Verified Credential</span>
                     </div>
                     <div className="flex flex-wrap gap-2 sm:gap-2.5">
                      {cert.skills.map(skill => (
                        <span key={skill} className="px-3 py-1.5 rounded-lg bg-zinc-900/50 text-[9px] text-zinc-400 font-bold border border-zinc-800 uppercase tracking-widest group-hover:border-sky-500/20 transition-colors sm:px-4 sm:py-2 sm:rounded-xl sm:text-[10px]">
                          {skill}
                        </span>
                      ))}
                     </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-zinc-800/50 pt-6 sm:pt-8">
                    <div className="flex flex-col">
                      <span className="text-[8px] font-black uppercase tracking-widest text-zinc-600 mb-1 sm:text-[9px]">Credential ID</span>
                      <span className="text-[10px] font-mono text-zinc-500 tracking-tighter sm:text-xs">{cert.credentialId}</span>
                    </div>
                    <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600/10 text-sky-500 hover:bg-sky-600 hover:text-white transition-all shadow-lg border border-sky-500/20 group-hover:shadow-sky-500/20 sm:h-12 sm:w-12 sm:rounded-2xl">
                      <ExternalLink size={18} sm:size={20} />
                    </button>
                  </div>
                </div>

                {/* Bottom Decorative Bar */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-sky-600 to-sky-400 transition-all duration-700 group-hover:w-full md:h-1.5" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-8 rounded-[2rem] bg-gradient-to-br from-zinc-900/40 to-zinc-950/40 border border-zinc-800/50 text-center backdrop-blur-md relative overflow-hidden sm:mt-48 sm:p-16 md:p-24 md:rounded-[3.5rem]"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-sky-600/5 blur-[80px]" />
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6 sm:mb-10">
              <div className="h-16 w-16 rounded-2xl bg-sky-600/10 flex items-center justify-center text-sky-500 border border-sky-500/20 shadow-2xl sm:h-24 sm:w-24 sm:rounded-[2rem]">
                <Award size={32} className="sm:w-12 sm:h-12" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight sm:text-4xl md:text-5xl sm:mb-8">Commitment to Excellence</h2>
            <p className="max-w-2xl mx-auto text-sm text-zinc-400 font-light leading-relaxed sm:text-xl">
              I actively pursue advanced certifications and technical milestones to ensure my engineering systems remain at the forefront of digital efficiency and performance.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certificates;









