"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//chef.schema.ts
const db_1 = require("../../services/db");
const chefSchema = new db_1.mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    restaurantsId: [{
            type: db_1.mongoose.Schema.Types.ObjectId,
            ref: 'Restaurant',
            required: true
        }],
    image: {
        type: String,
        required: true
    },
});
const Chef = db_1.mongoose.model('Chef', chefSchema);
exports.default = Chef;
