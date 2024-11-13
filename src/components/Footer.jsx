import "./Footer.css";
import gitLogo from "../assets/git-logo.png";

function Footer(){
  return(
  <footer className="footer">
    <ul className="footer-ul">
      <li className="project-info"> <img src={gitLogo} alt="Git Logo" id="logo"/></li>
      <li className="project-info"> Project location</li>
    </ul>
  </footer>
)
}
export default Footer;
