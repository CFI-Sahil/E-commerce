import Perfume from "../../assets/Top-perfume.jpg";
import Perfume2 from "../../assets/P7.jpg";
import Perfume3 from "../../assets/P8.jpg";
import Perfume4 from "../../assets/P6.jpg";
import Perfume5 from "../../assets/P5.jpg";
import Perfume6 from "../../assets/P4.jpg";
import Perfume7 from "../../assets/P3.jpg";
import Perfume8 from "../../assets/P9.jpg";
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

export const PerfumeData: CategoryItem[] = [
  { id: 1, name: "Dual-Tone Blue & Black Luxe Perfume Bottle", image: Perfume, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 2, name: "Peach Red Mini Luxury Perfume Bottle", image: Perfume2, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 3, name: "Cyan Square Perfume Bottle with Premium Golden Cap", image: Perfume3, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 4, name: "Pink & White Gradient Glass Perfume", image: Perfume4, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 5, name: "Emerald Green Inner-Core Perfume Clear Outer Glass", image: Perfume5, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 6, name: "Black & Blue Luxe Perfume Bottle with Gold-Black Cap", image: Perfume6, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 7, name: "Light Orange Glass Perfume with Golden Mist Cap", image: Perfume7, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 8, name: "White–Pink Perfume Bottle with Gold Square Cap", image: Perfume8, price:"₹600", offer:"20% Off", line:"₹800",
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
