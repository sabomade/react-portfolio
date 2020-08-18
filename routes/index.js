const path = require("path");
const router = require("express").Router();

// localhost:3000/

//If no api routes hit, sent the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
