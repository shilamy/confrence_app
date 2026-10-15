import type { Metadata } from "next";
import type { ReactNode } from "react";
import Footer from "./components/footer";
import Navbar from "./components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "SSK Inaugural International Conference 2026",
  description:
    "Join the Statistical Society of Kenya in Embu, 17–19 November 2026, for a conference on statistics, machine learning, and AI.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
