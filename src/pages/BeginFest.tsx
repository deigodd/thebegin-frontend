import TicketCard from '../components/BeginFest/TicketCard'
import CreativeText from '../components/BeginFest/TextsBlocks'
import Navbar from '@/components/Navbar'
import Footer2 from '@/components/Footer/Footer'
import bg from '../assets/background-marketplace.svg'
import Formulario from '@/components/BeginFest/Formulario'
import PageSeparator from '@/components/PageSeparator'
import videoPilares from "../assets/Pilares/begin-fest.mp4";

export default function FestivalPage() {
  return (
    <main className="min-h-screen bg-tbc-primaryred-100 text-white"
    style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <Navbar/>
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold font-serif text-tbc-primarybrown-600 text-center mb-8">The Begin Fest</h1>
      <div
        className="bg-tbc-primarybrown-500 text-white text-justify h-96 md:h-64 w-full flex justify-center items-center text-center p-4 lg:px-64"
        style={{
          clipPath: "polygon(0% 20%, 100% 0%, 100% 100%, 0% 80%)",
        }}
      >
        <div>
        <strong>Begin Fest</strong> es una jornada <strong>única</strong>, un espacio diseñado para que las mujeres nos <strong>encontremos físicamente, nos conozcamos, nos abracemos y nos inspiremos</strong>, intercambiemos nuestras habilidades, expongamos y vendamos nuestros productos…, es una fiesta del cuidado y bienestar de mujeres para mujeres.
        Este festival brinda una plataforma <strong>diversa e inspiradora</strong> que incluye:
        </div>
      </div>
        {/* Hero Section with Images and Video */}
        <div
        className="bg-tbc-primaryred-100 text-white text-justify w-full flex justify-center items-center text-center mb-20"
        style={{
          clipPath: "polygon(0% 0%, 100% 12%, 100% 98%, 0% 100%)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="relative">
            <img
              src="https://www.zonanortediario.com.ar/wp-content/uploads/2024/04/2-festival-yoga-exhale-san-fernando-2024-696x464.jpg"
              alt="Festival main stage"
              className="h-full object-cover"
            />
          </div>
          <div className="relative">
            <video
              src={videoPilares}
              autoPlay
              muted
              loop
              className="h-full object-cover"
          ></video>
          </div>
        </div>
      </div>

        {/* Creative Text Section */}
        <CreativeText />
        </section>

        {/* Ticket Card Section */}
        <PageSeparator title='Obtén tu Ticket'/>
        <div className="mt-16 mb-16">
          <TicketCard />
        </div>

        <PageSeparator title='¿Quieres Participar?'/>
        <div className="mt-16 mb-10">
            <Formulario/>
        </div>

      <Footer2/>
    </main>
  )
}

