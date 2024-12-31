import express from 'express';
import {
  getAllDishes,
  getDishById,
  getDishByName,
  createDish,
  updateDish,
  deleteDish,
} from '../Controller/dishController';

const dishRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   name: Dishes
 *   description: API for managing dishes
 */

/**
 * @swagger
 * /dishes:
 *   get:
 *     summary: Get all dishes
 *     tags: [Dishes]
 *     responses:
 *       200:
 *         description: A list of dishes
 */
dishRoutes.get('/', getAllDishes);

/**
 * @swagger
 * /dishes/id/{id}:
 *   get:
 *     summary: Get a dish by ID
 *     tags: [Dishes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the dish
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A dish by ID
 */
dishRoutes.get('/id/:id', getDishById);

/**
 * @swagger
 * /dishes/name/{name}:
 *   get:
 *     summary: Get dishes by name
 *     tags: [Dishes]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         description: Name of the dish
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of dishes with the given name
 */
dishRoutes.get('/name/:name', getDishByName);

/**
 * @swagger
 * /dishes:
 *   post:
 *     summary: Create a new dish
 *     tags: [Dishes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *                 format: float
 *               restaurantId:
 *                 type: string
 *               image:
 *                 type: string
 *     responses:
 *       201:
 *         description: Dish created successfully
 */
dishRoutes.post('/', createDish);

/**
 * @swagger
 * /dishes/{id}:
 *   put:
 *     summary: Update a dish by ID
 *     tags: [Dishes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the dish to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *                 format: float
 *               restaurantId:
 *                 type: string
 *               image:
 *                 type: string
 *     responses:
 *       200:
 *         description: Dish updated successfully
 */
dishRoutes.put('/:id', updateDish);

/**
 * @swagger
 * /dishes/{id}:
 *   delete:
 *     summary: Delete a dish by ID
 *     tags: [Dishes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the dish to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dish deleted successfully
 */
dishRoutes.delete('/:id', deleteDish);

export default dishRoutes;
