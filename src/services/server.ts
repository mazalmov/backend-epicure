import express from 'express';
import { connectDB } from './db'; 
import Chef from '../api/chef/chef.schema'; 
import Restaurant from '../api/restaurant/restaurant.schema';
import Dish from '../api/dish/dish.schema';

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
