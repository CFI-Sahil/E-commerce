import Jewellery from "../../assets/Trending-Jewelery.jpg";
import Purse from "../../assets/Top-Deals.jpg";
import Perfume from "../../assets/Top-perfume.jpg";
import Watch from "../../assets/Top-Watches.jpg";

export interface CategoryItem {
  id: number;
  name: string;
  image: string;
  price: number | string;
  offer:number | string;
  line:number | string;
}

export const categoriesData: CategoryItem[] = [
  { id: 1, name: "Multicolor Tiered Jhumka", image: Jewellery, price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 2, name: "Striped Detail Faux-Leather Bag", image: Purse, price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 3, name: "Geometric Bottle Gold Cap P...", image: Perfume, price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 4, name: "Rose Gold Skeleton Automatic", image: Watch, price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 5, name: "Multicolor Tiered Jhumka", image: Jewellery, price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 6, name: "Striped Detail Faux-Leather Bag", image: Purse, price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 7, name: "Geometric Bottle Gold Cap P...", image: Perfume, price:"₹600", offer:"20% Off", line:"₹800" },
  { id: 8, name: "Rose Gold Skeleton Automatic", image: Watch, price:"₹600", offer:"20% Off", line:"₹800" },
];
