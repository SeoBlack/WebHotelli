import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const term = document.getElementById("searchinput").value;
    if (!term) return;
    navigate(`/search?term=${term}`);
  };
  return (
    <div id="header">
      <Link to={"/"}>
        <h1 id="header-title">Oy Webhotelli Ab</h1>
      </Link>

      <form action="" onSubmit={handleSubmit}>
        <i className="fa-solid fa-magnifying-glass" onClick={handleSubmit}></i>
        <input
          type="text"
          name="searchinput"
          id="searchinput"
          placeholder="etsi jotain..."
        ></input>
      </form>
    </div>
  );
};

export default Header;
