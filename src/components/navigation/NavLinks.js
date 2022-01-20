import { Link } from "react-router-dom";

const NavLinks = () => {
    return ( 
        <>
            <Link to="/" href="/"><span>00</span>HOME</Link>
            <Link to="/destination" href="/destination"><span>01</span>DESTINATION</Link>
            <Link to="/crew" href="/crew"><span>02</span>CREW</Link>
            <Link to="/technology" href="/technology"><span>03</span>TECHNOLOGY</Link>
        </>
     );
}
 
export default NavLinks;