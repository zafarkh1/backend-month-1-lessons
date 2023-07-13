//                      lesson-9

// process.cwd() => current working directory
// fs.unlinkSync(path) => fileni o'chirib yuboradi
// fs.mkdirSync('./test', { recursive : true}) => yangi folder ochib beradi

//                     lesson-10
// authentication vs authorization node js
//1chi qism - algoritm , 2 - payload (id), 3 - secret
// randomBytes
// npm i jsonwebtoken (sign verify)
// npm i dotenv (config)

//                     lesson-1
// npm i express
// app.use(express.json()) => node.js dagi req.on(chunk) va JSON parse ogirish jarayonini bajarib beradi
// /books/:id => patch da id berish

//                      lesson-2
// app.get('/', (req, res) => {} )
// 1-chi qism => routing part
// 2-chi qism => request handler

// Middleware 5 xil bo'ladi

// 1)                 BUILT-IN MIDDLEWARE

// Ishlatilishi =>
// 1) routing va request handler o'rtasida => (express.json())
// 2) global holatda () => app.use(express.json())

//                    APPLICAATION-LEVEL MIDDLEWARE

// app.use((req, res, next) => {
// 	if(!req.headers["authorization"] {
// 		res.send("Unauthorized")
// 	})
// 	next()
// })

// Bir nechta middleware ishlatilinganda array ko'rinishida yoziladi [] => ([tokenVerify, express.json])

//                   ERROR-HANDLER MIDDLEWARE
// export const exceptionHandler = (err, req, res, next) => {
//   res.status(err.status).send({
//     name: err.constructor.name,
//     message: err.message,
//   });
//   next();
// };

// * bu berilgan route dan har qandayi request bo'lganda xatoni ushlaydi

// app.all("/*", (req, res) => {
//   return res.status(404).json({
//     message: "Not found",
//     details: `${req.url.split("/")[1]} not found`,
//   });
// });

//                          lesson-3
//                 JOI (package for validation)
// npm i joi

//                          lesson-4
//pnpm update (pnpm ancha tezroq) => {yarn, npm , pnpm, npx, pnpx}

//model => schema => controller => middlewares

//                           ROUTER MIDDLEWARE
// const router = express.Router()
// router.post('/smth', ....)

//                           lesson-5

//                      PRESENTATION TIER (client)
// The presentation tier is the user interface and communication layer of the application, where the end user interacts with the application (UI qismi, ya'ni frontend) {tier => qism}

//                      LOGIC TIER (server)
// The application tier, also known as the logic tier or middle tier, is the heart of the application. (backend qismi) {API}

//                       DATA TIER (database)
// The data tier, sometimes called database tier, data access tier or back-end, is where the information processed by the application is stored and managed.(baza qismi)

//                        THREE TIER APPLICATION
// A 3-tier application architecture is a client-server implementation that uses a presentation tier, application tier and data tier to organize app design.

//                         TWO TIER APPLICATION
// A two-tier application involves a client and a server. The client contains the user interface with the business logic in one machine. Meanwhile, the backend server includes the database running on a different machine

//                         ONE TIER APPLICATION
// SSR – (анг. аббревиатура от Server Side Rendering) это технология, которая позволяет, с помощью Node.js, запускать JavaScript код на сервере (а не в браузере как обычно) и готовый результат отправлять пользователю, избегая лишней нагрузки на его браузер и компьютер.

//                         MVC
// The Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components: the model, the view, and the controller.

//                        TEMPLATE ENGINE (ejs and pug)
// A template engine is a specific kind of template processing module that exhibits all of the major features of a modern programming language. The term template engine evolved as a generalized description of programming languages whose primary or exclusive purpose was to process templates and data to output text.
// Serverda template ni render qilib beradi

// View Engine => templte engine, shablonni render qiladi

// EJS => template engine, reactga o'xshab ketadi, biron bir HTML formatdagi faylni render qilib beradi. Butun boshli saytni, frontend va backend qismini bittada yozish imkonini beradi

// res.render("book"); => .ejs ko'rinishda yozish uchun

// app.set('view engine', 'ejs')
// app.set('views', join(process.cwd(), 'src', 'view')) => manda view degan papka ichida joylashgan book.ejs faylim

// app.use => middleware lar uchun
// app.set => sozlash uchun

// <%  %> => JS syntaksis yozilganda (map, forEach)
// <%=  %> => render qilinadigan (e.price, e.title)

// app.use(express.urlencoded()) => (middleware) form dan junatilganda ishlatiladi

// res.redirect('/api/books') => pageni qayta o'qimasdan qilib yubormasdan shunchaki refresh qiladi

// app.use('/assets', express.static(join(process.cwd(), 'src', 'assets')))  => css ulash usuli

//                    lesson-6

/* <form action="/file-upload" enctype="multipart/form-data" method="POST">
	<input type="file" name="file">
		<button type="submit">Upload</button>
</form>; */

// multipart/form-data => file junatish usuli

// npm i multer

//  const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./src/uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname)
//   },
// })

// const upload = multer({storage})

//                   randomUUID
//import { randomUUID } from "crypto";
// cb(null, randomUUID() + `.${file.mimetype.split("/")[1]}`);

// => bu package bizaga random tarzda id tanlab beradi hech qachon takrorlanmaydigan

// '' => single quote
// "" => double quotes
// `` => backtick quotes

//                      lesson-7

// Local storage => doimiy saqlanib turuvchi xotira
// Session storage => vaqtinchalik saqlanib turuvchi xotira

//                      lesson-8

//           TELEGRAM BOT
// npm i node-telegram-bot-api

// bot father
// Use this token to access the HTTP API:
// 6329393714:AAEowDEcbT_XePVqPqVLnB7r6C5EotnrZ98 => bizaga token beradi tg bot

// bot.onText(/\/start/, message => {
// 	bot.sendMessage(message.chat.id, `Hello ${message.from.first_name} Choose`, {
	// reply_markup: {
//       keyboard: [
//         [
//           {
//             text: "Ozbek",
//           }
//         ],
// });
// })



// bot.on("message", (message) => {
//   const chatId = message.chat.id;

//   if (message.text == "Ozbek") {
//     bot.sendMessage(
//       chatId,
//       `My School Hush Kelibsiz`
//     )}})


// bot.sendPhoto(
//       chatId,
//       "https://cambridgeonline.uz/img/background/Novza.jpg",
//       {
//         caption: `<i>📍 My School Drujba filiali xaritasi </i>`,
// 				parse_mode: "HTML",
// 				reply_markup: {
// 					inline_keyboard: [
// 						[
// 							{
// 								text: "Drujba",
// 								callback_data: "Drujba"
// 							}
// 						]
// 					]
// 				}
//       }
//     );

// bot.on('callback_query') => callback_data ichidagi value bn bir xil
// bot.on('contact')

//new_chat_members => bot guruxga ulangandan keyin, guruxga yamgi a'zo qo'shilsa habar beradi
// one_time_keyboard: true,
// request_contact: true;
