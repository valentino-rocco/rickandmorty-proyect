import "./InfoCard.css"

export default function InfoCard({especie,genero,estado,origen,setMostrar}){
    return(
        <div className="d-flex p-5 flex-column align-items-center info-seccion">
            <button onClick={()=> setMostrar(false)} className="btn btn-active d-flex align-self-end m-2 btn-x-md">X</button>
            <ul class="list-group">
                <li className="info-li p-3 d-flex flex-column">
                    <h4 className="rellenito">Character Status</h4>
                    <p>{estado}</p>
                </li>
                <li className="info-li p-3 d-flex flex-column">
                    <h4>Species</h4>
                    <p className="rellenito">{especie}</p>
                </li>
                <li className="info-li p-3 d-flex flex-column">
                    <h4>Origin</h4>
                    <p className="rellenito">{origen}</p>
                </li>
                <li className="info-li p-3 d-flex flex-column">
                    <h4>Gender</h4>
                    <p className="rellenito">{genero}</p>
                </li>
            </ul>
        </div>
    )
}