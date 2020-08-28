const { pool } = require('../../database/index');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = {
    name: username
  };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({
    accessToken: accessToken
  })
}

module.exports = {
  loginUser
}
