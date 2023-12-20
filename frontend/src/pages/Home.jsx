import Header from "../components/Header";
import News from "../components/News";
import Footer from "../components/Footer";
import CategoryCard from "../components/CategoryCard";
import { useFetch } from "../hooks/useFetch";
const Home = () => {
  const { data, isPending } = useFetch("http://localhost:3000/api/categories");
  if (data) {
    data.sort((a, b) => parseInt(a.jarjestysnro) - parseInt(b.jarjestysnro));
  }

  return (
    <>
      <Header />
      <div className="middle-section">
        <div className="categories-section">
          {isPending && <span className="loader"></span>}{" "}
          {data &&
            data.map((category) => {
              return (
                <CategoryCard
                  categoryID={category.kategoria_id}
                  categoryName={category.nimi}
                  key={category.jarjestysnro}
                />
              );
            })}
        </div>
        <News />
      </div>
      <Footer />
    </>
  );
};

export default Home;
