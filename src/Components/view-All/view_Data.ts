import Jewellery from "../../assets/Trending-Jewelery.jpg";
import Purse from "../../assets/Top-Deals.jpg";
import Perfume from "../../assets/Top-perfume.jpg";
import Watch from "../../assets/Top-Watches.jpg";

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
  { id: 4, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'blockbuster', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 5, name: "Striped Detail Faux-Leather Bag", image: Purse, category:'blockbuster', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 6, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'blockbuster', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 7, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'blockbuster', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 8, name: "Striped Detail Faux-Leather Bag", image: Purse, category:'blockbuster', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 9, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'blockbuster', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 10, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'blockbuster', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 11, name: "Striped Detail Faux-Leather Bag", image: Purse, category:'blockbuster', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 12, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'blockbuster', price:"₹600", offer:"20% Off", line:"₹800" },

    //   Top deals section
  { id: 13, name: "Striped Detail Faux-Leather Bag", image: Purse, category:'topdeals', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 14, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'topdeals', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 15, name: "Striped Detail Faux-Leather Bag", image: Purse, category:'topdeals', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 16, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'topdeals', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 17, name: "Striped Detail Faux-Leather Bag", image: Purse, category:'topdeals', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 18, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'topdeals', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 19, name: "Striped Detail Faux-Leather Bag", image: Purse, category:'topdeals', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 20, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'topdeals', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 21, name: "Striped Detail Faux-Leather Bag", image: Purse, category:'topdeals', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 22, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'topdeals', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 23, name: "Striped Detail Faux-Leather Bag", image: Purse, category:'topdeals', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 24, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'topdeals', price:"₹600", offer:"20% Off", line:"₹800" },

    //   Trending jewellery section 
    { id: 25, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 26, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 27, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 28, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 29, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 30, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 31, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 32, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 33, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 34, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 35, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 36, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'jewellery', price:"₹600", offer:"20% Off", line:"₹800" },

    //   Top perfumes section
    { id: 37, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'perfume', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 38, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'perfume', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 39, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'perfume', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 40, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'perfume', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 41, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'perfume', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 42, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'perfume', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 43, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'perfume', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 44, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'perfume', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 45, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'perfume', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 46, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'perfume', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 47, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'perfume', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 48, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'perfume', price:"₹600", offer:"20% Off", line:"₹800" },

    //   Top watches section
    { id: 49, name: "Classic Analog Watch", image: Watch, category:'watch', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 50, name: "Classic Analog Watch", image: Watch, category:'watch', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 51, name: "Classic Analog Watch", image: Watch, category:'watch', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 52, name: "Classic Analog Watch", image: Watch, category:'watch', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 53, name: "Classic Analog Watch", image: Watch, category:'watch', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 54, name: "Classic Analog Watch", image: Watch, category:'watch', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 55, name: "Classic Analog Watch", image: Watch, category:'watch', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 56, name: "Classic Analog Watch", image: Watch, category:'watch', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 57, name: "Classic Analog Watch", image: Watch, category:'watch', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 58, name: "Classic Analog Watch", image: Watch, category:'watch', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 59, name: "Classic Analog Watch", image: Watch, category:'watch', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 60, name: "Classic Analog Watch", image: Watch, category:'watch', price:"₹600", offer:"20% Off", line:"₹800" },

    //   under 299 section
    { id: 61, name: "Rose Gold Skeleton Automatic", image: Watch, category:'under299', price:"₹250", offer:"15% Off", line:"₹300" },
    { id: 62, name: "Rose Gold Skeleton Automatic", image: Watch, category:'under299', price:"₹250", offer:"15% Off", line:"₹300" },
    { id: 63, name: "Rose Gold Skeleton Automatic", image: Watch, category:'under299', price:"₹250", offer:"15% Off", line:"₹300" },
    { id: 64, name: "Rose Gold Skeleton Automatic", image: Watch, category:'under299', price:"₹250", offer:"15% Off", line:"₹300" },
    { id: 65, name: "Rose Gold Skeleton Automatic", image: Watch, category:'under299', price:"₹250", offer:"15% Off", line:"₹300" },
    { id: 66, name: "Rose Gold Skeleton Automatic", image: Watch, category:'under299', price:"₹250", offer:"15% Off", line:"₹300" },
    { id: 67, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'under299', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 68, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'under299', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 69, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'under299', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 70, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'under299', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 71, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'under299', price:"₹600", offer:"20% Off", line:"₹800" },
    { id: 72, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'under299', price:"₹600", offer:"20% Off", line:"₹800" },
];