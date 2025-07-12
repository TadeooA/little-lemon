
export default function AboutSection() {
  return (
    <section id="about" className="py-20 p-5 bg-gradient-to-b from-neutral-950 to-teal-950 ">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold  mb-4">Little Lemon</h2>
            <h3 className="text-2xl font-light  mb-6">Chicago</h3>
            <p className=" leading-relaxed mb-4">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <p className=" leading-relaxed mb-4">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <p className=" leading-relaxed">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-96  rounded-lg flex items-center justify-center">
              <img
                src="restaurant2.png?height=384&width=320"
                alt="About Little Lemon"
                width={320}
                height={384}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
