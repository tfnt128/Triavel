import Towerpiza from "./Towerpiza.png"
import Title from "../../Loadingpage/Title.png"
import Doublepiza from "./Doublepiza.png"


function Secinfoum({id, ClassName}){
    return(
        <>

            <div id={id} className={`bg-gradient-to-t  from-orange-600 from-[50%]  to-blue-950 to-[60%] lg:bg-gradient-to-l lg:from-orange-600 lg:from-[10%] lg:to-[50%] ${ClassName}`}>
                <img src={Towerpiza} className=" w-full h-full mix-blend-multiply absolute z-[1] lg:hidden"/>
                <img src={Doublepiza} className=" w-full h-full mix-blend-multiply absolute z-[1] lg:flex hidden"/>

                <h1 className=" animate-fade-right absolute z-[2] lg:mt-200 mt-35  text-white font-inter ml-6 text-[150%] lg:text-[900%]">Você conhece o </h1>
                <div  className={`animate-fade-right absolute z-[3] flex flex-row `}>
                    <img src={Title} className="mt-43 relatve z-[3] lg:mt-250 ml-20 lg:ml-70  w-[50%] lg:w-[1300px]"/>
                    <h1 className="absolute z-[2] mt-45 lg:mt-300 text-white font-inter ml-57 lg:ml-380 text-[150%] lg:text-[900%]">?</h1>
                </div>
                <p className="w-[60%] lg:w-[40%] absolute z-[2] text-[14px] lg:text-[60px]  text-white font-inter ml-6 lg:ml-20 mt-55 lg:mt-370">
                    O TrIAvel é um site que te ajuda a organizar suas viagens e decidir seu próximo destino com o auxilio de uma inteligência artificial. Com uma interface intuitiva, gerenciar suas trilhas, orçamentos e preferências nunca foi tão fácil!
                </p>

                <h1 className="absolute z-[2] lg:mt-500 mt-130 text-white font-inter ml-20 text-[150%] lg:ml-[65%] lg:h-full lg:text-[900%]">Conheça seu próximo</h1>
                <h1 className="absolute z-[5] mt-140 lg:mt-540 secundary-color font-inter ml-50 text-[190%] lg:ml-[65%] lg:text-[1000%]">destino...</h1>
                <p className="w-[70%] lg:w-[35%] absolute z-[2] lg:mt-600 lg:text-[60px] text-[14px]   text-white font-inter ml-20 lg:ml-[65%] mt-155">
                    Com a ajuda da nossa inteligência artificial, você pode decidir sua próxima viagem com base apenas em fotos, nomes e em poucas palavras. Logo no painel de inicio, clique no ícone à direita e experimente!
                </p>

            </div>


        </>
    )
}

export default Secinfoum;