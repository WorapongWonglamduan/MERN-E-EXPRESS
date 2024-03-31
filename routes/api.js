const express = require("express");
const router = express.Router();

const {
  register,
  listUser,
  editUser,
  deleteUser,
  login,
} = require("../controllers/auth");

//middleware
const { auth } = require("../middleware/auth");

//Route
router.get("/auth", listUser);
router.post("/register", register);
router.post("/login", login);
router.put("/auth", editUser);
router.delete("/auth", deleteUser);

router.get("/1", auth, (req, res) => {
  return res.send('hello');
});

module.exports = router;
