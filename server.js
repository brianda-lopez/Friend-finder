// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static('app/public'));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json({ type: 'applilication/*+json' }));

app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

app.use(bodyParser.text({ type: 'text/html' }));

app.use('/static', express.static(path.join(__dirname, 'app/public')))

// ================================================================================
// ROUTER
// ================================================================================

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// =============================================================================
// LISTENER
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

