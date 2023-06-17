import http from "http";
import { readFileCustom } from "./helpers/read-helper.js";
import { sign, verify } from "./helpers/jwt-helper.js";

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    req.on("data", (chunk) => {
      const { username, password } = JSON.parse(chunk);

      const user = readFileCustom("users.json").find(
        (e) => e.username == username && e.password == password
      );

      const acc = sign({ id: user.id });

      if (user.accessToken) {
        user.acc = acc;
      } else {
        user.acc = acc;
      }

      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(
        JSON.stringify({
          message: "Success",
          accessToken: sign({ id: user.id }),
        })
      );
      return;
    });
    return;
  }

  if (req.method === "GET") {
    const accessToken = req.headers["authorization"];

    const { id } = verify(accessToken);

    const user = readFileCustom("users.json").find(
      (e) => e.id == id && e.acc == accessToken
    );

    if (!user) {
      res.writeHead(401, {
        "Content-Type": "application/json",
      });
      res.end(
        JSON.stringify({
          message: "Unauthorized",
        })
      );
      return;
    }

    const userCards = readFileCustom("cards.json").filter(
      (e) => e.userID == id
    );

    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(
      JSON.stringify({
        message: "Success",
        data: userCards,
      })
    );
    return;
  }
});

server.listen(6060, console.log(6060));

// import http from "http";
// import { readFileCustom } from "./helpers/read-helper.js";
// import { sign, verify } from "./helpers/jwt-helper.js";

// const server = http.createServer((req, res) => {
//   if (req.method === "POST") {
//     // Login endpoint
//     if (req.url === "/login") {
//       req.on("data", (chunk) => {
//         const { username, password } = JSON.parse(chunk);

//         const user = readFileCustom("users.json").find(
//           (e) => e.username === username && e.password === password
//         );

//         if (!user) {
//           res.writeHead(401, {
//             "Content-Type": "application/json",
//           });
//           res.end(
//             JSON.stringify({
//               message: "Invalid credentials",
//             })
//           );
//           return;
//         }

//         const accessToken = sign({ id: user.id });

//         if (user.accessToken) {
//           user.accessToken = accessToken;
//         } else {
//           user.accessToken = accessToken;
//         }

//         res.writeHead(200, {
//           "Content-Type": "application/json",
//         });
//         res.end(
//           JSON.stringify({
//             message: "Success",
//             accessToken: accessToken,
//           })
//         );
//       });
//       return;
//     }

//     // Logout endpoint
//     if (req.url === "/logout") {
//       const accessToken = req.headers["authorization"];
//       const { id } = verify(accessToken);

//       const user = readFileCustom("users.json").find(
//         (e) => e.id === id && e.accessToken === accessToken
//       );

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

//       user.accessToken = null; // Clear the access token

//       res.writeHead(200, {
//         "Content-Type": "application/json",
//       });
//       res.end(
//         JSON.stringify({
//           message: "Logged out successfully",
//         })
//       );
//       return;
//     }
//   }

//   if (req.method === "GET") {
//     const accessToken = req.headers["authorization"];

//     const { id } = verify(accessToken);

//     const user = readFileCustom("users.json").find(
//       (e) => e.id === id && e.accessToken === accessToken
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
//       (e) => e.userID === id
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

// server.listen(1111, () => {
//   console.log("Server is running on port 6060");
// });
