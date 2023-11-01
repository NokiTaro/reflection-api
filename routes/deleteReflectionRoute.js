const express = require('express');
const router = express.Router();
const deleteReflectionController = require('../controllers/deleteReflectionController');

// Middleware untuk otorisasi
function authorize(req, res, next) {
  // Ganti sama kode otorisasi yg sesuai
  const token = req.headers.authorization;
  if (token !== 'Bearer <your access token>') {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  // Ganti pake UserId
  req.user = { id: '<UserId>' };
  next();
}

// Delete Reflection
router.delete('/:id', authorize, deleteReflectionController);

module.exports = router;
