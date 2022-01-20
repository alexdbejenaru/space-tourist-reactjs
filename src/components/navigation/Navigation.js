import NavLinks from "./NavLinks";
// import NavMobile from "./NavMobile";
// import NavWeb from "./NavWeb";
import logo from '../../assets/shared/logo.svg'

const Navigation = () => {
    return ( 
        // Navbar Component

        <section className="navbar">
            {/* Logo */}
            <div className="navbar_logo">
                <img src={ logo } alt="SpaceTourist" />
            </div>

            {/* Dash */}
            <div className="navbar_dash"></div>

            {/* Links */}
            <div className="navbar_link-list">
                <div className="navbar_link-list__bg"></div>
                <div className="navbar_link-list__links">
                    {/* <NavWeb /> */}
                    {/* <NavMobile /> */}
                    <NavLinks />
                </div>
            </div>
        </section>
     );
}
 
export default Navigation;