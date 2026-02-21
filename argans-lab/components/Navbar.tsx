import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center h-32 px-10">

        {/* LOGO */}
        <div className="flex items-center pl-30">
          <Image
            src="/argan-logo.png"
            alt="ArGan's Lab Logo"
            width={300}
            height={150}
            className="w-auto h-28 object-contain"
            priority
          />
        </div>

        {/* NAV LINKS */}
        <div className="ml-auto flex items-center space-x-12 text-lg font-normal text-gray-700">

          <Link href="/" className="hover:text-blue-600">Home</Link>

          {/* RESEARCH */}
          <div className="relative group">
            <Link href="/research" className="hover:text-blue-600">
              Research
            </Link>

            <div
              className="
                absolute left-0 top-full
                opacity-0 pointer-events-none
                group-hover:opacity-100 group-hover:pointer-events-auto
                transition-all duration-200 ease-out
                translate-y-1 group-hover:translate-y-0
                flex flex-col w-44 z-50

                bg-white/25 backdrop-blur-xl shadow-lg rounded-md
                py-[2px]
              "
            >
              <Link
                href="/featured-gallery"
                className="px-4 py-1 text-[15px] hover:bg-white/40 hover:text-blue-600 transition"
              >
                Featured Gallery
              </Link>
            </div>
          </div>

          {/* THE TEAM */}
          <div className="relative group">
            <Link href="/the-team" className="hover:text-blue-600">
              The Team
            </Link>

            <div
              className="
                absolute left-0 top-full
                opacity-0 pointer-events-none
                group-hover:opacity-100 group-hover:pointer-events-auto
                transition-all duration-200 ease-out
                translate-y-1 group-hover:translate-y-0
                flex flex-col w-44 z-50

                bg-white/25 backdrop-blur-xl shadow-lg rounded-md
                py-[2px]
              "
            >
              <Link
                href="/accomplishments"
                className="px-4 py-1 text-[15px] hover:bg-white/40 hover:text-blue-600 transition"
              >
                Accomplishments
              </Link>
            </div>
          </div>

          <Link href="/publications" className="hover:text-blue-600">
            Publications
          </Link>

          <Link href="/news" className="hover:text-blue-600">
            News
          </Link>

          {/* CONTACT */}
          <div className="relative group">
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>

            <div
              className="
                absolute left-0 top-full
                opacity-0 pointer-events-none
                group-hover:opacity-100 group-hover:pointer-events-auto
                transition-all duration-200 ease-out
                translate-y-1 group-hover:translate-y-0
                flex flex-col w-44 z-50

                bg-white/25 backdrop-blur-xl shadow-lg rounded-md
                py-[2px]
              "
            >
              <Link
                href="/careers"
                className="px-4 py-1 text-[15px] hover:bg-white/40 hover:text-blue-600 transition"
              >
                Careers
              </Link>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}
