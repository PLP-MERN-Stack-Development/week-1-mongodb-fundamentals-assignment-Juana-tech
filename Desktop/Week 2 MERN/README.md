# Products API

A RESTful API for managing products built with Express.js and Node.js.

##  Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- npm (comes with Node.js)
- MongoDB (or your database of choice)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/products-api.git
   cd products-api
2. Install dependencies:
     bash
     npm install

3. Set up environment variables:
    bash
    cp .env.example .env  

4. Start the serverr
Production: npm start
Development (with nodemon): npm run dev

### API Documentation
Products Endpoints
Endpoint	Method	Description	Auth Required
/api/products	GET	Get all products (supports pagination)	No
/api/products/:id	GET	Get single product	No
/api/products	POST	Create new product	Yes
/api/products/:id	PUT	Update product	Yes
/api/products/:id	DELETE	Delete product	Yes
/api/products/search	GET	Search products by name	No
/api/products/stats	GET	Get product statistics	No

### Authentication
Protected routes require an API key in the header:
   bash
   X-API-Key: your-api-key-here
# Examples
Create a Product
   bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your-api-key" \
  -d '{
    "name": "Wireless Headphones",
    "price": 99.99,
    "category": "electronics",
    "inStock": true
  }'

### Successful Response (201 Created):
json
{
  "id": "507f1f77bcf86cd799439011",
  "name": "Wireless Headphones",
  "price": 99.99,
  "category": "electronics",
  "inStock": true,
  "createdAt": "2023-05-20T12:00:00.000Z"
}

### Get All Products
   bash
curl http://localhost:3000/api/products?category=electronics&limit=2

# Sample Response:
json
{
  "products": [
    {
      "id": "507f1f77bcf86cd799439011",
      "name": "Wireless Headphones",
      "price": 99.99
    },
    {
      "id": "507f1f77bcf86cd799439012",
      "name": "Smartphone",
      "price": 599.99
    }
  ],
  "total": 15,
  "page": 1,
  "pages": 8
}
