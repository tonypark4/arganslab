"use client";

export default function CareersPage() {
  return (
    <section className="py-24 bg-[#F7F1E8] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <h1
          className="text-5xl font-bold text-center mb-12"
          style={{ color: "#076FBD" }}
        >
          Careers at ArGan'sLab
        </h1>

        {/* INTRO SECTION */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-[#E0DCD5] mb-16">
          <h2 className="text-3xl font-bold mb-4 text-[#8C6239]">
            ArGan'sLab Training Environment
          </h2>

          <p className="text-[#5A4A42] leading-relaxed mb-4">
            ArGan'sLab represents an interdisciplinary research team committed to providing
            an equal, inclusive, and respectful environment that values the diversity of
            thought and experiences to achieve scientific excellence. We actively encourage
            candidates from all backgrounds to apply and are dedicated to fostering an
            inclusive work culture.
          </p>

          <p className="text-[#5A4A42] leading-relaxed mb-4">
            If you require any accommodations during the application or interview process,
            please do not hesitate to reach out and discuss your needs. We strive to ensure
            that all individuals are given equal opportunity to showcase their talents.
          </p>
        </div>

        {/* GRADUATE STUDENT OPPORTUNITIES */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-[#E0DCD5] mb-16">
          <h2 className="text-3xl font-bold mb-4 text-[#8C6239]">
            Graduate Student Opportunities
          </h2>

          <p className="text-[#5A4A42] leading-relaxed mb-4">
            Expressions of interest for Graduate student positions at both MSc and PhD
            levels are invited. Interested candidates can contact Dr. Ganesan at{" "}
            <span className="font-semibold text-[#8C6239]">aganesan@wlu.ca</span>.
          </p>
        </div>

        {/* POSTDOC POSITION */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-[#E0DCD5] mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#8C6239]">
            Postdoctoral Position with ArGan’sLab
          </h2>

          <p className="text-[#5A4A42] leading-relaxed mb-6">
            We invite applications for a Postdoctoral Researcher to join our team in the
            field of biochemistry and drug discovery. The selected candidate will play a
            key role in advancing cutting-edge research aimed at identifying and
            characterizing novel therapeutic targets, designing small molecules, and
            investigating biomolecular interactions. This position offers an exciting
            opportunity for a highly motivated individual to contribute to innovative drug
            discovery efforts in a dynamic and collaborative environment.
          </p>

          {/* RESPONSIBILITIES */}
          <h3 className="text-2xl font-semibold mb-3 text-[#8C6239]">
            Key Responsibilities
          </h3>
          <ul className="list-disc list-inside text-[#5A4A42] leading-relaxed mb-8 space-y-2">
            <li>Conduct research focused on characterizing therapeutic targets and developing new chemical entities.</li>
            <li>Design and synthesize small molecule libraries for targeted screening and lead optimization.</li>
            <li>Investigate biomolecular interactions using biophysical and biochemical techniques (SPR, ITC, NMR).</li>
            <li>Apply computational modeling and in silico drug discovery methods (docking, QSAR, MD simulations).</li>
            <li>Collaborate with multidisciplinary teams to support drug discovery and validation.</li>
            <li>Analyze data and contribute to writing publications and grant proposals.</li>
            <li>Support lab safety procedures and assist with lab operations.</li>
            <li>Present findings at meetings, conferences, and collaborate with external partners.</li>
          </ul>

          {/* QUALIFICATIONS */}
          <h3 className="text-2xl font-semibold mb-3 text-[#8C6239]">
            Qualifications
          </h3>
          <ul className="list-disc list-inside text-[#5A4A42] leading-relaxed mb-8 space-y-2">
            <li>PhD in Biochemistry, Medicinal Chemistry, or a related discipline (within past 5 years).</li>
            <li>Experience in chemical synthesis and SAR studies.</li>
            <li>Proficiency in computational modeling and in silico drug discovery.</li>
            <li>Expertise in biophysical/biochemical techniques (HPLC, MS, SPR, ITC, etc.).</li>
            <li>Strong publication record in peer-reviewed journals.</li>
            <li>Excellent written and verbal communication skills.</li>
            <li>Strong interest in therapeutic discovery and molecular innovation.</li>
          </ul>

          {/* APPLICATION INSTRUCTIONS */}
          <h3 className="text-2xl font-semibold mb-3 text-[#8C6239]">
            Application Instructions
          </h3>

          <p className="text-[#5A4A42] leading-relaxed mb-4">
            We encourage candidates from all backgrounds and experiences to apply, and we
            are committed to fostering a diverse and inclusive work environment.
          </p>

          <p className="text-[#5A4A42] leading-relaxed mb-4">
            Interested candidates must submit:
          </p>

          <ul className="list-disc list-inside text-[#5A4A42] leading-relaxed mb-8 space-y-2">
            <li>A cover letter outlining research interests and motivation.</li>
            <li>A CV with publications and conference presentations.</li>
            <li>PDF copies of three key publications + a one-page contribution summary.</li>
            <li>Contact information for three academic referees (PhD + Postdoc supervisors).</li>
          </ul>

          <p className="text-[#5A4A42] leading-relaxed">
            Complete application packages must be submitted to{" "}
            <span className="font-semibold text-[#8C6239]">aganesan@wlu.ca</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
