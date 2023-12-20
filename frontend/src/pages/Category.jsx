import Header from "../components/Header";
import Footer from "../components/Footer";
import News from "../components/News";
import ArticleCard from "../components/ArticleCard";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
const Category = () => {
  const { categoryname } = useParams();
  const { data, isPending } = useFetch(
    "http://localhost:3000/api/categories/" + categoryname
  );
  return (
    <>
      <Header />
      <div className="middle-section">
        <div className="articles-section">
          <h1 className="articles-header">{categoryname}</h1>
          {isPending && <span className="loader"></span>}{" "}
          {data && data.length == 0 && <div>sivu on tyhjaa </div>}
          {data && (
            <div className="articles">
              {data.map((article) => {
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
          )}
        </div>
        <News />
      </div>
      <Footer />
    </>
  );
};

export default Category;
