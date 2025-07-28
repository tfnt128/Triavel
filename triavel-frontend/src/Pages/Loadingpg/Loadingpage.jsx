import "../../App.css"
import Title from "../../components/Loadingpage/Title.png";
import Info from "../../components/Loadingpage/Info"
import Triangulo from '../../components/Loadingpage/Triangulo';
import Loadballer from '../../components/Loadingpage/Loadballer';

function Loadingpage(){
    return(
    <>
      <div className="flex flex-col items-center justify-center">
        <img src={Title} className="mt-[250px] lg:mt-[500px] lg:w-[900px] lg:h-[270px]"/>
        <div className=" animate-spin mt-[100px] lg:mt-[300px]">
          <Loadballer/>
        </div>
        <Info />
        <Triangulo/>
      </div>

    </>
    )
}

export default Loadingpage;