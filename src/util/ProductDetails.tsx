import vanilla from "../assets/images/cream.jpg"
import chocolate from "../assets/images/chocolate.jpg"
import strawberry from "../assets/images/stawberry.jpg"
import kitkat from "../assets/images/Kitkat-milkshake.jpg"
import coco from "../assets/images/coco.jpg"
import pie from "../assets/images/pie.jpg"

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string; 
}
export const products :Product[]= [
  {
    id: 1,
    name: "CLASSIC VANILLA MILKSHAKE",
    description: "A rich and creamy classic vanilla milkshake made with premium vanilla beans.",
    price: 90,
    image:vanilla ,
  },
  {
    id: 2,
    name: "CHOCOLATE DREAM MILKSHAKE",
    description: "Indulge in a thick, creamy chocolate milkshake made with the finest cocoa.",
    price: 120,
    image: chocolate,
  },
  {
    id: 3,
    name: "STRAWBERRY SIK MILKSHAKE",
    description: "Enjoy the freshness of strawberries blended into a smooth, delightful milkshake.",
    price: 120,
    image: strawberry,
  },
  {
    id: 4,
    name: "COCO",
    description: "A delightful cocoa-flavored treat, crafted to satisfy your sweet tooth with a rich and creamy texture.",
    price: 250,
    image:coco
  },
  {
    id: 5,
    name: "KIK",
    description: "A burst of flavor in every bite, KIK is a compact treat perfect for snack lovers looking for a quick indulgence.",
    price:230,
    image:kitkat
  },
  {
    id: 6,
    name: "PIE",
    description: "A soft and flaky pie filled with a mouthwatering mixture of fruit and cream, offering a perfect balance of taste and texture.",
    price: 270,
    image:pie
  }
];