import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="companyName">hotelooking</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
