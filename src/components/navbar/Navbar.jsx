import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <span className="logo">Travellers</span>
        </Link>

        <div className="navItems">
          <Link to="/register">
            <button className="navButtons">Register</button>
          </Link>
          <Link to="/login">
            <button className="navButtons">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
