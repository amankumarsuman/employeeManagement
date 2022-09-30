const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Leave = require("../models/leave");

router.post("/addLeave", (req, res, next) => {

  const leave = new Leave({
    _id: new mongoose.Types.ObjectId(),
    empl_id: req.body.empl_id,
    year_id: req.body.year_id,
    eolv_date: req.body.eolv_date,
    eolv_leavetype: req.body.eolv_leavetype,
   
  });
  leave
    .save()
    .then((result) => {
      res.status(201).json({
        message: "New Leave Added successfully",
        createdLeave: {
          _id: result.id,
          empl_id: req.body.empl_id,
          year_id: req.body.year_id,
          eolv_date: req.body.eolv_date,
          eolv_leavetype: req.body.eolv_leavetype,
          //sending request is optional
          request: {
            type: "GET",
            url: "http://localhost:5000/leave",
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
    Leave.find()
    
    .exec()
    .then((data) => {
      const response = {
        count: data.length,
        leaveData: data,
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




module.exports = router;
