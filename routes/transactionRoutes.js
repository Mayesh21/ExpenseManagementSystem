const exp = require("constants");
const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionCtrl");

//router object
const router = express.Router();

//routes
//Add Transaction
router.post("/add-transaction", addTransaction);

//Edit Transaction
router.post("/edit-transaction", editTransaction);

//Delete Transaction
router.post("/delete-transaction", deleteTransaction);

//Get Transaction
router.post("/get-transaction", getAllTransaction);

module.exports = router;
