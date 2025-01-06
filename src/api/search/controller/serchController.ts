import { Request, Response } from 'express';
import Dish from '../../dish/dish.schema';
import Chef from '../../chef/chef.schema';
import Restaurant from '../../restaurant/restaurant.schema';

export const searchByQuery = async (req: Request, res: Response) => {
  try {
    const { text } = req.query;
    if (!text || typeof text !== 'string') {
      res.status(400).json({ message: 'Please provide a valid text parameter for search' });
      return;
    }
    const regex = { $regex: text, $options: 'i' };

    const dishes = await Dish.find({
      $or: [
        { name: regex }, 
        { ingredients: { $elemMatch: regex } }, 
      ],
    }).populate('chefId restaurantId');

    const chefs = await Chef.find({ name: regex }); 
    const restaurants = await Restaurant.find({ name: regex }); 

    res.status(200).json({
      dishes,
      chefs,
      restaurants,
    });
    return;
  } catch (error) {
    console.error('Error in searchByQuery:', error);
    res.status(500).json({ message: 'An error occurred during search', error });
  }
};
export const searchByPost = async (req: Request, res: Response) => {
  try {
    const { name, ingredients, priceRange, restaurantId } = req.body;

    const dishQuery: any = {};
    if (name) dishQuery.name = { $regex: name, $options: 'i' };
    if (ingredients) dishQuery.ingredients = { $all: ingredients };
    if (priceRange) dishQuery.price = { $gte: priceRange.min, $lte: priceRange.max };
    if (restaurantId) dishQuery.restaurantId = restaurantId;

    const dishes = await Dish.find(dishQuery);

    res.status(200).json({
      dishes,
      filtersApplied: { name, ingredients, priceRange, restaurantId },
    });
    return;
  } catch (error) {
    console.error('Error in searchByPost:', error);
    res.status(500).json({ message: 'An error occurred during search', error });
    return;
  }
};
