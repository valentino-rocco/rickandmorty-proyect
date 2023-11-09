import{BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "../home/Home";
import Characters from "../Characters/Characters";
import Contact from "../Contact/Contact";


export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Characters" element={<Characters/>}/>
                <Route path="/Contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}