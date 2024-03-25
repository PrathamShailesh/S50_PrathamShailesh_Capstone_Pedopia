const express = require('express');
const jwt = require('jsonwebtoken');
const usermodel = require('../Model/user');
const authenticateToken = require('./authenticateToken'); 
require('dotenv').config();

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const newUser = await usermodel.create(req.body);

    const token = jwt.sign({ userId: newUser._id }, process.env.Jwt_Secret_Key, { expiresIn: '1h' }); 
    console.log(token)
    res.status(201).json({ user: newUser, token }); 
  } catch (error) {
    next(error);
  }
});

router.get("/", authenticateToken, async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const user = await usermodel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
