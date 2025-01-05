/**
 * @swagger
 * tags:
 *   name: Chefs
 *   description: API for managing chefs
 */

/**
 * @swagger
 * /chefs:
 *   get:
 *     summary: Get all chefs
 *     tags: [Chefs]
 *     responses:
 *       200:
 *         description: A list of chefs
 */

/**
 * @swagger
 * /chefs/id/{id}:
 *   get:
 *     summary: Get a chef by ID
 *     tags: [Chefs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the chef
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A chef by ID
 */

/**
 * @swagger
 * /chefs/name/{name}:
 *   get:
 *     summary: Get chefs by name
 *     tags: [Chefs]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         description: Name of the chef
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of chefs with the given name
 */

/**
 * @swagger
 * /chefs:
 *   post:
 *     summary: Create a new chef
 *     tags: [Chefs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               specialty:
 *                 type: string
 *               image:
 *                 type: string
 *     responses:
 *       201:
 *         description: Chef created successfully
 */

/**
 * @swagger
 * /chefs/{id}:
 *   put:
 *     summary: Update a chef by ID
 *     tags: [Chefs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the chef to update
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
 *               specialty:
 *                 type: string
 *               image:
 *                 type: string
 *     responses:
 *       200:
 *         description: Chef updated successfully
 */

/**
 * @swagger
 * /chefs/{id}:
 *   delete:
 *     summary: Delete a chef by ID
 *     tags: [Chefs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the chef to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Chef deleted successfully
 */
