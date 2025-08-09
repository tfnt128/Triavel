import Lottie from "lottie-react";
import Planeanimation from "./Planeanimation.json";
import Loadenter from "./Loadenter/Loadenter";
import { useEffect, useState } from "react";
import Facede from "../../components/Mainpage/Facede";
import Subfacede from "../../components/Mainpage/Subfacede";
import Downbar from "../../components/Mainpage/Downbar";

function Entrar(){
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setInterval(()=>{setLoading(false)},500000);

    }, []);

    if(loading){
        return <Loadenter/>
    }
    return(

        <>
            <div className="fixed top-0 w-full h-50 lg:h-70">
                <Facede ClassName="absolute z-5" Titleone="Sua lista de " Titletwo="Viagens"/>
                <Subfacede ClassName="absolute z-4"/>
            </div>

            <div className="fixed bottom-0 w-full h-35 lg:h-[79.5%]">
                <Downbar/>
            </div>
        </>
    )
}

export default Entrar;