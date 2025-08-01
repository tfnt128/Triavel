import Mulhercamala from "./Mulhercamala.png"
import Mulhercamalasm from "./Mulhercamalasm.png"

function Secinfodois({id, ClassName}){
    return(
    <>
            <div id={id} className={`bg-gradient-to-t  to-orange-600 to-[60%]  from-blue-950 from-[20%] lg:bg-gradient-to-l lg:to-orange-600 lg:to-[50%] lg:from-[10%] ${ClassName}`}>
                <img src={Mulhercamalasm} className=" w-full h-full mix-blend-multiply absolute z-[1] lg:hidden"/>
                <img src={Mulhercamala} className=" w-full h-full mix-blend-multiply absolute z-[1] lg:flex hidden"/>

                <h1 className=" animate-fade-right absolute z-[2] lg:mt-200 mt-30  text-white font-inter ml-6 lg:ml-20 text-[150%] lg:text-[900%]">Economize com TrIAvel.</h1>

                <p className="w-[60%] lg:w-[35%] absolute z-[2] text-[14px] lg:text-[60px]  text-white font-inter ml-6 lg:ml-20 mt-40 lg:mt-270">
                    Além de tudo isso, nós também nos preocupamos com suas economias. Junto da nossa IA, você terá as melhores opções financeiras para suas viagens, deixando tudo da forma mais leve para você.                
                </p>

                <h1 className="absolute z-[2] lg:mt-500 mt-130 text-white font-inter ml-25 text-[150%] lg:ml-[65%] lg:text-[900%]">Faça tudo do </h1>
                <h1 className="absolute z-[2] mt-140 lg:mt-540 secundary-color font-inter ml-50 text-[190%] lg:ml-[65%] lg:text-[1000%]">seu jeito</h1>
                <p className="w-[70%] lg:w-[35%] absolute z-[2] lg:mt-600 lg:text-[60px] text-[14px]   text-white font-inter ml-25 lg:ml-[65%] mt-155">
                    O TrIAvel, além de te ajudar na organização, também permite com que você personalize suas viagens de acordo com seu gosto. Observe, após o login, o espaço para sua lista de viagens e faça um teste clicando no ícone do lápis para editar sua viagem.               
                </p>
        
            </div>
    </>)
}

export default Secinfodois;