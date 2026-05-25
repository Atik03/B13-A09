import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/component/Navbar";
import Footer from "@/component/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Online Doctor Appointment",
  description:
    " Online Doctor Appointment is a web application that allows users to book appointments with doctors online. ",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-theme="light"
    >
      <body className="">
        <NavBar />

        <main className="max-w-7xl mx-auto">{children}</main>
        <ToastContainer />
        <Footer />
      </body>
    </html>
  );
}
