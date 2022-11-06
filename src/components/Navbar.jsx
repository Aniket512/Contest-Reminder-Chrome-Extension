import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav>
        <ul className="nav-links">
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/platform">Platforms</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
