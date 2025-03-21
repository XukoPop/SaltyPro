import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    // Create background particles
    const createParticles = () => {
      const container = document.querySelector('.particle-container');
      if (!container) return;
      
      // Clear existing particles
      container.innerHTML = '';
      
      // Create new particles
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Add animation
        particle.style.animation = `pulse ${3 + Math.random() * 3}s infinite alternate`;
        
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
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-animated opacity-20 z-0"></div>
      
      {/* Animated dots/particles background */}
      <div className="absolute inset-0 z-0 particle-container"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Main hero section with title and CTA */}
        <div className="fade-in bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl p-8 mb-12 border border-gray-700">
          <h1 className="text-5xl font-bold text-blue-400 mb-4 brand-font">
            SaltyPro
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
            The ultimate tool for SaltyBet enthusiasts. Make smarter bets with advanced fighter analytics and automated betting strategies using real-time data.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://chrome.google.com/webstore/detail/saltypro/eocgcmccjmhiheehmpkgohneocaongn" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center shadow-lg hover:shadow-blue-500/30 btn"
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
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center shadow-lg hover:shadow-indigo-500/30 btn"
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
              Join Discord
            </a>
          </div>
        </div>

        {/* About SaltyPro section moved to the top */}
        <div className="fade-in bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl p-8 mb-12 border border-gray-700">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">About SaltyPro</h2>
          <div className="text-gray-300">
            <p className="mb-4">
              SaltyPro is a remake built upon the original "SaltyBet" Google Chrome extension. Full credit goes to the original author for the foundation of this tool.
            </p>
            <p className="mb-4">
              This improved version by Andrew includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Better refresh mechanisms for more reliable data</li>
                <li>Redesigned user interface for better readability</li>
                <li>Dedicated website with comprehensive documentation</li>
              </ul>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Help button for quick access to guides</li>
                <li>Improved code structure and functionality</li>
                <li>Enhanced fighter comparison statistics</li>
              </ul>
            </div>
            <p>
              SaltyPro aims to enhance your SaltyBet experience while respecting the original concept that made the extension valuable to the community.
            </p>
          </div>
        </div>
        
        {/* Extension preview section with improved image handling */}
        <div className="fade-in bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl p-8 mb-12 border border-gray-700">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Extension Preview</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left side with image 1 */}
            <div className="flex flex-col">
              <div className="bg-gray-700 p-2 rounded-lg shadow-md overflow-hidden h-72 relative">
                <div className="absolute inset-0 overflow-auto hide-scrollbar">
                  <img 
                    src="/image1.png" 
                    alt="SaltyPro Extension Main View" 
                    className="w-full object-contain"
                  />
                </div>
              </div>
              <p className="text-center text-gray-400 mt-3 text-sm">Main interface showing betting controls</p>
            </div>
            
            {/* Right side with image 2 */}
            <div className="flex flex-col">
              <div className="bg-gray-700 p-2 rounded-lg shadow-md overflow-hidden h-72 relative">
                <div className="absolute inset-0 overflow-auto hide-scrollbar">
                  <img 
                    src="/image2.png" 
                    alt="SaltyPro Match Statistics" 
                    className="w-full object-contain"
                  />
                </div>
              </div>
              <p className="text-center text-gray-400 mt-3 text-sm">Detailed match statistics overlay</p>
            </div>
          </div>
          
          {/* Features list with animations */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-blue-300 mb-6">What you get:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-4 stagger-fade-in">
                {[
                  "Smart automated betting based on fighter statistics",
                  "Detailed fighter analytics with win/loss records",
                  "Head-to-head match history when available"
                ].map((feature, index) => (
                  <li 
                    key={index}
                    className="flex items-start"
                  >
                    <span className="text-blue-400 mr-3 text-xl">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <ul className="space-y-4 stagger-fade-in">
                {[
                  "Multiple betting strategies to choose from",
                  "Customizable settings for maximum control",
                  "Clean, non-intrusive interface"
                ].map((feature, index) => (
                  <li 
                    key={index}
                    className="flex items-start"
                  >
                    <span className="text-blue-400 mr-3 text-xl">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Testimonials section */}
        <div className="fade-in bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl p-8 border border-gray-700 mb-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">What Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-fade-in">
            {[
              {
                quote: "I love the clean interface.",
                author: "Chrome User"
              },
              {
                quote: "The automatic betting feature has saved me so much time. Highly recommended",
                author: "Chrome User"
              },
              {
                quote: "This extension has helped me turn my 2K balance into over 100K",
                author: "Chrome User"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-700/50 p-6 rounded-lg shadow border border-gray-600 hover:border-blue-500/30 transition-colors duration-300"
              >
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-blue-300 text-sm">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;