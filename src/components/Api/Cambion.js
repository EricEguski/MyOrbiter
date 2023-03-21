import { useEffect, useState } from "react";
import './../../assets/css/arcontes.css';


const Cambion = () => {
    const [cambion, setCambion] = useState([]);

    const url = "https://api.warframestat.us/pc/cambionCycle?language=es";

    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        console.log(Object.entries(responseJSON))
        setCambion(responseJSON)
    }
    
    useEffect(() => {
        fetchApi()
    }, [])
    return (

        <div className="">
            {console.log(cambion)}
            { !cambion ? 'Cargando...' :
                <div className="d-flex align-items-center blur blanco">
                    Deriva Cambion
                    <p>Activo: {cambion['active']}</p>
                    <p>Tiempo restante: {cambion['timeLeft']}</p>
                </div>
            }
        </div>


    )
}
export default Cambion;

