import jwt from "jsonwebtoken";

export const sign = (payload) => jwt.sign(payload, "!Q@W#E$R");
export const verify = (token) => jwt.verify(token, "!Q@W#E$R");