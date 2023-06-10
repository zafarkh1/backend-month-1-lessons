// import { randomUUID } from 'crypto'
import { createServer } from "http";
import data from "./data.js";

const PORT = 3279;

const server = createServer((req, res) => {
  const httpMethod = req.method;
  const url = req.url;

  const options = {
    "Content-Type": "application/json",
  };

  if (httpMethod == "GET") {
    res.writeHead(200, options);
    res.end(JSON.stringify(data));
    return;
  }

  if (httpMethod == "POST") {
    req.on("data", (chunk) => {
      const body = JSON.parse(chunk);
      data.push({
        id: data.at(-1)?.id + 1 || 1,
        ...body,
      });
      res.writeHead(201, options);
      res.end(
        JSON.stringify({
          message: "Object created",
        })
      );
      return;
    });
  }

  if (httpMethod == "PATCH") {
    const bookId = req.url.split("/")[1];

    if (!bookId) {
      res.writeHead(404, options);
      res.end(
        JSON.stringify({
          message: "Not found",
        })
      );
      return;
    }

    const book = data.find((e) => e.id == bookId);

    if (!book) {
      res.writeHead(204, options);
      res.end(
        JSON.stringify({
          message: "Book not found",
        })
      );
      return;
    }

    req.on("data", (chunk) => {
      const { title, author, price } = JSON.parse(chunk);

      book.title = title ?? book.title;
      book.author = author ?? book.author;
      book.price = price ?? book.price;

      const bookIndex = data.findIndex((e) => e.id == bookId);

      data.splice(bookIndex, 1);
      data.push(book);

      res.writeHead(204, options);
      res.end(
        JSON.stringify({
          message: "Object updated",
        })
      );
      return;
    });
  }

  if (httpMethod == "DELETE") {
    const bookId = url.split("/")[1];

    const book = data.find((e) => e.id == bookId);

    if (!book) {
      res.writeHead(404, options);
      res.end(
        JSON.stringify({
          message: "Book not found",
        })
      );
      return;
    }

    const bookIndex = data.findIndex((e) => e.id == bookId);

    data.splice(bookIndex, 1);

    res.writeHead(204, options);
    res.end(
      JSON.stringify({
        message: "Object deleted",
      })
    );
    return;
  }
});

server.listen(PORT, () => {
  console.log("listening ...");
});
