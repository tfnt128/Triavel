function Esqbox({firstTitle, secTitle, infoText, butText}){
    return(<>
        <div className=" w-[85%] h-[50%] bg-primary absolute z-[10] mt-[35%] flex flex-col items-center ml-[13%] rounded-[30px]">
            <h1 className="font-inter-bold-i text-white text-[200%] mr-15 mt-3">Teste</h1>
            <h1 className="font-inter-bold-i secundary-color text-[200%] ml-10 ">Teste</h1>
            <p className="font-inter text-black text-center max-w-70 text-[80%] mt-5">
                KKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKK   KKKKKKKKK KKKKKKKKKKKKKKK KK K KKKKKKKK
            </p>
            <input type="text" className="w-75 h-15 outline-none transition-transform ease-in-out hover:scale-105 bg-white mt-20 rounded-[10px] text-[20px] "/>
        </div>

    </>)
}

export default Esqbox;