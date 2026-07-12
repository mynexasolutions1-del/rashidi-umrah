import type { Metadata } from "next";
import { Marcellus, Plus_Jakarta_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cursive",
});

export const metadata: Metadata = {
  title: "Rashidi Umrah - Tours & Travels",
  description:
    "Rashidi Umrah Tours & Travels - Trusted Umrah & Hajj packages with visa assistance, flight booking, transport, and complete pilgrimage support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${marcellus.variable} ${plusJakartaSans.variable} ${dancingScript.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
