import Watch from "../../assets/W12.jpg";
import Watch2 from "../../assets/W2.jpg"
import Watch3 from "../../assets/W3.jpg"
import Watch4 from "../../assets/W5.jpg"
import Watch5 from "../../assets/W6.jpg"
import Watch6 from "../../assets/W7.jpg"
import Watch7 from "../../assets/W4.jpg"
import Watch8 from "../../assets/W10.jpg"
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

export const WatchData: CategoryItem[] = [
  { id: 1, name: "Shadow Black Classic Dial Watch", image: Watch, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 2, name: "Rose Gold Steel-Band Luxury Dial Watch", image: Watch2, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 3, name: "Rose Gold Classic Leather Watch", image: Watch3, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 4, name: "Dual-Tone Classic Brown Leather Watch", image: Watch4, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 5, name: "Silver Luxe Dial Watch with Black Strap", image: Watch5, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 6, name: "All-Black Premium Strap Watch", image: Watch6, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 7, name: "Dual-Tone Steel & Black Leather Watch Set", image: Watch7, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 8, name: "Silver Classic silver-Dial Brown-Strap Watch", image: Watch8, price:"₹600", offer:"20% Off", line:"₹800",
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
];
