import "../assets/css/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="me-2"> Home </Link> | <Link to="/favoritos" className="ms-2"> Favoritos </Link>
    </nav>
  );
}
