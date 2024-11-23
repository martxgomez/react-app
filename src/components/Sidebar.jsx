import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar () {

return (
   <section id="sidebar">
        <ul className="sidebar-ul">
            <li> Recipe </li>
            <li> Add recipes </li>
            <li> 
            <NavLink to ="/about">About</NavLink>
            </li>
        </ul>

   </section> 
)
}

export default Sidebar;