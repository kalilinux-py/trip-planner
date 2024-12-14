const response = ({ res, status = 200, message = "OK", args }) => {
  return res.status(status).json({
    status,
    message,
    ...args,
  });
};

module.exports = response;
