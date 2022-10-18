// npm i express mysql2 sequelize dotenv
const express = require("express");
const routes = require("./routes");
// Import the connection object
const sequelize = require("./config/connection");
// Import model
const Book = require("./models/Book");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// turn on routes
app.use(routes);

// Connect to the database before starting the Express.js server (promise object)
// Force "true" to drop/recreate table(s) on every sync
// Force false so data doesn't get dropped on every sync
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log("Now listening"));
});
