const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Employee = require("../models/employee");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
// const JWT_SECRET =
//   "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";
router.post("/addEmployee", (req, res, next) => {
// console.log(req.body)
  const employee = new Employee({
    _id: new mongoose.Types.ObjectId(),
    empl_id: req.body.empl_id,
    empl_firstname: req.body.empl_firstname,
    empl_lastname: req.body.empl_lastname,
    empl_surname: req.body.empl_surname,
    empl_rmanager_empl_id: req.body.empl_rmanager_empl_id,
    empl_hr_empl_id:req.body.empl_hr_empl_id,
    empl_jbgr_id:req.body.empl_jbgr_id,
    empl_photo:req.body.empl_photo,
    empl_joindate:req.body.empl_joindate,
    empl_dob:req.body.empl_dob,
    empl_designation:req.body.empl_designation,
    empl_offemail:req.body.empl_offemail,
    empl_pemail:req.body.empl_pemail,
    empl_mobile:req.body.empl_mobile,
    empl_altemail:req.body.empl_altemail,
    empl_bloodgroup:req.body.empl_bloodgroup,
    empl_gender:req.body.empl_gender,
    empl_luudate:req.body.empl_luudate,
    empl_luuser:req.body.empl_luuser,
    empl_address:req.body.empl_address,
    empl_fathername:req.body.empl_fathername,
    empl_status:req.body.empl_status,
  });
  employee
    .save()
    .then((result) => {
      res.status(201).json({
        message: "New Employee Added successfully",
        createdEmployee: {
          _id: result.id,
          empl_id: result.empl_id,
          empl_firstname: result.empl_firstname,
          empl_lastname: req.body.empl_lastname,

          empl_surname: result.empl_surname,
          empl_rmanager_empl_id: result.empl_rmanager_empl_id,
          empl_hr_empl_id:result.empl_hr_empl_id,
    empl_jbgr_id:result.empl_jbgr_id,
    empl_photo:result.empl_photo,
    empl_joindate:result.empl_joindate,
    empl_dob:result.empl_dob,
    empl_designation:result.empl_designation,
    empl_offemail:result.empl_offemail,
    empl_pemail:result.empl_pemail,
    empl_mobile:result.empl_mobile,
    empl_altemail:result.empl_altemail,
    empl_bloodgroup:result.empl_bloodgroup,
    empl_gender:result.empl_gender,
    empl_luudate:result.empl_luudate,
    empl_luuser:result.empl_luuser,
    empl_address:result.empl_address,
    empl_fathername:result.empl_fathername,
    empl_status:result.empl_status,
          //sending request is optional
          request: {
            type: "GET",
            url: "http://localhost:5000/induction",
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
    Employee.find()
    
    .exec()
    .then((data) => {
      const response = {
        count: data.length,
        employeeData: data,
      };
      console.log(data);
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

router.get("/:employeeId", (req, res, next) => {
    console.log(req.params)
  const id = req.params.employeeId;
  Employee.findById(id)
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
//   //   if (id === "special") {
//   //     res.status(200).json({
//   //       message: "you discovered special ID",
//   //       id: id,
//   //     });
//   //   } else {
//   //     res.status(200).json({
//   //       message: "you passes an ID",
//   //     });
//   //   }
});

router.delete("/:employeeId", (req, res, next) => {
    Employee.deleteOne({ _id: req.params.employeeId })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Employee deleted successfully",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.put("/:employeeId", (req, res, next) => {
  const id = req.params.employeeId;
 
  const {
    empl_firstname,
    empl_lastname,
    empl_surname,
    empl_hr_empl_id,
    empl_rmanager_empl_id,
    empl_jbgr_id,
    empl_photo,
    empl_joindate,
    empl_dob,
    empl_designation,
    empl_offemail,
    empl_pemail,
    empl_mobile,
    empl_altemail,
    empl_bloodgroup,
    empl_gender,
    empl_luudate,
    empl_luuser,
    empl_address,
    empl_fathername,
    empl_status
  } = req.body;
  Employee.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        empl_firstname,
        empl_lastname,
        empl_surname,
        empl_hr_empl_id,
        empl_rmanager_empl_id,
        empl_jbgr_id,
        empl_photo,
        empl_joindate,
        empl_dob,
        empl_designation,
        empl_offemail,
        empl_pemail,
        empl_mobile,
        empl_altemail,
        empl_bloodgroup,
        empl_gender,
        empl_luudate,
        empl_luuser,
        empl_address,
        empl_fathername,
        empl_status
      },
    },
    { new: true },
    (err, data) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        if (data === null) {
          res.send("No data present with this ID");
        } else {
          res.send({ msg: "Employee Data Updated Successfully", data: data });
        }
      }
    }
  );
});
module.exports = router;
