import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className="navBar">
            <NavLink to="/">Home / YouTube</NavLink>
            <NavLink to="/About">About</NavLink>
        </nav>
    ) 
}

export default NavBar;