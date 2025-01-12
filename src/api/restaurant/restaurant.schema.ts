import { mongoose } from '../../services/db'; 
import { Schema, Document } from 'mongoose';

export interface IRestaurant {
  name: string;
  chefId: mongoose.Schema.Types.ObjectId; 
  dishIds: mongoose.Schema.Types.ObjectId[]; 
  chefName: string;
  image: string;
  rank: string;
}
  
const restaurantSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  chefId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chef',
    required: true,
  },
  dishIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dish',
    required: true,
  }],
  chefName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  rank: {
    type: String,
    required: true,
  },
});

const Restaurant = mongoose.model<IRestaurant & Document>('Restaurant', restaurantSchema);

export default Restaurant;
