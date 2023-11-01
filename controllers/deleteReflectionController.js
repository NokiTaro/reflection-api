const reflections = [];

const deleteReflectionController = (req, res) => {
  const reflectionId = parseInt(req.params.id);

  const index = reflections.findIndex(reflection => reflection.id === reflectionId);
  if (index === -1) {
    return res.status(404).json({ message: 'Reflection not found' });
  }

  reflections.splice(index, 1);
  return res.status(200).json({ message: 'Success delete' });
};

module.exports = deleteReflectionController;
