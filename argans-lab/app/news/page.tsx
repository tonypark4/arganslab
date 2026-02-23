"use client";

import { useState } from "react";
import Image from "next/image";

export default function NewsPage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [page, setPage] = useState(1);

  const heroImages = [
    "/news-hero-1.png",
    "/news-hero-2.png",
    "/news-hero-3.png",
    "/news-hero-4.png",
  ];

  const newsData = [
    // PAGE 1
    {
      title: "New Undergrads join ArGan'sLab!!!",
      text: "Two new undergraduate students, Arsh and Sahil, join ArGan'sLab for co-op positions during Spring/Summer 2024. These students will contribute to software program development projects.",
    },
    {
      title: "New paper published in Nature Communications!!",
      text: "Our research led to the discovery of a new inactive conformation of SARS-CoV-2 main protease. We revealed a hot-spot residue that is critical for drug binding and the enzymatic activity. X-ray crystallography confirms that engineering of this hot-spot triggers inactivation of the enzyme.",
    },
    {
      title: "Team ArGan'sLab at ChemBioPhy Symposium...",
      text: "Our graduate students, Amy Oo and Norman Ly, presented their research at the 20th Annual Chemical Biophysics Symposium at the University of Toronto (2024, April 26th-28th).",
    },
    {
      title: "New PhD student joins ArGansLab..",
      text: "We welcome Amy Oo to our team. Amy will contribute to our scientific innovation in molecular pharmacology of cannabinoids and developing pan-coronavirus therapeutics.",
    },
    {
      title: "New paper published in JCIM",
      text: "Our research on the molecular association of CRIP1a with cannabinoid receptor 1 in human is published in the Journal of Chemical Information and Modeling.",
    },
    {
      title: "ArGan'sLab discovery is now published in the Protein Data Bank.",
      text: "We contributed to the discovery of a novel inactive conformation of SARS-CoV-2 main protease that was triggered by site-specific engineering identified by our team. This structure is now available in the PDB: 8DDL. We hold a US provisional patent on this discovery.",
    },

    // PAGE 2
    {
      title: "ArGan'sLab at International Conferences",
      text: "Dr. Ganesan delivers invited talks on our coronavirus research at the International Drug Discovery Science and Technology Congress, Japan, and the International Conference on Functional Biomaterials and Synthetic Biology, India. (2023).",
    },
    {
      title: "New MITACS Accelerate Award",
      text: "ArGan'sLab partners with Applied Pharmaceutical Innovation, Edmonton and our collaborators, Dr. Kalyaanamoorthy and Dr. Holyoak, to receive a MITACS Accelerate Fund. This fund will support a postdoc, a graduate student and an undergrad for two years in our team. This project aims at developing pan-coronavirus inhibitors.",
    },
    {
      title: "New Master's students join ArGansLab..",
      text: "We welcome the two new graduate students, Shubham and Norman, who will contribute to scientific innovation in pan-coronavirus research and cancer immunotherapy.",
    },
    {
      title: "Josh receives NSERC USRA",
      text: "Undergraduate Student, Josh Kazi, receives an NSERC USRA to return to ArGan'sLab as a Co-op student in Winter 2023. Josh was a co-op student in Fall 2021 and volunteers in the team projects since then. Congratulations, Josh!!!",
    },
    {
      title: "Sakina at Chemical Physics Symposium",
      text: "Sakina Fatima presents a research poster on 'Exploring the inter domain contacts in hnRNPA1 protein linked with neurodegeneration' in the 36th Symposium on Chemical Physics at the University of Waterloo (Nov 4-6, 2022).",
    },
    {
      title: "New cancer research grant",
      text: "ArGan'sLab wins a Cancer Research Society Operating Grant-2022 to support our research focussed on developing novel small molecule inhibitors to target the human VISTA immune checkpoint for cancer immunotherapy.",
    },

    // PAGE 3
    {
      title: "Maya defends her thesis.",
      text: "Maya Petgrave successfully defends (July 19, 2022) her graduate thesis entitled, 'Understanding the dynamics and molecular interactions of the human cannabinoid receptor 1'. Maya is the first graduate student in ArGan'sLab.",
    },
    {
      title: "ArGan'sLab at CCCE2022, Calgary",
      text: "Dr. Ganesan and Maya will deliver oral presentations on our recent research on anti-SARS-CoV-2 main protease drug design and molecular recognition process of CB1-CRIP1a interactions in the CCCE2022 conference, Calgary, Alberta, Canada. June 13-17, 2022.",
    },
    {
      title: "New research article in BMS Chemistry",
      text: "A new research article focussed on understanding the molecular processes of ligand-induced dimerization of human PD-L1 co-authored by Dr. Ganesan is published in BMC Chemistry journal.",
    },
    {
      title: "New Internal seed fund",
      text: "ArGan'sLab and Dr. Nekkar Rao's team receives the UWaterloo-School of Pharmacy Interdisciplinary Seed Fund 2022-2023 to support their research collaboration in developing an experimentally-validated predictive tool to predict CB1 liability of molecules.",
    },
    {
      title: "Sakina at ICAP/ICAN2022",
      text: "Sakina Fatima, a Master's student at ArGan'sLab, makes an oral presentation at ICAP/ICAN 2022 conference in Toronto, 28-30 June 2022.",
    },
    {
      title: "New resource grant",
      text: "ArGan'sLab wins $36,000 worth of dedicated High performance computing time under Resource Allocation Competition from ComputeCanada.",
    },

    // PAGE 4
    {
      title: "Our article enters Top 100",
      text: "Our peer-reviewed research article on SARS-CoV-2 main protease, co-authored by co-op students, is in the Top 100 cell and molecular biology Scientific Reports papers in 2021.",
    },
    {
      title: "New Internal seed fund",
      text: "ArGan'sLab, in collaboration with SKLab at UWaterloo-Chemistry, receives a seed fund from The Centre for Biotechnology & Bioengineering at UWaterloo to support the SARS-CoV-2 drug design.",
    },
    {
      title: "New research article",
      text: "Our review article, co-authored by Shirin (co-op student), on 'Exploring the potentials of phytochemicals for targeting coronavirus' is accepted for publication in the Natural Products Journal.",
    },
    {
      title: "New Tri-council grant",
      text: "ArGan'sLab is awarded an NSERC Discovery grant and supplements to support our Cannabinoids Research Project.",
    },
    {
      title: "Maya in Gradflix 2022",
      text: "Maya becomes a finalist in the GradFlix 2022 competition at UWaterloo.",
    },
    {
      title: "New Tri-council grant",
      text: "ArGan'sLab, in collaboration with Levin Lab at USaskatchewan, receives an NFRF-Exploration Grant to explore hnRNPA1.",
    },
  ];

  const itemsPerPage = 6;
  const start = (page - 1) * itemsPerPage;
  const currentItems = newsData.slice(start, start + itemsPerPage);

  return (
    <section className="py-24 bg-[#F7F1E8] min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION 1 TITLE */}
        <h1
          className="text-5xl font-bold text-center mb-12"
          style={{ color: "#076FBD" }}
        >
          ArGan'sLab in the Media
        </h1>

        {/* HERO SECTION */}
        <div className="flex flex-col lg:flex-row gap-6 mb-20">

          {/* FIXED-SIZE MAIN IMAGE CONTAINER */}
          <div className="relative w-[600px] h-[800px] bg-white rounded-xl shadow-lg overflow-hidden">
            <Image
              src={heroImages[heroIndex]}
              alt="Media hero"
              fill
              className="object-contain p-2"
            />
          </div>

          {/* PREVIEW THUMBNAILS */}
          <div className="flex lg:flex-col gap-4 justify-center">
            {heroImages.map((img, i) => (
              <div key={i} className="relative w-[150px] h-[100px] bg-white rounded-lg overflow-hidden">
                <Image
                  src={img}
                  alt={`Preview ${i}`}
                  fill
                  onClick={() => setHeroIndex(i)}
                  className={`cursor-pointer object-contain p-1 rounded-lg border ${
                    heroIndex === i
                      ? "border-[#076FBD] shadow-md"
                      : "border-gray-300"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2 TITLE */}
        <h2
          className="text-4xl font-bold text-center mb-10"
          style={{ color: "#076FBD" }}
        >
          ArGan'sLab News
        </h2>

        {/* NEWS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-sm border border-[#E0DCD5]"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#8C6239]">
                {item.title}
              </h3>
              <p className="text-[#5A4A42] leading-snug">{item.text}</p>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-4 mt-10">
          {[1, 2, 3, 4].map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`px-4 py-2 rounded-full font-semibold ${
                page === p
                  ? "bg-[#8C6239] text-white"
                  : "bg-white border border-[#8C6239] text-[#8C6239]"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
