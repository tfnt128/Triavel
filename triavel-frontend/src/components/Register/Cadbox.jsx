import { FcGoogle } from "react-icons/fc"
import { useState } from "react";


function Cadbox({ClassName}){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaCriada, setSenhaCriada] = useState('');

    function Valid(){
        if (senha === '' || nome === '' || email === '' || senhaCriada === ''){
            return alert('Campos nao devem ficar vazios');
        }

        if( senha !== senhaCriada){
            return alert('Senhas não coincidem');
        }

    }

    return(
        <>
            <div className="flex flex-col items-center ">
                <div className={"w-[75%] h-[70%] bg-primary mt-35 lg:mt-100 lg:rounded-[80px] rounded-[15px] flex flex-col lg:block items-center lg:p-30 " + ClassName}>
                    <div className="lg:flex lg:flex-row ">
                        <div className="lg:w-[100%] flex flex-col items-center ">
                            <h1 className="font-itim text-center lg:text-left lg:text-[1000%] mt-5 secundary-color lg:ml-2 text-[250%]">Cadastro</h1>
                            <input type="text" value={nome} onChange={(e)=>{setNome(e.target.value)}} className=" outline-none transition-transform ease-in-out hover:scale-105 lg:w-[85%] w-[85%] lg:h-[20%] h-[7%] lg:p-2 p-3 lg:rounded-[60px] rounded-[10px] lg:mt-[2%] mt-8 bg-gray-300 lg:text-[70px] text-[15px] lg:placeholder:text-[70px] placeholder:text-[15px] placeholder:font-inter placeholder:text-sencundary-color" placeholder="Informe seu nome"/>
                            <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} className=" outline-none transition-transform ease-in-out hover:scale-105 lg:w-[85%] w-[85%] lg:h-[20%] h-[7%] lg:p-2 p-3 lg:rounded-[60px] rounded-[10px] lg:mt-[2%] mt-8 bg-gray-300 lg:text-[70px] text-[15px] lg:placeholder:text-[70px] placeholder:text-[15px] placeholder:font-inter placeholder:text-sencundary-color" placeholder="Informe seu e-mail"/>
                            <input type="password" value={senha} onChange={(e)=>{setSenha(e.target.value)}} className=" outline-none transition-transform ease-in-out hover:scale-105 lg:w-[85%] w-[85%] lg:h-[20%] h-[7%] lg:p-2 p-3 lg:rounded-[60px] rounded-[10px] lg:mt-[2%] mt-8 bg-gray-300 lg:text-[70px] text-[15px] lg:placeholder:text-[70px] placeholder:text-[15px] placeholder:font-inter placeholder:text-sencundary-color" placeholder="Crie uma senha"/>
                            <input type="password" value={senhaCriada} onChange={(e)=>{setSenhaCriada(e.target.value)}} className=" outline-none transition-transform ease-in-out hover:scale-105 lg:w-[85%] w-[85%] lg:h-[20%] h-[7%] lg:p-2 p-3 lg:rounded-[60px] rounded-[10px] lg:mt-[2%] mt-8 bg-gray-300 lg:text-[70px] text-[15px] lg:placeholder:text-[70px] placeholder:text-[15px] placeholder:font-inter placeholder:text-sencundary-color" placeholder="Confirme a senha criada"/>
                            <button onClick={() => {Valid()}} className="lg:h-[35%] h-[10%] lg:w-[60%] w-[70%] lg:hidden relative z-[70] font-itim lg:mt-30 mt-5 p-1 lg:rounded-[50px] rounded-[10px] bg-secundary lg:text-[120px] text-[30px] cursor-pointer">Cadastrar</button>
                            <h3 className="lg:mt-30 mt-4 lg:text-[80px] text-[20px] text-gray-600 lg:hidden">____________ ou ____________</h3>
                            <button onClick={()=>{RegistrarGoogle()}} className="lg:hidden flex p-2 items-center justify-center lg:gap-10 gap-3 lg:w-[40%] w-[70%] lg:h-[30%] h-[10%] lg:mt-20 mt-5 relative z-[70] bg-terciary border border-gray-300 lg:rounded-[40px] rounded-[10px] hover:bg-amber-700  transition-colors">
                                <div className="lg:hidden flex">
                                    <FcGoogle size={60}/>
                                </div>
                                <div className="lg:flex hidden">
                                    <FcGoogle size={350}/>
                                </div>
                                <span className="font-inter text-white lg:text-[500%] p-1 text-[100%]">Cadastrar com Google</span>
                            </button>
                        </div>
                        <div className="flex flex-col w-[38%] h-[50%] mt-10 mr-[10%] ml-[0%]">
                            <button onClick={() => {Valid()}} className="h-[30%] w-[100%]  transition-transform ease-in-out hover:scale-105 hidden lg:flex relative z-[70] font-itim mt-100  p-4 pl-50 pt-0 rounded-[50px] bg-secundary text-[120px]  cursor-pointer">Cadastrar</button>
                            <h3 className="mt-20 text-[80px] text-gray-600 lg:flex hidden">____________ ou ____________</h3>
                            <button onClick={()=>{RegistrarGoogle()}} className="hidden lg:flex p-7 items-center justify-center lg:gap-10 gap-3 w-[100%] lg:h-[30%] h-[10%] lg:mt-20 mt-5 relative z-[70] bg-terciary border border-gray-300 lg:rounded-[40px] rounded-[10px] hover:bg-amber-700  transition-colors">
                                <div className="lg:hidden flex">
                                    <FcGoogle size={60}/>
                                </div>
                                <div className="lg:flex hidden">
                                    <FcGoogle size={300}/>
                                </div>
                                <span className="font-inter text-white lg:text-[500%] p-1 text-[100%]">Cadastrar com Google</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Cadbox;