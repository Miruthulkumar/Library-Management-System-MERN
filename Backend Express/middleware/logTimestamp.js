const logTimestamp = (req, res, next) => {
  const now = Date();
  console.log(`[${now}] Request to: ${req.method} ${req.url}`);
  next();
};

module.exports = logTimestamp;
