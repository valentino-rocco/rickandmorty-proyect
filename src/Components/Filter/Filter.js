import "./Filter.css"

export default function Filter({nombrefiltro, idfiltro, handlerChange}){
    return(
    <div className="form-check form-switch px-5 py-2">
        <input className="form-check-input" type="checkbox" role="switch" id={idfiltro} onChange={handlerChange}/>
        <label className="form-check-label" htmlFor={idfiltro}>{nombrefiltro}</label>
    </div>

    )
}