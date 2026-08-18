import Styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className={Styles.container}>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export { Sidebar };
