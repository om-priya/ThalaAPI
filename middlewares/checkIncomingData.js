const verifyData = (req, res, next) => {
  if (req.query.name && req.query.name.length > 1) {
    const nameRegex = /^[A-Za-z]+$/;

    const name = req.query.name;

    if (!name || !nameRegex.test(name)) {
      return res.status(400).json({ error: "Invalid name format" });
    }
    next();
  } else {
    return res.status(400).json({ error: "Invalid name format" });
  }
};

module.exports = { verifyData };
