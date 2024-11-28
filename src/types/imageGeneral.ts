export type ImageCategory = 
"projects" | "headerBackground" | "marketplace" | "contact" | 
"membership" | "presentation" | "news" | "service" | "truque";

// Interface para los datos de cada imagen
interface ImageData {
  imageUrl: string;
  altText: string;
}

// Objeto que contiene las imágenes por categoría
export const imageGeneral: Record<ImageCategory, ImageData> = {

  projects: {
    imageUrl: "https://i.pinimg.com/736x/9f/de/67/9fde671de96337f60fb79ab575e7acd3.jpg",
    altText: "Vegetales frescos",
  },
  headerBackground: {
    imageUrl: "https://cdn.pixabay.com/photo/2019/06/11/13/33/salad-4267063_1280.jpg",
    altText: "Imagen principal del header",
  },
  marketplace: {
    imageUrl: "https://example.com/marketplace.jpg",
    altText: "Marketplace de productos ecológicos",
  },
  contact: {
    imageUrl: "https://example.com/contact.jpg",
    altText: "Formulario de contacto",
  },
  membership: {
    imageUrl: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "Membresia",
  },
  presentation: {
    imageUrl: "https://example.com/presentation.jpg",
    altText: "Presentación del proyecto",
  },
  news: {
    imageUrl: "https://example.com/news.jpg",
    altText: "Últimas noticias",
  },
  service: {
    imageUrl: "https://example.com/service.jpg",
    altText: "Servicios ofrecidos",
  },
  truque: {
    imageUrl: "https://example.com/truque.jpg",
    altText: "Intercambio de productos",
  },
};
