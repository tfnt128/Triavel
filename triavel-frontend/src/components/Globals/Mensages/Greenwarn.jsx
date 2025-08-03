function Greenwarn({ClassName, Msg}){
    return(<>
        <div className={`rounded-[20px] lg:rounded-[50px] animate-fade-down bg-green-500/75 border-green-800 text-center border-5 lg:w-[16%] w-[50%] h-[15%] lg:h-[15%] font-inter pt-2 lg:pt-4 lg:text-[300%] ${ClassName}`}>
            {Msg}
        </div>
    
    </>)
}

export default Greenwarn;