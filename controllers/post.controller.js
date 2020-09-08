const models = require("../models");

function save(req, res) {
  const post = {
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.image_url,
    categoryId: req.body.category_id,
    userId: 1,
  };

  models.Post.create(post)
    .then((result) => {
      res.status(201).json({
        message: "Post Created Success",
        post: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Error",
        error: error,
      });
    });
}

module.exports = {
  save: save,
};
