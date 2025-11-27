import Jewellery from "../../assets/Trending-Jewelery.jpg";
import Jewellery2 from "../../assets/2.jpg";
import Purse from "../../assets/Top-Deals.jpg";
import Purse2 from "../../assets/B2.jpg";
import Perfume from "../../assets/Top-perfume.jpg";
import Perfume2 from "../../assets/P2.jpg";
import Watch from "../../assets/W2.jpg";
import Watch2 from "../../assets/Top-Watches.jpg";

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

export const BlockData: CategoryItem[] = [
  { id: 1, name: "Multicolor Tiered Jhumka", image: Jewellery, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 2, name: "Striped Detail Faux-Leather Bag", image: Purse, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 3, name: "Dual-Tone Blue & Black Luxe Perfume Bottle", image: Perfume, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 4, name: "Rose Gold Steel-Band Luxury Dial Watch", image: Watch, price:"₹600", offer:"20% Off", line:"₹800",
    about: [
      "A premium luxury watch featuring a rich, rose-gold finished dial.",
  "Stainless steel strap adds durability and a sophisticated polished look.",
  "Bold dial design enhances the watch’s high-end appeal.",
  "Perfect blend of elegance and modern metallic aesthetics.",
  "Comfortable steel-band construction suitable for daily and formal wear.",
  "Ideal for premium styling, gifting, and special occasions."
    ],
    style: "Match with brown shoes or belt for a cohesive, polished look."
   },
  { id: 5, name: "Emerald Green Moti & Gold Bridal Diamond Set", image: Jewellery2, price:"₹600", offer:"20% Off", line:"₹800",
    about: [
  "A stunning bridal jewelry set featuring a necklace, matching earrings, and a traditional maang tika.",
  "Designed with rich emerald-green moti beads that add a bold and regal touch.",
  "Golden-toned body enhances the luxurious look with intricate detailing.",
  "Embedded diamond stones give a sparkling, premium finish.",
  "Lightweight yet statement-making—perfect for weddings, festive occasions, and grand events.",
  "A complete coordinated set that elevates any ethnic or bridal outfit instantly."
],
    style: "Pair with colourful ethnic wear to highlight the multicolour detailing."
   },
  { id: 6, name: "Classic Brown Leather Ladies Handbag", image: Purse2, price:"₹600", offer:"20% Off", line:"₹800",
    about: [
  "A stylish ladies handbag crafted in rich brown leather for a timeless look.",
  "Smooth, premium texture adds elegance to everyday and semi-formal outfits.",
  "Spacious main compartment designed to hold essentials with ease.",
  "Durable handles and high-quality stitching ensure long-lasting use.",
  "Lightweight and comfortable to carry for daily outings or office use.",
  "A versatile brown shade that pairs effortlessly with most fashion styles."
],

    style: "Pair with neutral tones to let the stripes stand out."
   },
  { id: 7, name: "Rose Gold Glass Perfume with Luxe Golden Square Cap", image: Perfume2, price:"₹600", offer:"20% Off", line:"₹800",
    about: [
  "A premium perfume bottle featuring a striking golden square cap for a bold, luxurious look.",
  "Rose-gold tinted glass adds an elegant and feminine aesthetic.",
  "Sleek geometric design enhances modern vanity or dressing table décor.",
  "Crafted with thick, durable glass for a premium hand-feel.",
  "Golden cap provides a strong visual contrast, elevating the overall design.",
  "Perfect as a gift item or as a stylish display piece for perfume lovers."
],

    style: "Display it on your vanity for a premium purple-gold aesthetic."
   },
  { id:8, name: "Premium Black Digital Sport Dial Watch", image: Watch2, price:"₹600", offer:"20% Off", line:"₹800",
    about: [
  "A stylish digital watch featuring a rich black dial with a modern tech-inspired look.",
  "Clear digital display ensures easy readability in both day and night.",
  "Durable build quality designed for daily wear and outdoor activities.",
  "Lightweight and comfortable strap suitable for long hours.",
  "Scratch-resistant face maintains a clean, premium appearance.",
  "Perfect for sporty, casual, and everyday fashion styling."
],

    style: "Match with brown shoes or belt for a cohesive, polished look."
   },
];
