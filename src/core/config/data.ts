export const bannerHome = [
  { image: '/assets/images/banners/promotional.jpg' },
  { image: '/assets/images/banners/promotional2.jpg' }
];

export const offerProducts = [
  {
    id: 1,
    name: 'Xiaomi Redmi Note 13 Pro 4G Dual SIM 256 GB azul 8 GB RAM',
    image: '/assets/images/products/phone.webp',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio accusamus accusantium, eius omnis dolorem quia vitae quidem vero fuga illum exercitationem.',
    price: 800000,
    discount: 10,
    stock: 10
  },
  {
    id: 2,
    name: 'Xiaomi Redmi Note 13 Lite 4G Dual SIM 128 GB gris 6 GB RAM',
    image: '/assets/images/products/phone.webp',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio accusamus accusantium, eius omnis dolorem quia vitae quidem vero fuga illum exercitationem.',
    price: 700000,
    discount: 10
  },
  {
    id: 3,
    name: 'Xiaomi Redmi Note 13 5G Dual SIM 256 GB verde 8 GB RAM',
    image: '/assets/images/products/phone.webp',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio accusamus accusantium, eius omnis dolorem quia vitae quidem vero fuga illum exercitationem.',
    price: 850000,
    discount: 10
  },
  {
    id: 4,
    name: 'Xiaomi Redmi Note 13 Max 4G Dual SIM 512 GB negro 12 GB RAM',
    image: '/assets/images/products/phone.webp',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio accusamus accusantium, eius omnis dolorem quia vitae quidem vero fuga illum exercitationem.',
    price: 1000000,
    discount: 10
  },
  {
    id: 5,
    name: 'Xiaomi Redmi Note 13 4G Dual SIM 256 GB blanco 8 GB RAM',
    image: '/assets/images/products/phone.webp',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio accusamus accusantium, eius omnis dolorem quia vitae quidem vero fuga illum exercitationem.',
    price: 750000,
    discount: 10
  },
  {
    id: 6,
    name: 'Xiaomi Redmi Note 13 4G Dual SIM 256 GB blanco 8 GB RAM',
    image: '/assets/images/products/phone.webp',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio accusamus accusantium, eius omnis dolorem quia vitae quidem vero fuga illum exercitationem.',
    price: 750000,
    discount: 10
  },
  {
    id: 7,
    name: 'Xiaomi Redmi Note 13 4G Dual SIM 256 GB blanco 8 GB RAM',
    image: '/assets/images/products/phone.webp',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio accusamus accusantium, eius omnis dolorem quia vitae quidem vero fuga illum exercitationem.',
    price: 750000,
    discount: 10
  },
  {
    id: 8,
    name: 'Xiaomi Redmi Note 13 4G Dual SIM 256 GB blanco 8 GB RAM',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio accusamus accusantium, eius omnis dolorem quia vitae quidem vero fuga illum exercitationem.',
    image: '/assets/images/products/phone.webp',
    price: 750000,
    discount: 10
  }
];

export const categories = [
  {
    id: 1,
    nombre: 'Electrónica',
    imagen: '/assets/images/products/phone.webp'
  },
  {
    id: 2,
    nombre: 'Ropa',
    imagen: '/assets/images/products/phone.webp'
  },
  {
    id: 3,
    nombre: 'Hogar y Jardín',
    imagen: '/assets/images/products/phone.webp'
  },
  {
    id: 4,
    nombre: 'Deportes',
    imagen: '/assets/images/products/phone.webp'
  },
  {
    id: 5,
    nombre: 'Belleza',
    imagen: '/assets/images/products/phone.webp'
  },
  {
    id: 6,
    nombre: 'Juguetes',
    imagen: '/assets/images/products/phone.webp'
  },
  {
    id: 7,
    nombre: 'Libros',
    imagen: '/assets/images/products/phone.webp'
  },
  {
    id: 8,
    nombre: 'Accesorios de Moda',
    imagen: '/assets/images/products/phone.webp'
  },
  {
    id: 9,
    nombre: 'Calzado',
    imagen: '/assets/images/products/phone.webp'
  },
  {
    id: 10,
    nombre: 'Salud y Bienestar',
    imagen: '/assets/images/products/phone.webp'
  },
  {
    id: 11,
    nombre: 'Automóviles',
    imagen: '/assets/images/products/phone.webp'
  },
  {
    id: 12,
    nombre: 'Música',
    imagen: '/assets/images/products/phone.webp'
  },
  {
    id: 14,
    nombre: 'Tecnología',
    imagen: '/assets/images/products/phone.webp'
  },
  {
    id: 15,
    nombre: 'Fitness',
    imagen: '/assets/images/products/phone.webp'
  }
];

export const responsiveBannerHome = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export const responsiveOffers = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  }
};

// export const responsiveOffers = {
//   largeDesktop2x: {
//     breakpoint: { max: 1920, min: 1536 },
//     items: 5,
//     slidesToSlide: 1 // opcional, por defecto 1.
//   },
//   largeDesktop: {
//     breakpoint: { max: 1536, min: 1280 },
//     items: 3,
//     slidesToSlide: 1 // opcional, por defecto 1.
//   },
//   desktop: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 3,
//     slidesToSlide: 1 // opcional, por defecto 1.
//   },
//   tablet: {
//     breakpoint: { max: 768, min: 640 },
//     items: 2,
//     slidesToSlide: 1 // opcional, por defecto 1.
//   },
//   mobile: {
//     breakpoint: { max: 640, min: 0 },
//     items: 1,
//     slidesToSlide: 1 // opcional, por defecto 1.
//   }
// };

export const responsiveTrending = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    image: 'https://picsum.photos/200/300',
    description: 'This is a description of product 1',
    category: 'Electronics',
    rating: 4.5,
    stock: 10,
    discount: 10
  }
];
