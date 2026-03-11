// src/components/sections/Header/index.jsx
// import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Nav from '../../Nav';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          React
        </Link>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
