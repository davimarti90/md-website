import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "MD Interstate Moving — Fast. Safe. Professional.",
  description: "Interstate moving company. Fast. Safe. Professional. Your move, our mission.",
  openGraph: { title: "MD Interstate Moving LLC", description: "Fast. Safe. Professional. Your move, our mission.", type: "website" },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
