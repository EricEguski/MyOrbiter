import { useEffect, useState } from "react";
import './../../assets/css/arcontes.css';


const Cetus = () => {
    const [cetus, setCetus] = useState([]);

    const url = "https://api.warframestat.us/pc/cetusCycle?language=es";

    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        console.log(Object.entries(responseJSON))
        setCetus(responseJSON)
    }
    
    useEffect(() => {
        fetchApi()
    }, [])
    return (

        <div className="">
            {console.log(cetus)}
            { !cetus ? 'Cargando...' :
                <div className="d-flex align-items-center blur blanco">
                    Cetus
                    <p>Activo: {cetus['state']}</p>
                    <p>Tiempo restante: {cetus['timeLeft']}</p>
                </div>
            }
        </div>


    )
}
export default Cetus;

