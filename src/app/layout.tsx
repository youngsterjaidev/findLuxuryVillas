import type { Metadata } from "next";
import { IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { generateSEO } from "@/config/seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
});

console.log(ibmPlexSerif);

// Move metadata generation outside the component
export const metadata: Metadata = {
  ...generateSEO({
    title: "Find Luxury Villas | Premium Vacation Rentals Worldwide",
    description:
      "Discover exquisite luxury villas with private pools and stunning views",
  }),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://www.findLuxuryVillas.com"), // Crucial for absolute URLs
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSerif.className} font-serif bg-surface`}>
        {/* No manual meta tags here - they're automatically injected by Next.js */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
