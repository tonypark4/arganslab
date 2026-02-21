"use client";

import { useState } from "react";

export default function VideoCarousel() {
  const videos = [
    { src: "/videos/gradbytes-1.mp4", title: "GradBytes Episode 1" },
    { src: "/videos/gradbytes-2.mp4", title: "GradBytes Episode 2" },
    { src: "/videos/gradbytes-3.mp4", title: "GradBytes Episode 3" },
    { src: "/videos/gradbytes-4.mp4", title: "GradBytes Episode 4" },
    { src: "/videos/gradbytes-5.mp4", title: "GradBytes Episode 5" },
  ];

  const [current, setCurrent] = useState(0);

  const nextVideo = () => setCurrent((prev) => (prev + 1) % videos.length);
  const prevVideo = () =>
    setCurrent((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <section className="max-w-6xl w-full px-6 py-16 bg-gray-50">
      <h2
        className="text-3xl font-semibold mb-4 text-center"
        style={{ color: "#076FBD" }}
      >
        GradBytes: 60 Seconds of Grad Student Genius!
      </h2>

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

      {/* CONTROLS */}
      <div className="flex justify-between mb-8">
        <button
          onClick={prevVideo}
          className="px-4 py-2 text-white rounded-md hover:opacity-80"
          style={{ backgroundColor: "#076FBD" }}
        >
          Previous
        </button>

        <button
          onClick={nextVideo}
          className="px-4 py-2 text-white rounded-md hover:opacity-80"
          style={{ backgroundColor: "#076FBD" }}
        >
          Next
        </button>
      </div>

      {/* PREVIEW STRIP — EXACT SAME AS FEATURED VIDEO CAROUSEL */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {videos.map((vid, index) => (
            <div
              key={vid.src}
              onClick={() => setCurrent(index)}
              className={`cursor-pointer border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition ${
                current === index ? "border-[3px]" : "border"
              }`}
              style={{
                borderColor: current === index ? "#076FBD" : "#ccc",
              }}
            >
              <div className="w-full h-20 bg-black overflow-hidden">
                <video
                  src={vid.src}
                  muted
                  preload="metadata"
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition"
                />

              </div>
            </div>
          ))}
        </div>

    </section>
  );
}
