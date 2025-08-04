import { BiSolidLeftArrowSquare } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Backbutton({ClassName}){
    const navigate = useNavigate();
    function Backhome(){
        navigate("/");
    }
    return(
        <button onClick={()=>Backhome()} className={"terciary-color lg:ml-10 lg:mt-10  " + ClassName}>
            <div className="lg:hidden flex">
                < BiSolidLeftArrowSquare size={50}/>
            </div>
            <div className="lg:flex hidden">
                < BiSolidLeftArrowSquare size={120}/>
            </div>
        </button>
    )
}

export default Backbutton;