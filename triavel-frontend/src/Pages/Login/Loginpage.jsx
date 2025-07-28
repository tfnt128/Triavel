import Body from "../../components/Login/Body";
import Footer from "../../components/Login/Footer";
import Header from "../../components/Login/Header";




function Loginpage(){
    return(
        <>
            <div className="items-center justify-center ">
                <Header/>
                <Body/>
                <footer className="mt-auto"><Footer/></footer>
                
            </div>
        </>
    )
}

export default Loginpage;