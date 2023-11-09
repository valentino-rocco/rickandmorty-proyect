export default function InfoCard({especie,genero,estado,origen,setMostrar}){
    return(
        <div className="info-seccion">
            <button onClick={()=> setMostrar(false)} className="btn">X</button>
            <ul class="list-group">
                <li className="list-group-item">
                    <h4>Character Status</h4>
                    <p>{estado}</p>
                </li>
                <li className="list-group-item">
                    <h4>Species</h4>
                    <p>{especie}</p>
                </li>
                <li className="list-group-item">
                    <h4>Origin</h4>
                    <p>{origen}</p>
                </li>
                <li className="list-group-item">
                    <h4>Gender</h4>
                    <p>{genero}</p>
                </li>
            </ul>
        </div>
    )
}