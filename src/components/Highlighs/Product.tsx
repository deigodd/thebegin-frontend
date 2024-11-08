export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    imageUrl: string;
    category: string;
    rankingSales?: number;
  isLimited?: boolean;
}
  
export interface Timer {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const mockData = {
  timer: {
    days: 2,
    hours: 12,
    minutes: 15,
    seconds: 35
  },

  featuredProduct: {
    id: '1',
    name: 'VELA CELESTE CIELO',
    description: 'Presentada en un tazón de cerámica creado y pintado a mano con diseño exclusivo.',
    price: 15,
    originalPrice: 45,
    discount: 33,
    imageUrl: '/api/placeholder/600/400',
    category: 'Velas',
    isLimited: true
  },

  discountedProducts: [
    {
      id: 'bowl1',
      name: 'Bowl',
      description: 'Bowl decorativo artesanal',
      price: 25,
      originalPrice: 35,
      discount: 30,
      imageUrl: '/api/placeholder/400/300',
      category: 'Decoración',
    },
    {
      id: 'sueter1',
      name: 'Suéter',
      description: 'Suéter tejido a mano',
      price: 45,
      originalPrice: 60,
      discount: 25,
      imageUrl: '/api/placeholder/400/300',
      category: 'Ropa'
    },
    {
      id: 'ojotas1',
      name: 'Ojotas',
      description: 'Suéter tejido a mano',
      price: 7,
      originalPrice: 10,
      discount: 30,
      imageUrl: '/api/placeholder/400/300',
      category: 'Ropa'
    },
    {
      id: 'poleron1',
      name: 'Polerón',
      description: 'Polerón de lana, abrigador para tus frías tardes',
      price: 30,
      originalPrice: 60,
      discount: 50,
      imageUrl: '/api/placeholder/400/300',
      category: 'Ropa'
    }
  ],

  bestSellers: [
    {
      id: 'botella1',
      name: 'Botellas artesanales',
      description: 'Botellas artesanales con luz interior',
      price: 23,
      imageUrl: '/api/placeholder/400/300',
      category: 'Decoración'
    },
    {
      id: 'tetera1',
      name: 'Set de tetera + 2 tazas',
      description: 'Set de tetera y tazas entozadas',
      price: 35,
      imageUrl: '/api/placeholder/400/300',
      category: 'Cocina'
    }
  ]
};