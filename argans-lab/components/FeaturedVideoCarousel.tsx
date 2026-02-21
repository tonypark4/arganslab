"use client";

import { useState } from "react";

export default function FeaturedVideoCarousel() {
  const videos = [
    {
      src: "/videos/good-fit-drug-protein-complex.mp4",
      title: "A good-fit drug–protein complex"
    },
    {
      src: "/videos/cb1-crip1a-association.mp4",
      title: "CB1–CRIP1a association"
    },
    {
      src: "/videos/immunosuppressive-interactions.mp4",
      title: "Immunosuppressive interactions"
    },
    {
      src: "/videos/ligand-unbinding-pathways-cb2.mp4",
      title: "Ligand unbinding pathways in CB2"
    },
    {
      src: "/videos/lipid-binding-to-scramblase.mp4",
      title: "Lipid binding to a scramblase"
    },
    {
      src: "/videos/protein-disaggregation.mp4",
      title: "Protein disaggregation"
    }
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % videos.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <section className="w-full">


      {/* MAIN VIDEO */}
      <div className="w-full aspect-video mb-6 bg-black rounded-lg shadow-md overflow-hidden">
        <video
          key={videos[current].src}
          src={videos[current].src}
          controls
          preload="metadata"
          className="w-full h-full object-contain"
        />

      </div>

      {/* TITLE */}
      <p className="text-center text-lg font-medium mb-6">
        {videos[current].title}
      </p>

      {/* CONTROLS */}
      <div className="flex justify-between mb-8">
        <button
          onClick={prev}
          className="px-4 py-2 text-white rounded-md hover:opacity-80"
          style={{ backgroundColor: "#076FBD" }}
        >
          Previous
        </button>

        <button
          onClick={next}
          className="px-4 py-2 text-white rounded-md hover:opacity-80"
          style={{ backgroundColor: "#076FBD" }}
        >
          Next
        </button>
      </div>

      {/* THUMBNAILS */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
        {videos.map((vid, index) => (
          <div
            key={vid.src}
            onClick={() => setCurrent(index)}
            className={`cursor-pointer border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition ${
              current === index ? "border-[3px]" : "border"
            }`}
            style={{
              borderColor: current === index ? "#076FBD" : "#ccc"
            }}
          >
            <video
              src={vid.src}
              muted
              preload="metadata"
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition"
            />

          </div>
        ))}
      </div>
    </section>
  );
}
