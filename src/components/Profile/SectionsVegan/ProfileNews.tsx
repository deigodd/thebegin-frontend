// ProfileNews.tsx
import { useState } from 'react';
import Background from '../Hooks/BackgroundImage';
import CardPresentation from '../Hooks/CardPresentation';
import Checkbox from '../Hooks/CheckBox';
import PopupForm from '../Hooks/PopupForm'; // Importamos el PopupForm

const searches = [
  "Proveedoras de macetas",
  "Jardinera ornamental",
  "Proveedora de tierra para cactus",
  "Asistente para mantenimiento de invernadero"
];

const ProfileNews = () => {
  // Estado para controlar la apertura y cierre del Popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Función para abrir el popup
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  // Función para cerrar el popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <Background>
      <div className="min-h-screen flex items-center justify-center">
        <div className="container max-w-5xl px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Columna izquierda - News */}
            <CardPresentation
              title='NEWS'
              className="bg-[#CEB5A7]"
              titleTextColor="text-white"
              contentTextColor="text-[#836D63]"
            >
              <ul className="space-y-4 font-serif text-xl divide-y divide-[#836D63]/30">
                <li className="flex items-center space-x-3 py-2 cursor-pointer ">
                  <span className="w-2 h-2 rounded-full bg-[#E4D9D3]"></span>
                  <span className='text-[#6E5B51] hover:text-white transition-colors'>AVISOS</span>
                </li>
                <li className="flex items-center space-x-3 py-2 cursor-pointer ">
                  <span className="w-2 h-2 rounded-full bg-[#E4D9D3]"></span>
                  <span className='text-[#6E5B51] hover:text-white transition-colors'>BÚSQUEDAS</span>
                </li>
                <li className="flex items-center space-x-3 py-2 cursor-pointer ">
                  <span className="w-2 h-2 rounded-full bg-[#E4D9D3]"></span>
                  <span className='text-[#6E5B51] hover:text-white transition-colors'>PEDIDOS</span>
                </li>
                <li className="flex items-center space-x-3 py-2 cursor-pointer ">
                  <span className="w-2 h-2 rounded-full bg-[#E4D9D3]"></span>
                  <span className='text-[#6E5B51] hover:text-white transition-colors'>OTROS</span>
                </li>
              </ul>
            </CardPresentation>
            
            {/* Columna derecha - Búsquedas */}
            <div className="space-y-10 bg-white/40 p-5 transition-transform hover:scale-105">
              <h2 className="font-serif text-3xl mb-6 text-white">Búsquedas</h2>
              <div className="space-y-4">
                {searches.map((search, index) => (
                  <div 
                    key={index}
                    className="bg-[#718755] text-white cursor-pointer hover:bg-[#3A5331] transition-colors"
                  >
                    <div className="flex items-center p-4 gap-4">
                      <div className="flex-shrink-0 w-8 px-7">
                        <Checkbox />
                      </div>
                      <span>{search}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <button 
                  className="w-full font-serif text-xl bg-[#877869] text-white p-4 hover:bg-[#665B52] transition-colors"
                  onClick={openPopup} // Abre el popup cuando se haga clic
                >
                  CONSULTAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Componente PopupForm */}
      <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
    </Background>
  );
};

export default ProfileNews;
