var express = require('express');
var formidable = require('express-formidable');
var app = express();
var fs = require('fs');


app.use(express.static("public"));
app.use(formidable());

app.post('/create-post', function (req, res) {
    console.log(req.fields);
    fs.readFile(__dirname + '/data/posts.json', function (error, file) {
        console.log(file.toString());
        // do something
        var parsedFile = JSON.parse(file);
    });
});

app.get('/get-posts', function (req, res) {
    // fs.readFile(__dirname + '/data/posts.json', function (error, file) {
    // var file = //...
    res.sendFile(__dirname + '/data/posts.json');
    // });
});

app.listen(8080, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});

