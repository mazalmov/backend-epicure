import { Request, Response } from 'express';
import Restaurant from '../restaurant.schema';

export const getRestaurants = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1; 
    const limit = parseInt(req.query.limit as string) || 20;
    const offset = (page - 1) * limit;
    const restaurants = await Restaurant.find().skip(offset).limit(limit); 
    const totalRestaurants = await Restaurant.countDocuments();
    res.status(200).json({
      page,
      limit,
      totalPages: Math.ceil(totalRestaurants / limit),
      totalRestaurants,
      data: restaurants,
    });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching restaurants', error: err });
  }
};

export const getRestaurant = async (req: Request, res: Response) => {
    try {
      const { text } = req.params;
  
      if (!text) {
        res.status(400).json({ message: 'Please provide a valid text parameter' });
        return;
      }
  
      const isId = /^[0-9a-fA-F]{24}$/.test(text);
      let restaurant;
  
      if (isId) {
        restaurant = await Restaurant.findById(text).populate('chefId dishIds');
      } else {
        restaurant = await Restaurant.find({ name: new RegExp('^' + text + '$', 'i') }).populate('chefId dishIds');
      }
  
      if (!restaurant) {
        res.status(404).json({ message: 'Restaurant not found' });
        return;
      }
  
      res.status(200).json(restaurant);
    } catch (err) {
      console.error('Error fetching restaurant:', err);
      res.status(500).json({ message: 'Error fetching restaurant', error: err });
    }
  };

  export const getRestaurantById = async (req: Request, res: Response) => {
    try {
      const restaurant = await Restaurant.findById(req.params.id).populate('chefId','dishIds');
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
        const restaurant = await Restaurant.find({ name: new RegExp('^' + req.params.name + '$', 'i') }).populate('chefId','dishIds');
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