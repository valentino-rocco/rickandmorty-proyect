import "./nav.css";
import {Link} from "react-router-dom";

function Nav(){
    return(
    <header>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid justify-content-between align-items-center">
                <Link to="/"><h1 className="h1nav">Rick & Morty</h1></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        <li className="nav-item m-2">
                            <Link to="/Characters" className="btn">Character</Link>
                        </li>
                        <li className="nav-item m-2">
                            <Link to="/Contact" className="btn">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    )
}
export default Nav;