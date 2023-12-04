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

import children1 from 'assets/children/children1.jpg'
import children2 from 'assets/children/children2.png'
import children3 from 'assets/children/children3.png'

import gadget1 from 'assets/gadgets/1.png'
import gadget2 from 'assets/gadgets/2.jpeg'
import gadget3 from 'assets/gadgets/3.jpg'
import gadget4 from 'assets/gadgets/4.png'

import computer1 from 'assets/computers/1.jpeg'
import computer2 from 'assets/computers/2.jpeg'
import computer3 from 'assets/computers/3.png'

import books1 from 'assets/books/1.jpeg'
import books2 from 'assets/books/2.jpeg'
import books3 from 'assets/books/3.jpeg'

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
          { id: 'tshirts',label: 'T-shirts', img: topsmen1 },
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
  {
    id: 'children',
    name: "Children",
    productsCategory: ["CHILDREN"],
    products: [
      {
        name: 'Apparel',
        images: [
          { id: 'children', label: 'Polo', img: children1 },
          { id: 'children', label: 'Shorts', img: children2 },
        ]
      },
      {
        name: 'toys',
        images: [
          { id: 'children', label: 'Stuff Toys', img: children3 },
        ]
      },
    ]
  },
  {
    id: 'gadget',
    name: "Gadget",
    productsCategory: ["GADGET"],
    products: [
      {
        name: 'phone',
        images: [
          { id: 'gadget', label: 'Android', img: gadget1 },
          { id: 'gadget', label: 'IPhone', img: gadget2 },
          // Add more gadget products as needed
        ]
      },
      {
        name: 'watches',
        images: [
          { id: 'gadget', label: 'Garmin', img: gadget3 },
          { id: 'gadget', label: 'Apple', img: gadget4 },
          // Add more gadget products as needed
        ]
      },
    ]
  },
  {
    id: 'computer',
    name: "Computer",
    productsCategory: ["COMPUTER"],
    products: [
      {
        name: 'computer',
        images: [
          { id: 'computer', label: 'Laptops', img: computer1 },
          { id: 'computer', label: 'Desktops', img: computer2 },
          { id: 'computer', label: 'Computer Accessories', img: computer3 },
          // Add more computer products as needed
        ]
      },
    ]
  },
  {
    id: 'books',
    name: "Books",
    productsCategory: ["BOOKS"],
    products: [
      {
        name: 'books',
        images: [
          { id: 'books', label: 'Fiction', img: books1 },
          { id: 'books', label: 'Non-fiction', img: books2 },
          { id: 'books', label: 'Children\'s Books', img: books3 },
          // Add more book products as needed
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
