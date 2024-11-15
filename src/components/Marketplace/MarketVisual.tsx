"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const MarketVisual: React.FC = () => {
    const images = [
        "https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0046/4988/512X250_CMR_RANKIA-BANNER.png?1636972707",
        "https://cdn.mallmarina.cl/mallmarina/uploads/2022/05/Logo-Natura-1024x771-1.jpg",
        "https://img.freepik.com/foto-gratis/mujer-adolescente-nina-stand-sentir-libertad-relajacion-viajes-al-aire-libre-disfrutando-naturaleza-salida-sol_1421-186.jpg",
        "https://ipmark.com/wp-content/uploads/SANTANDER_01-800x445.jpg",
        "https://www.marketingdirecto.com/wp-content/uploads/2017/01/loreal-1.jpg",
        "https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0046/4988/512X250_CMR_RANKIA-BANNER.png?1636972707"
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        if (activeIndex === images.length - 1) {
            setIsTransitioning(false);
            setActiveIndex(0);
        } else {
            setIsTransitioning(true);
            setActiveIndex(prevIndex => prevIndex + 1);
        }
    };

    const prevSlide = () => {
        if (activeIndex === 0) {
            setIsTransitioning(false);
            setActiveIndex(images.length - 1);
        } else {
            setIsTransitioning(true);
            setActiveIndex(prevIndex => prevIndex - 1);
        }
    };

    // Reiniciar transición cuando cambia el índice automáticamente
    const handleTransitionEnd = () => {
      if (activeIndex === images.length -1) {
        setIsTransitioning(false);
        setActiveIndex(0);
    }
    };

    return (
        <div className="relative h-56 md:h-96 overflow-hidden z-10">
            <div
                className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                onTransitionEnd={handleTransitionEnd}
            >
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover flex-shrink-0"
                    />
                ))}
            </div>

            {/* Flechas de navegación */}
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            >
                <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>

            {/* Indicadores de puntos */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-gray-700' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default MarketVisual;
