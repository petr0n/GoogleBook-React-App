
// Require book model
const Book = require("./Book");
const API = require("./utils/google-api");

// Routes
// =============================================================
module.exports = function(app) {

  app.get('/', (req, res) => {
    return res.json({yo: "I'm words"});
  });
}