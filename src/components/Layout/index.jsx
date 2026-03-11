// src/components/Layout/index.jsx
import '../../App.css';
import { Outlet } from 'react-router-dom';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Layout;
