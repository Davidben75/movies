import { NavLink } from "react-router-dom";



const Header = () => {
  return (
    <header className="header">
      <span>
        <h1> My Movies</h1>
      </span>
      
      <nav>
      <NavLink to='/'> Accueil </NavLink>
      <NavLink to='/movies'> Films </NavLink>
      <NavLink to='/Avis'> Avis </NavLink>
      </nav>
    </header>
  );
};

export default Header;

