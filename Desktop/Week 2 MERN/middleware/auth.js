// middleware/auth.js
const authenticate = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  
  if (!apiKey) {
    return res.status(401).json({ 
      error: 'API key is required',
      solution: 'Include x-api-key in your request headers'
    });
  }

  if (apiKey !== process.env.API_KEY) {
    return res.status(403).json({ 
      error: 'Invalid API key',
      solution: 'Check with your administrator for the correct key'
    });
  }

  next();
};

module.exports = authenticate;