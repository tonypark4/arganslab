import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="bg-gray-100 py-10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-lg md:text-xl italic text-gray-700 leading-snug relative">
            <span className="text-5xl absolute -left-4 -top-4 text-gray-300">“</span>
            Our pursuit for innovation is driven by creativity and the courage 
            to test new ideas and propose novel hypotheses for experimental testing.
            <span className="text-5xl absolute -right-4 -bottom-4 text-gray-300">”</span>
          </p>

        </div>
      </section>

    </>
  );
}
