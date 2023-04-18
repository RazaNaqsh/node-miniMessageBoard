const express = require("express");
const logger = require("morgan");
const path = require("path");

const indexRoutes = require("./routes/indexRoutes");

const app = express();

// set view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/", indexRoutes);

app.listen(4000, () => {
	console.log("Listening on port 4000");
});
