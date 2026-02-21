import Image from "next/image";

export default function ResearchOverview() {
  return (
    <section className="py-32 bg-white"> {/* slightly more vertical space */}
      <div className="max-w-6xl mx-auto px-6">

        {/* MAIN TITLE */}
        <h2
          className="text-5xl font-bold text-center"
          style={{ color: "#076FBD" }}
        >
          Our Research
        </h2>

        {/* SUBTITLE */}
        <p className="text-center text-gray-700 text-xl max-w-3xl mx-auto mt-8 mb-24 leading-snug">
          We explore molecular recognition with precision, integrating computation,
          AI, and biochemical assays to engineer proteins and therapeutics for
          human disease.
        </p>

        {/* THREE PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20"> {/* more spacing between cards */}
          
          {/* CARD 1 */}
          <div className="text-center px-6">
            <div className="w-full h-64 mb-10 overflow-hidden rounded-md shadow-md">
              <Image
                src="/computational-biochemistry.png"
                alt="Computational Biochemistry"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-black mb-3">
              Computational Biochemistry
            </h3>
            <p className="text-gray-700 text-lg leading-snug">
              We model protein structures and interactions at the atomic scale to
              uncover mechanisms of molecular recognition.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="text-center px-6">
            <div className="w-full h-64 mb-10 overflow-hidden rounded-md shadow-md">
              <Image
                src="/drug-discovery.png"
                alt="Drug Discovery"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-black mb-3">
              Drug Discovery
            </h3>
            <p className="text-gray-700 text-lg leading-snug">
              We combine computational screening with experimental validation to
              identify and optimize therapeutic candidates.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="text-center px-6">
            <div className="w-full h-64 mb-10 overflow-hidden rounded-md shadow-md">
              <Image
                src="/ai-software.png"
                alt="AI and Software Development"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-black mb-3">
              AI & Software Development
            </h3>
            <p className="text-gray-700 text-lg leading-snug">
              We design AI algorithms and build tools that accelerate biomolecular
              analysis and drug design.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
