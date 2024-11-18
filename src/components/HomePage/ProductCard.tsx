import React from "react";
//import icon from "../../assets/icons/svg/tb-icon-outline-yellow.svg";

interface ProductCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  extra: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  extra,
  price,
}) => {
  return (
    <>
      <div className="flex overflow-hidden h-40 w-3/4 max-w-md">
        <div className="w-2/5 h-full">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-3/5 p-4 flex flex-col justify-center">
          <h2 className=" font-serif text-xl text-white">{title}</h2>
          <hr className="w-full border-t border-gray-300 my-2" />
          <p className="text-white  font-thin">{description}</p>
          <hr className="w-full border-t border-gray-300 my-2" />
          <p className="text-white  font-thin">{extra}</p>

          <button className="bg-[#d19468]  px-6 py-1 mt-2 hover:bg-[#b57b57] transition-colors duration-300">
            <span className="font-semibold text-white"> USD </span>
            <span className="font-extrabold text-xl text-white"> {price}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
