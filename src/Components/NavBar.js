import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <NavLink className="allNavs" id="home" to={"/"}>
        <img className="icon-images"
          id="burger"
          height="80px"
          width="80px"
          src="https://icon-library.com/images/hamburger-menu-icon-transparent/hamburger-menu-icon-transparent-0.jpg"
          alt="Menu icon"
        />
        <span id="youtube" className="widen"></span>{" "}
      </NavLink>
      <NavLink className="allNavs" id="home" to={"/"}>
        <img
        className="icon-images"
          height="80px"
          width="80px"
          src="https://teen.bsbwlibrary.org/wp-content/uploads/2016/06/white-home-icon-transparent-homeicon.png"
          alt="Home icon"
        />
        <span className="widen">Home</span>
      </NavLink>
      <NavLink className="allNavs" id="home" to={"/About"}>
        <img
        className="icon-images"
          height="80px"
          width="80px"
          src="https://icon-library.com/images/information-icon-white/information-icon-white-4.jpg"
          alt="Information icon"
        />{" "}
        <span className="widen">About</span>{" "}
      </NavLink>
    </nav>
  );
};

export default NavBar;
