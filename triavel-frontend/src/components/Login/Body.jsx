import aviaodecolano from "./aviaodecolano.png"
import { FcGoogle } from 'react-icons/fc';
import aviaodecolanobig from "./aviaodecolanobig.png"

function Body(){
    return(
        <div className="relative w-full h-screen flex flex-col items-center">
            <img src={aviaodecolanobig} className=" hidden md:block lg:block absolute z-5 mix-blend-multiply mt-500 w-full "/>
            <img src={aviaodecolano} className="absolute z-5 mix-blend-multiply mt-70 w-full md:hidden"/>
            <div className="lg:hidden absolute flex flex-col items-center ml-0.7 mt-105 w-[337px] h-[467px] rounded-[30px] z-20 bg-terciary ">
                <h1 className="font-itim secundary-color text-[45px] mt-3">Login</h1>
                <input type="text" className=" outline-none w-[90%] h-[50px] p-2 rounded-[10px] mt-10 bg-gray-300 placeholder:font-inter placeholder:text-sencundary-color" placeholder="Insira seu e-mail"/>
                <input type="password" className=" outline-none w-[90%] h-[50px] p-2 rounded-[10px] mt-4 bg-gray-300 placeholder:font-inter placeholder:text-sencundary-color" placeholder="Insira sua senha"/>
                <button className="h-[60px] w-[210px] font-itim mt-3 rounded-[10px] bg-secundary text-[32px]">Entrar</button>
                <h3 className="mt-2">____________ ou ____________</h3>
                <button className="flex items-center justify-center gap-3 w-[50%] h-[30px] mt-4 bg-primary border border-gray-300 rounded-[10px] hover:bg-amber-700  transition-colors">
                    <FcGoogle size={20} />
                    <span className="font-inter text-gray-700 text-[10px]">Logar com Google</span>
                </button>
                <h3 className="font-inter text-[14px] mt-2">Não tem conta? <a className="primary-color">Registre-se!</a></h3>
                <a className="secundary-color text-[15px] mt-5">Esqueceu a senha?</a>
            </div>
        </div>
    )
}

export default Body;