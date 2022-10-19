const express = require('express');
var path = require('path');

const app = express();
var path = require('path');
var cookieParser = require('cookie-parser');

var port = normalizePort(process.env.PORT || '4117');

let SubRouteJSONUser = require("./Projects/JSONUser/Routes");
let SubRouteJSONUtility = require("./Projects/JSONUtility/Routes");

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '100mb' }));

app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname + `/Html/JSONProject.html`));
});

app.use("/JSONUser", SubRouteJSONUser);
app.use("/JSONUtility", SubRouteJSONUtility);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

app.listen(port, () => {
    console.log(`Listening in port : ${port}`);
    console.log(`Click to open : http://localhost:${port}`);
});