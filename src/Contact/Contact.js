import Nav from "../Components/Nav/nav"

export default function Contact(){
    return(
    <div>
        <Nav/>
        <div className="w-100 vh-100 d-flex align-items-center justify-content-center">
            <h2>Contact</h2>
            <h3>Leave us your information so we can contact you</h3>
            <form className="row g-3" action="" method="post">
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
                    <textarea id="message" name="message" className="w-100"></textarea>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    </div>
    )
}