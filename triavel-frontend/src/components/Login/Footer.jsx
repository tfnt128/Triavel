import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function Footer(){
    return(
        <div className="bg-terciary w-full lg:h-[30%] lg:mt-[4000px]  flex flex-col items-center ">
            <h3 className="primary-color text-[18px] lg:text-[100px] mt-5 lg:mt-10 ">Créditos</h3>
            <h3 className=" text-[16px] lg:text-[90px] mt-0.3 lg:mt-0.5 ">André Lucca Gaem</h3>
            <div className="lg:hidden flex flex-row gap-2">
                <a href="https://www.linkedin.com/in/andr%C3%A9-lucca-gaem-05a200343/">
                    <BsLinkedin size={20}/>
                </a>
                <a href="https://github.com/andre55z">
                    <BsGithub size={20} />
                </a>            
            </div>
            <div className="lg:flex hidden flex-row gap-2">
                <a href="https://www.linkedin.com/in/andr%C3%A9-lucca-gaem-05a200343/">
                    <BsLinkedin size={100}/>
                </a>
                <a href="https://github.com/andre55z">
                    <BsGithub size={100} />
                </a>
            </div>
            <h3 className=" text-[16px] lg:text-[90px] mt-0.3 lg:mt-0.5 ">Thiago Carvalho</h3>
            <div className="lg:hidden flex flex-row gap-2">
                <a href="https://www.linkedin.com/in/thiago-fontoura-13a906370/">
                    <BsLinkedin size={20}/>
                </a>
                <a href="https://github.com/tfnt128">
                    <BsGithub size={20} />
                </a>
            </div>
            <div className="lg:flex hidden flex-row gap-2">
                <a href="https://www.linkedin.com/in/thiago-fontoura-13a906370/">
                    <BsLinkedin size={100}/>
                </a>
                <a href="https://github.com/tfnt128">
                    <BsGithub size={100} />
                </a>
            </div>
        </div>
    )
}

export default Footer;