import { NavLink } from "react-router-dom";

const NavLinks = () => {
    return ( 
        <>
            <NavLink activeClassName="active" className="nav_links__text" to="/" href="/"><span>00</span>HOME</NavLink>
            <NavLink activeClassName="active" className="nav_links__text" to="/destination" href="/destination"><span>01</span>DESTINATION</NavLink>
            <NavLink activeClassName="active" className="nav_links__text" to="/crew" href="/crew"><span>02</span>CREW</NavLink>
            <NavLink activeClassName="active" className="nav_links__text" to="/technology" href="/technology"><span>03</span>TECHNOLOGY</NavLink>
        </>
     );
}
 
export default NavLinks;