import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-transparent text-white">
        <Navbar />
        <main className="flex-grow pb-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Global Background Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -left-1/4 top-0 h-[1400px] w-[1400px] rounded-full bg-sky-800/15 blur-[180px] animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute -right-1/4 bottom-0 h-[1200px] w-[1200px] rounded-full bg-sky-700/10 blur-[180px] animate-pulse" style={{ animationDuration: '12s' }} />
          <div className="absolute top-1/4 right-1/4 h-[800px] w-[800px] rounded-full bg-sky-500/5 blur-[150px] animate-pulse" style={{ animationDuration: '15s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05)_0%,transparent_70%)]" />
        </div>
      </div>
    </Router>
  );
}

export default App;









