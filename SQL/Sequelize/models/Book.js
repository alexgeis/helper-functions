const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Book extends Model {}

Book.init(
	{
		//if your model has no primary key at all you can use Model.removeAttribute('id');
		book_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true, // Automatically gets converted to SERIAL for postgres
		},
		title: {
			type: DataTypes.STRING,
			// identifier: { type: DataTypes.STRING, primaryKey: true },
		},
		author: {
			type: DataTypes.STRING,
		},
		isbn: {
			type: DataTypes.STRING,
		},
		pages: {
			type: DataTypes.INTEGER,
		},
		edition: {
			type: DataTypes.INTEGER,
		},
		is_paperback: {
			type: DataTypes.BOOLEAN,
		},
	},
	{
		sequelize,
		tableName: "book",
		modelName: "book",
		// Set to false to remove `created_at` and `updated_at` fields
		// timestamps: false,

		//strings together multiple words in titles with underscores
		// underscored: true,

		// Prevent sequelize from renaming the table
		// freezeTableName: true,
	}
);

module.exports = Book;
