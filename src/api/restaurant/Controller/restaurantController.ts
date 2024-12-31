import { Request, Response } from 'express';
import Restaurant from '../restaurant.schema';

export const getAllRestaurants = async (req: Request, res: Response) => {
  try {
    const restaurants = await Restaurant.find().populate('chefId').populate('dishesId');
    res.status(200).json(restaurants);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching restaurants', error: err });
  }
};

export const getRestaurantById = async (req: Request, res: Response) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id).populate('chefId').populate('dishesId');
    if (!restaurant) {
        res.status(404).json({ message: 'Restaurant not found' });
        return
    }
    res.status(200).json(restaurant);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching restaurant', error: err });
  }
};

export const getRestaurantByName = async (req: Request, res: Response) => {
    try {
      const restaurant = await Restaurant.find({ name: new RegExp('^' + req.params.name + '$', 'i') }).populate('chefId').populate('dishesId');
          if (!restaurant || restaurant.length === 0) {
         res.status(404).json({ message: 'Restaurant not found' });
         return
      }
  
      res.status(200).json(restaurant);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching Restaurant', error: err });
    }
  };

export const createRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = new Restaurant(req.body);
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (err) {
    res.status(400).json({ message: 'Error creating restaurant', error: err });
  }
};

export const updateRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!restaurant){
        res.status(404).json({ message: 'Restaurant not found' });
        return 
    }
    res.status(200).json(restaurant);
  } catch (err) {
    res.status(400).json({ message: 'Error updating restaurant', error: err });
  }
};

export const deleteRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!restaurant){
        res.status(404).json({ message: 'Restaurant not found' });
        return
    } 
    res.status(200).json({ message: 'Restaurant deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting restaurant', error: err });
  }
};