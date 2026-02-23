import Image from "next/image";
import Link from "next/link";
import PastMembers from "@/components/PastMembers";

export default function TheTeam() {
  return (
    <section className="py-24 bg-[#F7F1E8]">
      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN TITLE */}
        <h1
          className="text-5xl font-bold text-center leading-tight mb-4"
          style={{ color: "#076FBD" }}
        >
          Meet the Team
        </h1>

        {/* PROFESSOR + LEAP WRAPPER */}
        <div className="flex flex-col lg:flex-row gap-10 mb-28">

          {/* PROFESSOR CARD */}
          <div className="bg-white rounded-xl p-12 flex flex-col md:flex-row items-start gap-12 shadow-lg flex-[9] w-full">

            {/* PHOTO */}
            <Image
              src="/prof-ganesan.png"
              alt="Dr. Aravindhan Ganesan"
              width={320}
              height={320}
              className="rounded-lg object-cover shadow-md"
            />

            {/* TEXT BLOCK */}
            <div className="flex-1">
              <h2
                className="text-4xl font-bold mb-4 leading-tight"
                style={{ color: "#8C6239" }}   // DARKER BROWN
              >
                Dr. Aravindhan Ganesan
              </h2>

              <p className="text-[#5A4A42] text-xl mb-6">
                Leader of ArGan’s Lab • Assistant Professor, Wilfrid Laurier University
              </p>

              <blockquote className="border-l-4 border-[#C49A6C] pl-4 italic text-[#6A5A50] text-lg mb-8">
                “My Vision for ArGan's Lab is to achieve research excellence by creating an
                equal and inclusive training environment that supports diverse ideas and
                quality research outcomes.”
              </blockquote>

              <div className="text-[#5A4A42] text-base leading-relaxed space-y-4">
                <p>
                  Dr. Ganesan, currently an Assistant Professor at Wilfrid Laurier
                  University's Department of Chemistry and Biochemistry, has a diverse
                  academic background and research experience.
                </p>

                <p>
                  He obtained an Integrated Masters in Bioinformatics from India and
                  completed his PhD in computational chemistry at Swinburne University of
                  Technology in Melbourne, Australia, under Professor Wang. He later
                  conducted postdoctoral research at the Australian National University and
                  the University of Alberta with Dr. Barakat and Nobel laureate Professor
                  Michael Houghton.
                </p>

                <p>
                  Dr. Ganesan began his independent research career at the University of
                  Waterloo–School of Pharmacy (2019–2024). In July 2024, he joined Wilfrid
                  Laurier University, where he leads a research team focused on
                  biocomputing and therapeutics discovery.
                </p>

                <p>
                  His research spans membrane protein mechanisms, small‑molecule
                  therapeutics, computational software development, and COVID‑19 antiviral
                  discovery.
                </p>
              </div>
            </div>
          </div>

          {/* LEAP BOX */}
          <div className="bg-white rounded-xl shadow-md p-6 w-full lg:w-64 h-fit border border-[#E0DCD5] flex-[1]">
            <p className="text-[#6A5A50] text-lg mb-4 font-medium text-center">
              At ArGan’s Lab, we
            </p>

            <div className="space-y-2 text-left mx-auto w-fit">
              <p><span className="font-bold" style={{ color: "#8C6239" }}>L</span>earn</p>
              <p><span className="font-bold" style={{ color: "#8C6239" }}>E</span>xplore</p>
              <p><span className="font-bold" style={{ color: "#8C6239" }}>A</span>ppreciate</p>
              <p><span className="font-bold" style={{ color: "#8C6239" }}>P</span>rogress</p>
            </div>

            <p className="text-[#6A5A50] text-sm mt-4 text-center">ahead →</p>
          </div>
        </div>

        {/* STUDENT TITLE */}
        <h2
          className="text-4xl font-bold text-center leading-tight"
          style={{ color: "#076FBD" }}
        >
          Meet Our Next‑gen Problem Solvers
        </h2>

        <p className="text-center text-[#6A5A50] text-lg mb-12">
          Dedication. Expertise. Passion.
        </p>

        {/* STUDENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {[
            {
              name: "Amy Oo",
              role: "PhD Student",
              img: "/amy.png",
              linkedin: "",
              desc: `Amy is a MITACS Accelerate Intern and contributes to exploring the molecular recognition mechanisms of cannabinoid receptors and developing pan‑coronavirus therapeutics.

Amy has a Master's in Biochemistry and Molecular Biology from Chulalongkorn University, Thailand.

She has experience in computational biology and biochemical experiments.`
            },
            {
              name: "Shiqi Su",
              role: "MSc Student",
              img: "/shiqi.png",
              linkedin: "",
              desc: `Shiqi has a Bachelor's in Biochemistry at the University of Waterloo.

She is passionate about biomolecular simulation.

Her thesis focuses on probing ligand binding and interactions with cannabinoid receptor 1.`
            },
            {
              name: "Shubham Devesh Ramgoolam",
              role: "MSc Student",
              img: "/shubham.png",
              linkedin: "https://www.linkedin.com/in/sdramgoo/",
              desc: `Shubham is a MITACS Accelerate Intern and contributes to antiviral discovery research.

He has a Bachelor of Science from the University of Waterloo.

He is an expert in Python automation and new software development.`
            },
            {
              name: "Norman Ly",
              role: "MSc Student",
              img: "/norman.png",
              linkedin: "https://www.linkedin.com/in/norman-ly/",
              desc: `Norman has a BSc in Medicinal Biochemistry and experience in molecular modelling and drug discovery.

His research thesis focuses on understanding the structure–function relationships of the human VISTA immune checkpoint protein.`
            },
            {
              name: "Varun Reddy",
              role: "Undergraduate Research Assistant",
              img: "/varun.png",
              linkedin: "https://www.linkedin.com/in/varun-reddy-1a6784234/?originalSubdomain=ca",
              desc: `Varun is pursuing his Bachelor of Science in Biology at the University of Waterloo.

He has been part of ArGan's Lab for more than 18 months. His research focuses on probing the structures and dynamics of human VISTA and designing novel small‑molecule modulators of this checkpoint protein for cancer therapy.`
            },
            {
              name: "Tiffany Ngai",
              role: "Undergraduate Research Student",
              img: "/tiffany.png",
              linkedin: "https://www.linkedin.com/in/tiffany-ngai-4887481b6",
              desc: `Tiffany is pursuing Systems Design Engineering at the University of Waterloo. She has strong programming skills.

In ArGan's Lab, Tiffany is developing computational programs for large molecular data analyses and new AI‑based tools for predicting small‑molecule binding to therapeutic targets.`
            },
            {
              name: "Sahil Kabir",
              role: "Undergraduate Research Student",
              img: "/sahil.png",
              linkedin: "",
              desc: `Sahil is a third‑year Mathematics student specializing in Combinatorics and Optimization.

He develops machine‑learning models to predict drug–protein binding.`
            },
            {
              name: "Sean Park",
              role: "Undergraduate Research Student",
              img: "/sean.png",
              linkedin: "https://www.linkedin.com/in/sean-park-079006141/",
              desc: `Sean is a BHSc graduate and PharmD student at the University of Waterloo.

He investigates allosteric modulation of cannabinoid receptor CB1 using computational and experimental approaches.`
            },
            {
              name: "Sara Almoayyed",
              role: "Honours Student",
              img: "/sara.png",
              linkedin: "",
              desc: `Sara is a fourth‑year Biochemistry and Biotechnology student at Laurier.

She studies homodimerization of cannabinoid receptor 1 using computational biochemistry.`
            },
            {
              name: "Akshat Shah",
              role: "Undergraduate Research Student",
              img: "/akshat.png",
              linkedin: "https://www.linkedin.com/in/akshats1605/",
              desc: `Akshat is a first‑year Computer Science student at the University of Waterloo.

He develops in‑house toolkits and AI/ML predictive tools for computational drug design.`
            }
          ].map((person) => (
            <div
              key={person.name}
              className="relative bg-[#F2F2F2] rounded-xl shadow-md p-6 flex gap-6 border border-[#E0DCD5]"
            >
              {person.linkedin && (
                <Link
                  href={person.linkedin}
                  target="_blank"
                  className="absolute top-3 right-3 opacity-80 hover:opacity-100 transition"
                >
                  <Image
                    src="/linkedin-icon.png"
                    alt="LinkedIn"
                    width={26}
                    height={26}
                  />
                </Link>
              )}

              <Image
                src={person.img}
                alt={person.name}
                width={200}
                height={200}
                className="rounded-lg object-cover shadow-sm"
              />

              <div className="flex-1">
                <h3
                  className="text-2xl font-semibold mb-1"
                  style={{ color: "#8C6239" }}   // DARKER BROWN
                >
                  {person.name}
                </h3>
                <p className="text-[#6A5A50] text-sm mb-3">{person.role}</p>
                <p className="text-[#5A4A42] text-sm leading-snug whitespace-pre-line">
                  {person.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>

      {/* PAST MEMBERS SECTION */}
      <PastMembers />

    </section>
  );
}
