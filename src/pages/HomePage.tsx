import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import backgroundImage from "../assets/background-home.svg";
import handsImage from "../assets/hands.jpg";
import marketWomanPcImage from "../assets/marketplace-home.jpg";
import truqueImage from "../assets/trueque-home.jpg";
import festImage from "../assets/fest-home.jpg";

const HomePage: React.FC = () => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <div className="flex-grow">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:grid-rows-2">
              {/*Nuestros Pilares*/}
              <div className="relative lg:row-start-1 lg:col-start-1">
                <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src={handsImage}
                      alt="Nuestros Pilares"
                    />
                  </a>
                  <div className="p-5 text-center">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        NUESTROS PILARES
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quo vitae quidem optio animi eum voluptatibus, obcaecati
                      accusamus deserunt aliquam debitis nisi provident ullam
                      pariatur illum eligendi at, quia blanditiis eveniet.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#d2bb90] rounded-lg hover:bg-[#a56441] focus:ring-1 focus:outline-none focus:ring-white "
                    >
                      Lee más de nuestros pilares
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/*Marketplace*/}
              <div className="relative lg:row-start-2 lg:col-start-1">
                <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src={marketWomanPcImage}
                      alt=""
                    />
                  </a>
                  <div className="p-5 text-center">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        MARKETPLACE
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quo vitae quidem optio animi eum voluptatibus, obcaecati
                      accusamus deserunt aliquam debitis nisi provident ullam
                      pariatur illum eligendi at, quia blanditiis eveniet.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#d2bb90] rounded-lg hover:bg-[#a56441] focus:ring-1 focus:outline-none focus:ring-white "
                    >
                      Visita el marketplace
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/*Comunidad*/}
              <div className="relative lg:row-span-2 lg:col-start-2">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow h-full">
                  <a href="#">
                    <img
                      className="h-1/2 w-full object-cover rounded-t-lg"
                      src={handsImage}
                      alt=""
                    />
                  </a>
                  <div className="p-5 text-center h-1/2 flex flex-col justify-between">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        COMUNIDAD
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quo vitae quidem optio animi eum voluptatibus, obcaecati
                      accusamus deserunt aliquam debitis nisi provident ullam
                      pariatur illum eligendi at, quia blanditiis eveniet.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#d2bb90] rounded-lg hover:bg-[#a56441] focus:ring-1 focus:outline-none focus:ring-white "
                    >
                      Únete a la comunidad
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/*Trueque*/}
              <div className="relative lg:row-start-1 lg:col-start-3">
                <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow">
                  <a href="#">
                    <img className="rounded-t-lg" src={truqueImage} alt="" />
                  </a>
                  <div className="p-5 text-center">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        TRUEQUE
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quo vitae quidem optio animi eum voluptatibus, obcaecati
                      accusamus deserunt aliquam debitis nisi provident ullam
                      pariatur illum eligendi at, quia blanditiis eveniet.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#d2bb90] rounded-lg hover:bg-[#a56441] focus:ring-1 focus:outline-none focus:ring-white "
                    >
                      Visita los trueques
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/*Begin Fest*/}
              <div className="relative lg:row-start-2 lg:col-start-3">
                <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow">
                  <a href="#">
                    <img className="rounded-t-lg" src={festImage} alt="" />
                  </a>
                  <div className="p-5 text-center">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        BEGIN FEST
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quo vitae quidem optio animi eum voluptatibus, obcaecati
                      accusamus deserunt aliquam debitis nisi provident ullam
                      pariatur illum eligendi at, quia blanditiis eveniet.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#d2bb90] rounded-lg hover:bg-[#a56441] focus:ring-1 focus:outline-none focus:ring-white "
                    >
                      Conoce nuestro festival
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex items-center justify-center w-full">
          <hr className="flex-grow sm:w-96 h-1 my-4 sm:my-8 bg-[#a56441] border-0 rounded" />
          <p className="px-2 sm:px-3 text-[#a56441] text-5xl -mt-2 sm:text-7xl font-serif font-semibold">
            {"{"}
          </p>
          <p className="px-2 sm:px-3 text-[#a56441] text-3xl sm:text-5xl font-serif">
            The Begin
          </p>
          <p className="px-2 sm:px-3 text-[#a56441] text-5xl -mt-2 sm:text-7xl font-serif font-semibold">
            {"}"}
          </p>
          <hr className="flex-grow sm:w-96 h-1 my-4 sm:my-8 bg-[#a56441] border-0 rounded" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
