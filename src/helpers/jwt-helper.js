import jwt from 'jsonwebtoken'

export const sign = (payload) => jwt.sign(payload, "!WF%&VD");
export const verify = (token) => jwt.verify(token, "!WF%&VD");