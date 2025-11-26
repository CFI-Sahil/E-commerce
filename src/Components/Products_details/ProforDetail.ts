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
  about:string[];
  style:string;
}

export const categoriesData: CategoryItem[] = [
  {
    id: 1,
    name: "Multicolor Tiered Jhumka",
    image: Jewellery,
    price: "₹600",
    offer: "20% Off",
    line: "₹800",
    about: [
      "A vibrant jhumka with beautifully stacked multicolour tiers.",
      "Bright shades blend to create a festive, eye-catching look.",
      "Lightweight build ensures all-day comfort.",
      "Traditional detailing enhances colourful craftsmanship.",
      "Perfect for weddings, festivals and celebrations.",
      "Adds a bold splash of colour to any ethnic outfit."
    ],
    style: "Pair with colourful ethnic wear to highlight the multicolour detailing."
  },

  
  {
    id: 2,
    name: "Striped Detail Faux-Leather Bag",
    image: Purse,
    price: "₹600",
    offer: "20% Off",
    line: "₹800",
    about: [
      "A chic faux-leather bag in rich green with pink accents.",
      "Striped detailing adds a trendy modern touch.",
      "Smooth premium texture with durable build.",
      "Spacious interior perfect for daily essentials.",
      "Lightweight yet stylish for everyday outings.",
      "Elevates casual and semi-formal looks effortlessly."
    ],
    style: "Pairs best with white or beige outfits to make the green and pink pop."
  },
  {
    id: 3,
    name: "Geometric Bottle Gold Cap Perfume",
    image: Perfume,
    price: "₹600",
    offer: "20% Off",
    line: "₹800",
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

  {
    id: 4,
    name: "Rose Gold Skeleton Automatic",
    image: Watch,
    price: "₹600",
    offer: "20% Off",
    line: "₹800",
    about: [
      "A stunning automatic watch with a rose-gold skeleton case.",
      "Brown leather strap adds a classic vintage touch.",
      "Exposed movement enhances mechanical elegance.",
      "Self-winding mechanism removes battery hassles.",
      "Balanced design mixing engineering and style.",
      "Ideal for formal and premium fashion looks."
    ],
    style: "Match with brown shoes or belt for a cohesive, polished look."
  },

  {
    id: 5,
    name: "Multicolor Tiered Jhumka",
    image: Jewellery,
    price: "₹600",
    offer: "20% Off",
    line: "₹800",
    about: [
      "A vibrant jhumka with beautifully stacked multicolour tiers.",
      "Bright shades blend to create a festive, eye-catching look.",
      "Lightweight build ensures all-day comfort.",
      "Traditional detailing enhances colourful craftsmanship.",
      "Perfect for weddings, festivals and celebrations.",
      "Adds a bold splash of colour to any ethnic outfit."
    ],
    style: "Style with a traditional bun to showcase the jhumka beautifully."
  },

  {
    id: 6,
    name: "Striped Detail Faux-Leather Bag",
    image: Purse,
    price: "₹600",
    offer: "20% Off",
    line: "₹800",
    about: [
      "A chic faux-leather bag in rich green with pink accents.",
      "Striped detailing adds a trendy modern touch.",
      "Smooth premium texture with durable build.",
      "Spacious interior perfect for daily essentials.",
      "Lightweight yet stylish for everyday outings.",
      "Elevates casual and semi-formal looks effortlessly."
    ],
    style: "Looks amazing with denim and a white tee for a smart casual look."
  },

  {
    id: 7,
    name: "Geometric Bottle Gold Cap Perfume",
    image: Perfume,
    price: "₹600",
    offer: "20% Off",
    line: "₹800",
    about: [
      "A premium perfume in a sleek purple geometric bottle.",
      "The gold cap adds a luxurious and elegant contrast.",
      "Modern design complements its refined fragrance.",
      "Purple glass enhances vanity aesthetics.",
      "Durable and leak-proof for everyday use.",
      "Perfect as a stylish gift or display piece."
    ],
    style: "Use it in flat-lay photos for a luxury visual appeal."
  },

  {
    id: 8,
    name: "Rose Gold Skeleton Automatic",
    image: Watch,
    price: "₹600",
    offer: "20% Off",
    line: "₹800",
    about: [
      "A stunning automatic watch with a rose-gold skeleton case.",
      "Brown leather strap adds a classic vintage touch.",
      "Exposed movement enhances mechanical elegance.",
      "Self-winding mechanism removes battery hassles.",
      "Balanced design mixing engineering and style.",
      "Ideal for formal and premium fashion looks."
    ],
    style: "Perfect with a crisp white shirt to highlight the rose-gold finish."
  }
];
