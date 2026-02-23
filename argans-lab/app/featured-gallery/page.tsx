"use client";

import Image from "next/image";
import { useState } from "react";
import FeaturedVideoCarousel from "@/components/FeaturedVideoCarousel";


export default function FeaturedGallery() {
  const images = [
  {
    src: "/SARS-CoV-2 main protease.png",
    title: "Inactive State of SARS‑CoV‑2 Main Protease",
    desc: "Our team discovers that site-specific engineering of hot-spot residue in a lateral pocket of the Mpro altered the Free Energy Landscape of the enzyme and locked it in an inactive state"
    },
  {
    src: "/RNA oligonucleotide.png",
    title: "RNA Oligonucleotide Binding Reduces A1 Self‑Clustering",
    desc: "This collaborative work with the LevinLab demonstrates that treatment of A1 protein with MAX-RNAO significantly reduces protein aggregation in optogenetics system. ArGan'sLab models the binding of RNAO with A1. Image Credit: Front. Mol. Biosci. Volume 10 - 2023."
  },
  {
    src: "/POPC.png",
    title: "POPC Lipid Binding to TMEM16F Scramblase",
    desc: "Our molecular dynamics simulation captures natural lipid binding on to a conserved binding site in a human TMEM16F lipid scramblase. Image credit: Paula Jofily fe Lima Rangel @ ArGan'sLab."
  },
  {
    src: "/ligand binding sites.png",
    title: "Ligand Binding Sites in SARS‑CoV‑2 Mpro",
    desc: "Atomistic model describing all ligand binding sites captured in X‑ray crystal structures of the SARS‑CoV‑2 Mpro."
  },
  {
    src: "/CRIP1a.png",
    title: "CRIP1a Binding to CB1",
    desc: "Atomistic model showing CRIP1a binding to membrane‑embedded CB1, revealing a native regulatory break to agonist‑activated CB1 signaling in humans. Image credit: Maya Petgave @ ArGan'sLab."
  }
];


  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>

      {/* TITLE */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1
          className="text-5xl font-bold mb-4"
          style={{ color: "#076FBD" }}
        >
          Featured Models
        </h1>

        <p className="text-lg italic text-gray-700 mb-10">
          These are featured models from our ongoing research projects.
        </p>

        {/* MAIN IMAGE SLIDESHOW */}
        <div className="relative w-full max-w-4xl mx-auto mb-6">
          <div className="relative group">
            <Image
              src={images[current].src}
              alt={images[current].title}
              width={1200}
              height={700}
              className="rounded-lg shadow-md w-full h-auto object-cover transition duration-300 group-hover:opacity-40"
            />

            {/* HOVER OVERLAY */}
            <div className="absolute inset-0 flex flex-col justify-center items-center 
bg-gray-800/60 opacity-0 group-hover:opacity-100 transition duration-300">

              <h3 className="text-3xl font-semibold text-white drop-shadow-lg mb-2">
                {images[current].title}
              </h3>
              <p className="text-white text-center max-w-xl drop-shadow-lg">
                {images[current].desc}
              </p>
            </div>
          </div>

          {/* LEFT ARROW */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 text-white px-4 py-2 rounded-full hover:bg-black/60"
          >
            ‹
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 text-white px-4 py-2 rounded-full hover:bg-black/60"
          >
            ›
          </button>
        </div>

        {/* THUMBNAIL STRIP */}
        <div className="flex justify-center gap-4 mt-4">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`cursor-pointer border-2 rounded-md overflow-hidden transition ${
                current === index
                  ? "border-[#076FBD]"
                  : "border-gray-300 hover:border-gray-500"
              }`}
            >
              <Image
                src={img.src}
                alt={img.title}
                width={100}
                height={60}
                className="object-cover w-24 h-16"
              />
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2
          className="text-3xl font-semibold mb-8 text-center"
          style={{ color: "#076FBD" }}
        >
          Scientific Artwork of ArGan'sLab
        </h2>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <FeaturedVideoCarousel />

          </div>
        </div>
      </section>
    </>
  );
}
