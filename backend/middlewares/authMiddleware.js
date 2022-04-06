/* eslint-disable new-cap */
const jwt = require('../auth/auth.js');
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

    const {id} = jwt.verify(token);
    const user = await userService.getOne(id);
    console.log(user);

    if (!user) {
      const {status, payload} = errorMessage.USER_NOT_FOUND;
      return res.status(status).json(payload);
    }

    req.auth = user;
    next();
  } catch (error) {
    const {status, payload} = errorMessage.SOME_ERROR;
    return res.status(status).json(payload);
  }
};

