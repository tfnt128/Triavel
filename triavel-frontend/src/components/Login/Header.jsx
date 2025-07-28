import Pessoaviajando from "./pessoaviajando.png"
import Headerangle from "./Headerangle.png"
import Headeranglea from "./Headeranglea.png"
import Title from "../Loadingpage/Title.png"
import { FcGoogle } from "react-icons/fc"

function Header(){
    return(
        <>
            <div className="flex flex-col items-center ">
                <img src={Title} className="absolute z-50 h-[10%] mt-20 "/>
                <img src={Pessoaviajando} className="absolute z-40 w-full lg:h-650 "/>
                <img src={Headerangle} className="absolute z-30 w-full lg:h-700"/>
                <img src={Headeranglea} className="absolute z-10 w-full lg:h-700"/>
                <div className="w-[80%] h-[125%] hidden lg:flex absolute flex-col items-center ml-0.7 mt-105  rounded-[90px] z-60 bg-terciary ">
                    <h1 className="font-itim secundary-color text-[2000%] mt-20">Login</h1>
                    <input type="text" className=" outline-none w-[90%] h-[60%] p-2 rounded-[60px] mt-[2%] bg-gray-300 text-[100px] placeholder:text-[100px] placeholder:font-inter placeholder:text-sencundary-color" placeholder="Insira seu e-mail"/>
                    <input type="password" className=" outline-none w-[90%] h-[60%] p-2 rounded-[60px] mt-[2%] bg-gray-300 text-[100px] placeholder:text-[100px] placeholder:font-inter placeholder:text-sencundary-color" placeholder="Insira sua senha"/>
                    <button className="h-[65%] w-[60%] font-itim mt-30 rounded-[50px] bg-secundary text-[120px]">Entrar</button>
                    <h3 className="mt-30 text-[80px]">____________ ou ____________</h3>
                    <button className="flex items-center justify-center gap-10 w-[40%] h-[30%] mt-20 bg-primary border border-gray-300 rounded-[40px] hover:bg-amber-700  transition-colors">
                        <FcGoogle size={350} />
                        <span className="font-inter text-gray-700 text-[500%]">Logar com Google</span>
                    </button>
                    <h3 className="  font-inter text-[80px] mt-[5%]">Não tem conta? <a className="primary-color">Registre-se!</a></h3>
                    <a className="secundary-color text-[80px] mt-40">Esqueceu a senha?</a>
                </div>
            </div>
        </>
    )
}

export default Header;