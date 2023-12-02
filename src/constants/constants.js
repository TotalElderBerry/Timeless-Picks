import women from 'assets/category-thumbs/women.png';
import men from 'assets/category-thumbs/men.png';
import children from 'assets/category-thumbs/children.png';
import gadget from 'assets/category-thumbs/gadget.png';
import computer from 'assets/category-thumbs/computer.png';
import books from 'assets/category-thumbs/books.png';

import dress1 from 'assets/womens-apparel/1.png'
import dress2 from 'assets/womens-apparel/2.png'
import dress3 from 'assets/womens-apparel/3.png'
import dress4 from 'assets/womens-apparel/4.png'
import dress5 from 'assets/womens-apparel/5.png'
import tops1 from 'assets/womens-apparel/6.png'
import tops2 from 'assets/womens-apparel/7.png'
import tops3 from 'assets/womens-apparel/8.png'
import tops4 from 'assets/womens-apparel/9.png'
import tops5 from 'assets/womens-apparel/10.png'
import bottoms1 from 'assets/womens-apparel/11.png'
import bottoms2 from 'assets/womens-apparel/12.png'
import bottoms3 from 'assets/womens-apparel/13.png'
import bottoms4 from 'assets/womens-apparel/14.png'
import bottoms5 from 'assets/womens-apparel/15.png'
import sc1 from 'assets/womens-apparel/16.png'
import sc2 from 'assets/womens-apparel/17.png'
import sc3 from 'assets/womens-apparel/18.png'
import sc4 from 'assets/womens-apparel/19.png'
import sc5 from 'assets/womens-apparel/20.png'

import topsmen1 from 'assets/mens-apparel/1.png'
import topsmen2 from 'assets/mens-apparel/2.png'
import topsmen3 from 'assets/mens-apparel/3.png'
import bottomsmen1 from 'assets/mens-apparel/4.png'
import bottomsmen2 from 'assets/mens-apparel/5.png'
import bottomsmen3 from 'assets/mens-apparel/6.png'
import bottomsmen4 from 'assets/mens-apparel/7.png'
import hs1 from 'assets/mens-apparel/8.png'
import hs2 from 'assets/mens-apparel/9.png'
import hs3 from 'assets/mens-apparel/10.png'

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
          { id: 'shortdresses', label: 'Short Dresses', img: dress1 },
          { id: 'shortdresses',label: 'Floral Dresses', img: dress2 },
          { id: 'shortdresses',label: 'Elegant Dresses', img: dress3 },
          { id: 'shortdresses',label: 'Boho Dresses', img: dress4 },
          { id: 'shortdresses',label: 'Long Dresses', img: dress5 },
        ]
      },
      {
        name: 'tops',
        images: [
          { id: 'shortdresses',label: 'Tank Tops', img: tops1 },
          { id: 'shortdresses',label: 'Blouses', img: tops2 },
          { id: 'shortdresses',label: 'T-Shirts', img: tops3 },
          { id: 'shortdresses',label: 'Camisole', img: tops4 },
          { id: 'shortdresses',label: 'Other Tops', img: tops5 },
        ]
      },
      {
        name: 'bottoms',
        images: [
          { id: 'shortdresses',label: 'Jeans', img: bottoms1 },
          { id: 'shortdresses',label: 'Denim Shorts', img: bottoms2 },
          { id: 'shortdresses',label: 'Skirts', img: bottoms3 },
          { id: 'shortdresses',label: 'Leggings', img: bottoms4 },
          { id: 'shortdresses',label: 'Coords', img: bottoms5 }
        ]
      },
      {
        name: 'sweaters & cardigans',
        images: [
          { id: 'shortdresses',label: 'Sweaters', img: sc1 },
          { id: 'shortdresses',label: 'Cardigans', img: sc2 },
          { id: 'shortdresses',label: 'Sweatpants', img: sc3 },
          { id: 'shortdresses',label: 'Hoodies', img: sc4 },
          { id: 'shortdresses',label: 'Jackets', img: sc5 }
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
          { id: 'shortdresses',label: 'T-shirts', img: topsmen1 },
          { id: 'shortdresses',label: 'Polo Shirts', img: topsmen2 },
          { id: 'shortdresses',label: 'Tank Tops', img: topsmen3 }
        ]
      },
      {
        name: 'bottoms',
        images: [
          { id: 'shortdresses',label: 'Shorts', img: bottomsmen1 },
          { id: 'shortdresses',label: 'Trousers', img: bottomsmen2 },
          { id: 'shortdresses',label: 'Jeans', img: bottomsmen3 },
          { id: 'shortdresses',label: 'Sweatpants', img: bottomsmen4 }
        ]
      },
      {
        name: 'hoodies & sweatshirts',
        images: [
          { id: 'shortdresses',label: 'Hoodies', img: hs1 },
          { id: 'shortdresses',label: 'Sweatshirts', img: hs2 },
          { id: 'shortdresses',label: 'Sweater', img: hs3 }
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
