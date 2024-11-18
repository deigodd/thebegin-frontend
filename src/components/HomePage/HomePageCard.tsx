import React from "react";
import pilarImage from "../../assets/Home/hands.jpg";
import marketImage from "../../assets/Home/marketplace-home.jpg";
import truequeImage from "../../assets/Home/trueque-home.jpg";
import festImage from "../../assets/Home/fest-home.jpg";

interface HomePageCardProps {
  centerCard: boolean;
  imageIndex: number;
  alt?: string;
  href: string;
  cardTitle: string;
  cardDescription?: string;
  buttonText: string;
  rowStart: number;
  colStart: number;
  cardSubtitle: string;
}

const imagesCards = [pilarImage, marketImage, truequeImage, festImage];
const defaultDescription =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo vitae quidem optio animi eum voluptatibus, obcaecati accusamus deserunt aliquam debitis nisi provident ullam pariatur illum eligendi at, quia blanditiis eveniet.";

const HomePageCard: React.FC<HomePageCardProps> = ({
  centerCard,
  imageIndex,
  alt,
  href,
  cardTitle,
  cardDescription,
  buttonText,
  rowStart,
  colStart,
  cardSubtitle,
}) => {
  return (
    <>
      {centerCard ? (
        <div className={`relative lg:row-span-2 lg:col-start-2`}>
          <div className="bg-white border border-gray-200 rounded-lg shadow h-full w-full lg:w-auto mx-auto">
            <a href={href}>
              <img
                className="h-1/2 object-cover rounded-t-lg"
                src={imagesCards[imageIndex]}
                alt={alt}
              />
            </a>
            <div className="p-5 text-center h-1/2 flex flex-col justify-between">
              <a href={href}>
                <div
                  className={`absolute inset-x-0 mx-auto -mt-12 h-12 bg-white flex items-center justify-center shadow-lg ${
                    cardTitle === "TRUEQUE" ? "w-32" : "w-40"
                  } ${cardTitle === "MARKETPLACE" ? "w-44" : ""} ${
                    cardTitle === "COMUNIDAD" ? "w-36" : ""
                  } border-2 border-[#d2bb90]`}
                >
                  <h3 className="text-2xl tracking-tight text-[#d2bb90]">
                    {cardTitle}
                  </h3>
                </div>
              </a>
              <h5 className="mt-4 text-2xl font-semibold">{cardSubtitle}</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {cardDescription || defaultDescription}
              </p>
              <a
                href={href}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#d2bb90] rounded-lg hover:bg-[#a56441] focus:ring-1 focus:outline-none focus:ring-white transition-colors duration-75 ease-out"
              >
                {buttonText}
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`relative lg:row-start-${rowStart} lg:col-start-${colStart} flex flex-col h-full w-full`}
        >
          <div className="bg-white border border-gray-200 rounded-lg shadow flex flex-col h-full w-80 mx-auto">
            <a href={href}>
              <img
                className="rounded-t-lg"
                src={imagesCards[imageIndex]}
                alt={alt}
              />
            </a>
            <div className="relative p-5 text-center flex-grow">
              <a href={href}>
                <div
                  className={`absolute inset-x-0 top-0 mx-auto -mt-8 h-12 bg-white flex items-center justify-center shadow-lg ${
                    cardTitle === "TRUEQUE" ? "w-32" : "w-40"
                  } ${cardTitle === "MARKETPLACE" ? "w-44" : ""} ${
                    cardTitle === "COMUNIDAD" ? "w-36" : ""
                  } border-2 border-[#d2bb90]`}
                >
                  <h3 className="text-2xl tracking-tight text-[#d2bb90]">
                    {cardTitle}
                  </h3>
                </div>
              </a>
              <h5 className="mt-4 text-2xl font-semibold">{cardSubtitle}</h5>
              <p className="mt-6 mb-3 font-normal text-gray-700 dark:text-gray-400">
                {cardDescription || defaultDescription}
              </p>
              <a
                href={href}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#d2bb90] rounded-lg hover:bg-[#a56441] focus:ring-1 focus:outline-none focus:ring-white transition-colors duration-75 ease-out"
              >
                {buttonText}
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePageCard;
