const { connect } = require('../config/db');
const User = require('../models/user');

module.exports.handler = async (event, ctx) => {
  ctx.callbackWaitsForEmptyEventLoop = false;
  try {
    await connect();

    const { name, email, password } = JSON.parse(event.body);
    const user = await User.create({ name, email, password });
    return {
      statusCode: 201,
      body: JSON.stringify({
        user,
      }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};
