import women from 'assets/category-thumbs/women.png';
import men from 'assets/category-thumbs/men.png';
import children from 'assets/category-thumbs/children.png';
import gadget from 'assets/category-thumbs/gadget.png';
import computer from 'assets/category-thumbs/computer.png';
import books from 'assets/category-thumbs/books.png';

export const categories = [
  {
    name: "Women's Apparel",
    image: women,
    route: "women"
  },
  {
    name: "Men's Apparel",
    image: men,
    route: "men",
  },
  {
    name: "Children's Apparel",
    image: children,
    route: "children"
  },
  {
    name: "Mobile & Gadgets",
    image: gadget,
    route: "gadget",
  },
  {
    name: "Computers & Accessories",
    image: computer,
    route: "computer",
  },
  {
    name: "Books",
    image: books,
    route: "books"
  }
];

export const categoryProducts = [
  {
    id: 'women',
    name: "Women's Apparel",
    productsCategory: ["DRESSES", "TOPS", "BOTTOMS", "SWEATERS & CARDIGANS"],
    products: [
      {
        name: 'dresses',
        images: [
          { id: 'shortdresses', label: 'Short Dresses', img: women },
          { label: 'Floral Dresses', img: men },
          { label: 'Elegant Dresses', img: men },
          { label: 'Boho Dresses', img: men },
          { label: 'Long Dresses', img: men },
        ]
      },
      {
        name: 'tops',
        images: [
          { label: 'Tank Tops', img: women },
          { label: 'Blouses', img: men },
          { label: 'T-Shirts', img: men },
          { label: 'Camisole', img: men },
          { label: 'Other Tops', img: men },
        ]
      },
      {
        name: 'bottoms',
        images: [
          { label: 'Jeans', img: women },
          { label: 'Denim Shorts', img: women },
          { label: 'Skirts', img: women },
          { label: 'Leggings', img: women },
          { label: 'Coords', img: men }
        ]
      },
      {
        name: 'sweaters & cardigans',
        images: [
          { label: 'Sweaters', img: women },
          { label: 'Cardigans', img: women },
          { label: 'Sweatpants', img: women },
          { label: 'Hoodies', img: women },
          { label: 'Jackets', img: men }
        ]
      },
    ]
  },
  {
    id: 'men',
    name: "Men's Apparel",
    productsCategory: ["TOPS", "BOTTOMS", "HOODIES & SWEATSHIRTS"],
    products: [
      {
        name: 'tops',
        images: [
          { label: 'Label9', img: women },
          { label: 'Label10', img: men }
        ]
      },
      {
        name: 'bottoms',
        images: [
          { label: 'Label11', img: women },
          { label: 'Label12', img: men }
        ]
      },
      {
        name: 'hoodies & sweatshirts',
        images: [
          { label: 'Label13', img: women },
          { label: 'Label14', img: men }
        ]
      },
    ]
  },
];

export const productsByCategory = [
  {
    category: 'dresses',
    subcategory: [
      {
        name: 'shortdresses',
        products: [
          {
            name: 'Floral Short Dress',
            img: 'https://picsum.photos/200/300?random=1'
          },
          {
            name: 'Elegant Short Dress',
            img: 'https://picsum.photos/200/300?random=2'
          },
          {
            name: 'Boho Short Dress',
            img: 'https://picsum.photos/200/300?random=3'
          },
          // Add more short dresses as needed
        ]
      },
      // Add more subcategories as needed
    ]
  },
  // Add more categories as needed
];


export const chatTile = [
  {
      img: computer,
      name: 'Brian',
      product: 'Computer'
  },
  {
    img: women,
    name: 'Andrew',
    product: 'Piso'
  },
  {
    img: men,
    name: 'John Cena',
    product: 'My Dress'
  }
]
