import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1>
        <Link to="/">SEUNGRI KANG</Link>
      </h1>

      <ul>
        <li>
          <NavLink to="/Department" activeClassName={"on"}>
            Department
          </NavLink>
        </li>
        <li>
          <NavLink to="/Youtube" activeClassName={"on"}>
            Youtube
          </NavLink>
        </li>
        <li>
          <NavLink to="/Gallery" activeClassName={"on"}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/Location" activeClassName={"on"}>
            Location
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
