const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const JobGradeWiseHoliday = require("../models/jobGradeWiseHoliday");

router.post("/addJobGradeWiseHoliday", (req, res, next) => {

  const jobGradeWiseHoliday = new JobGradeWiseHoliday({
    _id: new mongoose.Types.ObjectId(),
    jbgr_id: req.body.jbgr_id,
    jbgr_totalnoh: req.body.jbgr_totalnoh,
   
  });
  jobGradeWiseHoliday
    .save()
    .then((result) => {
      res.status(201).json({
        message: "New Job Grade Wise Holiday Added successfully",
        createdGradeWiseHoliday: {
          _id: result.id,
          jbgr_id: req.body.jbgr_id,
          jbgr_totalnoh: req.body.jbgr_totalnoh,
         
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
    JobGradeWiseHoliday.find()
    
    .exec()
    .then((data) => {
      const response = {
        count: data.length,
        gradeWiseHolidayData: data,
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
