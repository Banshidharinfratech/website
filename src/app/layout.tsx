import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SidebarButtons from "@/components/SidebarButtons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Banshidhar Infratech | Piling & Foundation Services",
  description:
    "Banshidhar Infratech provides all types of piling and foundation services with expert solutions for construction and infrastructure projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <TopBar/> */}
        <SidebarButtons />
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
