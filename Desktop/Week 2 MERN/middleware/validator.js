const validateCreateProduct = (req, res, next) => {
  const { name, description, price, category } = req.body;
  
  if (!name || !description || !price || !category) {
    const error = new Error('Missing required fields');
    error.status = 400;
    return next(error);
  }
  
  if (typeof price !== 'number' || price <= 0) {
    const error = new Error('Price must be a positive number');
    error.status = 400;
    return next(error);
  }
  
  next();
};

const validateUpdateProduct = (req, res, next) => {
  const { price } = req.body;
  
  if (price && (typeof price !== 'number' || price <= 0)) {
    const error = new Error('Price must be a positive number');
    error.status = 400;
    return next(error);
  }
  
  next();
};

module.exports = {
  validateCreateProduct,
  validateUpdateProduct,
};