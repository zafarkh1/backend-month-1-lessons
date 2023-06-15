// authentication vs authorization node js
//1chi qism - algoritm , 2 - payload (id), 3 - secret
// randomBytes

// const { log } = require('console');
// const accessToken = sign ({id : 1}, '!QER#LJNF')

// console.log(verify(accessToken, "!QER#LJNF"));
// const { sign, verify } = require("jsonwebtoken");
const http = require('http')
const { sign, verify } = require("./helpers/jwt-helper.js");


const data = [
	{
		id: 1,
		username: 'Toshmat',
		password: '1234'
	}
]

const server = http.createServer((req, res) => {
	const method = req.method
	const url = req.url

	if(method == 'POST') {
		req.on('data', (chunk) => {
			const {username, password} = JSON.parse(chunk)

			const user = data.find(el => el.username == username && el.password == password)

			res.writeHead(200, {
				'Content-Type' : 'application/json'
			})
			res.end(JSON.stringify({
				message: "Authorized",
				accessToken: sign({id: user.id})
			}))
			return;
		})
	}
})

server.listen(9000, console.log('listening ...'))