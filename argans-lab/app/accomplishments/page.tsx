"use client";

import { useState } from "react";

type Year = 2021 | 2022 | 2023 | 2024;

type Accomplishment = {
  title: string;
  body: string;
  link?: string;
};

export default function Accomplishments() {
  const [year, setYear] = useState<Year>(2021);

  const data: Record<Year, Accomplishment[]> = {
    2021: [
      {
        title: "Co-op student, Shirin Khanna, authors a review article.",
        body: `Shirin's contribution to a mini review article on natural phytocompounds against coronaviruses was accepted for publication in the peer‑reviewed Natural Products Journal of Bentham Science Publications (September 2021).`,
        link: "https://www.ingentaconnect.com/content/ben/npj/2022/00000012/00000006/art00003",
      },
      {
        title: "Master's student, Maya Petgrave, makes an oral presentation.",
        body: `Maya presented her research on the structures and dynamics of human cannabinoid receptor 1 at the prestigious 104th Canadian Chemistry Conference (August 2021).`,
      },
      {
        title: "Master's student, Maya Petgrave, presents a research poster.",
        body: `Her work revealed dynamic ligand‑mediated interactions in human cannabinoid receptor 2 at the ACS Fall 2021 international conference (August 2021).`,
        link: "https://www.morressier.com/o/event/611a5aa65faad60014d170a3/article/612e2cddcb003360fe3a9948",
      },
      {
        title: "Co-op student, Riley Woods, presents a poster at ACS Fall 2021.",
        body: `His research focused on building a comprehensive atomistic model of TMEM16F, a crucial membrane protein linked with bleeding disorders (August 2021).`,
        link: "https://www.morressier.com/o/event/611a5aa65faad60014d170a3/article/612e2ceccb003360fe3a9dbc",
      },
      {
        title: "Co-op students Ying Li, Shiv, and Nadia present research posters.",
        body: `They delivered individual posters characterizing ligand interactions with SARS‑CoV‑2 main protease at the University of Waterloo School of Pharmacy Research Day (May 2021).`,
      },
      {
        title: "Co-op students Ying Li, Shiv, and Nadia co-author a peer‑reviewed publication.",
        body: `Their article in Nature Scientific Reports used advanced computational tools to unravel molecular interactions stabilizing ligand binding to SARS‑CoV‑2 main protease (April 2021).`,
        link: "https://www.nature.com/articles/s41598-021-86471-0",
      },
      {
        title: "Co-op students Shiv and Nadia co-author a peer‑reviewed publication.",
        body: `This article explored phytocompounds against SARS‑CoV‑2 protein targets, with Shiv and Nadia contributing molecular dynamics simulations and binding affinity analyses (Feb 2021).`,
        link: "https://www.tandfonline.com/doi/abs/10.1080/07391102.2021.1891969",
      },
    ],
    2022: [
        {
            title: "Graduate student presents our work at SCP2022.",
            body: `Sakina Fatima presented our research on “Exploring the inter‑domain contacts in hnRNPA1 protein linked with neurodegeneration” as a research poster at the 36th Symposium on Chemical Physics at the University of Waterloo (November 2022).`,
            link: "https://scp.uwaterloo.ca/index.html",
        },
        {
            title: "Undergraduate student, Josh Kazi, wins an NSERC USRA.",
            body: `Josh received an NSERC USRA award to return as a co‑op student in ArGan’s Lab for Winter 2023. Josh first joined the team in Fall 2021 and continues to contribute significantly to our projects (September 2022).`,
        },
        {
            title: "Co-op student, Varun Reddy, presents in an undergraduate research competition.",
            body: `Varun presented his research on the structure and dynamics of the human VISTA protein at the NSERC CREATE Training Program for Controlled Release Leaders (ContRoL) (September 2022).`,
        },
        {
            title: "Master's student, Maya Petgrave, wins the Best Graduate Student Talk Award.",
            body: `Maya received the Best Graduate Student Talk Award for her oral presentation on modelling the CB1–CRIP1a complex at the CCCE2022 conference in Calgary (June 2022).`,
        },
        {
            title: "Master's student, Maya Petgrave, successfully defends her thesis.",
            body: `Maya defended her thesis titled “Understanding the dynamics and molecular interactions of human cannabinoid receptor 1.” She is the first graduate student to complete her degree from ArGan’s Lab (July 2022).`,
            link: "https://uwspace.uwaterloo.ca/items/6cb9b5c8-7cfe-4586-a0f7-8bf1f6a4e82f",
        },
        {
            title: "Master's student, Sakina Fatima, presents at the ICAP/ICAN 2022 conference.",
            body: `Sakina delivered an oral presentation on “Molecular interactions driving RNA binding to hnRNPA1 implicated in neurodegeneration” at the ICAP/ICAN 2022 conference held in Toronto, Canada (June 28–30, 2022).`,
        },
        {
            title: "Master's student, Maya Petgrave, presents at the School of Pharmacy Research Day 2022.",
            body: `Maya presented her work on building the first comprehensive atomistic model of agonist‑activated CB1 protein binding with CRIP1a, relevant to a range of physiological processes in humans.`,
        },
        {
            title: "Master's student, Maya Petgrave, becomes a finalist in the GradFlix competition.",
            body: `Maya’s video explaining our cannabinoids research to a lay audience was selected as a finalist in the 2022 GradFlix competition and featured in the School of Pharmacy news (February/June 2022).`,
            link: "https://uwaterloo.ca/pharmacy/news/exploring-molecular-qualities-cannabinoids",
        },
        ],

    2023: [
        {
            title: "Our undergraduate, Shubham, becomes a new graduate student.",
            body: `Shubham Devesh Ramgoolam has been an undergraduate research assistant in ArGan’s Lab for the past 18 months and is now joining the team as a graduate student. He is awarded the International Masters Award of Excellence, the International Student Entrance Scholarship, and will also be supported by a MITACS Accelerate grant. Welcome, Shubham (September 2023).`,
        },
        {
            title: "Master's student, Sakina Fatima, presents at the prestigious 104th Canadian Chemistry Conference.",
            body: `Sakina presented a research poster on understanding the dynamics of inter‑domain contacts linked with hnRNPA1 protein aggregation at the 104th Canadian Chemistry Conference in Vancouver, Canada (June 2023).`,
        },
        {
            title: "ArGan’s Lab students present their research at the School of Pharmacy Research Day.",
            body: `Sakina Fatima, Gurveer Shienh, and Shiqi Su presented posters on their research in neurodegeneration and cannabinoid receptors at the University of Waterloo School of Pharmacy Research Day (May 2023).`,
        },
        {
            title: "New PhD student, Amy Oo, joins ArGan’s Lab with a UWaterloo Entrance Award.",
            body: `Amy Oo moved to Canada to begin her PhD in ArGan’s Lab. With strong experience in computer‑aided drug design, she will contribute to developing pan‑coronavirus therapeutics and studying molecular recognition in human cannabinoid receptors. Amy is awarded the Provost Doctoral Entrance Award for Women and will also be supported by a MITACS Accelerate grant. Welcome, Amy (May 2023).`,
        },
        {
            title: "MITACS Globalink Awards support international student visits to ArGan’s Lab.",
            body: `Two international students, Sriram Devata from the Indian Institute of Technology and Jishu Devata from the Indian Institute of Science, visited ArGan’s Lab through MITACS Globalink Awards. They contributed to research programs on AI method development and integral membrane proteins (April 2023).`,
        },
        {
            title: "Master's student, Sakina Fatima, becomes a finalist in the GradFlix competition.",
            body: `Sakina’s video on our cannabinoids research for a lay audience was selected as a finalist in the 2023 GradFlix competition and featured in the Faculty of Science news (February 2023).`,
            link: "https://uwaterloo.ca/science/news/meet-science-2023-gradflix-finalists",
        },
        ],

    2024: [
        {
            title: "ArGan’s Lab PhD student, Amy Oo, delivers a research presentation.",
            body: `Amy delivered a poster presentation on our cannabinoid research program at the 20th Annual Chemical Biophysics Symposium at the University of Waterloo. Her presentation was titled “Exploring Ligand Unbinding Mechanisms in Human Cannabinoid Receptor 2.”`,
        },
        {
            title: "ArGan’s Lab MSc student, Norman Ly, delivers a research talk.",
            body: `Norman was selected for an oral presentation at the 20th Annual Chemical Biophysics Symposium at the University of Waterloo. His talk was titled “Molecular interactions governing VISTA binding to a pH‑selective antibody.”`,
        },
        {
            title: "ArGan’s Lab graduate student, Norman Ly, wins the GradFlix competition.",
            body: `Norman won the People’s Choice Award at the 2024 UWaterloo GradFlix competition. His award‑winning video, “Immune system: How does cancer turn it off,” is available to view online.`,
            link: "https://www.youtube.com/watch?app=desktop&v=U7V_M4lk6Rk",
        },
        {
            title: "ArGan’s Lab graduate students make impressive video submissions to the GradFlix competition.",
            body: `Graduate students Amy Oo, Shubham Devesh Ramgoolam, and Norman Ly created one‑minute videos showcasing their research with ArGan’s Lab for the 2024 GradFlix competition (January 2024).`,
        },
        ],

  };

  const years: Year[] = [2021, 2022, 2023, 2024];

  return (
    <section className="py-24 bg-[#F7F1E8] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <h1
          className="text-5xl font-bold text-center leading-tight mb-4"
          style={{ color: "#076FBD" }}
        >
          Accomplishments of our trainees
        </h1>

        {/* SUBTITLE */}
        <p className="text-center text-[#8C6239] text-lg max-w-3xl mx-auto mb-12">
          Trainees of ArGan's Lab work hard to make a positive impact in their field of
          research. We cherish their well‑deserved achievements.
        </p>

        {/* YEAR TOGGLE */}
        <div className="flex justify-center gap-4 mb-12">
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setYear(y)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                year === y
                  ? "bg-[#8C6239] text-white shadow-md"
                  : "bg-white text-[#8C6239] border border-[#8C6239] hover:bg-[#F3E8D8]"
              }`}
            >
              {y}
            </button>
          ))}
        </div>

        {/* ACCOMPLISHMENT CARDS */}
        <div className="space-y-8">
          {data[year].length === 0 && (
            <p className="text-center text-[#6A5A50] italic">
              No accomplishments recorded for {year} yet.
            </p>
          )}

          {data[year].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-sm border border-[#E0DCD5]"
            >
              <p className="text-xl font-semibold mb-2" style={{ color: "#8C6239" }}>
                {item.title}
              </p>

              <p className="text-[#5A4A42] leading-relaxed mb-3">{item.body}</p>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  className="text-[#076FBD] font-semibold hover:underline"
                >
                  View Publication →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
