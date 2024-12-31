import { Request, Response } from 'express';
import Dish from '../dish.schema';

export const getAllDishes = async (req: Request, res: Response) => {
  try {
    const dishes = await Dish.find().populate('chefId').populate('restaurantId');
    res.status(200).json(dishes);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching dishes', error: err });
  }
};

export const getDishById = async (req: Request, res: Response) => {
  try {
    const dish = await Dish.findById(req.params.id).populate('chefId').populate('restaurantId');
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

export const createDish = async (req: Request, res: Response) => {
  try {
    const dish = new Dish(req.body);
    await dish.save();
    res.status(201).json(dish);
  } catch (err) {
    res.status(400).json({ message: 'Error creating dish', error: err });
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
