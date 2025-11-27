import Purse from "../../assets//B4.jpg";
import Purse2 from "../../assets/B2.jpg";
import Purse3 from "../../assets/B3.jpg";
import Purse4 from "../../assets/B5.jpg";
import Perfume from "../../assets/Top-perfume.jpg";
import Perfume2 from "../../assets/P3.jpg";
import Perfume3 from "../../assets/P4.jpg";
import Perfume4 from "../../assets/P5.jpg";
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
  { id: 1, name: "Rich Red Luxury Chain-Handled Ladies Bag", image: Purse, price:"₹600", offer:"20% Off", line:"₹800",
    about: [
  "A premium ladies handbag in a rich red colour that adds bold elegance to any outfit.",
  "Features a stylish golden chain handle that gives a luxurious, high-end look.",
  "Smooth, refined texture enhances its premium appeal.",
  "Compact yet spacious enough to carry daily essentials with ease.",
  "Perfect for parties, dinners, festive occasions, and stylish casual outings.",
  "The striking red-and-gold combination makes it a standout fashion accessory."
],
    style: "Pair with neutral tones to let the stripes stand out."
   },
  { id: 2, name: "Dual-Tone Blue & Black Luxe Perfume Bottle", image: Perfume, price:"₹600", offer:"20% Off", line:"₹800",
    about: [
  "A premium dual-tone perfume bottle featuring a sleek blend of black and deep blue.",
  "Black cap adds a bold, modern touch to the elegant design.",
  "Smooth gradient finish gives the bottle a luxurious high-end appearance.",
  "Crafted with durable, leak-proof material for everyday use.",
  "Perfect decorative piece for dressing tables, vanity setups, or shelf displays.",
  "Ideal as a stylish premium gift thanks to its striking colour combination."
],
    style: "Display it on your vanity for a premium purple-gold aesthetic."
   },
  { id: 3, name: "Classic Brown Leather Ladies Handbag", image: Purse2, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 4, name: "Brown-Trim Cream Patterned Leather Handbag", image: Purse3, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 5, name: "Black & Blue Luxe Perfume Bottle with Gold-Black Cap", image: Perfume3, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 6, name: "Light Orange Glass Perfume with Golden Mist Cap", image: Perfume2, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 7, name: "Red Chic Handbag with Black Signature Circle", image: Purse4, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 8, name: "Emerald Green Inner-Core Perfume Clear Outer Glass", image: Perfume4, price:"₹600", offer:"20% Off", line:"₹800",
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
