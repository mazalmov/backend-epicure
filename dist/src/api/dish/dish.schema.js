"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//dish.schema.ts
const db_1 = require("../../services/db");
const dishSchema = new db_1.mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    Ingredients: {
        type: String,
        required: true
    },
    chefName: {
        type: db_1.mongoose.Schema.Types.ObjectId,
        required: true
    },
    restaurantId: [{
            type: db_1.mongoose.Schema.Types.ObjectId,
            ref: 'Restaurant',
            required: true
        }],
});
const Dish = db_1.mongoose.model('Dish', dishSchema);
exports.default = Dish;
