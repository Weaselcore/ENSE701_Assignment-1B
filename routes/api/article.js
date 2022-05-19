const express = require("express");
const router = express.Router();

const privilegeRoutes = ['/moderator/:id', '/analyst/:id', '/admin/:id'];

// Load Article model
const Article = require("../../models/articleModel");
router.get("/test", (req, res) => res.send("Article route testing!"));

// @route GET api/articles
// @description add/save article
// @access Public
router.post("/", (req, res) => {
  Article.create(req.body)
    .then((article) => res.json({ msg: "Article added successfully" }))
    .catch((err) => res.status(400).json({ error: `Unable to add this book: ${err}`}));
});

// @route GET api/articles
// @description Get all articles
// @access Public
router.get("/", (req, res) => {
  Article.find()
    .then((article) => res.json(article))
    .catch((err) =>
      res.status(404).json({ noArticlesFound: "No Article found" })
    );
});

// @route GET api/articles/:id
// @description Get single articles by id
// @access Public
router.get("/:id", (req, res) => {
  Article.findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) =>
      res.status(404).json({ noArticlesFound: "No Article found" })
    );
});

// @route GET api/articles/:id
// @description Update articles
// @access Public
router.put(privilegeRoutes, (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body)
    .then((article) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

module.exports = router;
