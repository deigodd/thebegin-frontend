export interface PresentationCard {
  title?: string;
  content?: string;
  bgColor?: string;
  titleTextColor?: string;
  contentTextColor?: string;
  image?: string;
  imageAlt?: string;
}

const presentationType = [
  {
    title: "SEMILLAS",
    content: "Mis semillas son producidas con técnicas de cultivo que protegen el medio ambiente. No están tratadas con venenos, pueden ser manipuladas con tranquilidad, incluso por niños.",
    bgColor: "bg-tbc-pilargreen-400",
    titleTextColor: "text-white",
    contentTextColor: "text-black",
  },
  {
    image: "https://cdn.pixabay.com/photo/2017/02/28/11/53/spices-2105541_1280.jpg",
    imageAlt: "Semillas y plantas pequeñas",
  },
  {
    image: "https://cdn.pixabay.com/photo/2022/06/02/18/22/ramen-7238665_1280.jpg",
    imageAlt: "Preparación de vegetales",
  },
  {
    title: "HORTALIZAS Y VERDURAS",
    content: "Produzco alimentos frescos y saludables, con la tranquilidad de saber que están cultivados pensando en el bienestar de todos.",
    bgColor: "bg-tbc-pilarbrown-200",
    titleTextColor: "text-white",
    contentTextColor: "text-black",
  },
  {
    bgColor: "bg-gray-100",
    content: "ORGÁNICO",
    titleTextColor: "text-[#96B37E]",
    contentTextColor: "text-[#D4A373]",
  },
  {
    title: "AROMÁTICAS Y ESPECIAS",
    content: "Cuento con una amplia variedad de aromáticas y especias.",
    bgColor: "bg-[#DBDFB7]",
    titleTextColor: "text-[#A77F63]",
    contentTextColor: "text-black",
  },
  {
    image: "https://cdn.pixabay.com/photo/2019/05/07/09/01/spices-4185324_1280.jpg",
    imageAlt: "Especias en cucharas de madera",
  },
];

export default presentationType;




/*
export interface CardBase {
  span: string;
  bgColor: string;
}

export interface TextCard extends CardBase {
  type: 'text';
  title: string;
  content: string;
  titleTextColor: string;
  contentTextColor: string;
}

export interface ImageCard extends CardBase {
  type: 'image';
  image: string;
  imageAlt: string;
}

export interface OrganicCard extends CardBase {
  type: 'organic';
  title?: {
    text: string;
    color: string;
  };
  subtitle?: {
    text: string;
    color: string;
  };
}

export type Card = TextCard | ImageCard | OrganicCard;

export interface SectionConfig {
  layout: string;
  cards: Card[];
}

export interface PresentationData {
  sections: {
    [key: string]: SectionConfig;
  };
}
*/