const reflections = [];

const editReflectionController = (req, res) => {
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
  return res.status(200).json(updatedReflection);
};

module.exports = editReflectionController;
