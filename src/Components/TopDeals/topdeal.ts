
import Purse from "../../assets/Top-Deals.jpg";
import Perfume from "../../assets/Top-perfume.jpg";
export interface CategoryItem {
  id: number;
  name: string;
  image: string;
  price: number | string;
  offer:number | string;
  line:number | string;
  about:string[];
  style:string;
}

export const TopdealsData: CategoryItem[] = [
  { id: 1, name: "Striped Detail Faux-Leather Bag", image: Purse, price:"₹600", offer:"20% Off", line:"₹800",
    about: [
      "A stylish faux-leather bag with bold striped detailing.",
      "Compact size perfect for daily essentials.",
      "Durable material ensures long-lasting use.",
      "Versatile design suits casual and formal outfits.",
      "Lightweight and easy to carry.",
      "Adds a trendy touch to any look."
    ],
    style: "Pair with neutral tones to let the stripes stand out."
   },
  { id: 2, name: "Geometric Bottle Gold Cap Perfume", image: Perfume, price:"₹600", offer:"20% Off", line:"₹800",
    about: [
      "A premium perfume in a sleek purple geometric bottle.",
      "The gold cap adds a luxurious and elegant contrast.",
      "Modern design complements its refined fragrance.",
      "Purple glass enhances vanity aesthetics.",
      "Durable and leak-proof for everyday use.",
      "Perfect as a stylish gift or display piece."
    ],
    style: "Display it on your vanity for a premium purple-gold aesthetic."
   },
  { id: 3, name: "Striped Detail Faux-Leather Bag", image: Purse, price:"₹600", offer:"20% Off", line:"₹800",
    about: [
      "A stylish faux-leather bag with bold striped detailing.",
      "Compact size perfect for daily essentials.",
      "Durable material ensures long-lasting use.",
      "Versatile design suits casual and formal outfits.",
      "Lightweight and easy to carry.",
      "Adds a trendy touch to any look."
    ],
    style: "Pair with neutral tones to let the stripes stand out."
   },
  { id: 4, name: "Geometric Bottle Gold Cap Perfume", image: Perfume, price:"₹600", offer:"20% Off", line:"₹800",
    about: [
      "A premium perfume in a sleek purple geometric bottle.",
      "The gold cap adds a luxurious and elegant contrast.",
      "Modern design complements its refined fragrance.",
      "Purple glass enhances vanity aesthetics.",
      "Durable and leak-proof for everyday use.",
      "Perfect as a stylish gift or display piece."
    ],
    style: "Display it on your vanity for a premium purple-gold aesthetic."
   },
  { id: 5, name: "Striped Detail Faux-Leather Bag", image: Purse, price:"₹600", offer:"20% Off", line:"₹800",
    about: [
      "A stylish faux-leather bag with bold striped detailing.",
      "Compact size perfect for daily essentials.",
      "Durable material ensures long-lasting use.",
      "Versatile design suits casual and formal outfits.",
      "Lightweight and easy to carry.",
      "Adds a trendy touch to any look."
    ],
    style: "Pair with neutral tones to let the stripes stand out."
   },
  { id: 6, name: "Geometric Bottle Gold Cap Perfume", image: Perfume, price:"₹600", offer:"20% Off", line:"₹800",
    about: [
      "A premium perfume in a sleek purple geometric bottle.",
      "The gold cap adds a luxurious and elegant contrast.",
      "Modern design complements its refined fragrance.",
      "Purple glass enhances vanity aesthetics.",
      "Durable and leak-proof for everyday use.",
      "Perfect as a stylish gift or display piece."
    ],
    style: "Display it on your vanity for a premium purple-gold aesthetic."
   },
  { id: 7, name: "Striped Detail Faux-Leather Bag", image: Purse, price:"₹600", offer:"20% Off", line:"₹800",
    about: [
      "A stylish faux-leather bag with bold striped detailing.",
      "Compact size perfect for daily essentials.",
      "Durable material ensures long-lasting use.",
      "Versatile design suits casual and formal outfits.",
      "Lightweight and easy to carry.",
      "Adds a trendy touch to any look."
    ],
    style: "Pair with neutral tones to let the stripes stand out."
   },
  { id: 8, name: "Geometric Bottle Gold Cap Perfume", image: Perfume, price:"₹600", offer:"20% Off", line:"₹800",
    about: [
      "A premium perfume in a sleek purple geometric bottle.",
      "The gold cap adds a luxurious and elegant contrast.",
      "Modern design complements its refined fragrance.",
      "Purple glass enhances vanity aesthetics.",
      "Durable and leak-proof for everyday use.",
      "Perfect as a stylish gift or display piece."
    ],
    style: "Display it on your vanity for a premium purple-gold aesthetic."
   },

];
