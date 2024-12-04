import React from 'react';
//import { ChevronLeft, ChevronRight } from 'lucide-react';
import CardService from './CardService';

interface ActivitiesPageLayoutProps {
  activities: { title: string; image: string }[];
  onMoreInfo: () => void;
}

const ActivitiesPageLayout: React.FC<ActivitiesPageLayoutProps> = ({ activities, onMoreInfo }) => {
  return (
    <div className="relative min-h-screen pb-8 py-10">
      { /* Division de colores del fondo */ }
      <div className="bg-tbc-primarybrown-100 absolute inset-0 z-0"></div>
      <div className="bg-tbc-pilargreen-600 absolute inset-0 z-0 top-1/2"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 justify-items-center">
          {activities.slice(0, 4).map((activity, index) => (
            <CardService
              key={index}
              title={activity.title}
              image={activity.image}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
          {activities.slice(4).map((activity, index) => (
            <CardService
              key={index}
              title={activity.title}
              image={activity.image}
            />

          ))}
        </div>
        <div className="flex justify-end mt-8">
          <h1 className="text-4xl font-serif text-tbc-secondarybrown-400 mr-6">
            Un poco de todo lo que hago
          </h1>
          <button
            className="px-6 py-3 bg-tbc-pilarorange-400 text-white rounded-full hover:bg-tbc-pilarorange-600 transition"
            onClick={onMoreInfo}
          >
            <h1 className="">
              <p className="inline-block mr-2 font-serif"> MAS INFO</p>
              <p className="inline-block"> Aquí </p>
            </h1>
           
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPageLayout;