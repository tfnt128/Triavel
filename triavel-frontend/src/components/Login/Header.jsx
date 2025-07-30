import Pessoaviajando from "./pessoaviajando.png"
import Headerangle from "./Headerangle.png"
import Headeranglea from "./Headeranglea.png"
import Title from "../Loadingpage/Title.png"
import aviaodecolano from "../Login/aviaodecolano.png"
import { FcGoogle } from "react-icons/fc"
import { Link, useNavigate, useNavigation } from "react-router-dom"
import Footer from "./Footer"
import Secinfoum from "./Secinfoum/Secinfoum"

function Header(){
    const navigate = useNavigate();
    function RegistrarGoogle(){
        navigate("/entrarcomgoogle");
    }

    function Entrar(){
        navigate("/entrar")
    }
    return(
        <>
            
            <div className=" flex flex-col items-center ">
                <img src={Title} className="absolute animate-fade-down z-[8] h-[5%] lg:h-[10%] lg:mt-20 mt-10"/>
                <img src={Pessoaviajando} className="absolute z-[7] w-full animate-fade lg:h-650 "/>
                <img src={Headerangle} className="absolute z-[6] w-full animate-fade-down animate-delay-0 lg:h-700"/>
                <img src={Headeranglea} className="absolute z-[5] w-full animate-fade-down animate-delay-0 lg:h-700"/>
                <img src={aviaodecolano} className="lg:hidden flex absolute mt-260 w-300 h-290 z-[2]"/>
                <Secinfoum ClassName="relative z-[2] mt-70 w-full lg:h-[3000px] h-[800px] lg:mt-525" />
                <div className="lg:w-[50%] lg:h-[125%] w-[90%] h-[80%] flex mb-50 flex-col animate-fade-up lg:absolute  items-center ml-0.7 lg:mt-3000 mt-50 lg:rounded-[90px] rounded-[20px] z-[60] bg-terciary">
                    <h1 className="font-itim secundary-color lg:text-[2000%] text-[400%] lg:mt-20 mt-3">Login</h1>
                    <input type="text" className=" outline-none transition-transform ease-in-out hover:scale-105 lg:w-[90%] w-[85%] lg:h-[30%] h-[10%] lg:p-2 p-3 lg:rounded-[60px] rounded-[10px] lg:mt-[2%] mt-8 bg-gray-300 lg:text-[100px] text-[20px] lg:placeholder:text-[100px] placeholder:text-[20px] placeholder:font-inter placeholder:text-sencundary-color" placeholder="Insira seu e-mail"/>
                    <input type="password" className=" outline-none transition-transform ease-in-out hover:scale-105 lg:w-[90%] w-[85%] lg:h-[30%] h-[10%] lg:p-2 p-3 lg:rounded-[60px] rounded-[10px] lg:mt-[2%] mt-5 bg-gray-300 lg:text-[100px] text-[20px] lg:placeholder:text-[100px] placeholder:text-[20px] placeholder:font-inter placeholder:text-sencundary-color" placeholder="Insira sua senha"/>
                    <button onClick={() => {Entrar()}} className="lg:h-[35%] h-[10%] lg:w-[60%] w-[70%] relative z-[70] font-itim lg:mt-30 mt-5 p-3 lg:rounded-[50px] rounded-[10px] bg-secundary lg:text-[120px] text-[35px] cursor-pointer">Entrar</button>
                    <h3 className="lg:mt-30 mt-4 lg:text-[80px] text-[20px]">____________ ou ____________</h3>
                    <button onClick={()=>{RegistrarGoogle()}} className="flex p-2 items-center justify-center lg:gap-10 gap-3 lg:w-[40%] w-[60%] lg:h-[30%] h-[10%] lg:mt-20 mt-5 relative z-[70] bg-primary border border-gray-300 lg:rounded-[40px] rounded-[10px] hover:bg-amber-700  transition-colors">
                        <div className="lg:hidden flex">
                            <FcGoogle size={60}/>
                        </div>
                        <div className="lg:flex hidden">
                            <FcGoogle size={350}/>
                        </div>
                        <span className="font-inter text-gray-700 lg:text-[500%] p-2 text-[130%]">Logar com Google</span>
                    </button>
                    <h3 className="  font-inter lg:text-[80px] text-[20px] mt-[5%]">Não tem conta? <Link to="/register" className="primary-color relative z-[70] cursor-pointer">Registre-se!</Link></h3>
                    <Link to="/Esqueciasenha" className="secundary-color relative z-[70] lg:text-[80px] text-[20px] lg:mt-40 mt-20 cursor-pointer">Esqueceu a senha?</Link>
                </div>
                 
            </div>
           
           <Footer ClassName="lg:mt-[4000px] relative z-[100] bg-gradient-to-r from-blue-950 to-orange-600"/>
        </>
    )
}

export default Header;