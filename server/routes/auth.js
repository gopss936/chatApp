const {
  login,
  register,
  getAllUsers,
  setAvatar,
  logOut,
} = require("../controllers/userController");

const router = require("express").Router();

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login
 *     description: Login with credentials.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully.
 *       400:
 *         description: Invalid username or password.
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register
 *     description: Register a new user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                  type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User registered successfully.
 *       400:
 *         description: Registration failed.
 */

/**
 * @swagger
 * /api/auth/allusers/{id}:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /api/auth/setavatar/{id}:
 *   post:
 *     summary: Set Avatar
 *     description: Set avatar for user.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                  
 *     responses:
 *       200:
 *         description: Avatar set successfully.
 *       400:
 *         description: Setting avatar failed.
 */

/**
 * @swagger
 * /api/auth/logout/{id}:
 *   get:
 *     summary: Log Out
 *     description: Log out user.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: User logged out successfully.
 *       400:
 *         description: Logout failed.
 */

router.post("/login", login);
router.post("/register", register);
router.get("/allusers/:id", getAllUsers);
router.post("/setavatar/:id", setAvatar);
router.get("/logout/:id", logOut);

module.exports = router;
