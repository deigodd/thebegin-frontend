import React from 'react';
import SearchIcon from '../assets/SearchIcon';
import HeartIcon from '../assets/HeartIcon';
import CartIcon from '../assets/CartIcon';
import StarIcon from '../assets/StarIcon';
import Navbar from '../components/Navbar';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
}

//interfaz para que `news` sea opcional (?)
interface NewsSectionProps {
  news?: NewsItem[];
}

const TheBeginProps: React.FC<NewsSectionProps> = () => {

  const categories = [
    "The Begin", "Arte con Sentido", "Consumo con Sentido", "Bienestar",
    "Salud Mental", "Medio Ambiente", "Trueque", "Membresía"
  ];

  return (

    <div className="min-h-screen bg-stone-50">
      <Navbar />
    <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">

    {/* Sidebar */}
      <aside className="bg-gray-100 p-4 w-64 flex-shrink-0">
        <h2 className="text-lg font-bold mb-4">Categorías</h2>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category} className="flex items-center">
                <div className="w-4 h-4 bg-orange-500 mr-2 rounded-full"></div>
                <span className="text-gray-700">{category}</span>
              </li>
            ))}
          </ul>
      </aside>

      <div className="flex-1">
        {/* Search and Icons Bar */}
            <div className="bg-white rounded-lg shadow-sm mb-6 p-4 flex items-center justify-between">
              <div className="flex-1 mx-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar items..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                  />
                  <span className="absolute left-3 top-2.5 text-gray-400">
                    <SearchIcon />
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
                  <HeartIcon />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
                  <StarIcon />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
                  <CartIcon />
                </button>
              </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Novedades</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div className="bg-white rounded-lg overflow-hidden border hover:shadow-md transition-shadow">
              <img
                src="/api/placeholder/400/250"
                alt="Evento: Arte Consciente"
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Nuevo Catálogo Sostenible</h3>
                <p className="text-sm text-gray-500 mb-2">2 Diciembre 2024</p>
                <p className="text-gray-600">Descubre nuestra nueva colección de productos eco-friendly</p>
                <div className="flex space-x-2 mt-4">
                  <button className="flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
                    <CartIcon />  Agregar al Carrito
                  </button>
                  <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Comprar
                  </button>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Próximos Eventos</h2>

            <div className="bg-white rounded-lg overflow-hidden border hover:shadow-md transition-shadow">
              <img
                src="/api/placeholder/400/250"
                alt="Promoción Especial"
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Lollapalooza vegana 2025</h3>
                <p className="text-sm text-gray-500 mb-2">23 Marzo 2025</p>
                <p className="text-gray-600">¡Reserva ahora tu entrada para ver a tus plantas favoritas!</p>
                {/* Botones debajo del título */}
                <div className="flex space-x-2 mt-4">
                  <button className="flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
                    <CartIcon />  Agregar al Carrito
                  </button>
                  <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Comprar
                  </button>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Eventos Pasados</h2>

            <div className="bg-white rounded-lg overflow-hidden border hover:shadow-md transition-shadow">
              <img
                src="/api/placeholder/400/250"
                alt="Promoción Especial"
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Lollapalooza vegana 2025</h3>
                <p className="text-sm text-gray-500 mb-2">23 Marzo 2025</p>
                <p className="text-gray-600">¡Reserva ahora tu entrada para ver a tus plantas favoritas!</p>
                {/* Botones debajo del título */}
                <div className="flex space-x-2 mt-4">
                  <button className="flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
                    <CartIcon />  Agregar al Carrito
                  </button>
                  <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  </div>
</div>
  );
};

export default TheBeginProps;
