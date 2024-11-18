import Info from '../components/TheBegin/InformationComponent'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import PageSeparator from '../components/PageSeparator';
import DesafioLatam from '../components/TheBegin/DesafioLatam';
import backgroundImage from '../assets/background-marketplace.svg'


const TheBeginPage:React.FC = () => {
  return (
    <div className='bg-gradient-to-b from-pink-100 to-purple-100'
    style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>

        <Navbar/>
        <div className="flex max-w-7xl mt-4 mb-8 mx-auto shadow-lg">
            <Info/>
        </div>
        <PageSeparator title='Desafío LATAM'/>
        <div className="flex max-w-7xl my-8 mx-auto shadow-lg">
            <DesafioLatam/>
        </div>
        <Footer/>
    </div>
  )
}
export default TheBeginPage;