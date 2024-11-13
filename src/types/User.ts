export interface User {
    id: string;
    name: string;
    age: number;
    bio?: string;
    profileImage?: string;
    interests?: string[];
    location?: string;
    nationality?: string;
    countryCode?: string; // Para la bandera, ej: "ES", "MX", "AR"
  }
  
  export const MOCK_USERS: User[] = [
    {
      id: '1',
      name: 'María',
      age: 25,
      bio: 'Soy responsable de marketing en una startup. Me gusta abrir mi mente a nuevas experiencias, personas y culturas. Vivo la vida de manera positiva y soy aventurera.',
      profileImage: 'https://i.pravatar.cc/150?u=aaron',
      interests: ['Viajes', 'Fotografía', 'Música'],
      location: 'Madrid',
      nationality: 'Española',
      countryCode: "ES"
    },
    {
      id: '3',
      name: 'Lucía',
      age: 30,
      bio: 'Apasionada por la cocina y el bienestar. Me encanta explorar nuevos sabores y recetas. Estoy en constante búsqueda de una vida más saludable y equilibrada.',
      profileImage: 'https://i.pravatar.cc/150?u=lucia',
      interests: ['Cocina', 'Bienestar', 'Deportes'],
      location: 'Valencia',
      nationality: 'Española',
      countryCode: "ES"
    },
    {
      id: '5',
      name: 'Camila',
      age: 26,
      bio: 'Soy diseñadora de moda y me encanta experimentar con nuevos estilos y tendencias. Vivo entre telas, colores y texturas, siempre buscando mi próxima inspiración.',
      profileImage: 'https://i.pravatar.cc/150?u=perez',
      interests: ['Moda', 'Diseño', 'Viajes'],
      location: 'Buenos Aires',
      nationality: 'Argentina',
      countryCode: "AR"
    },
    {
      id: '6',
      name: 'Valentina',
      age: 27,
      bio: 'Vivo la vida con una mentalidad positiva y siempre estoy buscando maneras de mejorarme. Me encanta viajar, conocer nuevas culturas y aprender idiomas.',
      profileImage: 'https://i.pravatar.cc/150?u=alexa',
      interests: ['Viajes', 'Idiomas', 'Cultura'],
      location: 'Santiago',
      nationality: 'Chilena',
      countryCode: "CL"
    },
    {
      id: '7',
      name: 'Gabriela',
      age: 29,
      bio: 'Soy psicóloga y me apasiona ayudar a las personas a alcanzar su bienestar mental. También disfruto de la música en vivo, el cine independiente y la naturaleza.',
      profileImage: 'https://i.pravatar.cc/150?u=gabriela',
      interests: ['Psicología', 'Música', 'Cine'],
      location: 'Lima',
      nationality: 'Peruana',
      countryCode: "PE"
    },
    {
      id: '8',
      name: 'Renata',
      age: 24,
      bio: 'Trabajo en comunicación y marketing digital. Mi pasión es crear contenido auténtico y conectar con personas de diferentes partes del mundo.',
      profileImage: 'https://i.pravatar.cc/150?u=diego',
      interests: ['Marketing Digital', 'Redes Sociales', 'Fotografía'],
      location: 'Ciudad de México',
      nationality: 'Mexicana',
      countryCode: "MX"
    },
    {
      id: '8',
      name: 'Renata',
      age: 24,
      bio: 'Trabajo en comunicación y marketing digital. Mi pasión es crear contenido auténtico y conectar con personas de diferentes partes del mundo.',
      profileImage: 'https://i.pravatar.cc/150?u=diego',
      interests: ['Marketing Digital', 'Redes Sociales', 'Fotografía'],
      location: 'Ciudad de México',
      nationality: 'Mexicana',
      countryCode: "MX"
    }
  ];
  