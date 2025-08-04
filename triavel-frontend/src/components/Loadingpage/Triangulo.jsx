import "../../App.css"
import Triangulor from "./Triangulor.png"
import Triangulora from "./Triangulora.png"




function Triangulo(){

    return(
        <>
                <div className="absolute top-0 left-0 w-42 h-42 lg:w-300 lg:h-300">
                    <img src={Triangulor} className="absolute animate-fade-down z-20 w-[170px] h-[170px] lg:w-[2300px] lg:h-[900px]" />
                    <img src={Triangulora} className="absolute animate-fade-down z-10 w-[220px] h-[240px] lg:w-[2800px] lg:h-[1150px]" />
                </div>

                <div className="absolute bottom-0 right-0 w-42 h-42 lg:w-300 lg:h-300 rotate-180 ">
                    <img src={Triangulor} className="absolute animate-fade-down z-20 w-[170px] h-[170px] lg:w-[2300px] lg:h-[900px]" />
                    <img src={Triangulora} className="absolute animate-fade-down z-10 w-[220px] h-[240px] lg:w-[2800px] lg:h-[1150px]" />
                </div>


        </>
    )
}

export default Triangulo;