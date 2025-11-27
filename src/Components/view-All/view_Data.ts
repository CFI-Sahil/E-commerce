import Jewellery from "../../assets/Trending-Jewelery.jpg";
import Jewellery2 from "../../assets/2.jpg";
import Jewellery3 from "../../assets/5.jpg";
import Jewellery4 from "../../assets/3.jpg";
import Jewellery5 from "../../assets/4.jpg";
import Jewellery6 from "../../assets/6.jpg";
import Jewellery7 from "../../assets/7.jpg";
import Jewellery8 from "../../assets/8.jpg";
import Jewellery9 from "../../assets/9.jpg";
import Jewellery10 from "../../assets/10.jpg";
import Jewellery11 from "../../assets/11.jpg";
import Jewellery12 from "../../assets/12.jpg";

import Purse from "../../assets/Top-Deals.jpg";
import Purse2 from "../../assets/B2.jpg";
import Purse3 from "../../assets/B5.jpg";
import Purse4 from "../../assets/B3.jpg";
import Purse5 from "../../assets/B4.jpg";
import Purse6 from "../../assets/Top-Deals.jpg";

import Perfume from "../../assets/Top-perfume.jpg";
import Perfume2 from "../../assets/P11.jpg";
import Perfume3 from "../../assets/P12.jpg";
import Perfume4 from "../../assets/P10.jpg";
import Perfume5 from "../../assets/P9.jpg";
import Perfume6 from "../../assets/P8.jpg";
import Perfume7 from "../../assets/P7.jpg";
import Perfume8 from "../../assets/P6.jpg";
import Perfume9 from "../../assets/P5.jpg";
import Perfume10 from "../../assets/P4.jpg";
import Perfume11 from "../../assets/P3.jpg";
import Perfume12 from "../../assets/P2.jpg";

import Watch from "../../assets/Top-Watches.jpg";
import Watch2 from "../../assets/W11.jpg";
import Watch3 from "../../assets/W12.jpg";
import Watch4 from "../../assets/W10.jpg";
import Watch5 from "../../assets/W9.jpg";
import Watch6 from "../../assets/W8.jpg";
import Watch7 from "../../assets/W7.jpg";
import Watch8 from "../../assets/W6.jpg";
import Watch9 from "../../assets/W5.jpg";
import Watch10 from "../../assets/W4.jpg";
import Watch11 from "../../assets/W3.jpg";
import Watch12 from "../../assets/W2.jpg";

export interface ProductItem {
  id: number;
  name: string;
  image: string;
  price: number | string;
  offer:number | string;
  line:number | string;
  category: string;
}

