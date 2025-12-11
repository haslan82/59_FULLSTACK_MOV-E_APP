const bodyParser = (req) => {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk
      });
      req.on("end", () => {
        resolve(JSON.parse(body));

      });
    }

    catch (error) {

      reject(JSON.stringify(error, {
        success: false,
        message: "Body parse işlemi sırasında bir hata oluştu."
      }));
    }
  });
};


module.exports = bodyParser;