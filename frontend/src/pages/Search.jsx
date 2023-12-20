import Header from "../components/Header";
import Footer from "../components/Footer";
import News from "../components/News";
import ArticleCard from "../components/ArticleCard";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
const Search = () => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);

  const [term] = useSearchParams();
  useEffect(() => {
    setIsPending(true);
    fetch("http://localhost:3000/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        searchterm: term.get("term"),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsPending(false);
        setData(data);
      })
      .catch((err) => console.log(err));
  }, [term]);
  data && console.log(data);
  return (
    <>
      <Header />
      <div className="middle-section">
        <div className="articles-section">
          <h1 className="articles-header">
            {`Haku tulokset "${term.get("term")}" sanalla`}
          </h1>
          <div className="articles">
            {isPending && <span className="loader"></span>}
            {data && data.length == 0 && <div>sivu on tyhjaa </div>}
            {data &&
              data.map((article) => {
                return (
                  <ArticleCard
                    key={article.artikkeli_id}
                    articleId={article.artikkeli_id}
                    title={article.otsikko}
                    text={article.teksti}
                  />
                );
              })}
          </div>
        </div>
        <News />
      </div>
      <Footer />
    </>
  );
};

export default Search;
