export default function InfoCard({especie,genero,estado,origen,setMostrar}){
    return(
        <div className="d-flex p-5 flex-column align-items-center info-seccion">
            <button onClick={()=> setMostrar(false)} className="btn btn-active d-flex align-self-end m-2 btn-x-md">X</button>
            <ul class="list-group">
                <li className="list-group-item p-3 d-flex flex-column">
                    <h4>Character Status</h4>
                    <p>{estado}</p>
                </li>
                <li className="list-group-item p-3 d-flex flex-column">
                    <h4>Species</h4>
                    <p>{especie}</p>
                </li>
                <li className="list-group-item p-3 d-flex flex-column">
                    <h4>Origin</h4>
                    <p>{origen}</p>
                </li>
                <li className="list-group-item p-3 d-flex flex-column">
                    <h4>Gender</h4>
                    <p>{genero}</p>
                </li>
            </ul>
        </div>
    )
}