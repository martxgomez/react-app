import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar({isOn}) {
  console.log(isOn);
  return (
    <section id="sidebar" className={isOn ? "sidebar-on" : "sidebar-off"}>
      <ul className="sidebar-ul">
        <li>
          <NavLink to="/">Recipes</NavLink>
        </li>
        <li>
          <NavLink to="/form">Add recipe</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </section>
  );
}

export default Sidebar;
