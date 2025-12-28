
const fs = require("fs");


const bodyParser = require("../utils/bodyParser");


const keys = ["title", "director", "year", "rating", 'duration', 'language', 'description'];




const postRequest = async (req, res) => {
    if (req.url === "/api/movies") {
        const body = await bodyParser(req);


        // gelen veriyi kontrol et
        console.log(body)



        //! NodeJS 7. Sezon Fullstack Movie | Post - Frontend Başlangıç. 36. dakika


  if (!body.genre.length > 0 || !body.cast.length > 0) {
            res.writeHead(400);
            return res.end(JSON.stringify({
                success: false,
                message: `genre veya cast alanı en az bir eleman içermelidir.`
            }));
        }




        // eksik alan var mı? sadece eksik ilk key i verir
        //const eksikKey = keys.find((key) => !body[key])

        // eksik alanları dizi olarak verir
        const eksikKeys = keys.filter((key) => !body[key]);



        if (
            eksikKeys.length > 0
        ) {
            res.writeHead(404);
            return res.end(JSON.stringify({
                success: false,
                // message: `${eksikKey} alanı eksik bırakılamaz`
                message: `${eksikKeys.join(", ")} alan(lar)ı eksik bırakılamaz`
            }));
        }



      

        //! kaydedeceğimiz yeni film objesine id ekleyelim
        const newMovie = {
            id: Date.now().toString(),
            ...body
        };

        // mevcut filmleri oku
        const movies = JSON.parse(
            fs.readFileSync("./data/movies.json", "utf-8")
        );

        //! eklenmek istenen film zaten var mı kontrol et

        // Date.now() ile oluşturulan id eşsiz olacağı için id üzerinden kontrol sağlıklı değildir.
        // Bu nedenle başlık ve yıl üzerinden kontrol yapıyoruz.
        const movieExists = movies.find((item) => item.title === newMovie.title && String(item.year) === String(newMovie.year));

        if (movieExists) {
            res.writeHead(409);
            return res.end(JSON.stringify({
                success: false,
                message: `${newMovie.title} adlı film zaten mevcut.`
            }));
        }

        // yeni filmi ekle (kontrolden sonra)
        movies.push(newMovie);

        // güncellenmiş filmleri dosyaya yaz
        fs.writeFileSync(
            "./data/movies.json",
            JSON.stringify(movies, null, 2)
        );


        res.writeHead(201);
        res.end(JSON.stringify(
            {
                success: true,
                message: `${newMovie.title} adlı film başarıyla eklendi.`,
                data: newMovie
            }));

        return;

    }
    res.writeHead(404);
    return res.end(JSON.stringify({
        success: false,
        message: "Bilinmeyen rotaya post isteği attınız"
    }));
}

module.exports = postRequest;