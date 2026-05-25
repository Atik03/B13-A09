import React from "react";
import {
  FaHeart,
  FaBaby,
  FaUserMd,
  FaStethoscope,
  FaBrain,
  FaTooth,
} from "react-icons/fa";

function SpecializedDoctors() {
  const specialties = [
    {
      id: 1,
      title: "Cardiologist",
      icon: <FaHeart size={50} />,
    },
    {
      id: 2,
      title: "Pediatrician",
      icon: <FaBaby size={50} />,
    },
    {
      id: 3,
      title: "Medicine Specialist",
      icon: <FaUserMd size={50} />,
    },
    {
      id: 4,
      title: "General Surgeon",
      icon: <FaStethoscope size={50} />,
    },
    {
      id: 5,
      title: "Neurologist",
      icon: <FaBrain size={50} />,
    },
    {
      id: 6,
      title: "Dentist",
      icon: <FaTooth size={50} />,
    },
  ];

  return (
    <section className="py-16 px-4  bg-base-100">
      <div className="text-center mb-14">
        <h2 className="text-2xl md:text-3xl font-bold">Consult Our Doctors</h2>

        <p className="text-gray-500 mt-4 text-lg">
          Our expert doctors are available 24/7 for your healthcare support
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {specialties.map((item) => (
          <div
            key={item.id}
            className="group bg-base-100 border border-base-200 rounded-3xl p-6 shadow-md hover:shadow-2xl transition duration-300 text-center"
          >
            <div className="w-28 h-28 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition duration-300">
              {item.icon}
            </div>

            <h3 className="mt-6 text-xl font-bold min-h-[60px] flex items-center justify-center">
              {item.title}
            </h3>

            <button className="btn btn-primary btn-outline rounded-full mt-5 px-6">
              Consult Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpecializedDoctors;
