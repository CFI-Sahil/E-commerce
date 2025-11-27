import Jewellery from "../../assets/Trending-Jewelery.jpg";
import Jewellery2 from "../../assets/2.jpg"
import Jewellery3 from "../../assets/3.jpg"
import Jewellery4 from "../../assets/4.jpg"
import Jewellery5 from "../../assets/5.jpg"

import Purse from "../../assets/Top-Deals.jpg";
import Purse2 from "../../assets/B2.jpg";
import Purse3 from "../../assets/B3.jpg";
import Purse4 from "../../assets/B4.jpg";
import Purse5 from "../../assets/B5.jpg";

import Perfume from "../../assets/P2.jpg";
import Perfume2 from "../../assets/P3.jpg";
import Perfume3 from "../../assets/P4.jpg";
import Perfume4 from "../../assets/P5.jpg";
import Perfume5 from "../../assets/P6.jpg";
import Perfume6 from "../../assets/P7.jpg";
import Perfume7 from "../../assets/P8.jpg";

import Watch from "../../assets/Top-Watches.jpg";
import Watch2 from "../../assets/W2.jpg";
import Watch3 from "../../assets/W3.jpg";
import Watch4 from "../../assets/W4.jpg";
import Watch5 from "../../assets/W5.jpg";
import Watch6 from "../../assets/W6.jpg";
import Watch7 from "../../assets/W7.jpg";
import Watch8 from "../../assets/W8.jpg";
import Watch9 from "../../assets/W9.jpg";

export interface ProductItem {
  id: number;
  name: string;
  image: string;
  price: number | string;
  offer:number | string;
  line:number | string;
  category: string;
}

export const productsData: ProductItem[] = [
  // Jewellery section
  { id: 1, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'Jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 2, name: "Multicolor Tiered Jhumka", image: Jewellery2, category:'Jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 3, name: "Multicolor Tiered Jhumka", image: Jewellery3, category:'Jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 4, name: "Multicolor Tiered Jhumka", image: Jewellery4, category:'Jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 5, name: "Multicolor Tiered Jhumka", image: Jewellery5, category:'Jewellery', price:"₹600", offer:"20% Off", line:"₹800" },

  // Purse section

  { id: 6, name: "Striped Detail Faux-Leather Bag", image: Purse, category:'Purse', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 7, name: "Striped Detail Faux-Leather Bag", image: Purse2, category:'Purse', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 8, name: "Striped Detail Faux-Leather Bag", image: Purse3, category:'Purse', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 9, name: "Striped Detail Faux-Leather Bag", image: Purse4, category:'Purse', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 10, name: "Striped Detail Faux-Leather Bag", image: Purse5, category:'Purse', price:"₹600", offer:"20% Off", line:"₹800" },

  // Perfume section

  { id: 11, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'Perfume', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 12, name: "Geometric Bottle Gold Cap P...", image: Perfume2, category:'Perfume', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 13, name: "Geometric Bottle Gold Cap P...", image: Perfume3, category:'299-Perfume', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 14, name: "Geometric Bottle Gold Cap P...", image: Perfume4, category:'Perfume', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 15, name: "Geometric Bottle Gold Cap P...", image: Perfume5, category:'Perfume', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 16, name: "Geometric Bottle Gold Cap P...", image: Perfume6, category:'Perfume', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 17, name: "Striped Detail Faux-Leather Bag", image: Perfume7, category:'Perfume', price:"₹299", offer:"20% Off", line:"₹800" },

  // Watch section
  
  { id: 18, name: "Rose Gold Skeleton Automatic", image: Watch, category:'Watch', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 19, name: "Striped Detail Faux-Leather Bag", image: Watch2, category:'Watch', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 20, name: "Rose Gold Skeleton Automatic", image: Watch3, category:'Watch', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 21, name: "Geometric Bottle Gold Cap P...", image: Watch4, category:'Watch', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 22, name: "Striped Detail Faux-Leather Bag", image: Watch5, category:'Watch', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 23, name: "Multicolor Tiered Jhumka", image: Watch6, category:'Watch', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 24, name: "Rose Gold Skeleton Automatic", image: Watch7, category:'Watch', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 25, name: "Multicolor Tiered Jhumka", image: Watch8, category:'Watch', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 26, name: "Multicolor Tiered Jhumka", image: Watch9, category:'Watch', price:"₹299", offer:"20% Off", line:"₹800" },

  //Under 299 section

  { id: 27, name: "Multicolor Tiered Jhumka", image: Watch9, category:'299store', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 28, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'299store', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 29, name: "Multicolor Tiered Jhumka", image: Purse2, category:'299store', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 30, name: "Multicolor Tiered Jhumka", image: Watch2, category:'299store', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 31, name: "Multicolor Tiered Jhumka", image: Jewellery3, category:'299store', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 31, name: "Multicolor Tiered Jhumka", image: Purse3, category:'299store', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 33, name: "Multicolor Tiered Jhumka", image: Watch3, category:'299store', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 34, name: "Multicolor Tiered Jhumka", image: Watch5, category:'299store', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 35, name: "Multicolor Tiered Jhumka", image: Purse4, category:'299store', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 36, name: "Multicolor Tiered Jhumka", image: Jewellery4, category:'299store', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 37, name: "Multicolor Tiered Jhumka", image: Purse, category:'299store', price:"₹299", offer:"20% Off", line:"₹800" },
  
];