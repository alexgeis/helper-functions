const Sequelize = require("sequelize");
// Enable access to .env variables
require("dotenv").config();

// Create a connection object (via constructer function)
const sequelize = new Sequelize(
	// Use environment variables to connect to database
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		// Database location
		host: "localhost",
		dialect: "mysql",
		port: 3306,
	}
);

module.exports = sequelize;
