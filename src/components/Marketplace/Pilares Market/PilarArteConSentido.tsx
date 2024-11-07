import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "flowbite-react"

interface Product {
  id: number
  title: string
  price: number
  image: string
  discount?: number
}

const PilarArteConSentido: React.FC = () => {
  const [products] = useState<Product[]>([
    { id: 1, title: "Lunchera enlozada pintada a mano", price: 17, image: "/placeholder.svg" },
    { id: 2, title: "Sesión fotográfica para book laboral", price: 10, image: "/placeholder.svg", discount: 10 },
    { id: 3, title: "Set de 3 tazas de cerámicas artesanal", price: 40, image: "/placeholder.svg" },
    { id: 4, title: "Mural de 3 x 2 mt para exterior", price: 107, image: "/placeholder.svg" },
    { id: 5, title: "Clases de tejido en telar artesanal", price: 23, image: "/placeholder.svg" },
    { id: 6, title: "Libros de poesía. Usados", price: 10, image: "/placeholder.svg", discount: 10 },
    { id: 7, title: "Guitarra Criolla Gracia M3 + funda + afinador", price: 60, image: "/placeholder.svg", discount: 10 },
    { id: 8, title: "Sweater tejido a mano Modelo Sonia", price: 80, image: "/placeholder.svg" },
  ])

  return (
    <div className="w-full max-w-7xl mx-auto p-4 space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4 relative aspect-[3/4] bg-gradient-to-b from-tbc-pilarpurple-200 to-tbc-pilarpurple-100 rounded-lg overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Arte con sentido"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-tbc-pilarpurple-600 to-transparent">
            <h1 className="text-3xl font-bold text-white">Arte con sentido</h1>
          </div>
        </div>
        <div className="md:w-3/4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2 bg-tbc-pilarpurple-600 text-white h-auto p-1 overflow-x-auto flex-nowrap rounded-lg">
              <button className="px-4 py-2 bg-tbc-pilarpurple-600 rounded-lg focus:outline-tbc-pilarpurple-0">ÚLTIMOS PRODUCTOS</button>
              <button className="px-4 py-2 bg-tbc-pilarpurple-400 text-white hover:bg-tbc-pilarpurple-100 focus:outline-tbc-pilarpurple-0 rounded-lg">DESTACADOS</button>
              <button className="px-4 py-2 bg-tbc-pilarpurple-200 text-white hover:bg-tbc-pilarpurple-100 focus:outline-tbc-pilarpurple-0 rounded-lg">MÁS VISITADOS</button>
            </div>
            <div className="flex gap-2">
              <Button outline size="sm" aria-label="Previous page">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button outline size="sm" aria-label="Next page">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product.id} className="rounded-lg overflow-hidden shadow-md">
                <div className="relative aspect-square">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-full h-full"
                  />
                  {product.discount && (
                    <span className="absolute top-2 right-2 bg-orange-400 text-white px-2 py-1 rounded-md text-sm">
                      -{product.discount}%
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.title}</h3>
                  <p className="text-orange-500 font-semibold">USD {product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default PilarArteConSentido;