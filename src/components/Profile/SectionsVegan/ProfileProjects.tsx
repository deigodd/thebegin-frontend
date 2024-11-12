import { useState } from "react";
import { ServiceCard } from "../Hooks/ServiceCard";
import { ProjectsData } from "../../../data/ProjectsData";
import { Title } from "../Hooks/Title";
import BackgroundSettings from "../Hooks/BackgroundSectionSettings";

interface ProfileProjectsProps {
  data: ProjectsData;
}

const ProfileProjects = ({ data }: ProfileProjectsProps) => {
  const [background, setBackground] = useState({
    color: '#ffffff',
    image: null as string | null
  });

  //const smallCards = data.services.filter((service) => service.size === "small");
  //const largeCards = data.services.filter((service) => service.size === "large");

  return (
    <section 
      className="relative min-h-screen w-full py-16"
      style={{
        backgroundColor: background.color,
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
          title={data.title || "Nuestros Productos"}
          subtitle={data.subtitle || "Descubre nuestra variedad de productos orgánicos"}
          color={background.image ? 'light' : 'dark'}
        />

        {/* Sección para cards*/}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.services.map((service) => (
            <ServiceCard 
              key={service.id} 
              data={service}
              className={`${service.size === 'large' ? 'lg:col-span-2' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileProjects;