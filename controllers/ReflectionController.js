const reflections = [];

function createReflection(req, res) {
  const { success, low_point, take_away } = req.body;
  const reflection = {
    id: reflections.length + 1,
    success,
    low_point,
    take_away,
    UserId: req.user.id, // Ganti dengan cara Anda mendapatkan UserId
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  reflections.push(reflection);
  res.status(201).json(reflection);
}

function getAllReflections(req, res) {
  const userId = req.user.id; // Ganti dengan cara Anda mendapatkan UserId
  const userReflections = reflections.filter(reflection => reflection.UserId === userId);
  res.status(200).json(userReflections);
}

function editReflection(req, res) {
  const reflectionId = parseInt(req.params.id);
  const { success, low_point, take_away } = req.body;

  const index = reflections.findIndex(reflection => reflection.id === reflectionId);
  if (index === -1) {
    return res.status(404).json({ message: 'Reflection not found' });
  }

  const updatedReflection = {
    ...reflections[index],
    success,
    low_point,
    take_away,
    updatedAt: new Date().toISOString(),
  };

  reflections[index] = updatedReflection;
  res.status(200).json(updatedReflection);
}

function deleteReflection(req, res) {
  const reflectionId = parseInt(req.params.id);

  const index = reflections.findIndex(reflection => reflection.id === reflectionId);
  if (index === -1) {
    return res.status(404).json({ message: 'Reflection not found' });
  }

  reflections.splice(index, 1);
  res.status(200).json({ message: 'Success delete' });
}

module.exports = {
  createReflection,
  getAllReflections,
  editReflection,
  deleteReflection,
};
