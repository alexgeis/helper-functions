const router = require("express").Router();
const Book = require("../../models/Book");

//GET router is returning the enclosed function when http://localhost:3001/api/books is hit
router.get("/", (req, res) => {
	//.findAll() method is reading the whole table from the database
	// in this case Book table model is being acquired from ../../models/Book.js
	Book.findAll().then((bookData) => {
		res.json(bookData);
	});
	/*
    IF ASYNC/AWAIT
    // await makes JS wait until that promise settles and returns a result
	  const bookData = await Book.findAll(); //model interacts with the DB - SELECT * FROM
    // Return the bookData promise inside of the JSON response
	  return res.json(bookData);  
  */
});

//GET router is returning the enclosed function when http://localhost:3001/api/books/paperbacks is hit
router.get("/paperbacks", (req, res) => {
	Book.findAll({
		// The order option takes an array of items to order the query by or a sequelize method. These items are themselves arrays in the form [column, direction].
		// in this case, "title" should be the first column
		order: ["title"],
		// The where option is used to filter the query
		// in this case, we are filtering only for fields of is_paperback where the record is true
		where: {
			is_paperback: true,
		},
		attributes: {
			//findAll({attributes:{}}) - this property allows us to selct only some attributes
			//in this case, we are excluding two fields - is_paperback and edition
			exclude: ["is_paperback", "edition"],
		},
	}).then((bookData) => {
		res.json(bookData);
	});
	/*
    IF ASYNC/AWAIT
    const bookData = await Book.findAll({
        order: ["title"],
        where: {
          is_paperback: true,
        },
        attributes: {
          exclude: ["is_paperback", "edition"],
        },
	  });

	  return res.json(bookData);
  */
});

//GET router is returning the enclosed function when http://localhost:3001/api/books/:id is hit
router.get("/:id", (req, res) => {
	//if the request body contains a parameter with the key "id", the findByPk method obtains only a single entry from the table, using the provided primary key (req.params.id).
	// findByPk() returns a promise object, so .then() resolves this, and we return a json parsed version of the bookData
	Book.findByPk(req.params.id).then((bookData) => {
		res.json(bookData);
	});
	/*
    IF ASYNC/AWAIT
    const bookData = await Book.findByPk(req.params.id);
	  return res.json(bookData);
  */
});

// CREATE a book
router.post("/", (req, res) => {
	Book.create(req.body)
		.then((newBook) => {
			res.json(newBook);
		})
		.catch((err) => {
			res.json(err);
		});
	/*
    IF ASYNC/AWAIT
    const bookData = await Book.create(req.body);
	  return res.json(bookData);
  */
});

// Updates book based on its isbn
router.put("/:isbn", (req, res) => {
	// Calls the update method on the Book model
	//update({object with assocaited req.body values},{filter options})
	Book.update(
		{
			// All the fields you can update and the data attached to the request body.
			title: req.body.title,
			author: req.body.author,
			isbn: req.body.isbn,
			pages: req.body.pages,
			edition: req.body.edition,
			is_paperback: req.body.is_paperback,
		},
		{
			// Gets the books based on the isbn given in the request parameters
			where: {
				isbn: req.params.isbn,
			},
		}
	)
		.then((updatedBook) => {
			// Sends the updated book as a json response
			res.json(updatedBook);
		})
		.catch((err) => res.json(err));
	/*
    IF ASYNC/AWAIT
    const bookData = await Book.update(
        {
          title: req.body.title,
          author: req.body.author,
          isbn: req.body.isbn,
          pages: req.body.pages,
          edition: req.body.edition,
          is_paperback: req.body.is_paperback,
        },
        {
          where: {
            book_id: req.params.book_id,
          },
        }
      );

	    return res.json(bookData);
  */
});

// Delete route for a book with a matching isbn
router.delete("/:isbn", (req, res) => {
	// Looks for the books based on isbn given in the request parameters and deletes the instance from the database
	//.destroy({filter options})
	Book.destroy({
		where: {
			isbn: req.params.isbn,
		},
	})
		.then((deletedBook) => {
			res.json(deletedBook);
		})
		.catch((err) => res.json(err));
	/*
    IF ASYNC/AWAIT
    const bookData = await Book.destroy({
        where: {
          book_id: req.params.book_id,
        },
      });

	  return res.json(bookData);
  */
});

// CREATE multiple books
router.post("/seed", (req, res) => {
	Book.bulkCreate([
		{
			title: "Make It Stick: The Science of Successful Learning",
			author: "Peter Brown",
			isbn: "978-0674729018",
			pages: 336,
			edition: 1,
			is_paperback: false,
		},
		{
			title:
				"Essential Scrum: A Practical Guide to the Most Popular Agile Process",
			author: "Kenneth Rubin",
			isbn: "978-0137043293",
			pages: 500,
			edition: 1,
			is_paperback: true,
		},
		{
			title: "The Pragmatic Programmer: Your Journey To Mastery",
			author: "David Thomas",
			isbn: "978-0135957059",
			pages: 352,
			edition: 2,
			is_paperback: false,
		},
		{
			title: "The Art of Computer Programming, Vol. 1: Fundamental Algorithms",
			author: "Donald Knuth",
			isbn: "978-0201896831",
			pages: 672,
			edition: 3,
			is_paperback: false,
		},
		{
			title: "Algorithms of Oppression: How Search Engines Reinforce Racism",
			author: "Safiya Umoja Noble",
			isbn: "978-1479837243",
			pages: 256,
			edition: 1,
			is_paperback: true,
		},
	])
		.then(() => {
			res.send("Database seeded!");
		})
		.catch((err) => {
			res.json(err);
		});
});

module.exports = router;
