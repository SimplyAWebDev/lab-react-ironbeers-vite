import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.png"


function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                    
                    <Link to='/'>
                        <img src={homeIcon} alt="Home" style={{ width: "50px"}} className="home" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;
