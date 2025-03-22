import React, { useState, useEffect } from 'react';

function Help() {
  const [activeTab, setActiveTab] = useState('features');
  
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
              SaltyPro Guide
            </span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get the most out of your SaltyPro extension with our comprehensive SaltyBet guide
          </p>
        </div>
        
        <div className="fade-in mb-6 flex justify-center">
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-full p-1 border border-red-900/20 inline-flex">
            {[
              { id: 'features', label: 'Features & Settings' },
              { id: 'strategies', label: 'Betting Strategies' },
              { id: 'faq', label: 'FAQ' }
            ].map((tab) => (
              <button
                key={tab.id}
                className={`py-2 px-6 font-medium rounded-full transition-all duration-200 ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-red-500 to-red-700 text-white shadow-lg' 
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="fade-in bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl p-6 md:p-8 border border-red-900/20">
          {activeTab === 'features' && (
            <div className="fade-in">
              <div className="flex items-center mb-6">
                <div className="bg-red-500/20 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">SaltyBet Features & Settings</h2>
              </div>
              
              <div className="mb-8 hover:bg-gray-700/40 p-4 rounded-lg transition-colors duration-200">
                <h3 className="text-xl font-semibold text-red-400 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  SaltyBet Match Stats Button
                </h3>
                <p className="text-gray-300 mb-3">
                  Click the "Match Stats" button to see detailed information about the current SaltyBet match, including:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-3 ml-4 space-y-1">
                  <li className="opacity-90 hover:opacity-100 transition-opacity">SaltyBet fighter win rates and total matches</li>
                  <li className="opacity-90 hover:opacity-100 transition-opacity">ELO and Tier ELO ratings for SaltyBet fighters</li>
                  <li className="opacity-90 hover:opacity-100 transition-opacity">Head-to-head history (if SaltyBet fighters have fought before)</li>
                  <li className="opacity-90 hover:opacity-100 transition-opacity">Tier and format information for SaltyBet matches</li>
                </ul>
                <div className="bg-gray-700/40 p-4 rounded-lg mt-3 border border-red-900/20">
                  <p className="text-gray-300 text-sm">
                    <span className="text-red-400 font-semibold">SaltyBet Pro Tip:</span> The Match Stats overlay shows previous matches between fighters, which can be a strong indicator of potential outcomes on SaltyBet. Use this to see if a fighter has a history of dominating their current opponent.
                  </p>
                </div>
              </div>
              
              <div className="mb-8 hover:bg-gray-700/40 p-4 rounded-lg transition-colors duration-200">
                <h3 className="text-xl font-semibold text-red-400 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  SaltyBet Betting Settings
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-gray-700/40 text-gray-300 rounded-lg overflow-hidden shadow-lg border border-red-900/20 settings-table">
                    <thead>
                      <tr className="bg-red-900/30">
                        <th className="py-3 px-4 text-left font-semibold text-red-200">SaltyBet Setting</th>
                        <th className="py-3 px-4 text-left font-semibold text-red-200">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-600/30">
                      <tr className="hover:bg-gray-600/30 transition-colors duration-150">
                        <td className="py-3 px-4 font-medium">Enable SaltyBet Betting</td>
                        <td className="py-3 px-4">Turn automatic SaltyBet betting on or off</td>
                      </tr>
                      <tr className="hover:bg-gray-600/30 transition-colors duration-150">
                        <td className="py-3 px-4 font-medium">SaltyBet Betting Mode</td>
                        <td className="py-3 px-4">Select the algorithm used to determine SaltyBet bets</td>
                      </tr>
                      <tr className="hover:bg-gray-600/30 transition-colors duration-150">
                        <td className="py-3 px-4 font-medium">All In Until ($)</td>
                        <td className="py-3 px-4">Go all-in on SaltyBet bets until your balance reaches this amount</td>
                      </tr>
                      <tr className="hover:bg-gray-600/30 transition-colors duration-150">
                        <td className="py-3 px-4 font-medium">Max Bet (%)</td>
                        <td className="py-3 px-4">Maximum percentage of your SaltyBet balance to bet</td>
                      </tr>
                      <tr className="hover:bg-gray-600/30 transition-colors duration-150">
                        <td className="py-3 px-4 font-medium">Max Bet Amount ($)</td>
                        <td className="py-3 px-4">Maximum dollar amount to bet on SaltyBet regardless of percentage</td>
                      </tr>
                      <tr className="hover:bg-gray-600/30 transition-colors duration-150">
                        <td className="py-3 px-4 font-medium">All In on Tournaments</td>
                        <td className="py-3 px-4">Always bet your entire balance on SaltyBet tournament matches</td>
                      </tr>
                      <tr className="hover:bg-gray-600/30 transition-colors duration-150">
                        <td className="py-3 px-4 font-medium">SaltyBet Upset Mode</td>
                        <td className="py-3 px-4">Bet against the algorithm's prediction for SaltyBet (for when underdogs are winning)</td>
                      </tr>
                      <tr className="hover:bg-gray-600/30 transition-colors duration-150">
                        <td className="py-3 px-4 font-medium">Exhibition Bet</td>
                        <td className="py-3 px-4">Set fixed amount to bet on SaltyBet exhibition matches</td>
                      </tr>
                      <tr className="hover:bg-gray-600/30 transition-colors duration-150">
                        <td className="py-3 px-4 font-medium">Tier Betting</td>
                        <td className="py-3 px-4">Toggle betting for specific SaltyBet tiers (X, S, A, B, P)</td>
                      </tr>
                      <tr className="hover:bg-gray-600/30 transition-colors duration-150">
                        <td className="py-3 px-4 font-medium">Confidence Threshold</td>
                        <td className="py-3 px-4">Minimum confidence level required for calculated SaltyBet bets</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-gray-700/40 p-4 rounded-lg mt-4 border border-red-900/20">
                  <p className="text-gray-300 text-sm">
                    <span className="text-red-400 font-semibold">SaltyBet Strategy Tip:</span> For beginners, using "All In Until" with a value of 5,000-10,000 with the ELO betting mode is a good way to grow your SaltyBet bankroll quickly. Once you've reached that amount, switch to percentage-based betting to reduce risk.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'strategies' && (
            <div className="fade-in">
              <div className="flex items-center mb-6">
                <div className="bg-red-500/20 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">SaltyBet Betting Strategies</h2>
              </div>
              
              <div className="space-y-6 stagger-fade-in">
                <div className="bg-gray-700/40 p-6 rounded-lg shadow-md border border-red-900/20 hover:bg-gray-700/60 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-red-400 mb-2 flex items-center">
                    <span className="bg-red-500/20 text-red-500 p-1 rounded-md mr-2 w-6 h-6 flex items-center justify-center text-sm">1</span>
                    Naive SaltyBet Strategy
                  </h3>
                  <p className="text-gray-300 mb-3 pl-9">
                    Simple but effective strategy based primarily on win rates from past SaltyBet matches.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 pl-9">
                    <li className="opacity-90 hover:opacity-100 transition-opacity">
                      Compares SaltyBet fighter win rates from past recorded matches
                    </li>
                    <li className="opacity-90 hover:opacity-100 transition-opacity">
                      Breaks ties using average betting amounts on the SaltyBet fighters
                    </li>
                    <li className="opacity-90 hover:opacity-100 transition-opacity">
                      Defaults to betting $1 on red if no past SaltyBet matches exist
                    </li>
                  </ul>
                  <div className="bg-gray-600/30 p-3 rounded mt-3 ml-9 border border-red-900/10">
                    <p className="text-sm text-gray-300">
                      <span className="text-red-400 font-semibold">Best for:</span> New SaltyBet fighters or when match history is limited
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-700/40 p-6 rounded-lg shadow-md border border-red-900/20 hover:bg-gray-700/60 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-red-400 mb-2 flex items-center">
                    <span className="bg-red-500/20 text-red-500 p-1 rounded-md mr-2 w-6 h-6 flex items-center justify-center text-sm">2</span>
                    SaltyBet ELO Strategy
                  </h3>
                  <p className="text-gray-300 mb-3 pl-9">
                    Uses the ELO rating system (similar to chess) to determine SaltyBet bet confidence.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 pl-9">
                    <li className="opacity-90 hover:opacity-100 transition-opacity">
                      Compares overall ELO ratings of SaltyBet fighters
                    </li>
                    <li className="opacity-90 hover:opacity-100 transition-opacity">
                      SaltyBet fighters start at 1500 ELO and adjust after each match
                    </li>
                    <li className="opacity-90 hover:opacity-100 transition-opacity">
                      Uses K value of 32 for ELO calculations on SaltyBet
                    </li>
                  </ul>
                  <div className="bg-gray-600/30 p-3 rounded mt-3 ml-9 border border-red-900/10">
                    <p className="text-sm text-gray-300">
                      <span className="text-red-400 font-semibold">Best for:</span> Established SaltyBet fighters with many matches
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-700/40 p-6 rounded-lg shadow-md border border-red-900/20 hover:bg-gray-700/60 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-red-400 mb-2 flex items-center">
                    <span className="bg-red-500/20 text-red-500 p-1 rounded-md mr-2 w-6 h-6 flex items-center justify-center text-sm">3</span>
                    SaltyBet ELO Tier Strategy
                  </h3>
                  <p className="text-gray-300 mb-3 pl-9">
                    Similar to ELO but resets when SaltyBet fighters change tiers.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 pl-9">
                    <li className="opacity-90 hover:opacity-100 transition-opacity">
                      Uses tier-specific ELO instead of overall ELO for SaltyBet
                    </li>
                    <li className="opacity-90 hover:opacity-100 transition-opacity">
                      When a SaltyBet fighter changes tier, their tier ELO resets to 1500
                    </li>
                    <li className="opacity-90 hover:opacity-100 transition-opacity">
                      Better at capturing recent performance in current SaltyBet tier
                    </li>
                  </ul>
                  <div className="bg-gray-600/30 p-3 rounded mt-3 ml-9 border border-red-900/10">
                    <p className="text-sm text-gray-300">
                      <span className="text-red-400 font-semibold">Best for:</span> SaltyBet fighters who have recently changed tiers
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-700/40 p-6 rounded-lg shadow-md border border-red-900/20 hover:bg-gray-700/60 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-red-400 mb-2 flex items-center">
                    <span className="bg-red-500/20 text-red-500 p-1 rounded-md mr-2 w-6 h-6 flex items-center justify-center text-sm">4</span>
                    SaltyBet Passive Strategy
                  </h3>
                  <p className="text-gray-300 mb-3 pl-9">
                    Low-risk strategy that places small bets based on SaltyBet crowd behavior.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 pl-9">
                    <li className="opacity-90 hover:opacity-100 transition-opacity">
                      Places minimum bets to minimize SaltyBet losses
                    </li>
                    <li className="opacity-90 hover:opacity-100 transition-opacity">
                      Useful for collecting SaltyBet data while preserving your balance
                    </li>
                  </ul>
                  <div className="bg-gray-600/30 p-3 rounded mt-3 ml-9 border border-red-900/10">
                    <p className="text-sm text-gray-300">
                      <span className="text-red-400 font-semibold">Best for:</span> Learning the SaltyBet system or during unpredictable tournament periods
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-700/40 p-6 rounded-lg shadow-md border border-red-900/20 hover:bg-gray-700/60 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-red-400 mb-2 flex items-center">
                    <span className="bg-red-500/20 text-red-500 p-1 rounded-md mr-2 w-6 h-6 flex items-center justify-center text-sm">5</span>
                    SaltyBet RNG Strategy
                  </h3>
                  <p className="text-gray-300 mb-3 pl-9">
                    Random number generator strategy for pure chance betting on SaltyBet.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 pl-9">
                    <li className="opacity-90 hover:opacity-100 transition-opacity">
                      Randomly selects SaltyBet fighters to bet on
                    </li>
                    <li className="opacity-90 hover:opacity-100 transition-opacity">
                      Useful for comparison testing against other SaltyBet strategies
                    </li>
                  </ul>
                  <div className="bg-gray-600/30 p-3 rounded mt-3 ml-9 border border-red-900/10">
                    <p className="text-sm text-gray-300">
                      <span className="text-red-400 font-semibold">Best for:</span> Testing and comparing with other SaltyBet strategies
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-900/20 p-6 rounded-lg mt-8 border border-red-900/30">
                <h3 className="text-xl font-semibold text-red-400 mb-3">Advanced SaltyBet Strategy Tips</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-3 ml-2">
                  <li>
                    <span className="font-medium text-red-300">SaltyBet Tier Switching:</span> ELO Tier works best for P and B tier matches, while standard ELO is often better for S and X tier matches where fighters are more established.
                  </li>
                  <li>
                    <span className="font-medium text-red-300">SaltyBet Upset Mode:</span> Toggle this on during tournament seasons when underdogs tend to win more frequently on SaltyBet.
                  </li>
                  <li>
                    <span className="font-medium text-red-300">SaltyBet Balance Growth:</span> Start with higher risk (All-In Until) strategies when your balance is low, then switch to percentage-based betting to preserve gains.
                  </li>
                  <li>
                    <span className="font-medium text-red-300">SaltyBet Confidence Threshold:</span> Adjust this based on strategy - higher thresholds (70%+) for ELO, lower thresholds (50-60%) for Naive.
                  </li>
                </ul>
              </div>
            </div>
          )}
          
          {activeTab === 'faq' && (
            <div className="fade-in">
              <div className="flex items-center mb-6">
                <div className="bg-red-500/20 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">SaltyBet Frequently Asked Questions</h2>
              </div>
              
              <div className="space-y-6 stagger-fade-in">
                <div className="faq-item bg-gray-700/40 p-6 rounded-lg shadow-md border border-red-900/20">
                  <h3 className="text-xl font-semibold text-red-400 mb-3 flex items-start">
                    <span className="text-red-500 mr-2">Q:</span>
                    How does the SaltyPro extension work with SaltyBet?
                  </h3>
                  <p className="text-gray-300 pl-6">
                    <span className="text-red-500 font-semibold mr-2">A:</span>
                    The extension connects to a database of SaltyBet fighter statistics to analyze matchups. It uses various algorithms to determine bet confidence and can automatically place bets based on your settings. The extension runs in the background while you watch SaltyBet matches and handles everything from fetching data to placing optimal bets.
                  </p>
                </div>
                
                <div className="faq-item bg-gray-700/40 p-6 rounded-lg shadow-md border border-red-900/20">
                  <h3 className="text-xl font-semibold text-red-400 mb-3 flex items-start">
                    <span className="text-red-500 mr-2">Q:</span>
                    What is 'Upset Mode' for SaltyBet?
                  </h3>
                  <p className="text-gray-300 pl-6">
                    <span className="text-red-500 font-semibold mr-2">A:</span>
                    Upset Mode bets against the algorithm's recommendation on SaltyBet. This can be useful during periods when underdogs are winning consistently or when you want to test contrarian strategies. When enabled, if the algorithm suggests betting on the red fighter, the extension will bet on blue instead, and vice versa.
                  </p>
                </div>
                
                <div className="faq-item bg-gray-700/40 p-6 rounded-lg shadow-md border border-red-900/20">
                  <h3 className="text-xl font-semibold text-red-400 mb-3 flex items-start">
                    <span className="text-red-500 mr-2">Q:</span>
                    Does the SaltyPro extension collect my SaltyBet data?
                  </h3>
                  <p className="text-gray-300 pl-6">
                    <span className="text-red-500 font-semibold mr-2">A:</span>
                    No, the extension doesn't collect any personal SaltyBet data. All settings are stored locally in your browser using Chrome's storage API, and fighter data comes from a public API. Your betting preferences and settings remain private to your browser. The only external communications are to fetch publicly available SaltyBet match and fighter statistics.
                  </p>
                </div>
                
                <div className="faq-item bg-gray-700/40 p-6 rounded-lg shadow-md border border-red-900/20">
                  <h3 className="text-xl font-semibold text-red-400 mb-3 flex items-start">
                    <span className="text-red-500 mr-2">Q:</span>
                    How accurate are the SaltyBet predictions?
                  </h3>
                  <p className="text-gray-300 pl-6">
                    <span className="text-red-500 font-semibold mr-2">A:</span>
                    While no SaltyBet betting system is perfect, our algorithms have shown consistent performance across thousands of matches. The ELO strategy tends to perform best for established SaltyBet fighters, while Naive works well for newer characters. Overall accuracy depends on the volatility of the current tournament or matchmaking season. The extension performs best when there's sufficient historical data for the SaltyBet fighters involved.
                  </p>
                </div>
                
                <div className="faq-item bg-gray-700/40 p-6 rounded-lg shadow-md border border-red-900/20">
                  <h3 className="text-xl font-semibold text-red-400 mb-3 flex items-start">
                    <span className="text-red-500 mr-2">Q:</span>
                    Why is the extension betting small amounts when my SaltyBet balance is high?
                  </h3>
                  <p className="text-gray-300 pl-6">
                  <span className="text-red-500 font-semibold mr-2">A:</span>
                    This is likely due to your Max Bet settings for SaltyBet. Check your Max Bet Percentage and Max Bet Amount settings - if either is too low, it will limit your bet size. For example, if Max Bet Percentage is set to 5%, on a $10,000 SaltyBet balance, you'll only bet up to $500 even on high confidence matches. Adjust these settings higher or set them to 0 to disable the limit.
                  </p>
                </div>
                
                <div className="faq-item bg-gray-700/40 p-6 rounded-lg shadow-md border border-red-900/20">
                  <h3 className="text-xl font-semibold text-red-400 mb-3 flex items-start">
                    <span className="text-red-500 mr-2">Q:</span>
                    What does the SaltyBet Match Stats button do?
                  </h3>
                  <p className="text-gray-300 pl-6">
                    <span className="text-red-500 font-semibold mr-2">A:</span>
                    The Match Stats button displays a detailed overlay with information about the current SaltyBet match, including fighter win rates, ELO ratings, head-to-head history, and other statistics. This information can help you understand why the extension is recommending a particular bet and provide insight into fighter performance. The overlay automatically disappears after 15 seconds or can be closed manually.
                  </p>
                </div>
                
                <div className="faq-item bg-gray-700/40 p-6 rounded-lg shadow-md border border-red-900/20">
                  <h3 className="text-xl font-semibold text-red-400 mb-3 flex items-start">
                    <span className="text-red-500 mr-2">Q:</span>
                    Is there a way to customize which SaltyBet tiers I bet on?
                  </h3>
                  <p className="text-gray-300 pl-6">
                    <span className="text-red-500 font-semibold mr-2">A:</span>
                    Yes, you can toggle betting for specific SaltyBet tiers (X, S, A, B, P) in the extension settings. This allows you to focus your betting on tiers where you've had the most success or avoid tiers that tend to be more unpredictable. For example, many users disable betting on P tier matches since they can be highly volatile with new characters on SaltyBet.
                  </p>
                </div>
                
                <div className="faq-item bg-gray-700/40 p-6 rounded-lg shadow-md border border-red-900/20">
                  <h3 className="text-xl font-semibold text-red-400 mb-3 flex items-start">
                    <span className="text-red-500 mr-2">Q:</span>
                    What happens if the SaltyBet server is having issues?
                  </h3>
                  <p className="text-gray-300 pl-6">
                    <span className="text-red-500 font-semibold mr-2">A:</span>
                    If the SaltyBet server is having issues or if match data can't be retrieved, the extension will fall back to a conservative betting strategy, typically placing a small $1 bet on red. This ensures you don't miss out on SaltyBet matches while protecting your balance from risky bets. The extension will continue trying to fetch updated data for future matches.
                  </p>
                </div>
              </div>
              
              <div className="bg-red-900/20 p-6 rounded-lg mt-8 border border-red-900/30">
                <h3 className="text-xl font-semibold text-red-400 mb-3">Need More Help with SaltyBet?</h3>
                <p className="text-gray-300 mb-4">
                  If you're experiencing an issue not covered in the FAQ or have suggestions for improving SaltyPro for SaltyBet, you can:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                  <li>
                    <span className="font-medium text-red-300">Report SaltyBet bugs or issues</span> through our support page at <a href="https://BukiDev.xyz" className="text-red-400 hover:underline">BukiDev.xyz</a>
                  </li>
                  <li>
                    <span className="font-medium text-red-300">Join our SaltyBet community</span> to discuss strategies and share tips with other SaltyPro users
                  </li>
                  <li>
                    <span className="font-medium text-red-300">Check for updates</span> regularly to ensure you have the latest version with all bug fixes and improvements for SaltyBet
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        
        <div className="fade-in bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl p-6 mt-8 border border-red-900/20">
          <div className="flex items-center mb-4">
            <div className="bg-red-500/20 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">About SaltyPro for SaltyBet</h2>
          </div>
          <p className="text-gray-300 mb-4">
            SaltyPro is a remake built upon the original "SaltyBet" Google Chrome extension. Full credit goes to the original author for the foundation of this tool.
          </p>
          <p className="text-gray-300">
            This improved 2025 version by BukiDev includes better refresh mechanisms, redesigned user interface, comprehensive SaltyBet documentation, help button, and improved code structure while respecting the original concept.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Help;