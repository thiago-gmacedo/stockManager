/* eslint-disable new-cap */
const jwt = require('../auth/auth');
const userService = require('../services/userService.js');
const errorMessage = require('../utils/errorMessage.js');

module.exports = async (req, res, next) => {
  try {
    if (!req.headers.authorization) throw Error();
    const [, token] = await req.headers.authorization.split(' ');

    if (!token || token === 'undefined') {
      const {status, payload} = errorMessage.TOKEN_NOT_FOUND;
      return res.status(status).json(payload);
    };

    const {id} = await jwt.verify(token);
    const user = await userService.getOne(id);

    if (!user) {
      const {status, payload} = errorMessage.USER_NOT_FOUND;
      return res.status(status).json(payload);
    }

    req.auth = user;
    next();
  } catch (err) {
    const {status, payload} = errorMessage.TOKEN_NOT_FOUND;
    return res.status(status).json(payload);
  }
};

