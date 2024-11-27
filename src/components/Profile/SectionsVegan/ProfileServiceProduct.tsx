import React, { useEffect, useState } from 'react';
import ActivitiesPageLayout from '../Hooks/ServiceProduct/ColumnService';
import PopupForm from '../Hooks/PopupForm'; // Asegúrate de tener este componente importado
import ServiceProduct from '../../../data/Profile2/ServiceProduct.json'

const ActivitiesPage: React.FC = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  return (
    <div>
      <ActivitiesPageLayout activities={ServiceProduct} onMoreInfo={openPopup} />
      <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default ActivitiesPage;