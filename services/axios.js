const axios = require("axios");

const axiosInstance = axios.create({
  baseUrl: process.env.MICROSERVICE_BASE_URL,
  headers: {
    CLIENT_KEY: process.env.CLIENT_KEY,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
  },
});

module.exports = axiosInstance;
