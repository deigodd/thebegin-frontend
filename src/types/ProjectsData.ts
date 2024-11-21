export interface ServiceCardData {
    id: string;
    title: string;
    image: string;
    size?: 'small' | 'large';
    description?: string;
    link?: string;
  }
  
export interface ProjectsData {
    title?: string;
    subtitle?: string;
    services: ServiceCardData[];
}
  
export const projectsData: ProjectsData = {
    title: "Nuestros Productos",
    subtitle: "Descubre nuestra variedad de productos orgánicos",
    services: [
      {
        id: "macetas-organicas",
        title: "MACETAS ORGÁNICAS",
        image: "/api/placeholder/300/300",
        size: "small",
        description: "Macetas biodegradables para tus plantas"
      },
      {
        id: "plantines",
        title: "PLANTINES",
        image: "/api/placeholder/300/300",
        size: "small",
        description: "Variedad de plantines orgánicos"
      },
      {
        id: "frascos-especias",
        title: "FRASCOS DE ESPECIAS",
        image: "/api/placeholder/300/300",
        size: "small",
        description: "Especias frescas y aromáticas"
      },
      {
        id: "semillas",
        title: "SEMILLAS",
        image: "/api/placeholder/300/300",
        size: "small",
        description: "Semillas orgánicas certificadas"
      },
      {
        id: "cuando-cosechar",
        title: "CUANDO COSECHAR",
        image: "/api/placeholder/600/400",
        size: "large",
        description: "Guía completa de cosecha"
      },
      {
        id: "cajoneras-cultivo",
        title: "CAJONERAS DE CULTIVO",
        image: "/api/placeholder/600/400",
        size: "large",
        description: "Sistemas de cultivo vertical"
      },
    ]
};
  