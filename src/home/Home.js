import "./Home.css";
import {Link} from "react-router-dom";

function Home() {
    return(
    <main className="container d-flex justify-content-center">
        <div className="w-50 vh-100 align-items-center justify-content-center w-75 m-5 p-5">
            <h1 className="row justify-content-center">Proyect Rick & Morty</h1>
            <h2 className="row justify-content-center">Helcome to Rick & Morty Proyect!</h2>
            <p className="text-center">This proyect was made for practising React and to made a functional website.</p>
            <p className="text-center">In this website you can know information of the characters of this animated series.
                Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion</p>
            <h3 className="row justify-content-center">Lets go!</h3>
            <div className="align-items-center justify-content-center">
                <ul className="">
                    <li><Link to="/Characters" className="btn bg-success">Characters</Link></li>
                    <li><Link to="Contact" className="btn bg-success">Contact</Link></li>
                </ul>
            </div>
        </div>
    </main>
    )
}

export default Home;