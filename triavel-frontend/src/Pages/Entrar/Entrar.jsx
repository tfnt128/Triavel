import Lottie from "lottie-react";
import Planeanimation from "./Planeanimation.json";
import Loadenter from "./Loadenter/Loadenter";
import { useEffect, useState } from "react";

function Entrar(){
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setInterval(()=>{setLoading(false)},5000);

    }, []);
    return(

        <>

            {loading == true && <Loadenter/>}
        </>
    )
}

export default Entrar;