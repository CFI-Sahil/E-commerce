// src/data/testimonialsDataOfPeople.ts
export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  feedback: string;
}

export const testimonialsDataOfPeople: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    name: "Aarav Kapoor",
    feedback:
      "Absolutely love the collection! I ordered a luxury perfume and the packaging, fragrance, and delivery were all perfect. It felt like a true premium experience.",
  },
  {
    id: 2,
    rating: 5,
    name: "Simran Kaur",
    feedback:
      "The handbag I bought is stunning — elegant design and amazing quality. It instantly elevates any outfit. I’m definitely ordering again!",
  },
  {
    id: 3,
    rating: 4,
    name: "Rohan Mehta",
    feedback:
      "The wristwatch I purchased looks even better in person. Feels high-end and the detailing is superb. Shipping took a day extra, but totally worth it.",
  },
  {
    id: 4,
    rating: 5,
    name: "Priya Sharma",
    feedback:
      "Bought a jewelry set for my sister’s birthday — she was in love with it! The shine and finish look just like fine gold. Great value for money!",
  },
  {
    id: 5,
    rating: 5,
    name: "Neha Verma",
    feedback:
      "The perfume I ordered smells divine and lasts all day. The unboxing experience was luxurious — beautiful bottle and packaging. Highly recommended!",
  },
  {
    id: 6,
    rating: 4,
    name: "Aditya Nair",
    feedback:
      "Loved the elegant watch I received. It came in a premium box and looks amazing with both casual and formal outfits. Classy collection overall.",
  },
  {
    id: 7,
    rating: 5,
    name: "Isha Malhotra",
    feedback:
      "Their jewelry collection is breathtaking! The earrings I ordered look gorgeous and didn’t cause any irritation. Great craftsmanship!",
  },
  {
    id: 8,
    rating: 5,
    name: "Karan Patel",
    feedback:
      "Fantastic customer service and excellent product quality. My leather wallet arrived quickly and feels super premium. Definitely recommending this store!",
  },
];
