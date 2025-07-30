import Recresgblu from "../../components/Register/Recresgblu.png"
import Recresgor from "../../components/Register/Recresgor.png"
import Backpais from "../../components/Register/Backpais.png"
import Cadbox from "../../components/Register/Cadbox"
import Title from "../../components/Loadingpage/Title.png"
import Backbutton from "../../components/Register/Backbutton"
import Recdeskblu from "../../components/Register/Recdeskblu.png"
import Recdeskor from "../../components/Register/Recdeskor.png"
import Trideskor from "../../components/Register/Trideskor.png"
import Footer from "../../components/Login/Footer"

function Register(){
    return(
        <>
            <Backbutton ClassName="absolute lg:bg-black z-[10]"/>
            <div className="flex flex-col items-center">

                
                <img src={Title} className="absolute animate-fade-up z-[4] mt-5 lg:w-[60%]  pl-[25%] pr-[20%]"/>
                <img src={Backpais} className="absolute z-[1] h-full w-full animate-fade"/>
                <img src={Recresgblu} className="absolute z-[3] h-full  w-full animate-fade-up lg:hidden right-0 bottom-0"/>
                <img src={Recdeskblu} className="absolute z-[3] h-[40%] w-[40%] animate-fade-up lg:flex hidden left-0 top-0"/>
                <img src={Recdeskor} className="hidden lg:flex absolute z-[2] h-[100%] w-[60%] right-0 bottom-0"/>
                <img src={Trideskor} className="hidden lg:flex absolute z-[2] h-[45%] w-[45%] left-0 top-0"/>

                <img src={Recresgor} className="absolute z-[3] h-full w-full lg:h-[95%] right-0 bottom-0 lg:w-[55%] animate-fade-up"/>
                <Cadbox ClassName="absolute z-[10] animate-fade-up "/>
            </div>
            <div className="lg:relative absolute w-full h-[30%] ">
                <Footer ClassName="lg:mt-[2500px] h-[100%]   mt-[900px] bg-gradient-to-r from-blue-950 to-orange-600"/>
            </div>
        </>
    )
}

export default Register;