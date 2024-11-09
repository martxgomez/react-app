import "./Navbar.css"
import logoIcon from "../assets/logo-icon.png";
import menuIcon from "../assets/menu-icon.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={menuIcon} className="menu-icon" alt="Menu icon" />
      <img src={logoIcon} className="logo" alt="Logo" />
    </nav>
  );
}
export default Navbar;
