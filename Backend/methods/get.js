const fs = require("fs");

const movieJson = fs.readFileSync("./data/movies.json", "utf-8");

const getRequest = (req, res) => {
  //return res.end(movieJson);
  console.log(req.url);
  //   console.log('aranan id', req.url.split('/')[3]);
  //const path = req.url.split('/')[2]
  const id = req.url.split("/")[3];
  const path = req.url.substring(0, req.url.lastIndexOf("/"));

  /* switch (req.url) {
    case "/api/movies":
      return res.end("Filmler kısmına istek attınız");
    case "/api/users":
      return res.end("Kullanıcılar kısmına istek attınız");
    default:
      return res.end("Bilinmeyen rotaya attınız");
  }  
 */

  if (req.url === "/api/movies") {
    console.log("path /api/movies çalıştı");
    //const movieJson = fs.readFileSync("./data/movies.json", "utf-8");
    return res.end(movieJson);
  }

  if (path === "/api/movies" && id) {
    const movies = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

    // find metodu bulana kadar devam eder bulunca sonucu döner. Filter ise tumunu döner.

    const movie = movies.find((item) => item.id === id);

    if (movie) {
      return res.end(JSON.stringify(movie));
    }
  }

  res.writeHead(404);
  return res.end(JSON.stringify({
    success: false,
    message: "Aradığınız film bulunamadı."
  }));
};
module.exports = getRequest;
