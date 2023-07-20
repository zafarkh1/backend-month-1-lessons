//                      lesson-9

// process.cwd() => current working directory
// fs.unlinkSync(path) => fileni o'chirib yuboradi
// fs.mkdirSync('./test', { recursive : true}) => yangi folder ochib beradi

//                     lesson-10
// authentication vs authorization node js
// 1chi qism - algoritm , 2 - payload (id), 3 - secret
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
// pnpm update (pnpm ancha tezroq) => {yarn, npm , pnpm, npx, pnpx}

// model => schema => controller => middlewares

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

// <form action="/file-upload" enctype="multipart/form-data" method="POST">
// 	<input type="file" name="file">
// 		<button type="submt">Upload</button>
// </form>;

// // multipart/form-data => file junatish usuli

// // npm i multer

// //  const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./src/uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname)
//   },
// })

// const upload = multer({storage})

// //                   randomUUID
// //import { randomUUID } from "crypto";
// // cb(null, randomUUID() + `.${file.mimetype.split("/")[1]}`);

// // => bu package bizaga random tarzda id tanlab beradi hech qachon takrorlanmaydigan

// // '' => single quote
// // "" => double quotes
// // `` => backtick quotes

// //                      lesson-7

// // Local storage => doimiy saqlanib turuvchi xotira
// // Session storage => vaqtinchalik saqlanib turuvchi xotira

// //                      lesson-8

// //           TELEGRAM BOT
// // npm i node-telegram-bot-api

// // bot father
// // Use this token to access the HTTP API:
// // 6329393714:AAEowDEcbT_XePVqPqVLnB7r6C5EotnrZ98 => bizaga token beradi tg bot

// // bot.onText(/\/start/, message => {
// 	bot.sendMessage(message.chat.id, `Hello ${message.from.first_name} Choose`, {
// 	reply_markup: {
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

// new_chat_members => bot guruxga ulangandan keyin, guruxga yamgi a'zo qo'shilsa habar beradi
// one_time_keyboard: true,
// request_contact: true;



//                                  lesson-11
//                Web socket

// Websocket -  независимый веб-протокол, который позволяет создавать интерактивное соединение между сервером и клиентом (браузером) и обмениваться сообщениями в реальном времени. В отличие от HTTP, веб-сокеты позволяют работать с двунаправленным потоком данных, поэтому технология является уникальной.

// Web protocols are a set of rules and conventions that dictate how data is exchanged and communicated over the World Wide Web. These protocols enable web browsers, web servers, and other web-enabled devices to understand and interact with each other, facilitating the retrieval and display of web pages, resources, and various types of content.

// Here are some of the key web protocols and their types:

// 1. Hypertext Transfer Protocol (HTTP): HTTP is the fundamental protocol of the World Wide Web. It governs how web browsers request and receive resources, such as HTML documents, images, stylesheets, scripts, and more, from web servers. HTTP follows a client-server model, where the client (usually a web browser) sends requests to the server, and the server responds with the requested data.

// Types: HTTP/1.1, HTTP/2, HTTP/3 (also known as QUIC)

// 2. Hypertext Transfer Protocol Secure (HTTPS): HTTPS is an extension of HTTP that adds a layer of security through encryption. It uses SSL/TLS protocols to secure data transmission between the client and server, ensuring privacy and data integrity.

// Types: HTTPS typically runs over HTTP/1.1, HTTP/2, or HTTP/3.

// 3. File Transfer Protocol (FTP): FTP is used for transferring files between a client and a server on a computer network. It enables users to upload and download files to and from a remote server.

// Types: FTP, FTPS (FTP Secure), SFTP (SSH File Transfer Protocol)

// 4. Domain Name System (DNS): DNS resolves human-readable domain names (e.g., www.example.com) into IP addresses, which are used to locate and communicate with web servers.

// Types: UDP-based DNS, TCP-based DNS (for larger data transfers and security)

