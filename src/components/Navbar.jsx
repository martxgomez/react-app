import "./Navbar.css"
import logoIcon from "../assets/logo-icon.png";
import MenuButton from "../components/MenuButton";

function Navbar() {
  return (
    <nav className="navbar">
    <MenuButton/>
      <img src={logoIcon} className="logo" alt="Logo" />
    </nav>
  );
}
export default Navbar;
