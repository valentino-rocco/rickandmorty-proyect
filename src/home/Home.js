import "./Home.css";
import {Link} from "react-router-dom";

function Home() {
    return(
    <main className="container d-flex justify-content-center">
        <div className="caja align-items-center justify-content-center m-5 p-5">
            <h1 className="row justify-content-center">Proyect Rick & Morty</h1>
            <h2 className="row text-center p-3">Helcome to Rick & Morty Proyect!</h2>
            <p className="text-center p-2">This proyect was made for practising React and to made a functional website.</p>
            <p className="text-center">In this website you can know information of the characters of this animated series.
                Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion</p>
            <h3 className="row justify-content-center">Lets go!</h3>
            <nav className="row align-items-center">
                <ul className="nav nav-pills justify-content-center p-3">
                    <li className="nav-item"><Link to="/Characters" className="btn bg-success m-2 p-3">Characters</Link></li>
                    <li className="nav-item"><Link to="Contact" className="btn bg-success m-2 p-3">Contact</Link></li>
                </ul>
            </nav>
        </div>
    </main>
    )
}

export default Home;