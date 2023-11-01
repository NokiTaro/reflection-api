const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Simulasi database Reflection
const reflections = [];

// Import Routes
const createReflectionRoute = require('./routes/createReflectionRoute');
const getAllReflectionsRoute = require('./routes/getAllReflectionsRoute');
const editReflectionRoute = require('./routes/editReflectionRoute');
const deleteReflectionRoute = require('./routes/deleteReflectionRoute');

// Use Routes
app.use('/api/v1/reflections/create', createReflectionRoute);
app.use('/api/v1/reflections/get', getAllReflectionsRoute);
app.use('/api/v1/reflections/edit', editReflectionRoute);
app.use('/api/v1/reflections/delete', deleteReflectionRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
