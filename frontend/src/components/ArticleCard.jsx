/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import Parser from "html-react-parser";

const ArticleCard = ({ articleId, title, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    console.log("Toggled");
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div className="article-card" onClick={handleToggle}>
        <div className="article-title">
          <h3>{title}</h3>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="14"
              viewBox="0 0 28 18"
              fill="none"
            >
              <path
                d="M11.7963 1.38553C12.9841 0.0997379 15.0159 0.0997357 16.2037 1.38553L26.6688 12.7143C28.4437 14.6358 27.0809 17.75 24.4651 17.75H3.53489C0.919096 17.75 -0.443723 14.6358 1.33123 12.7143L11.7963 1.38553Z"
                fill="#7F90BC"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="14"
              viewBox="0 0 28 18"
              fill="none"
            >
              <path
                d="M16.2037 16.6145C15.0159 17.9003 12.9841 17.9003 11.7963 16.6145L1.33123 5.28566C-0.443718 3.36422 0.91909 0.25 3.53489 0.25L24.4651 0.25C27.0809 0.25 28.4437 3.36421 26.6688 5.28565L16.2037 16.6145Z"
                fill="#7F90BC"
              />
            </svg>
          )}
        </div>
        <div className={`article-body ${!isOpen ? "" : "show"}`}>
          {Parser(text.length > 500 ? text.slice(0, 500) + "..." : text)}{" "}
          <Link to={"/articles/" + articleId}>{"Lue Lisää >>"}</Link>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