// 5. Simple Mail Transfer Protocol (SMTP): SMTP is used for sending and relaying email messages between email servers.

// Types: SMTP (for sending emails), SMTPS (SMTP Secure), Submission (for authenticated users)

// 6. Post Office Protocol version 3 (POP3): POP3 is an email retrieval protocol used by email clients to retrieve email messages from a mail server.

// 7. Internet Message Access Protocol (IMAP): IMAP is another email retrieval protocol that allows users to access their email messages while keeping them stored on the server.

// 8. WebSocket Protocol: WebSocket enables full-duplex, bidirectional communication between a client and a server over a single TCP connection. It allows real-time, interactive communication in web applications.

// Type: WebSocket

// 9. WebRTC (Web Real-Time Communication): WebRTC is a collection of communication protocols and APIs that enable real-time communication directly between web browsers without the need for plugins or additional software.

// Types: WebRTC includes protocols like RTP (Real-time Transport Protocol), SRTP (Secure Real-time Transport Protocol), and ICE (Interactive Connectivity Establishment).

// These are some of the essential web protocols used to enable communication and data exchange on the internet. Each protocol serves a specific purpose and plays a crucial role in making the web a functional and interactive platform for users and developers.

// GraphQL is a query language for APIs (Application Programming Interfaces) and a runtime for executing those queries with your existing data. It was developed by Facebook in 2012 and later open-sourced in 2015. GraphQL provides a more efficient, powerful, and flexible alternative to traditional RESTful APIs.


// API stands for "Application Programming Interface." It is a set of rules and protocols that allows different software applications to communicate and interact with each other. APIs define the methods and data formats that applications can use to request and exchange information. They act as intermediaries, enabling different software systems to work together, share data, and perform specific tasks.

// APIs are crucial in modern software development as they provide a standardized way for developers to access the functionality of a system, service, or library without having to understand the internal implementation details. This allows developers to build applications that can leverage the capabilities of other services or systems without having to create everything from scratch.

// Types of APIs:

// Web APIs (HTTP-based APIs): These are APIs exposed over the internet and accessible using standard HTTP methods (GET, POST, PUT, DELETE, etc.). Web APIs are commonly used in web development to integrate with third-party services or provide access to resources on a web server.

// RESTful APIs (Representational State Transfer): A type of web API that follows the principles of REST, which is an architectural style for designing networked applications. RESTful APIs use standard HTTP methods to perform CRUD (Create, Read, Update, Delete) operations on resources identified by URLs.

// SOAP APIs (Simple Object Access Protocol): SOAP is a protocol for exchanging structured information in the implementation of web services. SOAP APIs use XML-based messages to define the request and response format.

// gRPC: As mentioned in a previous response, gRPC is an API technology that allows applications to communicate using remote procedure calls (RPC) with Protocol Buffers as the default serialization mechanism.

// Native APIs: These APIs are specific to a particular programming language or platform and provide access to system-level functionality or libraries. For example, the Python Standard Library has a wide range of native APIs for various purposes.

// Hardware APIs: These APIs provide access to hardware devices and peripherals, allowing software applications to interact with hardware components such as cameras, sensors, printers, etc.

// APIs have become an integral part of modern software development, enabling the integration of different applications, services, and devices to create more powerful and interconnected systems. They play a significant role in facilitating the growth of web and mobile applications, cloud computing, Internet of Things (IoT), and many other technologies.

//                                CORS


// CORS stands for "Cross-Origin Resource Sharing." It is a security feature implemented by web browsers to control how web pages from one origin (domain) can request and access resources from another origin. An origin is a combination of the scheme (e.g., http or https), domain, and port of a URL.

// Due to the same-origin policy enforced by browsers, web pages served from one origin are typically not allowed to make XMLHttpRequest or fetch requests to a different origin. This restriction is in place to prevent potential security vulnerabilities, such as unauthorized access to sensitive data or cross-site request forgery (CSRF) attacks.

