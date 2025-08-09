import { useNavigate } from "react-router-dom";
import Chatpng from "./Chatpng.png"
import Plane from "./Plane.png"
import { useState } from "react";

function Downbar(){
    const navigate = useNavigate();
    const [selPlane, setSelPlane] = useState(true);
    const [selIa, setSelIa] = useState(false);
    function Travelspage(){
        navigate("/entrar")
        setSelPlane(true);
        setSelIa(false);
    }

    function IApages(){
        navigate("/ia")
        setSelPlane(false);
        setSelIa(true);
    }
    return(
        <div className="bg-secundary flex flex-col items-center w-full lg:w-[15%] h-40 lg:h-[100%]">
            <div className="flex flex-row lg:flex-col gap-25  lg:gap-0 pt-5 lg:pt-0 ">
                <div onClick={Travelspage} className={`lg:${selPlane && "bg-amber-700"} lg:flex lg:flex-col lg:items-center lg:w-[100%] lg:pt-20 lg:pb-20 `}>
                    <img src={Plane} className="lg:w-[160px]"/>
                </div>
                <div onClick={IApages} className={`lg:${selIa && "bg-amber-700"} lg:flex lg:flex-col lg:items-center lg:w-[100%] lg:pt-20 lg:pb-20 `}>
                    <img src={Chatpng} className="lg:w-[160px]"/>
                </div>
            </div>
        </div>
    )
}

export default Downbar;