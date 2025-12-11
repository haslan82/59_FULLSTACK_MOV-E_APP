const http = require("http");
const fs = require("fs");
const getRequest = require("./methods/get");
const deleteRequest = require("./methods/delete");
const postRequest = require("./methods/post");

const movieJson = fs.readFileSync("./data/movies.json", "utf-8");
const movies = JSON.parse(movieJson);

module.exports = { movieJson, movies };

const server = http.createServer((req, res) => {
  // ortak CORS header'ları
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  // tüm cevaplara CORS header'larını ekle
  Object.entries(corsHeaders).forEach(([k, v]) => res.setHeader(k, v));

  // Preflight (OPTIONS) isteğine hemen cevap ver
  if (req.method === "OPTIONS") {
    res.writeHead(204); // No Content
    return res.end();
  }

  switch (req.method) {
    case "GET":
      return getRequest(req, res);
    case "POST":
      return postRequest(req, res);
    case "PUT":
      console.log("PUT istegi geldi.");
      return res.end("PUT türünde istek attınız");
    case "DELETE":
      return deleteRequest(req, res);
    default:
      console.log("Sunucuya izin verilmeyen " + req.method + " methoduyla istek attınız.");
      return res.end("Bu istek türüne izin verilmiyor");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Sunucu ${port} portuna gelen istekleri dinlemeye başladı. http://localhost:${port}`);
});