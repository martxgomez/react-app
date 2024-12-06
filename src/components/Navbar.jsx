import "./Navbar.css"
// import logoIcon from "../assets/logo-icon.png";
import MenuButton from "../components/MenuButton";

function Navbar({onClick}) {
  return (
    <nav className="navbar">
    <MenuButton onClick={onClick}/>  {/* prop passed from App.jsx line 53 */}
    <h1>
      BUONISSIMO
    </h1>
      {/* <img src={logoIcon} className="logo" alt="Logo" /> */}
    </nav>
  );
}
export default Navbar;
