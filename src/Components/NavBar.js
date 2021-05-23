import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className="navBar">
            <NavLink to="/">Home </NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to={"/"}><img height="80" width="80px" src="https://teen.bsbwlibrary.org/wp-content/uploads/2016/06/white-home-icon-transparent-homeicon.png"/></NavLink>
         
  
        </nav>
    ) 
}

export default NavBar;


