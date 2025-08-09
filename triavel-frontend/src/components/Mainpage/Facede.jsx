function Facede({ClassName, Titleone, Titletwo}){
    return(<>
        <div className={`bg-terciary h-45 lg:h-120 w-screen lg:w-full flex lg:flex-row flex-col items-center ${ClassName}`}>
            <div className="bg-primary w-[8%] h-full lg:flex hidden">
                
            </div>
            <div className="bg-listertwo w-[8%] h-full lg:flex hidden">
                
            </div>
            <div className="bg-listerthree w-[8%] h-full lg:flex hidden">
                
            </div>
            <div className="lg:flex lg:flex-col lg:items-center ml-[20%] mr-[20%]">
                <h1 className="font-inter-bold-i text-white text-[150%] lg:text-[500%] pt-10">{Titleone}</h1>
                <h1 className="font-inter-bold-i text-white text-[200%] lg:text-[700%] lg:pl-70 pl-10 secundary-color pt-0">{Titletwo}</h1>
            </div>
            
            <div className="bg-listerthree w-[8%] h-full lg:flex hidden">
                
            </div>
            <div className="bg-listertwo w-[8%] h-full lg:flex hidden">
                
            </div>
            <div className="bg-primary lg:flex hidden w-[8%] h-full ">
                
            </div>
        </div>
    </>)
}

export default Facede

