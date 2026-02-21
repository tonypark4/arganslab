import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-1">   {/* thinner space above/below */}
      <div
        className="max-w-5xl mx-auto bg-[#F3E8D8] rounded-md 
        px-2 py-1 flex flex-col lg:flex-row items-center gap-4"
      >
        {/* LEFT TEXT */}
            <div className="flex-1 max-w-xl pl-8">
            <h1 className="text-5xl font-bold text-[#076FBD] leading-tight">
                Biocomputing & <br />
                Therapeutic <br />
                Discovery
            </h1>

            <p className="mt-10 text-lg text-gray-700 leading-snug">
                ArGan's Lab at the Wilfrid Laurier University's Department of
                Chemistry and Biochemistry is passionate about Biocomputing and
                Therapeutics Discovery. We cultivate creativity, innovation, and
                excellence in tackling biochemical and health-related challenges
                using smart computational methodologies and experimental validation.
            </p>
            </div>


        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/hero-image.png"
            alt="Biocomputing illustration"
            width={420}
            height={420}
            className="w-[80%] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}


