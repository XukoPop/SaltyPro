import React, { useState, useEffect } from 'react';

function Help() {
  const [activeTab, setActiveTab] = useState('features');
  
  useEffect(() => {

    const createParticles = () => {
      const container = document.querySelector('.particle-container');
      if (!container) return;

      container.innerHTML = '';
      
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
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
      <div className="absolute inset-0 bg-gradient-animated opacity-20 z-0"></div>
      
      <div className="absolute inset-0 z-0 particle-container"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="fade-in text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">How to Use SaltyPro</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get the most out of your SaltyPro extension with our comprehensive guide
          </p>
        </div>
        
        <div className="fade-in mb-6 border-b border-gray-700 flex justify-center">
          <div className="flex flex-wrap -mb-px">
            {[
              { id: 'features', label: 'Features & Settings' },
              { id: 'strategies', label: 'Betting Strategies' },
              { id: 'faq', label: 'FAQ' }
            ].map((tab) => (
              <button
                key={tab.id}
                className={`relative inline-block py-4 px-6 font-medium text-center border-b-2 transition-all duration-200 ${
                  activeTab === tab.id 
                    ? 'text-blue-400 border-blue-400 tab-active' 
                    : 'text-gray-400 border-transparent hover:text-gray-300 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="fade-in bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl p-6 md:p-8 border border-gray-700">
          {activeTab === 'features' && (
            <div className="fade-in">
              <div className="flex items-center mb-6">
                <div className="bg-blue-500/20 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-blue-300">Features & Settings</h2>
              </div>
              
              <div className="mb-8 hover:bg-gray-700/50 p-4 rounded-lg transition-colors duration-200">
                <h3 className="text-xl font-semibold text-blue-300 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Match Stats Button
                </h3>
                <p className="text-gray-300 mb-3">
                  Click the "Match Stats" button to see detailed information about the current match, including:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-3 ml-4 space-y-1">
                  <li className="opacity-90 hover:opacity-100 transition-opacity">Fighter win rates and total matches</li>
                  <li className="opacity-90 hover:opacity-100 transition-opacity">ELO and Tier ELO ratings</li>
                  <li className="opacity-90 hover:opacity-100 transition-opacity">Head-to-head history (if they've fought before)</li>
                  <li className="opacity-90 hover:opacity-100 transition-opacity">Tier and format information</li>
                </ul>
                <div className="bg-gray-700/70 p-4 rounded-lg mt-3">
                  <p className="text-gray-300 text-sm">
                    <span className="text-blue-300 font-semibold">Pro Tip:</span> The Match Stats overlay shows previous matches between fighters, which can be a strong indicator of potential outcomes. Use this to see if a fighter has a history of dominating their current opponent.
                  </p>
                </div>
              </div>
              
              <div className="mb-8 hover:bg-gray-700/50 p-4 rounded-lg transition-colors duration-200">
                <h3 className="text-xl font-semibold text-blue-300 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  Betting Settings
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-gray-700 text-gray-300 rounded-lg overflow-hidden shadow-lg border border-gray-600">
                    <thead>
                      <tr className="bg-gray-600">
                        <th className="py-3 px-4 text-left font-semibold text-blue-200">Setting</th>
                        <th className="py-3 px-4 text-left font-semibold text-blue-200">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-600">
                      <tr className="hover:bg-gray-600/50 transition-colors duration-150">
                        <td className="py-3 px-4 font-medium">Enable Betting</td>
                        <td className="py-3 px-4">Turn automatic betting on or off</td>
                      </tr>
                      <tr className="hover:bg-gray-600/50 transition-colors duration-150">
                        <td className="py-3 px-4 font-medium">Betting Mode</td>
                        <td className="py-3 px-4">Select the algorithm used to determine bets</td>
                      </tr>
                      <tr className="hover:bg-gray-600/50 transition-colors duration-150">
                        <td className="py-3 px-4 font-medium">All In Until ($)</td>
                        <td className="py-3 px-4">Go all-in on bets until your balance reaches this amount</td>
                      </tr>
                      <tr className="hover:bg-gray-600/50 transition-colors duration-150">
                        <td className="py-3 px-4 font-medium">Max Bet (%)</td>
                        <td className="py-3 px-4">Maximum percentage of your balance to bet</td>
                      </tr>
                      <tr className="hover:bg-gray-600/50 transition-colors duration-150">
                        <td className="py-3 px-4 font-medium">Max Bet Amount ($)</td>
                        <td className="py-3 px-4">Maximum dollar amount to bet regardless of percentage</td>
                      </tr>
                      <tr className="hover:bg-gray-600/50 transition-colors duration-150">
                        <td className="py-3 px-4 font-medium">All In on Tournaments</td>
                        <td className="py-3 px-4">Always bet your entire balance on tournament matches</td>
                      </tr>
                      <tr className="hover:bg-gray-600/50 transition-colors duration-150">
                        <td className="py-3 px-4 font-medium">Upset Mode</td>
                        <td className="py-3 px-4">Bet against the algorithm's prediction (for when underdogs are winning)</td>
                      </tr>
                      <tr className="hover:bg-gray-600/50 transition-colors duration-150">
                        <td className="py-3 px-4 font-medium">Exhibition Bet</td>
                        <td className="py-3 px-4">Set fixed amount to bet on exhibition matches</td>
                      </tr>
                      <tr className="hover:bg-gray-600/50 transition-colors duration-150">
                        <td className="py-3 px-4 font-medium">Tier Betting</td>
                        <td className="py-3 px-4">Toggle betting for specific tiers (X, S, A, B, P)</td>
                      </tr>
                      <tr className="hover:bg-gray-600/50 transition-colors duration-150">
                        <td className="py-3 px-4 font-medium">Confidence Threshold</td>
                        <td className="py-3 px-4">Minimum confidence level required for calculated bets</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-gray-700/70 p-4 rounded-lg mt-4">
                  <p className="text-gray-300 text-sm">
                    <span className="text-blue-300 font-semibold">Strategy Tip:</span> For beginners, using "All In Until" with a value of 5,000-10,000 with the ELO betting mode is a good way to grow your bankroll quickly. Once you've reached that amount, switch to percentage-based betting to reduce risk.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'strategies' && (
            <div className="fade-in">
              <div className="flex items-center mb-6">
                <div className="bg-blue-500/20 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-blue-300">Betting Strategies</h2>
              </div>
              
              <div className="space-y-6 stagger-fade-in">
                <div className="bg-gray-700/50 p-6 rounded-lg shadow-md border border-gray-600 hover:border-blue-500/30 transition-all duration-300 hover:shadow-blue-900/20">
                  <h3 className="text-xl font-semibold text-blue-300 mb-2 flex items-center">
                    <span className="bg-blue-500/20 text-blue-400 p-1 rounded-md mr-2 w-6 h-6 flex items-center justify-center text-sm">1</span>
                    Naive
                  </h3>
                  <p className="text-gray-300 mb-3 pl-9">
                    Simple but effective strategy based primarily on win rates from past matches.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 pl-9">
                    <li className="opacity-90 hover:opacity-100 transition-opacity">
                      Compares fighter win rates from past recorded matches
                    </li>
                    <li className="opacity-90 hover:opacity-100 transition-opacity">
                      Breaks ties using average betting amounts on the fighters
                    </li>
                    <li className="opacity-90 hover:opacity-100 transition-opacity">
                      Defaults to betting $1 on red if no past matches exist
                    </li>
                  </ul>
                  <div className="bg-gray-600/50 p-3 rounded mt-3 ml-9">
                    <p className="text-sm text-gray-300">
                      <span className="text-blue-300 font-semibold">Best for:</span> New fighters or when match history is limited
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-700/50 p-6 rounded-lg shadow-md border border-gray-600 hover:border-blue-500/30 transition-all duration-300 hover:shadow-blue-900/20">
                  <h3 className="text-xl font-semibold text-blue-300 mb-2 flex items-center">
                    <span className="bg-blue-500/20 text-blue-400 p-1 rounded-md mr-2 w-6 h-6 flex items-center justify-center text-sm">2</span>
                    ELO
                  </h3>
                  <p className="text-gray-300 mb-3 pl-9">
                    Uses the ELO rating system (similar to chess) to determine bet confidence.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 pl-9">
                    <li className="opacity-90 hover:opacity-100 transition-opacity">
                      Compares overall ELO ratings of fighters
                    </li>
                    <li className="opacity-90 hover:opacity-100 transition-opacity">
                      Fighters start at 1500 ELO and adjust after each match
                    </li>
                    <li className="opacity-90 hover:opacity-100 transition-opacity">
                      Uses K value of 32 for ELO calculations
                    </li>
                  </ul>
                  <div className="bg-gray-600/50 p-3 rounded mt-3 ml-9">
                    <p className="text-sm text-gray-300">
                      <span className="text-blue-300 font-semibold">Best for:</span> Established fighters with many matches
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-700/50 p-6 rounded-lg shadow-md border border-gray-600 hover:border-blue-500/30 transition-all duration-300 hover:shadow-blue-900/20">
                  <h3 className="text-xl font-semibold text-blue-300 mb-2 flex items-center">
                    <span className="bg-blue-500/20 text-blue-400 p-1 rounded-md mr-2 w-6 h-6 flex items-center justify-center text-sm">3</span>
                    ELO Tier
                  </h3>
                  <p className="text-gray-300 mb-3 pl-9">
                    Similar to ELO but resets when fighters change tiers.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 pl-9">
                    <li className="opacity-90 hover:opacity-100 transition-opacity">
                      Uses tier-specific ELO instead of overall ELO
                    </li>
                    <li className="opacity-90 hover:opacity-100 transition-opacity">
                      When a fighter changes tier, their tier ELO resets to 1500
                    </li>
                    <li className="opacity-90 hover:opacity-100 transition-opacity">
                      Better at capturing recent performance in current tier
                    </li>
                  </ul>
                  <div className="bg-gray-600/50 p-3 rounded mt-3 ml-9">
                    <p className="text-sm text-gray-300">
                      <span className="text-blue-300 font-semibold">Best for:</span> Fighters who have recently changed tiers
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-700/50 p-6 rounded-lg shadow-md border border-gray-600 hover:border-blue-500/30 transition-all duration-300 hover:shadow-blue-900/20">
                  <h3 className="text-xl font-semibold text-blue-300 mb-2 flex items-center">
                    <span className="bg-blue-500/20 text-blue-400 p-1 rounded-md mr-2 w-6 h-6 flex items-center justify-center text-sm">4</span>
                    Passive
                  </h3>
                  <p className="text-gray-300 mb-3 pl-9">
                    Low-risk strategy that places small bets based on crowd behavior.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 pl-9">
                    <li className="opacity-90 hover:opacity-100 transition-opacity">
                      Places minimum bets to minimize losses
                    </li>
                    <li className="opacity-90 hover:opacity-100 transition-opacity">
                      Useful for collecting data while preserving your balance
                    </li>
                  </ul>
                  <div className="bg-gray-600/50 p-3 rounded mt-3 ml-9">
                    <p className="text-sm text-gray-300">
                      <span className="text-blue-300 font-semibold">Best for:</span> Learning the system or during unpredictable tournament periods
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-700/50 p-6 rounded-lg shadow-md border border-gray-600 hover:border-blue-500/30 transition-all duration-300 hover:shadow-blue-900/20">
                  <h3 className="text-xl font-semibold text-blue-300 mb-2 flex items-center">
                    <span className="bg-blue-500/20 text-blue-400 p-1 rounded-md mr-2 w-6 h-6 flex items-center justify-center text-sm">5</span>
                    RNG
                  </h3>
                  <p className="text-gray-300 mb-3 pl-9">
                    Random number generator strategy for pure chance betting.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 pl-9">
                    <li className="opacity-90 hover:opacity-100 transition-opacity">
                      Randomly selects fighters to bet on
                    </li>
                    <li className="opacity-90 hover:opacity-100 transition-opacity">
                      Useful for comparison testing against other strategies
                    </li>
                  </ul>
                  <div className="bg-gray-600/50 p-3 rounded mt-3 ml-9">
                    <p className="text-sm text-gray-300">
                      <span className="text-blue-300 font-semibold">Best for:</span> Testing and comparing with other strategies
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-900/20 p-6 rounded-lg mt-8 border border-blue-700/30">
                <h3 className="text-xl font-semibold text-blue-300 mb-3">Advanced Strategy Tips</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-3 ml-2">
                  <li>
                    <span className="font-medium text-blue-200">Tier Switching:</span> ELO Tier works best for P and B tier matches, while standard ELO is often better for S and X tier matches where fighters are more established.
                  </li>
                  <li>
                    <span className="font-medium text-blue-200">Upset Mode:</span> Toggle this on during tournament seasons when underdogs tend to win more frequently.
                  </li>
                  <li>
                    <span className="font-medium text-blue-200">Balance Growth:</span> Start with higher risk (All-In Until) strategies when your balance is low, then switch to percentage-based betting to preserve gains.
                  </li>
                  <li>
                    <span className="font-medium text-blue-200">Confidence Threshold:</span> Adjust this based on strategy - higher thresholds (70%+) for ELO, lower thresholds (50-60%) for Naive.
                  </li>
                </ul>
              </div>
            </div>
          )}
          
          {activeTab === 'faq' && (
            <div className="fade-in">
              <div className="flex items-center mb-6">
                <div className="bg-blue-500/20 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-blue-300">Frequently Asked Questions</h2>
              </div>
              
              <div className="space-y-6 stagger-fade-in">
                <div className="bg-gray-700/50 p-6 rounded-lg shadow-md border border-gray-600 hover:border-blue-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-blue-300 mb-3 flex items-start">
                    <span className="text-blue-400 mr-2">Q:</span>
                    How does the extension work?
                  </h3>
                  <p className="text-gray-300 pl-6">
                    <span className="text-blue-400 font-semibold mr-2">A:</span>
                    The extension connects to a database of fighter statistics to analyze matchups. It uses various algorithms to determine bet confidence and can automatically place bets based on your settings. The extension runs in the background while you watch matches and handles everything from fetching data to placing optimal bets.
                  </p>
                </div>
                
                <div className="bg-gray-700/50 p-6 rounded-lg shadow-md border border-gray-600 hover:border-blue-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-blue-300 mb-3 flex items-start">
                    <span className="text-blue-400 mr-2">Q:</span>
                    What is 'Upset Mode'?
                  </h3>
                  <p className="text-gray-300 pl-6">
                    <span className="text-blue-400 font-semibold mr-2">A:</span>
                    Upset Mode bets against the algorithm's recommendation. This can be useful during periods when underdogs are winning consistently or when you want to test contrarian strategies. When enabled, if the algorithm suggests betting on the red fighter, the extension will bet on blue instead, and vice versa.
                  </p>
                </div>
                
                <div className="bg-gray-700/50 p-6 rounded-lg shadow-md border border-gray-600 hover:border-blue-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-blue-300 mb-3 flex items-start">
                    <span className="text-blue-400 mr-2">Q:</span>
                    Does the extension collect my data?
                  </h3>
                  <p className="text-gray-300 pl-6">
                    <span className="text-blue-400 font-semibold mr-2">A:</span>
                    No, the extension doesn't collect any personal data. All settings are stored locally in your browser using Chrome's storage API, and fighter data comes from a public API. Your betting preferences and settings remain private to your browser. The only external communications are to fetch publicly available match and fighter statistics.
                  </p>
                </div>
                
                <div className="bg-gray-700/50 p-6 rounded-lg shadow-md border border-gray-600 hover:border-blue-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-blue-300 mb-3 flex items-start">
                    <span className="text-blue-400 mr-2">Q:</span>
                    How accurate are the predictions?
                  </h3>
                  <p className="text-gray-300 pl-6">
                    <span className="text-blue-400 font-semibold mr-2">A:</span>
                    While no betting system is perfect, our algorithms have shown consistent performance across thousands of matches. The ELO strategy tends to perform best for established fighters, while Naive works well for newer characters. Overall accuracy depends on the volatility of the current tournament or matchmaking season. The extension performs best when there's sufficient historical data for the fighters involved.
                  </p>
                </div>
                
                <div className="bg-gray-700/50 p-6 rounded-lg shadow-md border border-gray-600 hover:border-blue-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-blue-300 mb-3 flex items-start">
                    <span className="text-blue-400 mr-2">Q:</span>
                    Why is the extension betting small amounts when my balance is high?
                  </h3>
                  <p className="text-gray-300 pl-6">
                  <span className="text-blue-400 font-semibold mr-2">A:</span>
                    This is likely due to your Max Bet settings. Check your Max Bet Percentage and Max Bet Amount settings - if either is too low, it will limit your bet size. For example, if Max Bet Percentage is set to 5%, on a $10,000 balance, you'll only bet up to $500 even on high confidence matches. Adjust these settings higher or set them to 0 to disable the limit.
                  </p>
                </div>
                
                <div className="bg-gray-700/50 p-6 rounded-lg shadow-md border border-gray-600 hover:border-blue-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-blue-300 mb-3 flex items-start">
                    <span className="text-blue-400 mr-2">Q:</span>
                    What does the Match Stats button do?
                  </h3>
                  <p className="text-gray-300 pl-6">
                    <span className="text-blue-400 font-semibold mr-2">A:</span>
                    The Match Stats button displays a detailed overlay with information about the current match, including fighter win rates, ELO ratings, head-to-head history, and other statistics. This information can help you understand why the extension is recommending a particular bet and provide insight into fighter performance. The overlay automatically disappears after 15 seconds or can be closed manually.
                  </p>
                </div>
                
                <div className="bg-gray-700/50 p-6 rounded-lg shadow-md border border-gray-600 hover:border-blue-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-blue-300 mb-3 flex items-start">
                    <span className="text-blue-400 mr-2">Q:</span>
                    Is there a way to customize which tiers I bet on?
                  </h3>
                  <p className="text-gray-300 pl-6">
                    <span className="text-blue-400 font-semibold mr-2">A:</span>
                    Yes, you can toggle betting for specific tiers (X, S, A, B, P) in the extension settings. This allows you to focus your betting on tiers where you've had the most success or avoid tiers that tend to be more unpredictable. For example, many users disable betting on P tier matches since they can be highly volatile with new characters.
                  </p>
                </div>
                
                <div className="bg-gray-700/50 p-6 rounded-lg shadow-md border border-gray-600 hover:border-blue-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-blue-300 mb-3 flex items-start">
                    <span className="text-blue-400 mr-2">Q:</span>
                    What happens if the server is having issues?
                  </h3>
                  <p className="text-gray-300 pl-6">
                    <span className="text-blue-400 font-semibold mr-2">A:</span>
                    If the SaltyBitch server is having issues or if match data can't be retrieved, the extension will fall back to a conservative betting strategy, typically placing a small $1 bet on red. This ensures you don't miss out on matches while protecting your balance from risky bets. The extension will continue trying to fetch updated data for future matches.
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-900/20 p-6 rounded-lg mt-8 border border-blue-700/30">
                <h3 className="text-xl font-semibold text-blue-300 mb-3">Need More Help?</h3>
                <p className="text-gray-300 mb-4">
                  If you're experiencing an issue not covered in the FAQ or have suggestions for improving SaltyPro, you can:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                  <li>
                    <span className="font-medium text-blue-200">Report bugs or issues</span> through our support page at <a href="https://xuko.xyz" className="text-blue-400 hover:underline">xuko.xyz</a>
                  </li>
                  <li>
                    <span className="font-medium text-blue-200">Join our community</span> to discuss strategies and share tips with other SaltyPro users
                  </li>
                  <li>
                    <span className="font-medium text-blue-200">Check for updates</span> regularly to ensure you have the latest version with all bug fixes and improvements
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        
        <div className="fade-in bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl p-6 mt-8 border border-gray-700">
          <div className="flex items-center mb-4">
            <div className="bg-blue-500/20 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-blue-300">About SaltyPro</h2>
          </div>
          <p className="text-gray-300 mb-4">
            SaltyPro is a remake built upon the original "SaltyBet" Google Chrome extension. Full credit goes to the original author for the foundation of this tool.
          </p>
          <p className="text-gray-300">
            This improved version by Andrew includes better refresh mechanisms, redesigned user interface, comprehensive documentation, help button, and improved code structure while respecting the original concept.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Help;