import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icons, title }) => {
  return (
    <div className="navbar bg-primary">
      <h3>
        <i className={icons} style={{ marginRight: "4px" }} />
        {title}
      </h3>

      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/about"> About</Link>
        </li>
      </ul>
    </div>
  );
};
Navbar.defaultProps = {
  title: "Github Profile",
  icons: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icons: PropTypes.string,
};
export default Navbar;
