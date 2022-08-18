const errorMessage = require("../helpers/errorMessage");
const OperationService = require("../services/operations");
const operationService = new OperationService();

const input = async (req, res) => {
  try {
    req.body.idUser = req.user.id;
    const register = await operationService.newRegister(req.body);
    return res.status(201).json({ sucess: true, data: register });
  } catch (error) {
    return errorMessage(error, res);
  }
};

const getReg = async (req, res) => {
  try {
    const register = await operationService.operations();
    return res.status(200).json({ sucess: true, data: register });
  } catch (error) {
    return errorMessage(error, res);
  }
};

const update = async (req, res) => {
  try {
    req.body.idUser = req.user.id;
    const { id } = req.params;
    const register = await operationService.update(req.body, id);
    return res.status(202).json({ sucess: true, data: register });
  } catch (error) {
    return errorMessage(error, res);
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const register = await operationService.delete(id);
    return res.status(202).json({ sucess: true, data: register });
  } catch (error) {
    return errorMessage(error, res);
  }
};

module.exports = { input, update, remove, getReg };
