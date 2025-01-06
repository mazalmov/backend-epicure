import express from 'express';
import {
  getChefs,
  getChef,
  getChefById,
  getChefByName,
  createChef,
  updateChef,
  deleteChef,
} from '../controller/chefController';

const chefRoutes = express.Router();

chefRoutes.get('/', getChefs);
chefRoutes.get('text/:text', getChef);
chefRoutes.get('/id/:id', getChefById);
chefRoutes.get('/name/:name', getChefByName);
chefRoutes.post('/', createChef);
chefRoutes.put('/:id', updateChef);
chefRoutes.delete('/:id', deleteChef);


export default chefRoutes;