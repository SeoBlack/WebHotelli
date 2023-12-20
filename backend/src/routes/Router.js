const express = require("express");
const {
  getCategoryies,
  getCategoryArticles,
  getSingleArticle,
  getNews,
  searchArticles,
} = require("../utils/dataManager");
const router = express.Router();

router.get("/categories", async (req, res) => {
  const categories = await getCategoryies();
  console.log(categories);
  if (!categories) {
    res.status(500);
    res.json({ message: "Internal server Error" });
  } else {
    res.status(200).json(categories);
  }
});
router.get("/categories/:categoryName", async (req, res) => {
  const category = await getCategoryArticles(req.params.categoryName);
  console.log(category);
  if (!category) {
    res.status(404);
    res.json({ message: "category was not found" });
  } else {
    res.status(200).json(category);
  }
});

router.get("/news", async (req, res) => {
  const news = await getNews();
  console.log(news);
  if (!news) {
    res.status(500);
    res.json({ message: "Internal server Error" });
  } else {
    res.status(200).json(news);
  }
});
router.get("/articles/:articleID", async (req, res) => {
  const article = await getSingleArticle(req.params.articleID);
  console.log(article);
  if (!article) {
    res.status(404);
    res.json({ message: "article was not found" });
  } else {
    res.status(200).json(article);
  }
});
router.post("/search", async (req, res) => {
  const { searchterm } = req.body;
  const searchResults = await searchArticles(searchterm);
  console.log(searchterm);
  res.json(searchResults);
});
module.exports = router;
