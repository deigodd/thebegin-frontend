"use client";

import { Carousel } from "flowbite-react";
import React from 'react';
const MarketVisual: React.FC = () => {
    return (
        <div className="h-56 md:h-96">
        <Carousel pauseOnHover>
          <img src="https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0046/4988/512X250_CMR_RANKIA-BANNER.png?1636972707" alt="..." />
          <img src="https://cdn.mallmarina.cl/mallmarina/uploads/2022/05/Logo-Natura-1024x771-1.jpg" alt="..." />
          <img src="https://img.freepik.com/foto-gratis/mujer-adolescente-nina-stand-sentir-libertad-relajacion-viajes-al-aire-libre-disfrutando-naturaleza-salida-sol_1421-186.jpg" alt="..." />
          <img src="https://ipmark.com/wp-content/uploads/SANTANDER_01-800x445.jpg" alt="..." />
          <img src="https://www.marketingdirecto.com/wp-content/uploads/2017/01/loreal-1.jpg" alt="..." />
        </Carousel>
      </div>
    )
  }
  
  export default MarketVisual;
