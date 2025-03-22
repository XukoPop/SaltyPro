# SaltyPro

SaltyPro is an advanced Chrome extension that enhances the SaltyBet experience with automated betting features and detailed fighter analytics.

![SaltyPro Extension](public/image1.png)

## Features

- **Smart automated betting** based on fighter statistics and match history
- **Detailed fighter analytics** with win/loss records, ELO ratings, and match data
- **Head-to-head statistics** when fighters have faced each other before
- **Multiple betting strategies** including naive, ELO-based, and tier-based algorithms
- **Customizable betting settings** for maximum control
- **Improved data refresh** functionality to eliminate constant manual refreshing

## Installation

[Add to Chrome](https://chrome.google.com/webstore/detail/saltypro/eocgcmccjmhiheehmpkgohneocaongn)

## How It Works

SaltyPro connects to a database of fighter statistics to analyze matchups. It uses various algorithms to determine bet confidence and can automatically place bets based on your settings.

When a match begins, the extension:
1. Retrieves fighter statistics from the API
2. Analyzes win rates, ELO ratings, and previous matchups
3. Determines optimal bet strategy and confidence level
4. Places bet according to your configured settings

## Configuration Options

- **Betting Mode**: Choose between different betting algorithms
- **All In Until**: Set a balance threshold for all-in betting
- **Max Bet Percentage**: Limit bets to a percentage of your balance
- **Max Bet Amount**: Set a hard cap on bet amounts
- **Tier-specific Betting**: Enable/disable betting on specific fighter tiers
- **Upset Mode**: Bet against algorithm recommendations (for when underdogs are winning)

## Privacy

SaltyPro respects your privacy:
- No personal data is collected
- All settings are stored locally in your browser
- The extension only communicates with the SaltyBet API for fighter statistics

## Development

This extension is built with JavaScript and uses the Chrome Extension API.

To contribute:
1. Clone the repository
2. Make your changes
3. Submit a pull request

## Credits

Created by [FranciscoAT](https://github.com/FranciscoAT/saltyboy)
Updated by [BukiDev](https://BukiDev.xyz)

Based on open-source historical match data from the SaltyBet community.
