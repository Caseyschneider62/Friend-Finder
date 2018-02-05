// Dependencies

var express = require("express");
var bodyParser = require("body-parser");


// Creating express server
var app = express();
var PORT = 8080;


// Set up middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname + '/app/public'));




// app.get("/", function(req, res) {
// 	res.sendFile(path.join(__dirname, "/../public/view.html"));
// });

// app.get("/survey", function(req, res) {
// 	res.sendFile(path.join(__dirname, "/../public/survey.html"));
// });

// app.post("/api/new", function(req, res) {
// 	 var newcharacter = req.body;
//   console.log(newcharacter);
//   characters.push(newcharacter);
//   res.json(newcharacter);
// });

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when 
// users visit or request data from various URLs.
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// LISTENER
// The below code effectively "starts" our server
// app.listen(PORT, '0.0.0.0');
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});




