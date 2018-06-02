var db = require("../models");

module.exports = function(app){

app.get("/api/dragons", function(req, res) {
    // Write code here to retrieve all of the todos from the database and res.json them
    // back to the user
    db.Dragons.findAll({}).then(function (dbDragons) {
      res.json(dbDragons);
    });
  });
  app.get("/api/characters", function(req, res) {
    // Write code here to retrieve all of the todos from the database and res.json them
    // back to the user
    db.Characters.findAll({}).then(function (dbCharacters) {
      res.json(dbCharacters);
    });
  });
};