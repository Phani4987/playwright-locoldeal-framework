const { env } = require("./env");

const configs = {
  qa: {
    baseURL: "https://locoldeal.com/",
    apiURL: "http://localhost:5000"
  },

  dev: {
    baseURL: "https://dev.yoursite.com",
    apiURL: "https://dev-api.yoursite.com"
  },

  prod: {
    baseURL: "https://yoursite.com",
    apiURL: "https://api.yoursite.com"
  }
};

module.exports = configs[env];