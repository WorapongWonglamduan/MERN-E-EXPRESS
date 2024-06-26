const express = require("express");
const router = express.Router();

const { auth, isAdmin } = require("../middleware/auth");
const {
  create,
  list,
  remove,
  edit,
  update,
  listBy,
  searchFilters,
} = require("../controllers/product");
//Route
//Product
router.post("/product", auth, isAdmin, create);
router.get("/product/:count", list);
router.delete("/product/:id", auth, isAdmin, remove);

//edit
router.get("/products/:id", edit);
router.put("/product/:id", auth, isAdmin, update);

router.post("/product-by", listBy);
router.post("/search/filters", searchFilters);

module.exports = router;
