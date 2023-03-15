require('dotenv').config()
const express = require("express");
const User = require("../models/Users");
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const fetchuser = require("../middleware/fetchUser");

const JWT_Secret = process.env.MY_SECRET;

//Route 1: Create a user using the post request at 'createuser' endpoint: Login not required
router.post("/createuser", [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
    ], async (req, res) =>{
      //If an error occurs, return bad request along with the error
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
    //Check whether a user with this email exists already
    try {
    let user = await User.findOne({email: req.body.email});    
    if(user){
      return res.status(400).json({error: "Sorry, a user with this email exists already"})
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    //Create a new user if couldn't find one in database
    user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email
          });
        
        const data = {
          user: {
            id: user.id
          }
        }
        
        const authToken =  jwt.sign(data, JWT_Secret);
        res.json({authToken});
    }
    catch(error){
      console.error(error.message);
      res.status(500).send("Internal server error");
    }    
        // .then(user => res.json(user))
        // .catch(err => {console.log(err)
        // res.json({error: "Please enter a unique value for email", message: err.message})});
})


//Route 2: Authenticate a user using the post request at 'login' endpoint: Login required
router.post("/login", [
  body('email', "Enter a valid email").isEmail(),
  body('password', "Password cannot be blank").exists(),
  ], async (req, res) =>{
    //If an error occurs, return bad request along with the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;
    try {
      let user = await User.findOne({email});
      if(!user){
       return res.status(400).json({error: "Please log in with correct credentials"}); 
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if(!passwordCompare){
        return res.status(400).json({error: "Please log in with correct credentials"});
      }

      const data = {
        user: {
          id: user.id
        }
      }
      
      const authToken =  jwt.sign(data, JWT_Secret);
      res.json({authToken});
    } 
    catch(error){
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  })

  //Route 3: Authenticate a user using the post request at 'getuser' endpoint: Login required
  router.post("/getuser",fetchuser, async (req, res) => {

  try {
    let userID = req.user.id;
    const user = await User.findById(userID).select("-password");
    res.send(user);
  } catch(error){
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
  })
  module.exports = router