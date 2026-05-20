"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const doctors = [
  {
    id: "d1",
    name: "Dr. Ayesha Rahman",
  },
  {
    id: "d2",
    name: "Dr. Mahmud Hasan",
  },
  {
    id: "d3",
    name: "Dr. Nusrat Jahan",
  },
  {
    id: "d4",
    name: "Dr. Tanvir Ahmed",
  },
  {
    id: "d5",
    name: "Dr. Farzana Kabir",
  },
];

function Footer() {
  return (
    <footer className="bg-[#111827] text-white pt-16 pb-6 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-700">
          <div>
            <h2 className="text-3xl font-bold mb-5">
              <span className="text-green-500">Online Doctor</span>
            </h2>

            <p className="text-gray-300 leading-7 text-sm sm:text-base">
              We are committed to providing world-class healthcare services with
              trusted specialists, advanced technology, and compassionate care
              for every patient.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-sky-500 hover:bg-sky-600 transition-all duration-300 flex items-center justify-center"
              >
                <FaTwitter />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 transition-all duration-300 flex items-center justify-center"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-5">Our Services</h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition-all duration-300"
                >
                  Cardiac Surgery
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition-all duration-300"
                >
                  Cancer Screening
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition-all duration-300"
                >
                  Neurology Care
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition-all duration-300"
                >
                  Orthopedic Support
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition-all duration-300"
                >
                  Bills & Insurance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-5">Specialist Doctors</h3>

            <ul className="space-y-3 text-gray-300">
              {doctors.map((doctor) => (
                <li key={doctor.id}>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-all duration-300"
                  >
                    {doctor.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-5">Get In Touch</h3>

            <div className="space-y-5 text-gray-300">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-500 mt-1" />

                <p className="leading-6">Dhaka, Bangladesh</p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-500" />

                <p>+880 1712-345678</p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" />

                <p>support@onlinedoctor.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
          <p className="text-center md:text-left">
            © 2026 Online Doctor. All Rights Reserved. Designed for modern
            healthcare services.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="hover:text-blue-400 transition-all duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="hover:text-blue-400 transition-all duration-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
