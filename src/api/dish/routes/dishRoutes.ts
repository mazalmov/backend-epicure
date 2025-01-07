import express from 'express';
import {
  getDishes,
  getDish,
  getDishById,
  getDishByName,
  createDish,
  updateDish,
  deleteDish,
} from '../controller/dishController';

const dishRoutes = express.Router();

dishRoutes.get('/', getDishes);
dishRoutes.get('/text/:text', getDish);
dishRoutes.get('/id/:id', getDishById);
dishRoutes.get('/name/:name', getDishByName);
dishRoutes.post('/', createDish);
dishRoutes.put('/:id', updateDish);
dishRoutes.delete('/:id', deleteDish);

export default dishRoutes;
