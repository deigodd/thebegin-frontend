import { Heart, Star, ShoppingCart } from 'lucide-react';

const MarketSBIcons:React.FC = () => {
  return (
    <div className="flex gap-2 scale-75 lg:scale-100">
        <button className="bg-tbc-secondarygreen-100 p-2 hover:bg-white rounded-full text-tbc-primarybrown-600">
            <Heart />
        </button>
        <button className="bg-tbc-secondarygreen-100 p-2 hover:bg-white rounded-full text-tbc-primarybrown-600">
            <Star />
        </button>
        <button className="bg-tbc-secondarygreen-100 p-2 hover:bg-white rounded-full text-tbc-primarybrown-600">
            <ShoppingCart />
        </button>
    </div>
  );
};

export default MarketSBIcons;