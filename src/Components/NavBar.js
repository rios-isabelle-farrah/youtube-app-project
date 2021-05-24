import { NavLink } from 'react-router-dom'

const NavBar = () => {

    return(


        
        




        <nav className="navBar">
{/* 
https://icon-library.com/images/hamburger-menu-icon-transparent/hamburger-menu-icon-transparent-0.jpg */}

{/* 
<NavLink className="allNavs" id="home" to={"/"}><img id="burger" height="80" width="80px" src="https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png"/><span id="youtube" className="widen">Youtube</span> </NavLink> */}
 <NavLink className="allNavs" id="home" to={"/"}><img id="burger" height="80" width="80px" src="https://icon-library.com/images/hamburger-menu-icon-transparent/hamburger-menu-icon-transparent-0.jpg"/><span id="youtube" className="widen">Menu</span> </NavLink>
        {/* <NavLink className="allNavs" id="about" to="/About">About</NavLink> */}
        <NavLink className="allNavs" id="home" to={"/"}><img height="80" width="80px" src="https://teen.bsbwlibrary.org/wp-content/uploads/2016/06/white-home-icon-transparent-homeicon.png"/><span className="widen">Home</span></NavLink>
        <NavLink  className="allNavs" id="home" to={"/About"}><img height="80" width="80px" src="https://icon-library.com/images/information-icon-white/information-icon-white-4.jpg"/> <span className="widen">About</span> </NavLink>
       


    </nav>


    ) 
}

export default NavBar;


