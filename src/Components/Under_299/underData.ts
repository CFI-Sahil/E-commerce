import Watch from "../../assets/W10.jpg";
import Watch2 from "../../assets/W5.jpg";
import Watch3 from "../../assets/W8.jpg";
import Jewellery from "../../assets/3.jpg";
import Jewellery2 from "../../assets/4.jpg";
import Perfume from "../../assets/Top-perfume.jpg";
import Perfume2 from "../../assets/P5.jpg";
import Perfume3 from "../../assets/P6.jpg";
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

export const UnderData: CategoryItem[] = [
  { id: 1, name: "Silver Classic silver-Dial Brown-Strap Watch", image: Watch, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 2, name: "Multicolor Off-White Chandbali", image: Jewellery, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 3, name: "Dual-Tone Blue & Black Luxe Perfume Bottle", image: Perfume, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 4, name: "Pink AD Stone Elegant Necklace", image: Jewellery2, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 5, name: "Dual-Tone Classic Brown Leather Watch", image: Watch2, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 6, name: "Emerald Green Inner-Core Perfume Clear Outer Glass", image: Perfume2, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 7, name: "Rose-Gold Case Black-Leather Classic Watch", image: Watch3, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 8, name: "Pink & White Gradient Glass Perfume", image: Perfume3, price:"₹600", offer:"20% Off", line:"₹800",
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
];
