// Backend - klient tomonidan kelgan so'rovlarga javob beruvchi , sahna (parda) ortidagilar
// Frontentdan farqi Backend moslashuvchan, ya'ni desktop application, mobile app, web page dan kelgan so'rovlarga javob beradi, ya'ni hammasiga bitta kod yozadi, Frontend bo'lsa ularning har biriga alohida kod yozadi
// Server bu requestga response qaytaradigan qismdir, backendni bir qismi so'rovlarga biz belgilagan logika bo'yicha javob beradi4
// Server bu fizik yoki vertual qism
// NodeJs bu runtime. JSni ishlatib beruvchi bir muhit. Javascriptni browserda emas, kompyuterda va umuman olganda, browserda tashqarida run (ishlatib berish) ga xizmat qiladi. Framework, kutubxona, dasturlash tili emas
// JS was invented by Brendan Eich in 1995, and became an ECMA standart in 1997
// JS V8 engine hisobiga browserda (Google Chrome) ishlaydi, ya'ni kodlarni browserga o'girib (compile) qilib beradi
// .mjs .cjs
// (npm init -y ) {type} : 'commonjs' / 'module'
// require vazifasi import bilan bir xil olib kelish yuklab olish
// NodeJs bu javascript 61% C++ 22% Python 12%
// http bu protokol, odatda HTTP RestApi deyiladi. Alternative - ws (web socket)
// 127.0.0.1 = localhost => hoste qismi (kompyuterimizdagi IP address), kun.uz => domen
// 9000 => port

const http = require("http");
const data = require("./data");
console.log(data);

http
  .createServer((request, response) => {
    const method = request.method;
    const url = request.url;
    const bookId = url.split("/")[2];

    if (method == "GET") {
      if (url.split("/")[1] === "books") {
        if (!bookId) {
          response.end(JSON.stringify(data));
          return;
        }
        const book = data.find (e => e.id == bookId);
        if (!book) {
          response.writeHead(404, {
            "Content-type": "application/json",
          });
          response.end(
            JSON.stringify({
              status: 404,
              message: http.STATUS_CODES[404],
            })
          );
        }
        response.writeHead(200, {
          "Content-type": "application/json",
        });
        response.end(JSON.stringify(book));
        return;
      }
      response.end("Get method");
    } else {
      response.end("moditification method");
    }
  })
  .listen(9002, () => {
    console.log("Listening ...");
  });