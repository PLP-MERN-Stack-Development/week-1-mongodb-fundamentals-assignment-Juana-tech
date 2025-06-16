// Find all books in a specific genre
db.books.find({ genre: "Fantasy" })

// Find books published after a certain year
db.books.find({ published_year: { $gt: 2010 } })

// Find books by a specific author
db.books.find({ author: "J.K. Rowling" })

// Update the price of a specific book
db.books.updateOne(
  { title: "Harry Potter and the Philosopher's Stone" },
  { $set: { price: 12.99 } }
)

// Delete a book by its title
db.books.deleteOne({ title: "The Great Gatsby" })

// Books in stock and published after 2010
db.books.find({ 
  in_stock: true, 
  published_year: { $gt: 2010 } 
})

// Projection with title, author, and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

// Display books by price (both ascending and descending)
// - Ascending order by price
db.books.find().sort({ price: 1 })
// - Descending order by price
db.books.find().sort({ price: -1 })

// Pagination (page 2 with 5 books per page)
db.books.find().skip(5).limit(5)

// Average price by genre
db.books.aggregate([
  { $group: { 
    _id: "$genre", 
    avgPrice: { $avg: "$price" } 
  }}
])

// Author with most books
db.books.aggregate([
  { $group: { 
    _id: "$author", 
    bookCount: { $sum: 1 } 
  }},
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
])

// Pipeline that groups books by publication decade and counts them
db.books.aggregate([
  {
    $project: {
      decade: {
        $subtract: [
          "$published_year",
          { $mod: ["$published_year", 10] }
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 }
    }
  },
  {
    $sort: { _id: 1 }
  }
]);


// Create indexes
db.books.createIndex({ title: 1 })
db.books.createIndex({ author: 1, published_year: 1 })

// Performance comparison
db.books.find({ title: "1984" }).explain("executionStats")
db.books.find({ author: "George Orwell", published_year: 1949 }).explain("executionStats")