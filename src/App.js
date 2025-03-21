import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Help from './pages/Help';
import Privacy from './pages/Privacy';
import './App.css';

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link to={to} className={`relative px-4 py-2 mx-1 ${isActive ? 'tab-active' : ''}`}>
      <span className={`font-medium transition-colors duration-200 ${isActive ? 'text-blue-400' : 'text-gray-300 hover:text-blue-300'}`}>
        {children}
      </span>
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
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <header className={`sticky top-0 z-50 header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="btn">
              <span className="text-2xl font-bold text-blue-400 brand-font">
                SaltyPro
              </span>
            </div>
          </Link>
          
          <nav className="flex items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/help">Help</NavLink>
            <NavLink to="/privacy">Privacy</NavLink>
            
            <a
              href="#"
              className="ml-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center btn"
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
      
      <footer className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold text-blue-400 brand-font">SaltyPro</span>
              <p className="text-gray-400 text-sm mt-2">
                The ultimate tool for SaltyBet players
              </p>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center">
              <Link to="/" className="text-gray-300 hover:text-blue-300 transition-colors">Home</Link>
              <Link to="/help" className="text-gray-300 hover:text-blue-300 transition-colors">Help</Link>
              <Link to="/privacy" className="text-gray-300 hover:text-blue-300 transition-colors">Privacy</Link>
              <a href="https://xuko.xyz" className="text-gray-300 hover:text-blue-300 transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 SaltyPro. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.01 7.803l-1.4.501a2.378 2.378 0 00-1.186-1.039 2.397 2.397 0 00-1.524-.066 2.38 2.38 0 00-1.244.788 2.42 2.42 0 00-.515 1.376v.805a5.763 5.763 0 01-2.524-.364 5.831 5.831 0 01-2.155-1.559 2.422 2.422 0 00-.32 1.215c0 .835.414 1.579 1.026 2.024-.415-.022-.812-.141-1.147-.332v.033c0 .582.196 1.109.522 1.526.327.415.778.71 1.292.836a2.404 2.404 0 01-1.166.038c.153.49.484.905.924 1.178.44.274.95.414 1.463.404-.906.737-2.027 1.144-3.18 1.142-.214 0-.424-.013-.631-.039 1.132.722 2.445 1.124 3.792 1.124 2.208 0 4.255-.753 5.875-2.112 1.619-1.359 2.516-3.17 2.516-5.082 0-.078-.001-.155-.004-.232.471-.347.877-.79 1.197-1.292a5.86 5.86 0 01-1.365.388z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.12 18.461h-2.16v-3.396h2.16v3.396zm-6.24-6.384v6.384h-2.16v-6.384H4.56v-2.076h2.16V7.926c0-1.739.722-3.384 2.858-3.384l2.652.001v2.16h-1.92c-.32 0-.72.161-.72.839v2.459h2.637l-.317 2.076H9.6v6.384z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2.4 16.458h-2.4V8.96h2.4v7.498zM7.2 7.2c-.663 0-1.2-.542-1.2-1.209 0-.667.537-1.191 1.2-1.191.663 0 1.2.524 1.2 1.191 0 .667-.537 1.209-1.2 1.209zm12 9.258h-2.4v-3.892c0-.972-.342-1.632-1.2-1.632-.654 0-1.044.444-1.2.872-.066.163-.078.391-.078.618v4.034h-2.4s.036-6.822 0-7.498h2.4v1.066c.309-.51.87-1.221 2.136-1.221 1.56 0 2.742 1.023 2.742 3.223v4.43z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      <button
        className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
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