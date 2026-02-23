"use client";

import React, { useState } from "react";

type SortKey = "name" | "position" | "project" | "period";

export default function PastMembers() {
  const [sortConfig, setSortConfig] = useState<{ key: SortKey; direction: "asc" | "desc" }>({
    key: "name",
    direction: "asc",
  });


  const trainees = [
    ["Ahn Do", "Undergrad student",
      "Modelling the effects of mutations on the SARS-CoV-2 spike receptor binding domain on host recognition.",
      "Winter 2020 – Fall 2021"],

    ["Arsh Tripathi", "Undergraduate Research Assistant",
      "Optimization of in-house computational program for molecular visualization and analyses.",
      "Spring 2024"],

    ["Benjamin MacKenzie", "Co-op student",
      "Developing a new TCL-based computational method for extensive molecular interaction analyses.",
      "Sept 2021 – Jan 2022"],

    ["Faris Fizal", "Co-op student",
      "Developing new computational tools for intermolecular interactions analyses.",
      "Dec 2020 – Apr 2021"],

    ["Gurveer Shienh", "Undergraduate Research Assistant",
      "Developing ML model for predicting small molecules binding to human cannabinoid receptor 1.",
      "Fall 2022 – Fall 2023"],

    ["Hassan Subhi", "Co-op student",
      "TCL code development for structural analyses.",
      "Dec 2020 – April 2021"],

    ["Jishu Dutta", "Mitacs Intern",
      "Unravelling mechanistic insights into molecular recognition processes of integral membrane proteins.",
      "May 2023 – August 2023"],

    ["Josh Kazi", "NSERC USRA Intern",
      "Development of computational method for non-bonded interaction analyses in biological systems.",
      "Sept 2021 – Aug 2023"],

    ["Molly Lu", "Undergrad student",
      "Atomistic Modelling and Simulation of human VISTA immune checkpoint.",
      "Fall 2021 – Winter 2022"],

    ["Nadia Marie Dingelstad", "Co-op student",
      "Molecular level characterization of druggable pockets in SARS-CoV-2 Mpro.",
      "Apr 2020 – Aug 2020"],

    ["Riley Woods", "Co-op student",
      "Understanding the molecular recognition processes of TMEM16F.",
      "Dec 2020 – Aug 2021"],

    ["Shirin Khanna", "Research Intern",
      "Exploring phytochemicals against SARS-CoV-2 targets.",
      "Sept 2020 – Jan 2021"],

    ["Shiv Rakesh Naik", "Co-op student",
      "Understanding small molecule interactions at SARS-CoV-2 dimer interface.",
      "Apr 2020 – Aug 2020"],

    ["Shubham Devesh Ramgoolam", "Undergraduate Research Assistant",
      "New tool development for non-bonded structural analyses.",
      "Apr 2022 – Aug 2023"],

    ["Sriram Devata", "Mitacs Intern",
      "Developing a new machine learning method for predicting molecular recognition.",
      "May 2023 – August 2023"],

    ["Xiao Wen Xu Luo", "Co-op student",
      "Developing a new computational code for interaction energy analyses.",
      "Sept 2020 – Jan 2021"],

    ["Yan Yi Li", "Undergraduate research assistant",
      "New computational tool development for non-bonded structural analyses.",
      "Spring 2022 – Fall 2023"],

    ["Ying Le Weng", "Co-op student (SWPP Supported)",
      "Deciphering the molecular details of small molecule binding to SARS-CoV-2 Mpro.",
      "Apr 2020 – Aug 2020"],
  ];

  // SORTING LOGIC
  const sortedTrainees = [...trainees].sort((a, b) => {
    const { key, direction } = sortConfig;
    
    const indexMap: Record<SortKey, number> = {
      name: 0,
      position: 1,
      project: 2,
      period: 3,
    };


    const index = indexMap[key];
    const valA = a[index].toLowerCase();
    const valB = b[index].toLowerCase();

    if (valA < valB) return direction === "asc" ? -1 : 1;
    if (valA > valB) return direction === "asc" ? 1 : -1;
    return 0;
  });

    const requestSort = (key: SortKey) => {
      setSortConfig((prev) => ({
        key,
        direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
      }));
    };


  const arrowFor = (key: SortKey) => {
    if (sortConfig.key !== key) return "↕";
    return sortConfig.direction === "asc" ? "▲" : "▼";
  };


  return (
    <section className="py-24 bg-[#F7F1E8]">
      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <h1
          className="text-5xl font-bold text-center leading-tight mb-12"
          style={{ color: "#076FBD" }}
        >
          Past Members
        </h1>

        {/* POSTDOC + GRAD SECTION */}
        <h2
          className="text-3xl font-bold mb-6"
          style={{ color: "black" }}   // DARKER BROWN
        >
          Past Graduate & Postdoctoral Researchers
        </h2>

        <div className="space-y-10 text-[#5A4A42] leading-relaxed">

          {/* Mohamed */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E0DCD5]">
            <h3
              className="text-2xl font-semibold"
              style={{ color: "#8C6239" }}   // DARKER BROWN
            >
              Mohamed Aboelnga, Ph.D
            </h3>
            <p className="italic text-[#7A6A5A]">
              Postdoctoral Fellow (June 2021 – August 2022)
            </p>
            <p className="mt-3">
              <strong>Projects:</strong> Revealing the molecular drivers to hnRNPA1 aggregation and inhibition mechanisms of SARS-CoV-2.
            </p>
            <p className="mt-1">
              <strong>Current position:</strong> Assistant Professor in Chemistry, Damietta University, Egypt.
            </p>
          </div>

          {/* Maya */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E0DCD5]">
            <h3
              className="text-2xl font-semibold"
              style={{ color: "#8C6239" }}   // DARKER BROWN
            >
              Maya Petgrave, MSc
            </h3>
            <p className="italic text-[#7A6A5A]">
              Master's student (Fall 2020 – Spring 2022)
            </p>
            <p className="mt-3">
              <strong>Projects:</strong> Understanding the dynamics and molecular interactions of the human cannabinoid receptor 1.
            </p>
            <p className="mt-1">
              <strong>Current position:</strong> Software Developer, Equifax Canada.
            </p>
          </div>

          {/* Sakina */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E0DCD5]">
            <h3
              className="text-2xl font-semibold"
              style={{ color: "#8C6239" }}   // DARKER BROWN
            >
              Sakina Fatima, MSc
            </h3>
            <p className="italic text-[#7A6A5A]">
              Master's student (Winter 2022 – Fall 2023)
            </p>
            <p className="mt-3">
              <strong>Projects:</strong> Probing the interactions driving RNA binding and self-association of hnRNPA1 implicated in neurodegeneration.
            </p>
          </div>
        </div>

        {/* UNDERGRAD TABLE */}
        <h2
          className="text-3xl font-bold mt-20 mb-6"
          style={{ color: "black" }}   // DARKER BROWN
        >
          Undergraduate Trainees
        </h2>


        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow-md border border-[#E0DCD5] text-sm">
            <thead className="bg-[#EDE7DD] text-[#5A4A42]">
              <tr>
                <th
                  className="py-3 px-4 text-left font-semibold cursor-pointer hover:text-[#076FBD]"
                  onClick={() => requestSort("name")}
                >
                  Trainee {arrowFor("name")}
                </th>

                <th
                  className="py-3 px-4 text-left font-semibold cursor-pointer hover:text-[#076FBD]"
                  onClick={() => requestSort("position")}
                >
                  Position {arrowFor("position")}
                </th>

                <th
                  className="py-3 px-4 text-left font-semibold cursor-pointer hover:text-[#076FBD]"
                  onClick={() => requestSort("project")}
                >
                  Project {arrowFor("project")}
                </th>

                <th
                  className="py-3 px-4 text-left font-semibold cursor-pointer hover:text-[#076FBD]"
                  onClick={() => requestSort("period")}
                >
                  Period {arrowFor("period")}
                </th>
              </tr>
            </thead>

            <tbody className="text-[#5A4A42]">
              {sortedTrainees.map(([name, role, project, period]) => (
                <tr key={name} className="border-t border-[#E0DCD5]">
                  <td className="py-3 px-4">{name}</td>
                  <td className="py-3 px-4">{role}</td>
                  <td className="py-3 px-4">{project}</td>
                  <td className="py-3 px-4">{period}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
              <div className="flex justify-center mt-10">
                <a
                  href="/accomplishments"
                  className="bg-[#A67C52] hover:bg-[#8C6844] text-white font-semibold px-8 py-4 rounded-xl shadow-md transition-all duration-200"
                >
                  Click to see accomplishments of our trainees ☺
                </a>
      </div>

      </div>
    </section>
  );
}
