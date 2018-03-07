require('dotenv').config();
const express = require("express");
const multer = require("multer");

const app = express();

let upload = multer({ storage: multer.memoryStorage() });

app.use(express.static('assets'));

app.get("/", function (request, response) {
  response.redirect("/index.html");
});

app.post("/upload", upload.single('thefile'), function (request, response) {
  response.json({
    fileSize: request.file.size,
  });
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