// CORS enables controlled access to resources on a different domain by adding specific HTTP headers to the responses from the server. When a browser makes a cross-origin request, it first sends a preflight (OPTIONS) request to the server to check if the requested resource allows cross-origin requests. The server responds with appropriate CORS headers to indicate whether the request is allowed.

// The primary CORS headers are:

// 1. Access-Control-Allow-Origin: This header indicates which origins are allowed to access the requested resource. It can be set to a specific origin or "" (wildcard) to allow access from any origin. The use of "" is discouraged for security reasons, and the server should ideally specify the exact allowed origins explicitly.

// 2. Access-Control-Allow-Methods: This header specifies the HTTP methods (e.g., GET, POST, PUT, DELETE) that are allowed when making the actual request.

// 3. Access-Control-Allow-Headers: This header lists the HTTP headers that the client can include when making the actual request.

// 4. Access-Control-Allow-Credentials: If this header is set to "true," the client-side JavaScript code can include credentials (like cookies or HTTP authentication) when making the actual request.

// 5. Access-Control-Expose-Headers: This header lists the response headers that the client-side code can access.

// CORS is an important security mechanism that allows web developers to control which resources can be accessed by clients from different origins while maintaining the security and integrity of their applications. Properly configuring CORS is crucial to prevent unauthorized access and protect sensitive data on web servers.


//                     *******************************
// API - fizik obyekt va odam o'rtsidagi kommunikatsiyani amalga oshiruvchi interfeys

// HTTP - bu data tashuvchidir, TCP/IP kanali orqali. Data ochiq holatda keladi, shifrlangan holatda albatta. Bunda data secure qilinmaganligi uchun Data sniffing usulida data manzilga yetgunicha unga zarar yetishi mumkin

// HTTPS - datani xavfsiz ravishda tashuvshi protocol bu SSL/TLS protokolini hisobiga bo'ladi

// XML - bu ham data almashish uslubi, format, content-type. Bu ham baribir HTTP protokoli orqali jo'natiladi

// Graphql - asosi HHTP protokoli lekin HTTPda 5 ta so'rovga 5 ta endpoint, Graphqlda esa hammasiga 1 ta endpointda ishlaydi

// gRPC - bu mikroservislarni tashuvchi protokol hisoblanadi, masalan biz umumiy modellarni 3-4 ta qismga bolamiz, product.json, market.json, order.json. Shu bo'laklar o'rtasida data tashuvchi protokol

// MQ - Message Queuing. Servislar o'rtasida data almashinilayotgan paytda xabarlarni navbatda saqlab turuvchi protokol.

// Frontend va Backend orasidagi data almashinuvi HTTP protokoli orqali yuzaga keladi

// Cross-Origin Resource Sharing (CORS) - bir domenda ikkinchisiga data xavfsiz yetib borishini ta'minlaydi. Qandaydir xatolik bo'lsa, header lari orqali ogohlantiradi. Access-Control-Allow-Origin, Access-Control-Allow-Methods.

// TCP/IP - datalarni tarmoqda qanday uzatilishi, yo'naltirilishi va qabul qilinishini belgilovchi protokol (ya'ni o'z standardlariga ega kanal). Bu holatda data junatilgandan keyin kanal yopiladi va keyingi o'zgarishni ko'rish uchun biz sahifani refresh qilishimiz kerak.

// Websocket - onlayn tarzda ishlovchi protokol, data tashuvchi kanal yopilmaydi, faqat server o'chgan holat bundan mustasno, ya'ni sahifada qandaydir o'zgarish bo'lsa biz sahifani yangilashimiz shart emas, onlayn tarzda ko'rinadi. Bu messenjerlar, trading saytlar uchun ishlatiladi (Telegram, whatsapp, metatrader). Bunda baribir HTTP protokoli ishlaydi, ya'ni bunda HTTP server sifatida yonib beradi holos