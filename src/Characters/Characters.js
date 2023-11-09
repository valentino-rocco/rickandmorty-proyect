import "./Characters.css"
import Nav from "../Components/Nav/nav";
import Card from "../Components/Card/card";
import Filter from "../Components/Filter/Filter";
import {useState, useEffect} from 'react';

function Characters(){

    let [filtros]=useState([
        {nombre: "Alive",
        filtro:'Character Alive'},
        {nombre:"Dead",
        filtro:'Character Dead'},
        {nombre:"Female",
        filtro:'Female'},
        {nombre:"Male",
        filtro:'Male'}, 
        {nombre:"unknown",
        filtro:'Origin Unknown'}])

    let [personajesOriginales,setPersonajesOriginales]=useState([]);
    let [personajes,setPersonajes]=useState([]); 
    let [filtrosAplicados, setFiltrosAplicados]=useState([]);
    
    let traerPersonajes= async()=>{
        let dato= await fetch("https://rickandmortyapi.com/api/character")
        .then(resp => resp.json())
        .catch(err => console.log("hubo un error: " + err))

        return dato
    };

   
    useEffect(()=>{

         let guardarPersonajes=async()=>{
        let info =await traerPersonajes()
        let listaPersonajes = info.results
        setPersonajes(listaPersonajes)
        setPersonajesOriginales(listaPersonajes)
        
        }

        guardarPersonajes();
    },[]);

    
    let aplicarfiltros=(event)=>{
        let tipoDeFiltro = event.target.id
        
        if(event.target.checked === true){
            setFiltrosAplicados([...filtrosAplicados,tipoDeFiltro]);
            
        }
        else{
            console.log("no aplicar")
            let filtrosRestantes=filtrosAplicados.filter((el)=>el !== tipoDeFiltro);
            setFiltrosAplicados(filtrosRestantes)
            

            setPersonajes(personajesOriginales)
        }
    }

    useEffect(()=>{
        
        filtrosAplicados.forEach((tipoDeFiltro)=>{
            let resultado;
            if(tipoDeFiltro === "Alive" || tipoDeFiltro === "Dead"){
            resultado = personajes.filter((personaje)=> personaje.status === tipoDeFiltro)
            }
            if(tipoDeFiltro === "Male" || tipoDeFiltro === "Female"){
                resultado = personajes.filter((personaje)=> personaje.gender === tipoDeFiltro)
            }
            if(tipoDeFiltro === "unknown"){
                resultado = personajes.filter((personaje)=> personaje.origin.name === tipoDeFiltro)
            }
            setPersonajes(resultado)
        }
    )
    
    },[filtrosAplicados])

    return(
        <div>
            <Nav/>
            <section>
            <h2>filters</h2>
            <form className="d-flex bg-primary">
            {filtros.map((filtros)=>{
                return <Filter key={filtros.nombre} nombrefiltro={filtros.filtro} idfiltro={filtros.nombre} handlerChange={aplicarfiltros}/>
            })}
            </form>
            </section>
            <section className="section-cards">
            
            {personajes.length>0?
                personajes.map((personaje)=>{
                    return <Card key={personaje.id} data={personaje}/>
                }):
                <div className="alert alert-success d-flex gap-3" role="alert">
                    <i className="bi bi-exclamation-triangle-fill"></i>
                    <p >Sorry! There are no characters width all those properties</p>
                </div>
            }
            
            
            </section>
        </div>
    )


        

}
export default Characters;