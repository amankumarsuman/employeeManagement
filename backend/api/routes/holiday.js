const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Holiday = require("../models/holiday");

router.post("/addHoliday", (req, res, next) => {

  const holiday = new Holiday({
    _id: new mongoose.Types.ObjectId(),
    year_id: req.body.year_id,
    hday_date: req.body.hday_date,
    hday_title: req.body.hday_title,
    hday_type: req.body.hday_type,
   
  });
  holiday
    .save()
    .then((result) => {
      res.status(201).json({
        message: "New Holiday Added successfully",
        createdLeave: {
          _id: result.id,
          year_id: req.body.year_id,
          hday_date: req.body.hday_date,
          hday_title: req.body.hday_title,
          hday_type: req.body.hday_type,
          //sending request is optional
          request: {
            type: "GET",
            url: "http://localhost:5000/holiday",
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
    Holiday.find()
    
    .exec()
    .then((data) => {
      const response = {
        count: data.length,
        holidayData: data,
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
