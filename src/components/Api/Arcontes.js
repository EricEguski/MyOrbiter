import { useEffect, useState } from "react";
import './../../assets/css/arcontes.css';


const Arcontes = () => {
    const [arcontes, setArconte] = useState([]);

    // La URL de la api
    const url = "https://api.warframestat.us/pc/archonHunt?language=es";

    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        console.log(Object.entries(responseJSON))
        setArconte(responseJSON)
    }
    
    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <div className="item1 redondito sombra fondo">
            
                { !arcontes ? 'Cargando...' :
                    <div className="d-flex h-100 align-items-center blur redondito blanco">
                        Cacería de Arcontes
                        <p>Arconte enemigo: {arcontes['boss']}</p>
                        <p>Tiempo restante: {arcontes['eta']}</p>
                    </div>
                }
    
        </div>
    )

}

export default Arcontes;