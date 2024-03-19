const express = require('express');

const usermodel = require('../Model/user');

const router = express.Router();



router.post('/users', async (req, res, next) => {
  try {
    const newUser = await usermodel.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

router.get("/users", async (req, res, next) => {
  try {
    const data = await usermodel.find();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
