/**
 * @swagger
 * tags:
 *   name: Restaurants
 *   description: API for managing restaurants
 */

/**
 * @swagger
 * /restaurants:
 *   get:
 *     summary: Get all restaurants
 *     tags: [Restaurants]
 *     responses:
 *       200:
 *         description: A list of restaurants
 */

/**
 * @swagger
 * /restaurants/id/{id}:
 *   get:
 *     summary: Get a restaurant by ID
 *     tags: [Restaurants]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the restaurant
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A restaurant by ID
 */

/**
 * @swagger
 * /restaurants/name/{name}:
 *   get:
 *     summary: Get restaurants by name
 *     tags: [Restaurants]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         description: Name of the restaurant
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of restaurants with the given name
 */

/**
 * @swagger
 * /restaurants:
 *   post:
 *     summary: Create a new restaurant
 *     tags: [Restaurants]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               chefId:
 *                 type: string
 *               dishIds:
 *                 type: array
 *                 items:
 *                   type: string
 *               image:
 *                 type: string
 *     responses:
 *       201:
 *         description: Restaurant created successfully
 */

/**
 * @swagger
 * /restaurants/{id}:
 *   put:
 *     summary: Update a restaurant by ID
 *     tags: [Restaurants]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the restaurant to update
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
 *               chefId:
 *                 type: string
 *               dishIds:
 *                 type: array
 *                 items:
 *                   type: string
 *               image:
 *                 type: string
 *     responses:
 *       200:
 *         description: Restaurant updated successfully
 */

/**
 * @swagger
 * /restaurants/{id}:
 *   delete:
 *     summary: Delete a restaurant by ID
 *     tags: [Restaurants]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the restaurant to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Restaurant deleted successfully
 */
