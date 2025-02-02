import { Request, Response } from 'express';
import Chef from '../chef.schema';

export const getChefs = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1; 
    const limit = parseInt(req.query.limit as string) || 20;
    const offset = (page - 1) * limit;
    const chefs = await Chef.find().skip(offset).limit(limit);
    const totalChefs = await Chef.countDocuments();
    res.status(200).json({
      page,
      limit,
      totalPages: Math.ceil(totalChefs / limit),
      totalChefs,
      data: chefs,
    });
  
  } catch (err) {
    res.status(500).json({ message: 'Error fetching chefs', error: err });
  }
};

export const getChef = async (req: Request, res: Response) => {
  try {
    const { text } = req.params; 

    if (!text) {
      res.status(400).json({ message: 'Please provide a valid text parameter' });
      return;
    }

    const isId = /^[0-9a-fA-F]{24}$/.test(text);
    let chef;

    if (isId) {
      chef = await Chef.findById(text).populate('restaurantIds');
      if (!chef) {
        res.status(404).json({ message: 'Chef not found' });
        return;
      }
    } else {
      chef = await Chef.find({ name: new RegExp('^' + text + '$', 'i') }).populate('restaurantIds');
      if (!chef || chef.length === 0) {
        res.status(404).json({ message: 'Chef not found' });
        return;
      }
    }
    res.status(200).json(chef);
  } catch (err) {
    console.error('Error fetching chef:', err);
    res.status(500).json({ message: 'Error fetching chef', error: err });
  }
};

export const getChefById = async (req: Request, res: Response) => {
  try {
    const chef = await Chef.findById(req.params.id).populate('restaurantIds');  
    if (!chef){
      res.status(404).json({ message: 'Chef not found' });
      return
    }  
    res.status(200).json(chef);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching chef', error: err });
  }
};

export const getChefByName = async (req: Request, res: Response) => {
  try {
    const chef = await Chef.find({ name: new RegExp('^' + req.params.name + '$', 'i') }).populate('restaurantIds');
        if (!chef || chef.length === 0) {
       res.status(404).json({ message: 'Chef not found' });
       return
    }

    res.status(200).json(chef);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching chef', error: err });
  }
};

export const createChef = async (req: Request, res: Response) => {
  try {
    const { name, image, restaurantIds } = req.body;
    if (!name || !image || !restaurantIds) {
       res.status(400).json({ message: 'Missing required fields' });
       return
    }
    const chef = new Chef(req.body);
    await chef.save();
    res.status(201).json(chef);
  } catch (err) {
    res.status(400).json({ message: 'Error creating chef', error: err });
  }
};

export const updateChef = async (req: Request, res: Response) => {
  try {
    const chef = await Chef.findByIdAndUpdate(req.params.id, req.body, { new: true });  
    if (!chef){
      res.status(404).json({ message: 'Chef not found' });
      return
    }  
    res.status(200).json(chef);
  } catch (err) {
    res.status(400).json({ message: 'Error updating chef', error: err });
  }
};

export const deleteChef = async (req: Request, res: Response) => {
  try {
    const chef = await Chef.findByIdAndDelete(req.params.id);  
    if (!chef){
       res.status(404).json({ message: 'Chef not found' });
       return
    }
    res.status(200).json({ message: 'Chef deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting chef', error: err });
  }
};
