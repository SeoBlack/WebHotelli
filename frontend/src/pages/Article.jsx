import Header from "../components/Header";
import Footer from "../components/Footer";
import News from "../components/News";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import FullArticle from "../components/FullArticle";
const Article = () => {
  const { articleid } = useParams();
  const { data, isPending } = useFetch(
    "http://localhost:3000/api/articles/" + articleid
  );
  return (
    <>
      <Header />
      <div className="middle-section">
        <div className="page-article-card">
          {isPending && <span className="loader"></span>}{" "}
          {data && (
            <FullArticle
              title={data.otsikko}
              text={data.teksti}
              category={data.kategoria}
              firstname={data.kirjoittaja_etunimi}
              lastname={data.kirjoittaja_sukunimi}
              rool={data.kirjoittaja_rooli}
              date={data.luontipvm}
            />
          )}
        </div>
        <News />
      </div>
      <Footer />
    </>
  );
};

export default Article;
