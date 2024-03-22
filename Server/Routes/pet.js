const express = require('express');
const petModel = require("../Model/pet");

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
      const newPet = await petModel.create(req.body);
      res.status(201).json(newPet);
    } catch (error) {
      next(error);
    }
});

router.get("/", async (req, res, next) => {
  try {
    const data = await petModel.find();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
