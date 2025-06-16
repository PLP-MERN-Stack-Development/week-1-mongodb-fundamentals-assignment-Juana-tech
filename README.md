**PLP Bookstore MongoDB Assignment**
- Overview
This repository contains my submission for the MongoDB assignment as part of the PLP (Power Learn Project) curriculum. The assignment focuses on MongoDB fundamentals including CRUD operations, advanced queries, aggregation pipelines, and indexing.

**Setup Instructions**
- Prerequisites
1. MongoDB installed locally OR a MongoDB Atlas account

2. MongoDB Shell (mongosh) or MongoDB Compass

3. Node.js (if using the provided scripts)

**Installation Steps**
1. **Set up MongoDB**

For local installation: Download and install MongoDB Community Edition

For cloud setup: Create a free MongoDB Atlas cluster

2. **Create the database and collection**

- Connect to your MongoDB instance

- Run the following commands:

**javascripTt**
* use plp_bookstore
* db.createCollection("books")

3. **Populate the database**

Run the provided insert_books.js script to insert sample data:

**bash**
* mongosh insert_books.js
or

**bash**
* node insert_books.js
  
**File Structure**
- insert_books.js - Script to populate the books collection with sample data

- queries.js - Contains all MongoDB queries for the assignment tasks

- README.md - This documentation file

- screenshot.png - Screenshot of the MongoDB collection in Compass/Atlas

**Query Documentation**
All required queries for the assignment tasks are contained in queries.js. The file includes:

1. Basic CRUD operations

2. Advanced queries with filtering and projection

3. Aggregation pipelines for data analysis

4. Index creation and performance testing

**Running the Queries**
- To execute the queries:

1. Open MongoDB Shell or Compass

2. Connect to your plp_bookstore database

3. Copy and paste queries from queries.js or load the entire file:

**bash**
mongosh queries.js

**Indexing Demonstration**
- The queries.js file includes examples of:

1. Creating single and compound indexes

2. Using explain() to show query performance improvements

3. Comparing query execution with and without indexes

**Submission**
This repository was submitted via GitHub Classroom as required by the assignment instructions.
