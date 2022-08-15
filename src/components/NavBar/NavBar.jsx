import { Outlet, NavLink } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movie">Movie</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </header>
  );
};