export const viewData: ProductItem[] = [
    // blockbuster deal section
  { id: 1, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'blockbuster', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 2, name: "Striped Detail Faux-Leather Bag", image: Purse, category:'blockbuster', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 3, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'blockbuster', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 4, name: "Multicolor Tiered Jhumka", image: Watch, category:'blockbuster', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 5, name: "Striped Detail Faux-Leather Bag", image: Purse2, category:'blockbuster', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 6, name: "Geometric Bottle Gold Cap P...", image: Purse3, category:'blockbuster', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 7, name: "Multicolor Tiered Jhumka", image: Jewellery2, category:'blockbuster', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 8, name: "Striped Detail Faux-Leather Bag", image: Jewellery3, category:'blockbuster', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 9, name: "Geometric Bottle Gold Cap P...", image: Perfume2, category:'blockbuster', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 10, name: "Multicolor Tiered Jhumka", image: Perfume3, category:'blockbuster', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 11, name: "Striped Detail Faux-Leather Bag", image: Watch2, category:'blockbuster', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 12, name: "Geometric Bottle Gold Cap P...", image: Watch3, category:'blockbuster', price:"₹600", offer:"20% Off", line:"₹800" },

    //   Top deals section
  { id: 13, name: "Striped Detail Faux-Leather Bag", image: Purse, category:'topdeals', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 14, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'topdeals', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 15, name: "Striped Detail Faux-Leather Bag", image: Purse2, category:'topdeals', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 16, name: "Geometric Bottle Gold Cap P...", image: Perfume3, category:'topdeals', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 17, name: "Striped Detail Faux-Leather Bag", image: Purse3, category:'topdeals', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 18, name: "Geometric Bottle Gold Cap P...", image: Perfume3, category:'topdeals', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 19, name: "Striped Detail Faux-Leather Bag", image: Purse4, category:'topdeals', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 20, name: "Geometric Bottle Gold Cap P...", image: Perfume4, category:'topdeals', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 21, name: "Striped Detail Faux-Leather Bag", image: Purse5, category:'topdeals', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 22, name: "Geometric Bottle Gold Cap P...", image: Perfume5, category:'topdeals', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 23, name: "Striped Detail Faux-Leather Bag", image: Purse6, category:'topdeals', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 24, name: "Geometric Bottle Gold Cap P...", image: Perfume6, category:'topdeals', price:"₹600", offer:"20% Off", line:"₹800" },

    //   Trending jewellery section 
    { id: 25, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 26, name: "Multicolor Tiered Jhumka", image: Jewellery2, category:'jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 27, name: "Multicolor Tiered Jhumka", image: Jewellery3, category:'jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 28, name: "Multicolor Tiered Jhumka", image: Jewellery4, category:'jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 29, name: "Multicolor Tiered Jhumka", image: Jewellery5, category:'jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 30, name: "Multicolor Tiered Jhumka", image: Jewellery6, category:'jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 31, name: "Multicolor Tiered Jhumka", image: Jewellery7, category:'jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 32, name: "Multicolor Tiered Jhumka", image: Jewellery8, category:'jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 33, name: "Multicolor Tiered Jhumka", image: Jewellery9, category:'jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 34, name: "Multicolor Tiered Jhumka", image: Jewellery10, category:'jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 35, name: "Multicolor Tiered Jhumka", image: Jewellery11, category:'jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 36, name: "Multicolor Tiered Jhumka", image: Jewellery12, category:'jewellery', price:"₹600", offer:"20% Off", line:"₹800" },

    //   Top perfumes section
    { id: 37, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'perfume', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 38, name: "Geometric Bottle Gold Cap P...", image: Perfume2, category:'perfume', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 39, name: "Geometric Bottle Gold Cap P...", image: Perfume3, category:'perfume', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 40, name: "Geometric Bottle Gold Cap P...", image: Perfume4, category:'perfume', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 41, name: "Geometric Bottle Gold Cap P...", image: Perfume5, category:'perfume', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 42, name: "Geometric Bottle Gold Cap P...", image: Perfume6, category:'perfume', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 43, name: "Geometric Bottle Gold Cap P...", image: Perfume7, category:'perfume', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 44, name: "Geometric Bottle Gold Cap P...", image: Perfume8, category:'perfume', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 45, name: "Geometric Bottle Gold Cap P...", image: Perfume9, category:'perfume', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 46, name: "Geometric Bottle Gold Cap P...", image: Perfume10, category:'perfume', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 47, name: "Geometric Bottle Gold Cap P...", image: Perfume11, category:'perfume', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 48, name: "Geometric Bottle Gold Cap P...", image: Perfume12, category:'perfume', price:"₹600", offer:"20% Off", line:"₹800" },

    //   Top watches section
    { id: 49, name: "Classic Analog Watch", image: Watch, category:'watch', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 50, name: "Classic Analog Watch", image: Watch2, category:'watch', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 51, name: "Classic Analog Watch", image: Watch3, category:'watch', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 52, name: "Classic Analog Watch", image: Watch4, category:'watch', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 53, name: "Classic Analog Watch", image: Watch5, category:'watch', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 54, name: "Classic Analog Watch", image: Watch6, category:'watch', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 55, name: "Classic Analog Watch", image: Watch7, category:'watch', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 56, name: "Classic Analog Watch", image: Watch8, category:'watch', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 57, name: "Classic Analog Watch", image: Watch9, category:'watch', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 58, name: "Classic Analog Watch", image: Watch10, category:'watch', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 59, name: "Classic Analog Watch", image: Watch11, category:'watch', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 60, name: "Classic Analog Watch", image: Watch12, category:'watch', price:"₹600", offer:"20% Off", line:"₹800" },

 // under 299 section — change category to 'under-299'
    { id: 61, name: "Rose Gold Skeleton Automatic", image: Watch, category: '299store', price:"₹250", offer:"15% Off", line:"₹300" },
    { id: 62, name: "Rose Gold Skeleton Automatic", image: Perfume, category: '299store', price:"₹250", offer:"15% Off", line:"₹300" },
    { id: 63, name: "Rose Gold Skeleton Automatic", image: Perfume2, category: '299store', price:"₹250", offer:"15% Off", line:"₹300" },
    { id: 64, name: "Rose Gold Skeleton Automatic", image: Jewellery10, category: '299store', price:"₹250", offer:"15% Off", line:"₹300" },
    { id: 65, name: "Rose Gold Skeleton Automatic", image: Jewellery11, category: '299store', price:"₹250", offer:"15% Off", line:"₹300" },
    { id: 66, name: "Rose Gold Skeleton Automatic", image: Watch2, category: '299store', price:"₹250", offer:"15% Off", line:"₹300" },
    { id: 67, name: "Multicolor Tiered Jhumka", image: Jewellery, category: '299store', price:"₹250", offer:"20% Off", line:"₹800" },
    { id: 68, name: "Multicolor Tiered Jhumka", image: Perfume10, category: '299store', price:"₹250", offer:"20% Off", line:"₹800" },
    { id: 69, name: "Multicolor Tiered Jhumka", image: Jewellery, category: '299store', price:"₹250", offer:"20% Off", line:"₹800" },
    { id: 70, name: "Multicolor Tiered Jhumka", image: Watch10, category: '299store', price:"₹250", offer:"20% Off", line:"₹800" },
    { id: 71, name: "Multicolor Tiered Jhumka", image: Watch12, category: '299store', price:"₹250", offer:"20% Off", line:"₹800" },
    { id: 72, name: "Multicolor Tiered Jhumka", image: Jewellery, category: '299store', price:"₹250", offer:"20% Off", line:"₹800" },

];