const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// Temporary in-memory database
let products = [
  {
    id: '1',
    name: 'Wireless Mouse',
    price: 25.99,
    category: 'Electronics',
    inStock: true
  },
  {
    id: '2',
    name: 'Mechanical Keyboard',
    price: 89.99,
    category: 'Electronics',
    inStock: true
  }
];

// GET /api/products - List all products
router.get('/', (req, res) => {
  res.json(products);
});

// GET /api/products/:id - Get specific product
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

// POST /api/products - Create new product
router.post('/', (req, res) => {
  const { name, price, category, inStock } = req.body;
  
  if (!name || !price || !category) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newProduct = {
    id: uuidv4(),
    name,
    price: Number(price),
    category,
    inStock: inStock !== undefined ? inStock : true
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /api/products/:id - Update product
router.put('/:id', (req, res) => {
  const productIndex = products.findIndex(p => p.id === req.params.id);
  
  if (productIndex === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

  const updatedProduct = {
    ...products[productIndex],
    ...req.body,
    id: req.params.id // Ensure ID doesn't change
  };

  products[productIndex] = updatedProduct;
  res.json(updatedProduct);
});

// DELETE /api/products/:id - Delete product
router.delete('/:id', (req, res) => {
  const productIndex = products.findIndex(p => p.id === req.params.id);
  
  if (productIndex === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

  products.splice(productIndex, 1);
  res.status(204).end();
});

module.exports = router;

router.post('/', async (req, res) => {
  try {
    // Make sure you're destructuring from a properly parsed body
    const { name, price, description, stock } = req.body;
    
    // Add validation
    if (!name || !price) {
      return res.status(400).json({ error: "Name and price are required" });
    }

    // Rest of your creation logic...
    const product = await Product.create({ name, price, description, stock });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
