var express = require("express");
var router = express.Router();
let userSchema = require("../schema/schema");

/* GET home page. */

//  router.get("/", function (req, res) {
//    res.send("working");
//  });

router.get("/display", async function (req, res) {
  try {
    const result = await userSchema.find();
    res.json({
      Message: "display all data",
      result,
    });
  } catch (error) {
    console.log(error);
  }
});

// router.post("/register", async function (req, res) {
//   try {
//     const user = await userSchema.findOne({ email: req.body.email });
//     if (user) {
//       res.send("user already exists");
//     } else {
//       const encodePwd = await encryptPwd(req.body.password);
//       req.body.password = encodePwd;
//       await UserSchema.create(req.body);
//       res.send("Account created");
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

module.exports = router;
