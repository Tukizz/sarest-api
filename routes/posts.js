const express = require("express");
const postsController = require("../controllers/post.controller");

const router = express.Router();

router.post("/", postsController.save);

module.exports = router;
