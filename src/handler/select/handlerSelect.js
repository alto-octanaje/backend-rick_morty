const { getAllSpecieC } = require("../../Controllers/Select/SelectController");

const getAllSpecieH = async (req, res) => {
  try {
    const getAllSpecie = await getAllSpecieC();

    res.status(200).json(getAllSpecie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllSpecieH,
};
