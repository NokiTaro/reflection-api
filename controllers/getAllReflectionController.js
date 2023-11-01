const reflections = [];

const getAllReflectionsController = (req, res) => {
  const userId = req.user.id; // Ganti pake cara dapetin UserId
  const userReflections = reflections.filter(reflection => reflection.UserId === userId);
  res.status(200).json(userReflections);
};

module.exports = getAllReflectionsController;
