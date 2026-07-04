import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
        <div className="container">
            <Link to="/" className="logo">ReduceCO2<span>Now</span></Link>
            <ul className="nav-links">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/levers">4 Levers</NavLink>
                </li>
                <li>
                    <NavLink to="/consecuences">Consecuences</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  );
};

export default NavBar;