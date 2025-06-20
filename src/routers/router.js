let express = require("express");
let router = express.Router();
let userList = require("../controllers/userList.js");

router.get("/", userList.userList);

router.get("/addUser", userList.addUser);
router.post("/newUser", userList.newUser);
router.get("/userProfile", userList.seeUser);
router.get("/deleteuser", userList.deleteuser);
router.post("/updateUser", userList.updateuser);

module.exports = router;