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

export const productsData: ProductItem[] = [
  { id: 1, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'Jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 2, name: "Striped Detail Faux-Leather Bag", image: Purse, category:'Purse', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 3, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'Perfume', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 4, name: "Rose Gold Skeleton Automatic", image: Watch, category:'Watch', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 5, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'299store', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 6, name: "Striped Detail Faux-Leather Bag", image: Watch, category:'299store', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 7, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'299-store', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 8, name: "Multicolor Tiered Jhumka", image: Jewellery, category:'Jewellery', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 9, name: "Striped Detail Faux-Leather Bag", image: Purse, category:'Purse', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 10, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'Perfume', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 11, name: "Rose Gold Skeleton Automatic", image: Watch, category:'Watch', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 12, name: "Geometric Bottle Gold Cap P...", image: Watch, category:'299store', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 13, name: "Striped Detail Faux-Leather Bag", image: Watch, category:'299store', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 14, name: "Multicolor Tiered Jhumka", image: Watch, category:'299-store', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 15, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'Perfume', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 16, name: "Rose Gold Skeleton Automatic", image: Watch, category:'Watch', price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 17, name: "Geometric Bottle Gold Cap P...", image: Perfume, category:'299store', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 18, name: "Striped Detail Faux-Leather Bag", image: Perfume, category:'299store', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 19, name: "Multicolor Tiered Jhumka", image: Watch, category:'299-store', price:"₹299", offer:"20% Off", line:"₹800" },
  { id: 20, name: "Multicolor Tiered Jhumka", image: Watch, category:'299-store', price:"₹299", offer:"20% Off", line:"₹800" },
  
];