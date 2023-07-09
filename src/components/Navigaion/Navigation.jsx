import './Navigation.scss';

import { NavLink } from 'react-router-dom';

export const Navigaion = () => {
  return (
    <header className="header">
      <NavLink to="/" className="header-link">
        Home
      </NavLink>
      <NavLink to="/movies" className="header-link">
        Movies
      </NavLink>
    </header>
  );
};
