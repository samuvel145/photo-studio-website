import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastProvider } from '@/context/ToastContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Gallery } from '@/pages/Gallery';
import { Home } from '@/pages/Home';
import { Contact } from '@/pages/Contact';

// Placeholder components for other routes
const Services = () => <div className="pt-24 text-center min-h-screen">Services Page Coming Soon</div>;
const About = () => <div className="pt-24 text-center min-h-screen">About Page Coming Soon</div>;

function App() {
  return (
    <ToastProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ToastProvider>
  );
}

export default App;
