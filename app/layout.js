import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "NextCart – Modern E-Commerce Website",
  description: "A Next.js + MongoDB + Firebase eCommerce demo project",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon_512.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">

        <Toaster position="top-center" />

        <Navbar />

        <main className="min-h-screen pt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}