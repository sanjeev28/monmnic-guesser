# Mnemonic Guesser - Educational Web Demo

This is an educational web tool that demonstrates the impracticality of guessing existing BIP-39 mnemonic phrases.

## ⚠️ Important Disclaimer

This tool is for **educational purposes only**. It demonstrates why BIP-39 mnemonic phrases are secure against guessing attacks. It will NOT find any real mnemonic phrases with funds.

The probability of guessing a valid mnemonic with funds is astronomically low (approximately 1 in 10^77). This tool is designed to show why such attacks are computationally infeasible.

## Features

- Web-based interface for easy access
- Configurable number of attempts (up to 10,000)
- Real-time progress tracking
- Detailed statistics and results
- Educational explanations about BIP-39 security
- Mobile-friendly responsive design

## How to Use

1. Visit the deployed URL
2. Enter the number of attempts (1-10,000)
3. Click "Start Guessing"
4. View the progress and results
5. Read the educational explanation

## What This Demonstrates

### 1. The Scale of Entropy
- BIP-39 uses 256 bits of entropy
- This creates 2^256 (approximately 10^77) possible combinations
- This is more than the number of atoms in the observable universe

### 2. Computational Feasibility
- Even at high speeds, it would take longer than the age of the universe to check all possibilities
- The tool calculates the theoretical time required to find one mnemonic with funds
- This demonstrates why brute-force attacks are impractical

### 3. Security of Cryptographic Systems
- The security of BIP-39 comes from the vast entropy space
- Random guessing is not a viable attack vector
- Real security risks come from poor storage practices, not the cryptography itself

## Technical Details

This tool:
- Uses `crypto.randomBytes(32)` for secure entropy generation
- Follows the BIP-39 standard for mnemonic generation
- Simulates the checking process (without actually accessing any blockchain)
- Provides realistic performance metrics
- Runs entirely in the browser and on Vercel's serverless platform

## Deployment

This project is designed to be deployed on Vercel:

1. Fork or clone this repository
2. Connect it to Vercel
3. Deploy automatically

## Real-World Context

In practice, all known cryptocurrency thefts have been due to:
- Phishing attacks
- Malware
- Poor storage practices
- Compromised generation tools

There are no documented cases of someone randomly guessing a valid mnemonic with funds.

## License

MIT
