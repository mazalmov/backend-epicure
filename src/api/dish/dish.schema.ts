import { mongoose } from '../../services/db'; 
import { Schema, Document } from 'mongoose';

export interface IDish {
    name: string;
    cuisine: string;
    image: string;
    price: number;
    ingredients: string[]; 
    chefId: mongoose.Schema.Types.ObjectId; 
    restaurantId: mongoose.Schema.Types.ObjectId[]; 
  }
const dishSchema: Schema = new Schema({
    name: {
      type: String,
      required: true,
    },
    cuisine: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    ingredients: [{
      type: String, 
      required: true,
    }],
    chefId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chef',
      required: true,
    },
    restaurantId: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurant',
      required: true,
    }],
  });
  
  const Dish = mongoose.model<IDish & Document>('Dish', dishSchema);
  
  export default Dish;
