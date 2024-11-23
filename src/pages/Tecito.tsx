import HippieChat from "../components/Tecito/ChatTecito";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";

const Tecito:React.FC =() => {
  return (
    <div className="bg-tbc-pilarbrown-600">
        <Navbar/>
        <div className="mx-auto max-w-7xl">
            <HippieChat/>
        </div>
        <Footer/>
    </div>
  )
}
export default Tecito;