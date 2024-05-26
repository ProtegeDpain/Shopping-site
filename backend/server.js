const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the E-commerce API');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
