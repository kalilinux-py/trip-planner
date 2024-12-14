class HttpError extends Error {
  constructor({ status = 400, message = "An error occurred", ...args }) {
    super(message);
    this.status = status;
    this.args = args;
  }
}
const errorHandler = async (res, func) => {
  try {
    await func();
  } catch (error) {
    if (error instanceof HttpError) {
      res.status(error.status).json({
        status: error.status,
        message: error.message,
        ...error.args,
      });
    } else {
      res.status(500).json({
        status: 500,
        message: "An unexpected error occurred",
      });
    }
  }
};

module.exports = {
  HttpError,
  errorHandler,
};
