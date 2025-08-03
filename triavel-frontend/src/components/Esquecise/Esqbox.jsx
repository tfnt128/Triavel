import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Esqbox({firstTitle, 
    secTitle, 
    infoText, 
    butText, 
    placeText, 
    transition, 
    boxnumber, 
    setBoxnumber, 
    extraInput, 
    timer, 
    noInput, 
    extraHolder,
    greenW,
    setGreenW,
    redW,
    setRedW
    }){
    
    const navigate = useNavigate();
    const [numero, setNumero] = useState(60);
    const [countRedirect, setCountRedirect] = useState(5);
    const [countW, setCountW] = useState(5);

    const [senha, setSenha] = useState("");
    const [senhaConf, setSenhaConf] = useState("");
    
    function changeBox(boxnumber){
        if(boxnumber==0){
            setBoxnumber(1);
        }
        if(boxnumber ==1){
            setBoxnumber(2);
        }
        if(boxnumber==3){
            setBoxnumber(0);
        }
        if(boxnumber==2){
            if(senha!=senhaConf){
                setRedW(true);
                setCountW(5);
            }
            else{
                setGreenW(true);
                setRedW(false);
            }


        }

    }   


    useEffect(() => {
        if(boxnumber != 1 ) return;
        if (numero <= 0) {
            setBoxnumber(3);
            return; 
        }

        const intervalo = setInterval(() => {
            setNumero((prevNumero) => prevNumero - 1);
        }, 1000);

        return () => clearInterval(intervalo); 
    }, [numero, boxnumber])

    useEffect(()=>{
        if(greenW==true){
            if(countRedirect <=0 ){
                navigate("/");
                return;
            }
                const interv = setInterval(()=>{
                    setCountRedirect((prevCount) => prevCount - 1);
                }, 1000)

                return () => clearInterval(interv);
        }
    }, [countRedirect, greenW])
    


    useEffect(()=>{
        if(redW==true){
            if(countW<=0){
                setRedW(false);
                return;
            }
            
            const intervW = setInterval(()=>{
                setCountW((prevCountW)=>prevCountW - 1);
            }, 1000)

            return ()=>clearInterval(intervW);
        }
    }, [countW, redW])

    return(<>
        <div className={`w-[85%] lg:w-[65%] lg:h-[70%] h-[55%] bg-primary absolute z-[10] lg:mt-[10%] mt-[35%] flex flex-col items-center ml-[13%] lg:ml-[18%] lg:rounded-[80px] rounded-[30px] ${transition}`}>
            <h1 className="font-inter-bold-i text-white text-[200%] lg:text-[800%] mr-15 mt-3 lg:mt-30">{firstTitle}</h1>
            <h1 className="font-inter-bold-i secundary-color text-[200%] lg:text-[800%] ml-10 lg:ml-100">{secTitle}</h1>
            <p className="font-inter text-black text-center max-w-70 lg:max-w-410 text-[80%] lg:text-[400%] mt-5">
                {infoText}
            </p>
            {
                noInput == false && <input type="text" value={senha} onChange={(e)=>{setSenha(e.target.value)}} className="w-75 pl-4 ml-[2%] mr-[2%] lg:w-[70%] h-15 lg:h-50 outline-none transition-transform ease-in-out hover:scale-105 bg-inputs mt-15 rounded-[10px] placeholder:pl-4 lg:rounded-[40px] text-[20px] lg:text-[70px] placeholder:text-[20px] lg:placeholder:text-[70px] placeholder:font-inter " placeholder={placeText}/>
            }
            {
                extraInput == true && <input type="text" value={senhaConf} onChange={(e)=>{setSenhaConf(e.target.value)}} className="w-75 ml-[2%] mr-[2%] lg:w-[70%] h-15 lg:h-50 outline-none transition-transform ease-in-out hover:scale-105 bg-inputs mt-5 lg:mt-10 pl-4 rounded-[10px] placeholder:pl-4 lg:rounded-[40px] text-[20px] lg:text-[70px] placeholder: placeholder:text-[20px] lg:placeholder:text-[70px] placeholder:font-inter " placeholder={extraHolder}/>
            }
            {
                timer == true &&
                <h2 className="text-[200%] lg:text-[700%] mt-[2%] font-inter-bold-i " >{numero}</h2>
            }
            
            <button onClick={()=>changeBox(boxnumber)} className="bg-secundary pb-2 font-itim w-50 lg:w-[25%] h-20 lg:h-[15%] mt-5 lg:mt-[3%] rounded-[20px] lg:rounded-[50px] text-[170%] lg:text-[400%] mb-[2%]">{butText}</button>

        </div>

    </>)
}

export default Esqbox;