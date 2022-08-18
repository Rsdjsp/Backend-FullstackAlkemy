const errorMessage = (error, res) => {
  console.log(error.message);
  return res.status(500).json({
    error: error.message,
    message: "Something was wrong",
  });
};

module.exports = errorMessage;
