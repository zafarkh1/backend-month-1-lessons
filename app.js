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