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

/**
 * @swagger
 * /dishes/{text}:
 *   get:
 *     summary: Retrieve a dish by ID or name
 *     tags: [Dishes]
 *     parameters:
 *       - in: path
 *         name: text
 *         required: true
 *         description: The ID or name of the dish
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A dish object or a list of dishes (if searched by name)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 price:
 *                   type: number
 *                   format: float
 *                 restaurantId:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     name:
 *                       type: string
 *                 image:
 *                   type: string
 *       400:
 *         description: Invalid text parameter
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Dish not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Error fetching dish
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

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

