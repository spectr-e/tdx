const express = require('express');
const router = express.Router();
const { authenticateUser, authorizeRoles } = require('../middleware/auth');

router.get('/dashboard', authenticateUser, (req, res) => {
  res.send('User dashboard');
});

router.get('/admin', authenticateUser, authorizeRoles('admin'), (req, res) => {
  res.send('Admin panel');
});

module.exports = router;
