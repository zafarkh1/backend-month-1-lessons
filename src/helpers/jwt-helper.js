const jwt = require('jsonwebtoken')

const sign = (payload) => jwt.sign(payload, "2k4kj5bn7");
const verify = (token) => jwt.verify(token, "2k4kj5bn7");

module.exports = {
	sign,
	verify
}