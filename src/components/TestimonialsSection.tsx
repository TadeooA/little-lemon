import { Card, CardContent } from "./ui/card"
import { Star, User } from "lucide-react"

const testimonialsData = [
  { id: 1, name: "Sarah Johnson", review: "Amazing food and great service! The Greek salad was fresh and delicious." },
  { id: 2, name: "Mike Chen", review: "Best Mediterranean restaurant in Chicago. The lemon dessert is to die for!" },
  {
    id: 3,
    name: "Emily Davis",
    review: "Wonderful atmosphere and authentic flavors. Highly recommend the bruschetta.",
  },
  {
    id: 4,
    name: "David Wilson",
    review: "Excellent dining experience. The staff was friendly and the food was outstanding.",
  },
  {
    id: 5,
    name: "Lisa Brown",
    review: "Perfect place for a romantic dinner. The ambiance and food quality are exceptional.",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-t from-neutral-900 to-teal-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Testimonials</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {testimonialsData.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white">
              <CardContent className="p-4 text-center">
                <div className="flex justify-center mb-3 space-x-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-600 fill-yellow-400" />
                  ))}
                </div>
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <User className="h-8 w-8 text-gray-500" />
                </div>
                <h4 className="font-bold text-sm mb-1 text-teal-800">{testimonial.name}</h4>
                <p className="text-xs text-gray-600 font-semibold">{testimonial.review}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
