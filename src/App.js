import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Help from './pages/Help';
import Privacy from './pages/Privacy';
import './App.css';

// Helmet can be added later if needed
// import { Helmet } from 'react-helmet';

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`relative px-4 py-2 mx-1 text-lg font-medium ${isActive 
        ? 'text-red-500' 
        : 'text-gray-200 hover:text-red-300 transition-colors duration-300'}`}
    >
      {children}
      {isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>}
    </Link>
  );
};

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white bg-pattern">
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-xl shadow-red-900/10' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="pulse-subtle">
              <img src="/logo192.png" alt="SaltyPro Logo" className="h-10 w-10 mr-2" />
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                SaltyPro
              </span>
            </div>
          </Link>
          
          <nav className="flex items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/help">Help</NavLink>
            <NavLink to="/privacy">Privacy</NavLink>
            
            <a
              href="https://chromewebstore.google.com/detail/saltypro/eocgcmccjmhiheelnmpkgohneocaongn"
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-4 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-red-500/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              Add to Chrome
            </a>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-gray-800/80 border-t border-red-900/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">SaltyPro</span>
              <p className="text-gray-400 text-sm mt-2">
                The ultimate tool for SaltyBet players
              </p>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center">
              <Link to="/" className="text-gray-300 hover:text-red-400 transition-colors">Home</Link>
              <Link to="/help" className="text-gray-300 hover:text-red-400 transition-colors">Help</Link>
              <Link to="/privacy" className="text-gray-300 hover:text-red-400 transition-colors">Privacy</Link>
              <a href="https://BukiDev.xyz" className="text-gray-300 hover:text-red-400 transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 SaltyPro. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4">
  <a href="https://discord.gg/u73f9tS23W" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors">
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
    </svg>
  </a>
  <a href="https://github.com/Xukopop" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors">
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  </a>
</div>
          </div>
        </div>
      </footer>
      
      <button
        className={`scroll-top-btn ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
