const express = require('express');
const router = express.Router();
const editReflectionController = require('../controllers/editReflectionController');

// Middleware untuk otorisasi
function authorize(req, res, next) {
  // Ganti sama kode otorisasi yg sesuai
  const token = req.headers.authorization;
  if (token !== 'Bearer <your access token>') {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  // Ganti sama UserId
  req.user = { id: '<UserId>' };
  next();
}

// Edit Reflection
router.put('/:id', authorize, editReflectionController);

module.exports = router;
