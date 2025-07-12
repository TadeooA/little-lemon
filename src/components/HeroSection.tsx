import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section id="home" className=" py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Little Lemon</h1>
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-lemon-green-100">Chicago</h2>
            <p className="text-lg mb-8 text-lemon-green-100 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-lemon-yellow-500 text-neutral-700 font-semibold px-8 py-3"
            >
              Reserve Table
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gray-400 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="/heroImage.png"
                alt="Little Lemon Restaurant"
                width={320}
                height={320}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
