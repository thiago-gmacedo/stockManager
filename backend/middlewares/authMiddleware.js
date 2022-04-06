/* eslint-disable new-cap */
const jwt = require('../auth/auth.js');
const userService = require('../services/userService.js');
const errorMessage = require('../utils/errorMessage.js');

module.exports = async (req, res, next) => {
  const [, token] = req.headers.authorization.split(' ');

  if (!token) {
    const {status, payload} = errorMessage.TOKEN_NOT_FOUND;
    return res.status(status).json(payload);
  };

  try {
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
    return errorMessage.SOME_ERROR;
  }
};

