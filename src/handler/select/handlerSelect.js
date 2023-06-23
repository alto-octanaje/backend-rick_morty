const {
  getAllSpeciesC,
  getAllGenderC,
  getAllStatusC,
  getAllOriginC,
  getAllLocationC,
} = require("../../Controllers/Select/SelectController");

const getAllSpecieH = async (req, res) => {
  try {
    const getAllSpecie = await getAllSpeciesC();

    res.status(200).json(getAllSpecie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getAllGenderH = async (req, res) => {
  try {
    const getAllGender = await getAllGenderC();
    res.status(200).json(getAllGender);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllStatusH = async (req, res) => {
  try {
    const getAllStatus = await getAllStatusC();
    res.status(200).json(getAllStatus);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getAllOriginH = async (req, res) => {
  try {
    const getAllOrigin = await getAllOriginC();
    res.status(200).json(getAllOrigin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllLocationH = async (req, res) => {
  try {
    const getAllLocation = await getAllLocationC();
    res.status(200).json(getAllLocation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllSpecieH,
  getAllGenderH,
  getAllStatusH,
  getAllOriginH,
  getAllLocationH,
};
