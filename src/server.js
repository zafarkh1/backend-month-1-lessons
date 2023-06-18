import { createServer } from "http";
import { readFileCustom } from "./helpers/read-helper.js";
import { writeFileCustom } from "./helpers/write-helper.js";
import { sign, verify } from "./helpers/jwt-helper.js";

const PORT = 9000;

// const server = createServer((req, res) => {
//   const method = req.method;
//   const url = req.url.split("/")[1];

//   if (method == "POST") {
//     if (url === "sign-in") {
//       req.on("data", (chunk) => {
//         const { username, password } = JSON.parse(chunk);

//         const user = readFileCustom("users.json").find(
//           (el) => el.username == username && el.password == password
//         );

//         const accessToken = sign({ id: user.id });

//         if (user) {
//           if (user.accessToken) {
//             user.accessToken = accessToken;
//             const allUsers = readFileCustom("users.json");
//             const index = allUsers.findIndex((e) => e.id == user.id);
//             allUsers.splice(index, 1);
//             allUsers.push(user);

//             writeFileCustom("users.json", allUsers);
//           } else {
//             user.accessToken = accessToken;

//             const allUsers = readFileCustom("users.json");
//             const index = allUsers.findIndex((e) => e.id == user.id);
//             allUsers.splice(index, 1);
//             allUsers.push(user);

//             writeFileCustom("users.json", allUsers);
//           }
//         } else {
//           res.writeHead(401, {
//             "Content-Type": "application/json",
//           });
//           res.end(
//             JSON.stringify({
//               message: "Unauthorized",
//             })
//           );
//           return;
//         }

//         res.writeHead(200, {
//           "Content-Type": "application/json",
//         });
//         res.end(
//           JSON.stringify({
//             message: "Success",
//             accessToken,
//           })
//         );
//         return;
//       });
//       return;
//     }
//     if (url === "sign-out") {
//       const accessToken = req.headers["authorization"];

//       const { id } = verify(accessToken);
//       const user = readFileCustom("users.json").find((el) => el.id == id);
//       if (!user) {
//         res.writeHead(401, {
//           "Content-Type": "application/json",
//         });
//         res.end(
//           JSON.stringify({
//             message: "Unauthorized",
//           })
//         );
//         return;
//       }
//       if (user.accessToken) {
//         delete user.accessToken;

//         const allUsers = readFileCustom("users.json");
//         const index = allUsers.findIndex((e) => e.id == user.id);
//         allUsers.splice(index, 1);
//         allUsers.push(user);

//         writeFileCustom("users.json", allUsers);
//       }
//       res.writeHead(200, {
//         "Content-Type": "application/json",
//       });
//       res.end(
//         JSON.stringify({
//           message: "Successfully signed out",
//         })
//       );
//       return;
//     }
//   }

//   if (method == "GET") {
//     const accessToken = req.headers["authorization"];

//     const { id } = verify(accessToken);
//     const user = readFileCustom("users.json").find(
//       (el) => el.id == id && e.acc == accessToken
//     );
//     if (!user) {
//       res.writeHead(401, {
//         "Content-Type": "application/json",
//       });
//       res.end(
//         JSON.stringify({
//           message: "Unauthorized",
//         })
//       );
//       return;
//     }
//     const userCards = readFileCustom("cards.json").filter(
//       (el) => el.userId == id
//     );
//     res.writeHead(200, {
//       "Content-Type": "application/json",
//     });
//     res.end(
//       JSON.stringify({
//         message: "Success",
//         data: userCards,
//       })
//     );
//     return;
//   }
// });

let type = roles

// const server = createServer((req, res) => {
// 	const method = req.method
// 	const url = req.url.split('/')[1]

// 	if(method == "GET") {
// 		if(url == 'allUsers') {
// 			const accessToken = req.headers['authorization']
// 			const {id} = verify(accessToken)

// 			const user = readFileCustom('users.json').find(e=> e.id == id)

// 			if(!user) {
// 				res.writeHead(401, {
// 					'Content-Type' : "application/json"
// 				})
// 				res.end(JSON.stringify({
// 					message: 'Unauthorized'
// 				}))
// 				return
// 			}
// 			if(user.role != 'admin') {
// 				res.writeHead(401, {
//           "Content-Type": "application/json",
//         });
//         res.end(
//           JSON.stringify({
//             message: "Unauthorized or access denied",
//           })
//         );
//         return;
// 			}
// 			const allUsers = readFileCustom('users.json').filter(el => el.id !== id)

// 			res.end(JSON.stringify(allUsers))
// 			return
// 		}
// 	}
// })
server.listen(PORT, console.log("listening ..."))