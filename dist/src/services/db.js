"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoose = exports.connectDB = void 0;
//services/db.js
const mongoose_1 = __importDefault(require("mongoose"));
exports.mongoose = mongoose_1.default;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectDB = () => {
    mongoose_1.default.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/epicure')
        .then(() => {
        console.log('Connected to MongoDB');
    })
        .catch((err) => {
        console.error('MongoDB connection error', err);
    });
};
exports.connectDB = connectDB;
