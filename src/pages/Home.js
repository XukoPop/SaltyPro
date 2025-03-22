import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    const createParticles = () => {
      const container = document.querySelector('.particle-container');
      if (!container) return;
      
      container.innerHTML = '';
      
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = `${0.2 + Math.random() * 0.5}`;
        particle.style.animation = `pulse-animation ${3 + Math.random() * 4}s infinite alternate`;
        
        container.appendChild(particle);
      }
    };
    
    createParticles();
    window.addEventListener('resize', createParticles);
    
    return () => {
      window.removeEventListener('resize', createParticles);
    };
  }, []);

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-animated opacity-30 z-0"></div>
      <div className="absolute inset-0 z-0 particle-container"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="fade-in mb-16">
          <div className="flex flex-col lg:flex-row items-center bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-red-900/20">
            <div className="w-full lg:w-1/2 p-8 lg:p-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">SaltyPro</span>
                <span className="block mt-2 text-3xl md:text-4xl font-semibold text-gray-100">for SaltyBet</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                The ultimate Chrome extension for SaltyBet enthusiasts. Make smarter bets with advanced fighter analytics and automated strategies using real-time data.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://chromewebstore.google.com/detail/saltypro/eocgcmccjmhiheelnmpkgohneocaongn" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chrome-btn bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/30 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Add to Chrome
                </a>
                
                <a 
                  href="https://discord.gg/u73f9tS23W" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700/80 hover:bg-gray-600/80 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center hover:shadow-lg"
                >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                  </svg>
                  Join Discord
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-6 flex justify-center">
              <div className="salt-icon drop-shadow-2xl transform hover:scale-105 transition-all duration-500">
                <img src="/image2.png" alt="SaltyPro SaltyBet Interface" className="w-full max-w-md rounded-lg shadow-2xl border-2 border-red-500/20" />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="fade-in mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-2">
              SaltyBet Betting Made Better
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              SaltyPro is an enhanced version of the original SaltyBoy Chrome extension, redesigned in 2025
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-fade-in">
            <div className="feature-card bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="text-red-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart SaltyBet Analytics</h3>
              <p className="text-gray-400">Advanced algorithms analyze fighter performance data to give you the edge on every SaltyBet match.</p>
            </div>
            
            <div className="feature-card bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="text-red-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Auto-Betting on SaltyBet</h3>
              <p className="text-gray-400">Configure your own betting strategies and let SaltyPro automatically place optimal bets for you.</p>
            </div>
            
            <div className="feature-card bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="text-red-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">SaltyBet Fighter Stats</h3>
              <p className="text-gray-400">View comprehensive fighter statistics and match histories to make informed betting decisions.</p>
            </div>
            
            <div className="feature-card bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="text-red-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customizable Settings</h3>
              <p className="text-gray-400">Fine-tune your SaltyBet betting preferences with multiple strategies and risk management options.</p>
            </div>
            
            <div className="feature-card bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="text-red-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">SaltyBet Alerts</h3>
              <p className="text-gray-400">Get notifications for high-confidence betting opportunities and important match information.</p>
            </div>
            
            <div className="feature-card bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="text-red-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">ELO Rating System</h3>
              <p className="text-gray-400">Advanced ELO rating system tracks SaltyBet fighter performance for more accurate predictions.</p>
            </div>
          </div>
        </div>
        
        {/* Extension Preview Section */}
        <div className="fade-in mb-16 bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-red-900/20">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-10">
           SaltyPro Extension Preview
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <div className="bg-gray-700/70 p-2 rounded-lg shadow-md overflow-hidden h-64 relative">
                <div className="absolute inset-0 overflow-auto hide-scrollbar">
                  <img 
                    src="/image1.png" 
                    alt="SaltyPro SaltyBet Main Interface" 
                    className="w-full object-contain"
                  />
                </div>
              </div>
              <p className="text-center text-gray-400 mt-3 text-sm">Main SaltyPro interface with betting controls</p>
            </div>
            
            <div className="flex flex-col">
              <div className="bg-gray-700/70 p-2 rounded-lg shadow-md overflow-hidden h-64 relative">
                <div className="absolute inset-0 overflow-auto hide-scrollbar">
                  <img 
                    src="/image2.png" 
                    alt="SaltyPro SaltyBet Match Statistics" 
                    className="w-full object-contain"
                  />
                </div>
              </div>
              <p className="text-center text-gray-400 mt-3 text-sm">Detailed SaltyPro match statistics overlay</p>
            </div>
            
            <div className="flex flex-col">
              <div className="bg-gray-700/70 p-2 rounded-lg shadow-md overflow-hidden h-64 relative">
                <div className="absolute inset-0 overflow-auto hide-scrollbar">
                  <img 
                    src="/image3.png" 
                    alt="SaltyPro SaltyBet Winnings History" 
                    className="w-full object-contain"
                  />
                </div>
              </div>
              <p className="text-center text-gray-400 mt-3 text-sm">SaltyPro winnings history tracking your profits</p>
            </div>
          </div>
          
        {/* Testimonials Section */}
        <div className="fade-in mb-16">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mb-10">
            What SaltyPro Players Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-fade-in">
            {[
              {
                quote: "Works great!",
                author: "Chrome User",
                stars: 5
              },
              {
                quote: "The automatic betting feature has saved me so much time on Saltybet. Thanks!",
                author: "Chrome User",
                stars: 5
              },
              {
                quote: "This extension has helped me turn my 2K balance into over 100K",
                author: "Chrome User",
                stars: 5
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="testimonial-card bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-red-400 text-sm">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="fade-in">
          <div className="bg-gradient-to-r from-red-900/30 to-red-700/30 rounded-2xl p-10 text-center shadow-2xl border border-red-500/20">
            <h2 className="text-3xl font-bold mb-6">Ready to Dominate SaltyBet?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join SaltyBet players who have improved their betting strategy with SaltyPro. Install now and start winning!
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://chromewebstore.google.com/detail/saltypro/eocgcmccjmhiheelnmpkgohneocaongn" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/30 text-lg flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download SaltyPro
              </a>
              <Link 
                to="/help" 
                className="bg-gray-700/80 hover:bg-gray-600/80 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 flex items-center hover:shadow-lg text-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Read SaltyPro Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div> 
    </div> 
  );
}

export default Home;