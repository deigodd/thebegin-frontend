import React from 'react';
import BackgroundTrueque from '../Hooks/Trueque/BackgroundTrueque';
import TruequeCard from '../Hooks/Trueque/TruequeCard';
import TruequeButton from '../Hooks/Trueque/ButtonTrueque';

export default function ProfileTrueque() {
  return (
    <div className="max-w-4xl mx-auto p-6 relative">
      <BackgroundTrueque>

        
        <TruequeCard />
        
        {/* Main Content Container */}
        <div className="mt-8 relative">
          
            {/* Image Container */}
          <div className="rounded-2xl overflow-hidden relative">
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Persona recolectando vegetales en una cesta"
              width={800}
              height={600}
              className="w-full object-cover"
            />
            
            {/* Overlay Text */}
            <div className="absolute top-1/4 right-8 max-w-sm">
              <p className="text-white text-3xl font-handwriting leading-relaxed">
                Tenemos mucho para compartir
              </p>
            </div>
          </div>

          {/* Bottom Text Box */}
          <div className="bg-tbc-pilargreen-600 rounded-full p-6 mt-4 text-center relative">
            <p className="text-white text-lg mb-4">
              Te comparto todas las cosas lindas que tengo para intercambiar.
            </p>
          </div>
          
          {/* CTA Button positioned below the green card */}
          <div className="flex justify-center mt-4">
            <TruequeButton />
          </div>
        </div>
      </BackgroundTrueque>
    </div>
  )
}