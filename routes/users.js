const express = require("express")
const { UserModel } = require("../models/user")
const router = express.Router()
const bcrypt = require("bcrypt")
const saltRounds = 10;
const jwt = require('jsonwebtoken');

router.post("/register", async (req, res) => {
   const userName = req.body.userName
   const password = req.body.password
   const Email = req.body.Email
   const Phone = req.body.Phone
   const Address = req.body.Address
   const userExist = await UserModel.findOne({ userName })
   if (userExist) {
      res.send({ message: "User name already taken" })
      return;
   }
   const HashedPassword = await bcrypt.hash(password, saltRounds)
   const userData = { userName, password: HashedPassword, Email, Phone, Address };

   const SavedUser = new UserModel(userData)
   const saved = await SavedUser.save()
   res.send({ user: saved, message: "User created" })
});




router.post("/login", async (req, res) => {
   const userName = req.body.userName
   const password = req.body.password
   const isUser = await UserModel.findOne({ userName })
   if (isUser) {
      const match = await bcrypt.compare(password, isUser.password)
      if (match) {
         const token = jwt.sign({ _id: isUser._id }, process.env.jwt_secret, { expiresIn: "30d" })
         res.send({ match, message: "Login Successfully", User: { isUser }, token })

      }
      else {
         res.send({ match, message: "Wrong Password" })
      }
   }
   else {
      res.send({ message: "No User Found" })
   }
});

module.exports = router