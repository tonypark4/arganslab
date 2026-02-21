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
                absolute left-0 top-full hidden group-hover:flex flex-col 
                shadow-lg rounded-md w-48 z-50
                -mt-[1px] pt-3
                bg-white/70 backdrop-blur-md
              "
            >
              <Link
                href="/featured-gallery"
                className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600"
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
                absolute left-0 top-full hidden group-hover:flex flex-col 
                shadow-lg rounded-md w-48 z-50
                -mt-[1px] pt-3
                bg-white/70 backdrop-blur-md
              "
            >
              <Link
                href="/accomplishments"
                className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600"
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
                absolute left-0 top-full hidden group-hover:flex flex-col 
                shadow-lg rounded-md w-48 z-50
                -mt-[1px] pt-3
                bg-white/70 backdrop-blur-md
              "
            >
              <Link
                href="/careers"
                className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600"
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
