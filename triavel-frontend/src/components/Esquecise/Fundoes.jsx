import Montanhas from "./montanhas.png";
import Recblues from "./Recblues.png";
import Recores from "./Recores.png";
import Title from "../Loadingpage/Title.png"

function Fundoes({z}){
    return(
        < div className={` ${z}`}>
                <img src={Title} className="w-[40%] ml-[35%] mt-[15%] absolute z-[4]" />
                <img src={Recblues} className="absolute  z-[3]"/>
                <img src={Recores} className="absolute ml-8 z-[2]"/>
                <img src={Montanhas} className="absolute ml-8 z-[1]"/>
        </div>
    )
}

export default Fundoes;