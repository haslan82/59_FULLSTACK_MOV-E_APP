const deleteRequest = (req, res) => {
  //console.log('DELETE istegi geldi.');
  console.log("\n\nRequest URL", req.url);

  const path = req.url.substring(0, req.url.lastIndexOf("/"));

  const id = req.url.split("/")[3];

  console.log("path:", path);
  console.log("id:", id);

  if (path === "/api/movies" && id) {
    const fs = require("fs");

    const movies = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

    const movieFound = movies.find((item) => item.id === id);
    if (!movieFound) {
      res.writeHead(404);
      return res.end(
        JSON.stringify({
          success: false,
          message: "Silmek istediğiniz film bulunamadı.",
        })
      );
    }
    const filteredMovies = movies.filter((item) => item.id !== id);

    fs.writeFileSync(
      "./data/movies.json",
      JSON.stringify(filteredMovies, null, 2),
      "utf-8"
    );

    res.writeHead(200);
    return res.end(
      JSON.stringify({
        success: true,
        message: "Film başarıyla silindi.",
        data: filteredMovies,
      })
    );

   
  }

  return res.end(
    JSON.stringify({
      success: true,
      message: "Silmek istediğiniz filmin id'si belirtin.",
    })
  );

/*  if(!id){
      res.writeHead(400);
      return res.end(
        JSON.stringify({
          success: false,
          message: "Silmek istediğiniz film id'si belirtilmedi.",
        })
      );
    } */


};
module.exports = deleteRequest;
