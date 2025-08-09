import Lottie from "lottie-react";
import Planeanimation from "../Planeanimation.json";
import Title from "../../../components/Loadingpage/Title.png"
import { useEffect, useState } from "react";

function Loadenter(){

    const frases = ["Preparando suas viagens...", 
        "Configurando nossa IA...", 
        "Fazendo as malas...", 
        "Procurando hotéis...", 
        "Carregando seu histórico..."];
    const [index, setIndex] = useState(0);
    const message = frases[index];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % frases.length);
        }, 6000);

        return () => clearInterval(interval); 
    }, []);

    return(

        <>
                
                <div className="w-screen h-screen flex flex-col  items-center justify-center gap-40 bg-terciary">
                    <img src={Title} className="w-[25%] h-[3%] lg:w-[5%]"/>
                    <div className="w-[300px] h-[300px] lg:w-[20%] lg:h-[20%]">
                        <Lottie animationData={Planeanimation} />
                    </div>
                    <p className="font-itim secundary-color lg:text-[500%] lg:mt-100">{message}</p>
                 </div>
        </>
    )
}

export default Loadenter;