// Simple Node.js backend for Freshers Job application
// This is a temporary backend for development purposes only

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;
const SECRET_KEY = 'your-secret-key';

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory storage (in production, use a database)
let users = [];
let sessions = [];

// Helper function to read/write users to file
const USERS_FILE = path.join(__dirname, 'users.json');

function loadUsers() {
  try {
    const data = fs.readFileSync(USERS_FILE, 'utf8');
    users = JSON.parse(data);
  } catch (error) {
    console.log('No existing users file, starting fresh');
    users = [];
  }
}

function saveUsers() {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// Load users on startup
loadUsers();

// Save users on exit
process.on('exit', saveUsers);
process.on('SIGINT', () => {
  saveUsers();
  process.exit();
});

// Routes

// User signup
app.post('/api/users', (req, res) => {
  const { name, email, password } = req.body;
  
  // Validate input
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Name, email and password are required'
    });
  }
  
  // Check if user already exists
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(409).json({
      success: false,
      message: 'User with this email already exists'
    });
  }
  
  // Create new user
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password: password, // In production, hash the password
    createdAt: new Date().toISOString()
  };
  
  users.push(newUser);
  saveUsers();
  
  res.status(201).json({
    success: true,
    data: newUser
  });
});

// User login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  
  // Validate input
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required'
    });
  }
  
  // Find user
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return res.status(401).json({
      success: false,
      message: 'Invalid email or password'
    });
  }
  
  // Generate JWT token
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    SECRET_KEY,
    { expiresIn: '24h' }
  );
  
  // Store session
  sessions.push({
    userId: user.id,
    token,
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000)
  });
  
  res.json({
    success: true,
    data: {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    }
  });
});

// Get user by email
app.get('/api/users', (req, res) => {
  const { email } = req.query;
  
  if (!email) {
    return res.status(400).json({
      success: false,
      message: 'Email parameter is required'
    });
  }
  
  const user = users.find(u => u.email === email);
  
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }
  
  res.json({
    success: true,
    data: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('API endpoints:');
  console.log('  POST /api/users - Create a new user');
  console.log('  POST /api/login - User login');
  console.log('  GET /api/users?email=... - Get user by email');
});