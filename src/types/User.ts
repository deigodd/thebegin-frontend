import imgP1 from '../assets/fotografa.png'
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
      name: 'Sofía Monteverde',
      age: 25,
      bio: 'Soy licenciada en comunicación, con el fin de crecer y brindar un producto mejor. Durante los últimos 4 años realicé numerosos cursos con importantes profesionales de la fotografía. Hoy te ofrezco mi mirada para guardar tus recuerdos para siempre.',
      profileImage: imgP1,
      interests: ['Viajes', 'Fotografía', 'Música'],
      location: 'Madrid',
      nationality: 'Española',
      countryCode: "ES"
    },
    {
      id: '2',
      name: 'Amalia Ribero',
      age: 30,
      bio: 'Amante de las plantas, la huerta y el jardín. En mi tienda producimos nuesttros propios alimentos y semillas.',
      profileImage: 'https://cdn.pixabay.com/photo/2018/08/04/20/48/woman-3584435_1280.jpg',
      interests: ['Plantas', 'Bienestar', 'Huertas', 'Flores'],
      location: 'Santiago',
      nationality: 'Chilena',
      countryCode: "CL"
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
      id: '9',
      name: 'Andrea',
      age: 24,
      bio: 'Trabajo en comunicación y marketing digital. Mi pasión es crear contenido auténtico y conectar con personas de diferentes partes del mundo.',
      profileImage: 'https://i.pravatar.cc/150?u=gabi',
      interests: ['Marketing Digital', 'Redes Sociales', 'Fotografía'],
      location: 'Ciudad de México',
      nationality: 'Argentina',
      countryCode: "AR"
    }
  ];
  