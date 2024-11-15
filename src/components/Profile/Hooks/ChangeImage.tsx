import React, { useEffect, useState } from 'react';

interface ChangeImageProps {
    defaultInnerImageUrl?: string;
}

const ChangeImage: React.FC<ChangeImageProps> = ({ defaultInnerImageUrl = 'default-image-url.jpg'}) => {
    const [innerImageUrl, setInnerImageUrl] = useState(defaultInnerImageUrl);

    useEffect(() => {
      const savedInnerImage = localStorage.getItem('audioCardInnerImage');
      if (savedInnerImage) {
        setInnerImageUrl(savedInnerImage);
      }
    }, []);
  
    const handleInnerImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          setInnerImageUrl(result);
          localStorage.setItem('audioCardInnerImage', result);
        };
        reader.readAsDataURL(file);
      }
    };

    return (
      <div className="relative w-full h-full overflow-hidden mb-4">
        <img src={innerImageUrl} alt="Inner" className="object-cover w-full h-full" />
        
        <div className="absolute inset-0 flex items-center justify-center pt-4 px-10 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
          <label className="justify-center text-white cursor-pointer text-lg">
            Cambiar imagen
            <input
              type="file"
              accept="image/*"
              onChange={handleInnerImageChange}
              className="hidden"
            />
          </label>
        </div>
      </div>
    );
};

export default ChangeImage;
