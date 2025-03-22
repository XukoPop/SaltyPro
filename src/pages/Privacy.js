import React, { useEffect } from 'react';

function Privacy() {
  useEffect(() => {
    const createParticles = () => {
      const container = document.querySelector('.particle-container');
      if (!container) return;
      
      container.innerHTML = '';
      
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = `${0.2 + Math.random() * 0.3}`;
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
        <div className="fade-in text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Privacy Policy
            </span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Your privacy matters to us. Learn about our SaltyBet data policy.
          </p>
        </div>
        
        <div className="fade-in stagger-fade-in bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl p-6 md:p-8 border border-red-900/20 max-w-4xl mx-auto">
          <p className="text-gray-300 mb-8 border-l-4 border-red-500 pl-4 italic">
            Last updated: March 22, 2025
          </p>
          
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-red-500/20 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Overview</h2>
            </div>
            <p className="text-gray-300 mb-2 pl-11">
              SaltyPro is committed to protecting your privacy. This Privacy Policy explains what information we collect, how it's used, and how it's protected when you use our SaltyBet extension.
            </p>
          </div>
          
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-red-500/20 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Information Collection</h2>
            </div>
            <div className="pl-11">
              <p className="text-gray-300 mb-6">
                <span className="font-semibold text-red-400">SaltyPro does not collect any personal information about SaltyBet users.</span> The extension operates entirely locally within your browser.
              </p>
              
              <h3 className="text-xl font-semibold text-red-400 mb-3">Storage</h3>
              <p className="text-gray-300 mb-2">
                The extension uses Chrome's storage API to save your SaltyBet preferences and settings locally in your browser. This information is not transmitted to our servers or any third parties.
              </p>
              <div className="bg-gray-700/40 p-4 rounded-lg border border-red-900/20 mb-4">
                <div className="flex items-start mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-gray-300">
                    Your SaltyBet settings are stored using <code className="bg-gray-800 px-1 py-0.5 rounded text-red-400">chrome.storage.local</code> and are only accessible by the SaltyPro extension.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-red-500/20 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">API Usage</h2>
            </div>
            <p className="text-gray-300 mb-2 pl-11">
              The extension makes API calls to retrieve SaltyBet fighter statistics from SaltyBitch server. These calls do not include any personal information or identifiers.
            </p>
            <div className="pl-11 bg-gray-700/40 p-4 rounded-lg border border-red-900/20 mb-4">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-gray-300">
                  All API communications are done via secure HTTPS connections and only query for publicly available SaltyBet match and fighter statistics. No personal data is ever transmitted.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-red-500/20 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Data Security</h2>
            </div>
            <p className="text-gray-300 mb-2 pl-11">
              Since all data is stored locally and no personal information is collected, there are minimal security concerns. Your SaltyBet betting preferences and settings remain private to your browser.
            </p>
            <div className="pl-11 bg-gray-700/40 p-4 rounded-lg border border-red-900/20 mb-4">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-gray-300">
                  The extension only requests permissions necessary for its functionality, such as accessing the SaltyBet website and storing your preferences locally.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <div className="bg-red-500/20 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Changes to This Policy</h2>
            </div>
            <p className="text-gray-300 mb-2 pl-11">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p className="text-gray-300 mb-2 pl-11">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </div>
          
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-red-500/20 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Contact</h2>
            </div>
            <p className="text-gray-300 pl-11">
              If you have any questions about this SaltyBet privacy policy, please contact us at <a href="https://BukiDev.xyz" className="text-red-400 hover:underline transition-colors duration-200 hover:text-red-300">BukiDev.xyz</a>.
            </p>
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-700/50 text-center fade-in">
            <p className="text-sm text-gray-400">
              By using SaltyPro for SaltyBet, you agree to the practices described in this Privacy Policy.
            </p>
          </div>
        </div>

        <div className="fade-in bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl p-6 mt-8 border border-red-900/20 max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <div className="bg-red-500/20 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">About SaltyPro for SaltyBet</h2>
          </div>
          <p className="text-gray-300 mb-4 pl-11">
            SaltyPro is a remake built upon the original "SaltyBet" Google Chrome extension. Full credit goes to the original author for the foundation of this tool.
          </p>
          <p className="text-gray-300 pl-11">
            This improved version by BukiDev includes better refresh mechanisms, redesigned user interface, comprehensive SaltyBet documentation, help button, and improved code structure while respecting the original concept.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Privacy;