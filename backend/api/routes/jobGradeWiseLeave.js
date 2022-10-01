const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const JobGradeWiseLeave = require("../models/jobGradeWiseLeave");

router.post("/addJobGradeWiseLeave", (req, res, next) => {

  const leave = new JobGradeWiseLeave({
    _id: new mongoose.Types.ObjectId(),
    jbgr_id: req.body.jbgr_id,
    jbgr_totalnol: req.body.jbgr_totalnol,
    jbgr_nocl: req.body.jbgr_nocl,
    jbgr_nosl: req.body.jbgr_nosl,
    jbgr_nool: req.body.jbgr_nool,
   
  });
  leave
    .save()
    .then((result) => {
      res.status(201).json({
        message: "New Job Grade Wise Leave Added successfully",
        createdGradeWiseLeave: {
          _id: result.id,
          jbgr_id: req.body.jbgr_id,
          jbgr_totalnol: req.body.jbgr_totalnol,
          jbgr_nocl: req.body.jbgr_nocl,
          jbgr_nosl: req.body.jbgr_nosl,
          jbgr_nool: req.body.jbgr_nool,
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
    JobGradeWiseLeave.find()
    
    .exec()
    .then((data) => {
      const response = {
        count: data.length,
        gradeWiseLeaveData: data,
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
