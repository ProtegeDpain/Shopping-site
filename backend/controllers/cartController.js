let cart = [];

exports.getCart = (req, res) => {
  res.status(200).json(cart);
};

exports.addToCart = (req, res) => {
  const { product } = req.body;
  cart.push(product);
  res.status(201).json(cart);
};

exports.removeFromCart = (req, res) => {
  const { productId } = req.params;
  cart = cart.filter(item => item.id !== parseInt(productId));
  res.status(200).json(cart);
};
