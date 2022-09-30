const { Router } = require("express");
const express = require("express");
const router = express.Router();

//handle incoming GET request to /order
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "handling GET request to /orders",
  });
});
router.post("/", (req, res, next) => {
  const orders = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(201).json({
    message: "order created",
    order: orders,
  });
});

router.get("/:orderId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "special") {
    res.status(200).json({
      message: "you discovered special ID",
      orderId: req.params.orderId,
    });
  } else {
    res.status(200).json({
      message: "you passes an ID",
    });
  }
});
router.patch("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "updated Product!",
  });
});
router.delete("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "deleted Product!",
  });
});
module.exports = router;
