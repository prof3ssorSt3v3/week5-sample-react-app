import { NavLink } from 'react-router-dom';
import './navbar.css';

export default function Navbar(props) {
  return (
    <div className="navbar">
      <NavLink activeClassName="active" to="/" exact>
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/people">
        People
      </NavLink>
      <NavLink activeClassName="active" to="/planets">
        Planets
      </NavLink>
      <NavLink activeClassName="active" to="/404">
        Nowhere
      </NavLink>
    </div>
  );
}
