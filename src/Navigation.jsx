import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Tech Stack', path: '/tech-stack' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="navigation">
      <div className="nav-content">
        <Link to="/" className="logo">FM</Link>
        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="nav-link"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
