import { Bike } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
}

interface SpecialsSectionProps {
  onAddToCart: (item: Omit<CartItem, "quantity">) => void;
}

const specialsData = [
  {
    id: 1,
    name: "Greek salad",
    price: 12.99,
    image: "comida1.png",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    id: 2,
    name: "Bruschetta",
    price: 5.99,
    image: "comida2.png",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: 5.0,
    image: "comida3.png",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
  {
    id: 4,
    name: "Pizza Margherita",
    price: 10.99,
    image: "comida3.png",
    description:
      "Classic pizza with fresh mozzarella, tomatoes, and basil, drizzled with olive oil.",
  },
  {
    id: 5,
    name: "Pasta Carbonara",
    price: 14.99,
    image: "comida2.png",
    description:
      "Creamy pasta with pancetta, egg, and Parmesan cheese, served with a sprinkle of black pepper.",
  },
  {
    id: 6,
    name: "Tiramisu",
    price: 6.99,
    image: "comida1.png",
    description:
      "A classic Italian dessert made with coffee-soaked ladyfingers and mascarpone cheese.",
  },
];

export default function SpecialsSection({ onAddToCart }: SpecialsSectionProps) {
  return (
    <section id="menu" className="py-20 bg-gradient-to-t from-neutral-900 to-teal-950">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-500">Specials</h2>
          <Button className="bg-yellow-500 hover:bg-lemon-green-600 text-neutral-900 px-6 py-2 cursor-pointer">
            Online Menu
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 ">
          {specialsData.map((special) => (
            <Card key={special.id} className="overflow-hidden bg-zinc-950">
              <div className="h-48 bg-gray-200">
                <img
                  src={`${import.meta.env.BASE_URL}${special.image}`}
                  alt={special.name}
                  width={300}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 mt-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{special.name}</h3>
                  <span className="text-yellow-500 font-semibold text-lg">
                    ${special.price}
                  </span>
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {special.description}
                </p>
                <Button
                  className="w-full bg-yellow-500 hover:bg-yellow-500 text-neutral-900 font-semibold flex items-center justify-center gap-2  cursor-pointer"
                  onClick={() => onAddToCart(special)}
                >
                  Order a delivery <Bike size={18} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
