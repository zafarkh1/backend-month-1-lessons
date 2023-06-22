//                      lesson-9

// process.cwd() => current working directory
// fs.unlinkSync(path) => fileni o'chirib yuboradi
// fs.mkdirSync('./test', { recursive : true}) => yangi folder ochib beradi


//                     lesson-10
// authentication vs authorization node js
//1chi qism - algoritm , 2 - payload (id), 3 - secret
// randomBytes

// const { log } = require('console');
// const accessToken = sign ({id : 1}, '!QER#LJNF')

// console.log(verify(accessToken, "!QER#LJNF"));
// const { sign, verify } = require("jsonwebtoken");