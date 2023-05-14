import { HashLink as Link } from "react-router-hash-link";

import "./style.css";
import "./header.css";

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center p-3 bg-white --header">
      <a href="#">
        <img
          src="./logo.svg"
          alt="app-logo"
          className="p-0"
          style={{ mixBlendMode: "multiply", height: "85px", width: "90px" }}
        />
      </a>
      <div className="content">
        <h4 className="p-3">MovieFlix</h4>
        <h4 className="p-3">MovieFlix</h4>
      </div>
      <Link
        smooth
        to="#add-movie"
        id="header"
        className="btn btn-primary p-2 mx-5 text-white text-decoration-none shadow-none"
      >
        Add Movie
      </Link>
    </div>
  );
};
export default Header;
