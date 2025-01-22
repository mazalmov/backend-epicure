import { mongoose } from '../../services/db'; 
import { Schema, Document } from 'mongoose';

export interface IChef {
    name: string;
    restaurantIds: mongoose.Types.ObjectId[]; 
    image: string;
    info: string;
}

const chefSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    restaurantIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    }],
    image: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
});

const Chef = mongoose.model<IChef & Document>('Chef', chefSchema);

export default Chef;
