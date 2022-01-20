import NavLinks from "./NavLinks";
import NavMobile from "./NavMobile";
import NavWeb from "./NavWeb";

const Navigation = () => {
    return ( 
        <section className="navbar">
            <div className="navbar_logo">
                
            </div>
            <div className="navbar_links">
                <NavWeb />
                <NavMobile />
                <NavLinks />
            </div>
        </section>
     );
}
 
export default Navigation;