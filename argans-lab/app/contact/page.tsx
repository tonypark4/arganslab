"use client";

import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="py-24 bg-[#F7F1E8] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <h1
          className="text-5xl font-bold text-center mb-12"
          style={{ color: "#076FBD" }}
        >
          Contact Us
        </h1>

        {/* CONTACT + IMAGE SECTION */}
        <div className="flex flex-col lg:flex-row gap-10 items-start mb-16">

          {/* TEXT BLOCK */}
          <div className="flex-1 text-[#5A4A42] leading-relaxed text-lg">
            <p className="font-semibold text-2xl mb-4 text-[#8C6239]">
              Dr. Aravindhan Ganesan, PhD
            </p>

            <p>Department of Chemistry and Biochemistry</p>
            <p>Wilfrid Laurier University</p>
            <p>Science Building, 75 University Ave W</p>
            <p>Waterloo, ON N2L 3C5</p>

            <p className="mt-4">
              <span className="font-semibold text-[#8C6239]">Email:</span>{" "}
              aganesan@wlu.ca
            </p>
          </div>

          {/* IMAGE BLOCK */}
          <div className="relative w-[420px] h-[280px] rounded-xl shadow-lg overflow-hidden bg-white">
            <Image
              src="/contact-laurier.png"
              alt="Wilfrid Laurier University"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* GOOGLE MAPS EMBED */}
        <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg border border-[#E0DCD5]">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2817.020691652927!2d-80.5280992!3d43.4730772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf40a4f1e0c2f%3A0xdea5b3720d9e740!2sScience%20Building%2C%2075%20University%20Ave%20W%2C%20Waterloo%2C%20ON%20N2L%203C5!5e0!3m2!1sen!2sca!4v1700000000002"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
