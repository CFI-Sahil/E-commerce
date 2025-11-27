import Jewellery from "../../assets/10.jpg";
import Jewellery2 from "../../assets/9.jpg";
import Jewellery3 from "../../assets/3.jpg";
import Jewellery4 from "../../assets/4.jpg";
import Jewellery5 from "../../assets/6.jpg";
import Jewellery6 from "../../assets/5.jpg";
import Jewellery7 from "../../assets/2.jpg";
import Jewellery8 from "../../assets/11.jpg";
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

export const JewelleryData: CategoryItem[] = [
  { id: 1, name: "Navy Blue AD Pendant Necklace", image: Jewellery, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 2, name: "10-Strand Pink Moti Necklace", image: Jewellery2, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 3, name: "Multicolor Off-White Chandbali", image: Jewellery3, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 4, name: "Pink AD Stone Elegant Necklace", image: Jewellery4, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 5, name: "Rich Long Green Moti Haar with Golden Chain Pair", image: Jewellery5, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 6, name: "Premium Wide Golden Statement Necklace", image: Jewellery6, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 7, name: "Emerald Green Moti & Gold Bridal Diamond Set", image: Jewellery7, price:"₹600", offer:"20% Off", line:"₹800",
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
  { id: 8, name: "Multicolour Traditional Festive Jhumka", image: Jewellery8, price:"₹600", offer:"20% Off", line:"₹800",
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
