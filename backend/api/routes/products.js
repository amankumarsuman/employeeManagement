const { Router } = require("express");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../models/products");

//get all the product from data base
router.get("/", (req, res, next) => {
  Product.find()
    .select("name price _id")
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        products: docs,
      };
      // console.log(docs);
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
router.post("/", (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });
  //store in database using save()
  product
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Product created successfully",
        createdProduct: {
          name: result.name,
          price: result.price,
          _id: result.id,
          //sending request is optional
          request: {
            type: "GET",
            url: "http://localhost:5000/products" + result._id,
          },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id)
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
router.patch("/:productId", (req, res, next) => {
  const id = req.params.productId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Product.updateOne(
    { _id: id },
    // { $set: { name: req.body.newName, price: req.body.newPrice } }
    { $set: updateOps }
  )
    .exec()
    .then((result) => {
      console.log(result);
      result.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  res.status(200).json({
    message: "updated Product!",
  });
});
router.delete("/:productId", (req, res, next) => {
  const id = req.params.productId;
  Product.remove({ _id: id })
    .exec()
    .then((result) => {
      result.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  //   res.status(200).json({
  //     message: "deleted Product!",
  //   });
});
module.exports = router;
