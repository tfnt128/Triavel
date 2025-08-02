function Warn({ClassName, Msg}){
    return(<>
        <div className={`rounded-[20px] lg:rounded-[50px] animate-shake bg-red-500/75 border-red-800 text-center border-5 lg:w-[16%] w-[50%] h-[10%] lg:h-[15%] font-inter pt-2 lg:text-[200%] ${ClassName}`}>
            {Msg}
        </div>
    
    </>)
}

export default Warn;