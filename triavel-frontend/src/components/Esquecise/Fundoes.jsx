import Montanhas from "./montanhas.png";
import Recblues from "./Recblues.png";
import Recores from "./Recores.png";
import Title from "../Loadingpage/Title.png"

function Fundoes({z}){
    return(
        < div className={`absolute ${z}`}>
            <div className="flex flex-col items-center absolute z-[4]">
                <img src={Title} />
            </div>
        </div>
    )
}

export default Fundoes;