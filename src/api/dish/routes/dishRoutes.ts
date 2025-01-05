import express from 'express';
import {
  getAllDishes,
  getDishById,
  getDishByName,
  createDish,
  updateDish,
  deleteDish,
} from '../controller/dishController';

const dishRoutes = express.Router();

dishRoutes.get('/', getAllDishes);
dishRoutes.get('/id/:id', getDishById);
dishRoutes.get('/name/:name', getDishByName);
dishRoutes.post('/', createDish);
dishRoutes.put('/:id', updateDish);
dishRoutes.delete('/:id', deleteDish);

export default dishRoutes;
