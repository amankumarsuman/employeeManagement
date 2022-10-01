const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const JobGrade = require("../models/jobGrade");

router.post("/addJobGrade", (req, res, next) => {

  const jobGrade = new JobGrade({
    _id: new mongoose.Types.ObjectId(),
    jbgr_id: req.body.jbgr_id,
    jbgr_name: req.body.jbgr_name,
    jbgr_desc: req.body.jbgr_desc,
    
   
  });
  jobGrade
    .save()
    .then((result) => {
      res.status(201).json({
        message: "New Job Grade  Added successfully",
        createdGradeWiseLeave: {
          _id: result.id,
          jbgr_id: req.body.jbgr_id,
          jbgr_name: req.body.jbgr_name,
          jbgr_desc: req.body.jbgr_desc,
          
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
    JobGrade.find()
    
    .exec()
    .then((data) => {
      const response = {
        count: data.length,
        jobGrade: data,
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
