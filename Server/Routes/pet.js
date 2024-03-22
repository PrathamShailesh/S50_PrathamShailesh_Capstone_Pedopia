const express = require('express');
const petModel = require("../Model/pet");

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
      const newPet = await petModel.create(req.body);
      res.status(201).json(newPet);
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ message: error.message });
      }
      res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get("/", async (req, res, next) => {
  try {
    const data = await petModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
