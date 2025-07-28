import aviaodecolano from "./aviaodecolano.png"
import { FcGoogle } from 'react-icons/fc';
import {Link} from 'react-router-dom'
import Footer from "./Footer";

function Body(){
    return(
        <div className=" w-full flex flex-col items-center ">
            <img src={aviaodecolano} className="absolute z-10 mix-blend-multiply mt-70 w-full md:hidden pointer-events-none"/>
            <div className="lg:hidden  flex flex-col items-center ml-0.7 mt-105 w-[337px] h-[467px] rounded-[30px] bg-terciary ">
                <h1 className="font-itim secundary-color text-[45px] mt-3">Login</h1>
                <input type="text" className=" outline-none w-[90%] h-[50px] p-2 rounded-[10px] mt-10 bg-gray-300 placeholder:font-inter placeholder:text-sencundary-color" placeholder="Insira seu e-mail"/>
                <input type="password" className=" outline-none w-[90%] h-[50px] p-2 rounded-[10px] mt-4 bg-gray-300 placeholder:font-inter placeholder:text-sencundary-color" placeholder="Insira sua senha"/>
                <button onClick={()=>{alert("taclicavel")}} className="h-[60px] w-[210px] font-itim mt-3 rounded-[10px] bg-secundary text-[32px]">Entrar</button>
                <h3 className="mt-2">____________ ou ____________</h3>
                <button  className="flex items-center justify-center gap-3 w-[50%] h-[30px] mt-4 bg-primary border border-gray-300 rounded-[10px] hover:bg-amber-700  transition-colors">
                    <FcGoogle size={20} />
                    <span className="font-inter text-gray-700 text-[10px]">Logar com Google</span>
                </button>
                <h3 className="font-inter text-[14px] mt-2">Não tem conta? <Link to="/register" className="primary-color">Registre-se!</Link></h3>
                <a className="secundary-color text-[15px] mt-5">Esqueceu a senha?</a>
            </div>
            <Footer/>
        </div>
    )
}



export default Body;
