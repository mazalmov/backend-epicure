import express from 'express';
import { connectDB } from './db'; 
import { createSampleData } from '../utils/createSampleData';
import chefRoutes from "../api/chef/routes/chefRoutes";
import restaurantRoutes from '../api/restaurant/routes/restaurantRoutes';
import dishRoutes from '../api/dish/routes/dishRoutes';

connectDB(); 
createSampleData();

const app = express();
app.use(express.json()); 
app.use('/chefs', chefRoutes);
app.use('/restaurants', restaurantRoutes);
app.use('/dishs', dishRoutes);

const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});