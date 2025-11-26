import Watch from "../../assets/Top-Watches.jpg";
import Jewellery from "../../assets/Trending-Jewelery.jpg";
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
  { id: 1, name: "Rose Gold Skeleton Automatic", image: Watch, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 2, name: "Multicolor Tiered Jhumka", image: Jewellery, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 3, name: "Rose Gold Skeleton Automatic", image: Watch, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 4, name: "Multicolor Tiered Jhumka", image: Jewellery, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 5, name: "Rose Gold Skeleton Automatic", image: Watch, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 6, name: "Multicolor Tiered Jhumka", image: Jewellery, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 7, name: "Rose Gold Skeleton Automatic", image: Watch, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 8, name: "Multicolor Tiered Jhumka", image: Jewellery, price:"₹600", offer:"20% Off", line:"₹800",
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
