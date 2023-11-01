const reflections = [];

const createReflectionController = (req, res) => {
  const { success, low_point, take_away } = req.body;
  const reflection = {
    id: reflections.length + 1,
    success,
    low_point,
    take_away,
    UserId: req.user.id, // Ganti cara cara dapetin UserId
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  reflections.push(reflection);
  res.status(201).json(reflection);
};

module.exports = createReflectionController;
