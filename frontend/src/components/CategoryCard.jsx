/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const CategoryCard = ({ categoryName }) => {
  return (
    <div className="category-card">
      <img
        src={`src/assets/${categoryName.toLowerCase()}.png`}
        alt={categoryName}
        className="category-img"
      />
      <h3 className="category-name">{categoryName}</h3>
      <Link to={`/categories/${categoryName}`} className="category-link">
        artikkelit
      </Link>
    </div>
  );
};

export default CategoryCard;
