import "./nav.css";
import {Link} from "react-router-dom";

function Nav(){
    return(
        <nav className="navbar navbar-expand-lg">
            <div>
                <Link to="/"><h1 className="">Rick & Morty</h1></Link>
                <ul className="justify-content-end">
                    <li>
                        <Link to="/Characters" className="btn">Character</Link>
                    </li>
                    <li>
                        <Link to="/Contact" className="btn">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav;