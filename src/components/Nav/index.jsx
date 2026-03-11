// src/components/Nav/index.jsx
import styles from './Nav.module.css';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Notes', path: '/notes' },
  { title: 'About', path: '/about' },
];

function Nav() {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        {navLinks.map((item) => (
          <li key={item.title}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
