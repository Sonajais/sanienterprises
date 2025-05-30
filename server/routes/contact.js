const express = require('express');
const Message = require('../models/Message');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { email, name, phone, message } = req.body;
    const newContact = new Message({ email, name, phone, message });
    await newContact.save();
    res.status(201).json({ message: 'Message saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save message' });
  }
});
router.get("/", async (req, res) => {
  try {
    const contacts = await Message.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
module.exports = router;
