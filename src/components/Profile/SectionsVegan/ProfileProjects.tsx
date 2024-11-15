import { ServiceCard } from "../Hooks/ServiceCard";
import { Title } from "../Hooks/Title";
import { projectsData } from "../../../data/ProjectsData";
import BackgroundSettings from "../Hooks/BackgroundSectionSettings";
import { useState } from "react";

const ProfileProjects = () => {
  const [background, setBackground] = useState({
    color: 'bg-tbc-secondarygreen-600',
    image: null as string | null
  });

  const smallCards = projectsData.services.filter((service) => service.size === "small");
  const largeCards = projectsData.services.filter((service) => service.size === "large");

  return (
    <div
      className="relative min-h-screen w-full py-16"
      style={{
        backgroundColor: '#FFF0E5',
        backgroundImage: background.image ? `url(${background.image})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* BACKGROUND va con color e imagen */}
      <BackgroundSettings 
        onChange={(color, image) => setBackground({ color, image })} 
      />
      
      {/* TITULO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title 
          title={projectsData.title || "Nuestros Productos"}
          subtitle={projectsData.subtitle || "Descubre nuestra variedad de productos orgánicos"}
          color={background.image ? 'light' : 'dark'}
        />

        {/* Sección para cards*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {smallCards.map((service) => (
            <ServiceCard 
              key={service.id} 
              data={service}
              className={`${service.size === 'small' ? 'lg:col-span-2' : ''}`}
            />
          ))}
          {largeCards.map((service) => (
            <ServiceCard 
              key={service.id} 
              data={service}
              className={`${service.size === 'large' ? 'lg:col-span-2' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileProjects;