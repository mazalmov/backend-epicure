import { Request, Response } from 'express';
import Dish from '../dish.schema';

export const getDishes = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1; 
    const limit = parseInt(req.query.limit as string) || 20;
    const offset = (page - 1) * limit;
    const dishes = await Dish.find().skip(offset).limit(limit);
    const totalDishes = await Dish.countDocuments();
    res.status(200).json({
      page,
      limit,
      totalPages: Math.ceil(totalDishes / limit),
      totalDishes,
      data: dishes,
    });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching dishes', error: err });
  }
};
export const getDish = async (req: Request, res: Response) => {
    try {
      const { text } = req.params;
  
      if (!text) {
        res.status(400).json({ message: 'Please provide a valid text parameter' });
        return;
      }
  
      const isId = /^[0-9a-fA-F]{24}$/.test(text);
      let dish;
  
      if (isId) {
        dish = await Dish.findById(text).populate('restaurantId');
      } else {
        dish = await Dish.find({ name: new RegExp('^' + text + '$', 'i') }).populate('restaurantId');
      }
  
      if (!dish) {
        res.status(404).json({ message: 'Dish not found' });
        return;
      }
  
      res.status(200).json(dish);
    } catch (err) {
      console.error('Error fetching dish:', err);
      res.status(500).json({ message: 'Error fetching dish', error: err });
    }
  };
export const createDish = async (req: Request, res: Response) => {
  try {
    const dish = new Dish(req.body);
    await dish.save();
    res.status(201).json(dish);
  } catch (err) {
    res.status(400).json({ message: 'Error creating dish', error: err });
  }
};

export const getDishById = async (req: Request, res: Response) => {
    try {
      const dish = await Dish.findById(req.params.id).populate('chefId','restaurantId');
      if (!dish){
          res.status(404).json({ message: 'Dish not found' });
          return 
      } 
      res.status(200).json(dish);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching dish', error: err });
    }
  };
  
  export const getDishByName = async (req: Request, res: Response) => {
      try {
        const dish = await Dish.find({ name: new RegExp('^' + req.params.name + '$', 'i') });
            if (!dish || dish.length === 0) {
           res.status(404).json({ message: 'Dish not found' });
           return
        }
        res.status(200).json(dish);
      } catch (err) {
        res.status(500).json({ message: 'Error fetching Dish', error: err });
      }
    };
  

export const updateDish = async (req: Request, res: Response) => {
  try {
    const dish = await Dish.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!dish){
        res.status(404).json({ message: 'Dish not found' });
        return

    } 
    res.status(200).json(dish);
  } catch (err) {
    res.status(400).json({ message: 'Error updating dish', error: err });
  }
};

export const deleteDish = async (req: Request, res: Response) => {
  try {
    const dish = await Dish.findByIdAndDelete(req.params.id);
    if (!dish){
        res.status(404).json({ message: 'Dish not found' });
        return
    }  
    res.status(200).json({ message: 'Dish deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting dish', error: err });
  }
};
