import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ArGan's Lab",
  description: "Biocomputing & Therapeutic Discovery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 antialiased">


        {children}
      </body>
    </html>
  );
}
