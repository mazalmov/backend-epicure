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
 * /chefs/text/{text}:
 *   get:
 *     summary: Retrieve a chef by ID or name
 *     tags: [Chefs]
 *     parameters:
 *       - in: path
 *         name: text
 *         required: true
 *         description: The ID or name of the chef
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A chef object or a list of chefs (if searched by name)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 restaurantIds:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       name:
 *                         type: string
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
 *         description: Chef not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Error fetching chef
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
