const { addMessage, getMessages } = require("../controllers/messageController");
const router = require("express").Router();

/**
 * @swagger
 * /api/messages/addmsg:
 *   post:
 *     summary: Add Message
 *     description: Add a new message.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               from:
 *                 type: string
 *               to:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: Message added successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *       500:
 *         description: Failed to add message to the database.
 */

/**
 * @swagger
 * /api/messages/getmsg:
 *   post:
 *     summary: Get Messages
 *     description: Retrieve messages between two users.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               from:
 *                 type: string
 *               to:
 *                 type: string
 *     responses:
 *       200:
 *         description: A list of messages.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   fromSelf:
 *                     type: boolean
 *                   message:
 *                     type: string
 *       500:
 *         description: Failed to retrieve messages.
 */

router.post("/addmsg/", addMessage);
router.post("/getmsg/", getMessages);

module.exports = router;
