const express = require('express');
const router = express.Router();
const Contact = require('../../models/Contact');

// @route   GET api/contacts
// @desc    Get all contacts
// @access  Public
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
