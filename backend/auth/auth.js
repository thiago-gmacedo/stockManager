const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  sign: async (payload) => {
    return await jwt.sign(payload, process.env.SECRET_KEY);
  },

  verify: async (token) => {
    return await jwt.verify(token, process.env.SECRET_KEY);
  },
};
