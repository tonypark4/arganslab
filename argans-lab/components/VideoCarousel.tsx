"use client";

import { useState } from "react";

export default function VideoCarousel() {
  const videos = [
    "gjokLVjjBYU",
    "e2DGttDIhos",
    "LX7VlCbCtK8",
    "e_oYgZ9pO9E",
    "U7V_M4lk6Rk",
  ];

  const [current, setCurrent] = useState(0);

  const nextVideo = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrent((prev) => (prev - 1 + videos.length) % videos.length);
  };

  // Compute the 3‑video preview window
  const previewStart = Math.max(0, current - 1);
  const previewEnd = Math.min(videos.length, previewStart + 3);
  const previewVideos = videos.slice(previewStart, previewEnd);

  return (
    <section className="max-w-6xl w-full px-6 py-16 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-4">
        GradBytes: 60 Seconds of Grad Student Genius!
      </h2>

      {/* MAIN VIDEO */}
      <div className="w-full aspect-video mb-6">
        <iframe
          className="w-full h-full rounded-lg shadow-md"
          src={`https://www.youtube.com/embed/${videos[current]}`}
          title="Research Video"
          allowFullScreen
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

      {/* PREVIEW STRIP — only 3 videos */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {previewVideos.map((id) => {
          const index = videos.indexOf(id);

          return (
            <div
              key={id}
              onClick={() => setCurrent(index)}
              className={`cursor-pointer border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition ${
                current === index
                  ? "border-[3px]"
                  : "border"
              }`}
              style={{
                borderColor: current === index ? "#076FBD" : "#ccc",
              }}
            >
              <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${id}`}
                title={`Preview ${index + 1}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
