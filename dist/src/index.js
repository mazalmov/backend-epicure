"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const express_1 = __importDefault(require("express"));
const db_1 = require("./services/db");
const app = (0, express_1.default)();
(0, db_1.connectDB)();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
