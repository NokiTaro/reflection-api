const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const reflectionController = require('./ReflectionController');

app.use(express.json());

// Middleware untuk otorisasi
function authorize(req, res, next) {
  // Ganti dengan kode otorisasi yang sesuai
  const token = req.headers.authorization;
  if (token !== 'Bearer <your access token>') {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  // Ganti dengan cara Anda mendapatkan UserId
  req.user = { id: '<UserId>' };
  next();
}

app.post('/api/v1/reflections', authorize, reflectionController.createReflection);
app.get('/api/v1/reflections', authorize, reflectionController.getAllReflections);
app.put('/api/v1/reflections/:id', authorize, reflectionController.editReflection);
app.delete('/api/v1/reflections/:id', authorize, reflectionController.deleteReflection);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
