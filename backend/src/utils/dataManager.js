const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);

async function getCategoryies() {
  const data = await readFile("src/data/kategoriat.json", "utf-8")
    .then((data) => JSON.parse(data))
    .catch((err) => console.log(err.message));
  if (data) {
    return data;
  }
}
async function getCategoryArticles(categoryName) {
  const data = await readFile("src/data/artikkelit.json", "utf-8")
    .then((data) => JSON.parse(data))
    .catch((err) => console.log(err.message));

  if (data) {
    const category = data.filter(
      (artikkeli) =>
        artikkeli.kategoria.toLowerCase() === categoryName.toLowerCase()
    );
    return category;
  }
}
async function getSingleArticle(articleID) {
  const data = await readFile("src/data/artikkelit.json", "utf-8")
    .then((data) => JSON.parse(data))
    .catch((err) => console.log(err.message));
  if (data) {
    const article = data.find(
      (artikkeli) => artikkeli.artikkeli_id === articleID
    );
    return article;
  }
}
async function getNews() {
  const data = await readFile("src/data/uutiset.json", "utf-8")
    .then((data) => JSON.parse(data))
    .catch((err) => console.log(err.message));
  if (data) {
    return data;
  }
}
async function searchArticles(searchTerm) {
  const data = await readFile("src/data/artikkelit.json", "utf-8")
    .then((data) => JSON.parse(data))
    .catch((err) => console.log(err.message));
  if (data) {
    const searchResults = data.filter((article) => {
      if (article.otsikko.toLowerCase().includes(searchTerm.toLowerCase()))
        return article;
      if (article.kategoria.toLowerCase().includes(searchTerm.toLowerCase()))
        return article;
      if (
        article.kirjoittaja_etunimi
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
        return article;
      if (
        article.kirjoittaja_sukunimi
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
        return article;
    });
    return searchResults;
  }
}
module.exports = {
  getCategoryies,
  getCategoryArticles,
  getSingleArticle,
  getNews,
  searchArticles,
};
