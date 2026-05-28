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
      <div className="min-h-screen flex flex-col bg-background text-white">
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
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute -left-1/4 top-0 h-[1000px] w-[1000px] rounded-full bg-emerald-900/10 blur-[160px]" />
          <div className="absolute -right-1/4 bottom-0 h-[1000px] w-[1000px] rounded-full bg-emerald-600/5 blur-[160px]" />
        </div>
      </div>
    </Router>
  );
}

export default App;
