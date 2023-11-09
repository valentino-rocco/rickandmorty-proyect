import './card.css';
import { useState } from 'react';
import InfoCard from '../InfoCard/InfoCard';

function Card ({data}){

    const [mostrar,setMostrar] = useState(false);

    return(
    <div className="card d-flex flex-row gap-5">
        <div>   
            <img src={data.image} className="card-img-top" alt={data.name}/>
            <h5 className="card-title">{data.name}</h5>
            <button onClick={()=> setMostrar(true)} className={mostrar? "btn d-none":"btn d-block"}>Know More...</button>
        </div>    
        {mostrar === true? <InfoCard especie={data.species} genero={data.gender} estado={data.status} origen={data.origin.name} setMostrar={setMostrar}/> : ""}
    </div>
    )
}
export default Card;