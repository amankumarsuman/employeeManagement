const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const UserDetails = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";
router.post("/signup", upload.single("image"), (req, res, next) => {
  console.log(req.file);
  // //for encrypted password
  //  bcrypt.hash(req.body.password,10,(err,hash)=>{

  //     if(err){
  //       return res.status(500).json({
  //         error:err
  //       });
  //     }else{
  //       const user = new User({
  //       _id: new mongoose.Types.ObjectId(),
  //       email: req.body.email,
  //       password:hash
  //     });

  //     user.save().then(result=>{
  //       console.log(result)
  //       res.status(201).json({
  //         message:"user created"
  //       });

  //     })
  //     .catch(err=>{
  //       console.log(err)
  //       res.status(500).json({
  //         error:err
  //       });
  //     });

  //   }

  // });
  const user = new UserDetails({
    _id: new mongoose.Types.ObjectId(),
    email: req.body.email,
    password: req.body.password,
    fname: req.body.fname,
    lname: req.body.lname,
    offEmail: req.body.offEmail,
    addr: req.body.addr,
    mobile: req.body.mobile,
    userType: req.body.userType,
    dob: req.body.dob,
  });
  user
    .save()
    .then((result) => {
      console.log(result);

      res.status(201).json({
        message: "Registered successfully",
        createdProduct: {
          _id: result.id,
          email: result.email,
          password: result.password,
          addr: req.body.addr,

          mobile: result.mobile,
          userType: result.userType,
          dob: result.dob,
          fname: req.body.fname,
          lname: req.body.lname,
          offEmail: req.body.offEmail,
          //sending request is optional
          request: {
            type: "GET",
            url: "http://localhost:5000/user",
          },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.get("/", (req, res, next) => {
  UserDetails.find()
    .select("name email password mobile userType dob _id")
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        user: docs,
      };
      console.log(docs);
      // if (docs.length >= 0) {
      res.status(200).json(response);
      // } else {
      //   res.status(404).json({ message: "No Data Found" });
      // }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.get("/:userId", (req, res, next) => {
  const id = req.params.userId;
  UserDetails.findById(id)
    .exec()
    .then((doc) => {
      console.log(doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status.apply(404).json({ message: " no valid id matched" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  //   if (id === "special") {
  //     res.status(200).json({
  //       message: "you discovered special ID",
  //       id: id,
  //     });
  //   } else {
  //     res.status(200).json({
  //       message: "you passes an ID",
  //     });
  //   }
});

router.delete("/:userId", (req, res, next) => {
  UserDetails.deleteOne({ _id: req.params.userId })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "user deleted successfully",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});
router.post("/login", async (req, res, next) => {
  // console.log(req.body.email);
  // UserDetails.find({ email: req.body.email })
  //   .exec()
  //   .then((result) => {
  //     if (result.length < 1) {
  //       return res.status(404).json({
  //         message: "Invalid Email, user doesn't exist",
  //       });
  //     }
  //     if (result.email === req.body.email) {
  //       res.status(200).json({
  //         message: "signed in",
  //       });
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(500).json({ error: err });
  //   });
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ msg: "please fill all the details" });
  }
  const user = await UserDetails.findOne({ email });
  if (!user) {
    return res.json({ msg: "User Not found" });
  }
  if (password === user.password) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET);
    const typeOfUser = user.userType;
    const userData = user;
    // const token=await user.generateAuthToken()

    if (res.status(201)) {
      return res.json({
        status: "ok",
        data: { token: token, userType: typeOfUser, userData: userData },
        msg: "Wow You are logged in Successfully!",
      });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", msg: "InvAlid Password" });
});
// router.get("/userData", async (req, res) => {
//   const { token } = req.body;
//   console.log(token);
//   try {
//     const user = jwt.verify(token, JWT_SECRET);
//     console.log(user);

//     const useremail = user.email;
//     UserDetails.findOne({ email: useremail })
//       .then((data) => {
//         res.send({ status: "ok", data: data });
//       })
//       .catch((error) => {
//         res.send({ status: "error", data: error });
//       });
//   } catch (error) {}
// });

module.exports = router;
