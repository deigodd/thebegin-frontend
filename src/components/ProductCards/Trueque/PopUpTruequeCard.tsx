import Product from '../../../types/Product';


interface PopUpCardProps {
  product: Product;
}

const PopUpCard: React.FC<PopUpCardProps> = ({ product }) => {

  return (
    <div className='absolute'>
        <div className="relative flex flex-col md:flex-row py-6 gap-8 px-6 bg-white rounded-sm scale-95 ">
            <div className="w-80 h-96">
                <img 
                src={product.imageUrl} 
                alt={product.name}
                className="w-full h-full object-cover rounded-sm"
                />
            </div>
            {product.discount && (
                <span className="absolute top-2 right-2 bg-tbc-primaryred-600 text-white text-sm font-bold px-2 py-2 rounded-lg">
                    -{product.discount}%
                </span>
            )}
            <div className="md:w-1/2 grid mt-6">
                <div className='space-y-2'>
                        <h2 className="text-3xl font-bold text-tbc-primaryred-600">{product.name}</h2>
                        <hr className="border-2 border-tbc-secondarygray-600 my-2" />
                        <p className="text-gray-600 ">{product.description}</p>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-tbc-primaryred-600">¡Disponible para intercambiar!</span>
                </div>
                <button className="w-48 h-8 bg-tbc-primaryred-600 text-white rounded-md hover:bg-tbc-primarybrown-600 transition-colors duration-300 hover:scale-105">
                    Solicitar Trueque
                </button>
            </div>
        </div>
    </div>
  );
};
export default PopUpCard;