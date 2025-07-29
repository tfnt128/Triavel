import Loader from "./Loader.png"

function Loadballer(){
    return(
        <div className="relative w-22 h-19 lg:w-70 lg:h-60">
            <img src={Loader} className="absolute top-0 left-0 w-full h-full" alt="Loading 1"/>

        </div>
    )
}

export default Loadballer;