import Nav from "../Components/Nav/nav"
import "./Contact.css";

export default function Contact(){
    return(
    <div>
        <Nav/>
        <main className="container-fluid">
        <div className="cajaDeContacto d-flex flex-column justify-content-center align-items-center m-auto mt-5 w-75 h-75 ">
            <h2 className="py-5">Contact</h2>
            <h3>Leave us your information so we can contact you</h3>
            <form className="row g-3 p-4" action="" method="post">
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email"/>
                </div>
                <div className="col-md-12">
                    <label htmlFor="message" className="form-label" name="message">Message</label>
                    <textarea id="message" name="message" className="form-control p-4"></textarea>
                </div>
                <div className="col-12 p-4">
                    <button type="submit" className="btn btn-primary">Send</button>
                </div>
            </form>
        </div>
        </main>
    </div>
    )
}