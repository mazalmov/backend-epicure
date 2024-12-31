import express from 'express';
import {
  getAllChefs,
  getChefById,
  getChefByName,
  createChef,
  updateChef,
  deleteChef,
} from '../Controller/chefController';

const chefRoutes = express.Router();

chefRoutes.get('/', getAllChefs);
chefRoutes.get('/id/:id', getChefById); 
chefRoutes.get('/name/:name', getChefByName); 
chefRoutes.post('/', createChef);
chefRoutes.put('/:id', updateChef);
chefRoutes.delete('/:id', deleteChef);

export default chefRoutes;