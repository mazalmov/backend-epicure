/**
 * @swagger
 * tags:
 *   name: Search
 *   description: API for searching dishes, chefs, and restaurants
 */

/**
 * @swagger
 * /search:
 *   get:
 *     summary: Search for dishes, chefs, and restaurants by query parameters
 *     tags: [Search]
 *     parameters:
 *       - in: query
 *         name: name
 *         required: false
 *         description: The name of the dish, chef, or restaurant to search for.
 *         schema:
 *           type: string
 *       - in: query
 *         name: ingredient
 *         required: false
 *         description: The ingredient to search for in dishes.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of dishes, chefs, and restaurants matching the search criteria.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 dishes:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Dish'
 *                 chefs:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Chef'
 *                 restaurants:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Restaurant'
 *       400:
 *         description: Bad request if neither name nor ingredient is provided.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /search/post:
 *   post:
 *     summary: Search for dishes with filters using a POST request
 *     tags: [Search]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               ingredients:
 *                 type: array
 *                 items:
 *                   type: string
 *               priceRange:
 *                 type: object
 *                 properties:
 *                   min:
 *                     type: number
 *                     format: float
 *                   max:
 *                     type: number
 *                     format: float
 *               restaurantId:
 *                 type: string
 *     responses:
 *       200:
 *         description: A list of dishes matching the filters applied.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 dishes:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Dish'
 *                 filtersApplied:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     ingredients:
 *                       type: array
 *                       items:
 *                         type: string
 *                     priceRange:
 *                       type: object
 *                       properties:
 *                         min:
 *                           type: number
 *                         max:
 *                           type: number
 *                     restaurantId:
 *                       type: string
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Dish:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         ingredients:
 *           type: array
 *           items:
 *             type: string
 *         price:
 *           type: number
 *           format: float
 *         restaurantId:
 *           type: string
 *     Chef:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *     Restaurant:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 */
