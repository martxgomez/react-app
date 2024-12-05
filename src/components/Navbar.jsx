import "./Navbar.css"
// import logoIcon from "../assets/logo-icon.png";
import MenuButton from "../components/MenuButton";

function Navbar() {
  return (
    <nav className="navbar">
    <MenuButton/>
    <h1>
      BUONISSIMO
    </h1>
      {/* <img src={logoIcon} className="logo" alt="Logo" /> */}
    </nav>
  );
}
export default Navbar;
