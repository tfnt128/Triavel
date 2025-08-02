import Montanhas from "./montanhas.png";
import Recblues from "./Recblues.png";
import Recores from "./Recores.png";
import Title from "../Loadingpage/Title.png"
import Footer from "../Login/Footer";
import Recblubig from "./Recblubig.png";
import Recorbig from "./Recorbig.png";
import Montanhasbig from "./Montanhasbig.png"

function Fundoes({z}){
    return(
        <>
            < div className={` ${z}`}>
                    <img src={Title} className="w-[25%] lg:w-[10%] lg:ml-[47%] ml-[45%]  lg:mt-[5%] mt-[15%] absolute z-[4]" />
                    <img src={Recblues} className="absolute  z-[3] h-[100%] lg:w-[24%]"/>
                    <img src={Recores} className="absolute ml-8 z-[2] h-[100%] lg:w-[24%]"/>
                    <img src={Montanhas} className="absolute ml-8 z-[1] lg:hidden flex"/>
                    <img src={Recblubig} className="absolute  z-[3] lg:w-[30%] hidden h-[100%] lg:flex bottom-0 right-0"/>
                    <img src={Recorbig} className="absolute ml-8 z-[2] lg:w-[32%] hidden h-[100%] lg:flex bottom-0 right-0"/>
                    <img src={Montanhasbig} className="absolute ml-8 z-[1] w-[100%] h-[100%] hidden lg:flex bottom-0 right-0"/>
                    <Footer ClassName="w-[107.7%] lg:w-full absolute lg:h-[20%] z-[3] mt-[800px] lg:mt-[2500px] "/>

            </div>
            
        </>
    )
}

export default Fundoes;