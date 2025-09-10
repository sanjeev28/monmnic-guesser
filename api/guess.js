const bip39 = require('bip39');
const crypto = require('crypto');

module.exports = async (req, res) => {
  try {
    const attempts = parseInt(req.query.attempts) || 1000;
    
    if (attempts > 10000) {
      return res.status(400).json({
        success: false,
        error: 'Maximum attempts is 10,000'
      });
    }
    
    const startTime = Date.now();
    const results = [];
    
    for (let i = 0; i < attempts; i++) {
      const entropy = crypto.randomBytes(32);
      const mnemonic = bip39.entropyToMnemonic(entropy);
      
      results.push({
        index: i + 1,
        mnemonic: mnemonic,
        hasFunds: false
      });
    }
    
    const endTime = Date.now();
    const totalTime = (endTime - startTime) / 1000;
    const rate = attempts / totalTime;
    const theoreticalTime = (Math.pow(2, 256) / rate) / (365 * 24 * 60 * 60);
    
    return res.status(200).json({
      success: true,
      attempts: attempts,
      time: totalTime.toFixed(2),
      rate: rate.toFixed(2),
      theoreticalTime: theoreticalTime.toExponential(2),
      found: 0,
      results: results
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
