import React, { useState } from 'react';
import ActivitiesPageLayout from '../Hooks/ServiceProduct/ColumnService';
import PopupForm from '../Hooks/PopupForm';
import ServiceProduct from '../../../data/Profile2/ServiceProduct.json'

//Las fotos y textos se sacan de ServiceProduct.json

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