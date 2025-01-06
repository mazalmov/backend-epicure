import express from 'express';
import {
  getRestaurants,
  getRestaurant,
  getRestaurantById,
  getRestaurantByName,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from '../controller/restaurantController';

const restaurantRoutes = express.Router();

restaurantRoutes.get('/', getRestaurants);
restaurantRoutes.get('/text/:text', getRestaurant);
restaurantRoutes.get('/id/:id', getRestaurantById);
restaurantRoutes.get('/name/:name', getRestaurantByName);
restaurantRoutes.post('/', createRestaurant);
restaurantRoutes.put('/:id', updateRestaurant);
restaurantRoutes.delete('/:id', deleteRestaurant);

export default restaurantRoutes;
