const { users } = require("../models/index.js");

module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    const users = require("../controllers/user.controller")

    var router = require("express").Router();

    router.post("/logIn", users.logIn)

    router.post("/register", users.register)
  
    // Create a new Tutorial
    router.post("/", tutorials.create);
  
    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tutorials.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);
  
    // Create a new Tutorial
    router.delete("/", tutorials.deleteAll);
  
    app.use('/api/tutorials', router);
  };