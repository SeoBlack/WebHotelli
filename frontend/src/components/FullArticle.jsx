/* eslint-disable react/prop-types */
import Parser from "html-react-parser";
import { Link } from "react-router-dom";
const FullArticle = ({
  title,
  text,
  category,
  firstname,
  lastname,
  rool,
  date,
}) => {
  return (
    <>
      <div className="page-article-details">
        <h3 className="page-article-title">{title}</h3>
        <p>{`Luotu ${date} || ${firstname} ${lastname}`}</p>
        <p>{rool}</p>
      </div>
      <div className="page-article-body">{Parser(text)}</div>
      <Link to={`/categories/${category}`}>#{category}</Link>
    </>
  );
};

export default FullArticle;
