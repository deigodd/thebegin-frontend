export interface ProfileData {
    header: {
      name: string;
      subtitle: string;
      description: string;
      profileImage: string;
      backgroundImage: string;
      quote: string;
    };
    // Puedes agregar más secciones aquí para otros componentes
  }
  export const profileData: ProfileData = {
    header: {
      name: "Angela",
      subtitle: "AMANTE DE LA NATURALEZA",
      description: "Llevo adelante este emprendimiento, que me llena de orgullo desde hace más de 10 años.",
      profileImage: "https://picsum.photos/seed/picsum/200/300",
      backgroundImage: "https://picsum.photos/seed/picsum/200/300",
      quote: "Un sueño no se hace realidad por arte de magia, necesita determinación y mucho trabajo"
    },
    // Otras secciones
  };