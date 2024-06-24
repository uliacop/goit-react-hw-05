import { NavLink } from 'react-router-dom'
import css from './Navigation.module.css'
import clsx from "clsx"

const activeLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};

const Navigation = () => {
  
  return (
      <nav className={css.nav}>
          <NavLink to='/' className={activeLinkClass}>Home</NavLink>
          <NavLink  to='/movies' className={activeLinkClass}>Movies</NavLink>
    </nav>
  )
}

export default Navigation