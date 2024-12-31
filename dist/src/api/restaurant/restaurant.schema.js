"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//restaurant.schema.ts
const db_1 = require("../../services/db");
const restaurantSchema = new db_1.mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    chefId: {
        type: db_1.mongoose.Schema.Types.ObjectId,
        ref: 'Chef',
        required: true
    },
    dishesId: [{
            type: db_1.mongoose.Schema.Types.ObjectId,
            ref: 'Dish',
            required: true
        }],
    image: {
        type: String,
        required: true
    }
});
const Restaurant = db_1.mongoose.model('Restaurant', restaurantSchema);
exports.default = Restaurant;
