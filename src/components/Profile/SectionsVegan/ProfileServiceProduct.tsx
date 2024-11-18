import React, { useState } from 'react';
import ActivitiesPageLayout from '../Hooks/ColumnService';
import PopupForm from '../Hooks/PopupForm'; // Asegúrate de tener este componente importado

const ActivitiesPage: React.FC = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  const activities = [
    { title: 'Kit de Especias', 
      image: 'https://cdn.pixabay.com/photo/2019/05/07/09/01/spices-4185324_1280.jpg' },
    { title: 'Recetario', 
      image: 'https://cdn.pixabay.com/photo/2021/09/20/06/55/spaghetti-6639970_1280.jpg' },
    { title: 'Bolsón Saludable', 
      image: 'https://cdn.pixabay.com/photo/2023/01/09/10/56/meal-7707134_1280.jpg' },
    { title: 'Taller de Riego', 
      image: 'https://cdn.pixabay.com/photo/2023/05/21/06/05/water-jet-8007873_1280.jpg' },
    { title: 'Frutillas', 
      image: 'https://cdn.pixabay.com/photo/2020/05/22/19/42/strawberry-5206853_1280.jpg' },
    { title: 'Taller de Poda', 
      image: 'https://cdn.pixabay.com/photo/2016/04/18/11/45/shear-1336374_1280.jpg' },
    { title: 'Mermeladas Caseras', 
      image: 'https://cdn.pixabay.com/photo/2017/09/12/20/22/jam-2743531_1280.jpg' },
  ];

  return (
    <div>
      <ActivitiesPageLayout activities={activities} onMoreInfo={openPopup} />
      <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default ActivitiesPage;
