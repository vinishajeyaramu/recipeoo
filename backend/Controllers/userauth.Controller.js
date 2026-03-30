const User = require('../Model/userauth.model');
const generateToken = require('../utils/generateToken');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({}, 'name email role lastLogin createdAt updatedAt').sort({ createdAt: -1 });
    res.json(
      users.map((user) => ({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role || 'user',
        lastLogin: user.lastLogin,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        status: 'active',
        isActive: true,
      }))
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please provide name, email, and password' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({
      name,
      email,
      password,
      role: 'user'
    });

    const token = generateToken(user);

    res.status(201).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role || 'user'
      },
      role: user.role || 'user',
      token
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    // Admin login
    if (email === 'adminrecipeoo@gmail.com' && password === 'admin@recipeoo') {

      const adminUser = {
        _id: 'admin-id',
        name: 'Admin',
        email: email,
        role: 'admin'
      };

      const token = generateToken(adminUser);

      return res.json({
        user: adminUser,
        role: "admin",
        token
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = generateToken(user);

    user.lastLogin = new Date();
    await user.save();

    res.json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role || "user"
      },
      role: user.role || "user",
      token
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
