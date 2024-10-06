const User = require('../models/UserModel.js')
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');


const registerUser = async (req, res) => {
    try {
      const { username, password, role } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, password: hashedPassword, role });
      await newUser.save();
      res.status(201).send('User registered!');
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Login User (authentication)
  const loginUser = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
  
      if (!user) return res.status(404).json({ message: 'User not found' });
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) return res.status(403).json({ message: 'Invalid password' });
  
      // Generate JWT Token
      const token = jwt.sign({ userId: user._id, role: user.role }, 'secretkey');
      res.json({ token, role: user.role });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = { registerUser, loginUser };