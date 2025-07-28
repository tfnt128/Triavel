import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function Footer(){
    return(
        <div className="bg-terciary w-full lg:h-[500px] flex flex-col items-center ">
            <h3 className="primary-color text-[18px] mt-5 ">Créditos</h3>
            <h3 className=" text-[16px] mt-0.3 ">André Lucca Gaem</h3>
            <div className="flex flex-row gap-2">
                <BsLinkedin size={20}/>
                <BsGithub size={20}/>
            </div>
            <h3 className=" text-[16px] mt-0.3 ">Thiago Carvalho</h3>
            <div className="flex flex-row gap-2">
                <BsLinkedin size={20}/>
                <BsGithub size={20}/>
            </div>
        </div>
    )
}

export default Footer;