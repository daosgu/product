const   express = require('express'),
        bodyParser = require('body-parser'),
        path = require('path'),
        app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./server/config/routes.js')(app)
app.use(express.static('./public/dist/public'));
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
});

app.listen(8000, function() {
    console.log("Running...");
})