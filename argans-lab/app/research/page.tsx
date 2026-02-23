
import Image from "next/image";
import VideoCarousel from "@/components/VideoCarousel";

export default function ResearchPage() {
  return (
    <>


      {/* SECTION 1 */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1
          className="text-5xl font-bold mb-6"
          style={{ color: "#076FBD" }}
        >
          Our Research Areas
        </h1>

        <p className="italic text-base text-gray-700 mb-10">
          “Our pursuit for innovation is driven by creativity and the courage to test new ideas and propose novel hypotheses for experimental testing.”
        </p>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="flex-1 text-gray-700 leading-relaxed text-base">
            <h2 className="text-xl font-semibold mb-4">
              Probing the structures, dynamics and ligand-interactions of integral membrane proteins
            </h2>

            <p className="mb-4">
              Integral membrane proteins (IMPs) represent an important class of therapeutic targets as ~60-70% of drugs in the market modulate different 
              types of IMPs including ion channels and GPCRs. Due to the innate flexible nature of IMPs and their distinct functional states, resolving 
              the complete structures of these proteins still remains a challenge. ​Therefore, a number of physiological processes about their structural plasticity, 
              ligand interactions, activation and signalling process of IMPs remain largely unclear.  
            </p>

            <p className="mb-4">
              Our team employs an innovative combination of sophisticated computational methods to address this knowledge gap in IMPs such as cannabinoid receptors 
              (CBRs)–class A GPCR targets for cannabinoids–, transmembrane 16 (TMEM16) proteins, and immune checkpoint receptors, which are of pathophysiological 
              importance in humans. We build accurate atomistic models of IMPs under physiological membrane-embedded environment and probe their dynamics and molecular 
              recognition processes. We mainly focus on understanding polypharmacology of cannabinoids towards different cannabinoid receptors, calcium-mediated ion 
              channeling and lipid scambling in Anactomin family of proteins, protein-protein interactions driving inter organelle communication and immunosuppression. 
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <Image
              src="/research-areas.png"
              alt="Research Areas"
              width={600}
              height={600}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-gray-50">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="flex-1 flex justify-center">
            <Image
              src="/small-molecule.png"
              alt="Small Molecule Therapeutics"
              width={600}
              height={600}
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="flex-1 text-gray-700 leading-relaxed text-base">
            <h2 className="text-xl font-semibold mb-4">
              Designing novel small molecule therapeutics
            </h2>

            <p className="mb-4">
              As the quest for new drugs is an expensive and time consuming process, it is important to constantly reform the drug discovery 
              pipeline with novel technologies. Our team specializes in computational design of novel small molecule drugs against human diseases including cancers, 
              neurodegeneration and coronavirus infection. Our approach focusses on unravelling intricate molecular mechanisms behind pathogeneses of diseases, and using
              these insights to guide drug design and discovery.
            </p>

            <p>
              We use a rich tool chest of advanced computational methods, coupled with state-of-the-art high performance computing and virtual reality technologies to design drugs 
              in silico and then validate them in vitro. ArGan'sLab is keen on taking our small molecules from bench to bedside.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
          <div className="flex-1 flex justify-center">
            <Image
              src="/computational-tools.png"
              alt="Computational Tools"
              width={600}
              height={600}
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="flex-1 text-gray-700 leading-relaxed text-base">
            <h2 className="text-xl font-semibold mb-4">
              Developing new computational tools for bio‑innovation
            </h2>

            <p className="mb-4">
              Computational tools play a crucial role in various biochemical researches that drive scientific discoveries. Our team is focussed on 
              developing automation pipelines and new computational codes to support molecular design, simulation and analyses. Our interests are 
              centred on building our own in-house python-based programs, artificial intelligence-based predictive methods, and next-generation interactive virtual reality
              toolkits to create a platform for bio-innovation.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — VIDEO CAROUSEL */}
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <VideoCarousel />
        </div>
      </div>

      {/* SECTION 5 */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-xl font-semibold mb-4 text-center italic">
            Our Research is Supported by:
        </h2>


        <div className="flex justify-center">
          <Image
            src="/support-collaborators.png"
            alt="Support and Collaborators"
            width={900}
            height={900}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>
    </>
  );
}
