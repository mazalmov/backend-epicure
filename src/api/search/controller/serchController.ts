import { Request, Response } from 'express';
import Dish from '../../dish/dish.schema';
import Chef from '../../chef/chef.schema';
import Restaurant from '../../restaurant/restaurant.schema';

export const searchByQuery = async (req: Request, res: Response) => {
  try {
    const { name, ingredient } = req.query;

    if (!name && !ingredient) {
      res.status(400).json({ message: 'Please provide a name or ingredient for search' });
      return;
    }

    const nameRegex = name ? { $regex: name as string, $options: 'i' } : undefined;
    const ingredientRegex = ingredient ? { ingredients: { $elemMatch: { $regex: ingredient as string, $options: 'i' } } } : undefined;

    console.log('nameRegex:', nameRegex);
    console.log('ingredientRegex:', ingredientRegex);

    const dishes = await Dish.find({
      ...(nameRegex && { name: nameRegex }),
      ...(ingredientRegex && ingredientRegex),
    }).populate('chefId restaurantId');

    const chefs = name
      ? await Chef.find({ name: nameRegex }).populate('restaurantIds')
      : [];

    const restaurants = name
      ? await Restaurant.find({ name: nameRegex }).populate('chefId dishIds')
      : [];

    res.status(200).json({
      dishes,
      chefs,
      restaurants,
    });
    return;
  } catch (error) {
    console.error('Error in searchByQuery:', error);
    res.status(500).json({ message: 'An error occurred during search', error });
    return;
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

    const dishes = await Dish.find(dishQuery).populate('chefId restaurantId');

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
