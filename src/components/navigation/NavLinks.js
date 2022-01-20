import { Link } from "react-router-dom";

const NavLinks = () => {
    return ( 
        <>
            <Link className="nav_links__text" to="/" href="/"><span>00</span>HOME</Link>
            <Link className="nav_links__text" to="/destination" href="/destination"><span>01</span>DESTINATION</Link>
            <Link className="nav_links__text" to="/crew" href="/crew"><span>02</span>CREW</Link>
            <Link className="nav_links__text" to="/technology" href="/technology"><span>03</span>TECHNOLOGY</Link>
        </>
     );
}
 
export default NavLinks;