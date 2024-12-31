import express from 'express'; 
import {connectDB} from './services/db';
import { createSampleData } from './utils/createSampleData';
import chefRoutes from "./api/chef/routes/chefRoutes"



connectDB(); 
createSampleData();

const app = express();
app.use(express.json()); 
app.use('/chefs', chefRoutes);
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


