import React from "react";
import { FaStar } from "react-icons/fa";
import { IoMdClock } from "react-icons/io";
import { FaRegHospital } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";

function DoctorDetails({ doctor }) {
  return (
    <div className="w-full bg-base-100 border border-base-200 rounded-3xl shadow-xl overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/3 bg-primary/5 p-8 flex flex-col items-center justify-center">
          <div className="relative">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-56 h-56 rounded-3xl object-cover shadow-lg border-4 border-white"
            />

            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
              <div className="badge badge-info badge-lg text-white px-5 py-4 font-semibold">
                <FaStar className="" /> {doctor.rating}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h2 className="text-3xl font-bold">{doctor.name}</h2>

            <p className="text-primary text-lg font-medium mt-2">
              {doctor.specialty}
            </p>

            <p className="text-gray-500 mt-3">{doctor.experience} Experience</p>
          </div>
        </div>

        <div className="flex-1 p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-base-200 rounded-2xl p-5">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <FaRegHospital /> Hospital
              </h3>

              <p className="mt-3 text-base font-semibold">{doctor.hospital}</p>

              <p className="text-gray-500 mt-2">{doctor.location}</p>
            </div>

            <div className="bg-base-200 rounded-2xl p-5">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <IoMdClock /> Availability
              </h3>

              <div className="flex flex-wrap gap-2 mt-4">
                {doctor.availability.map((time, index) => (
                  <div
                    key={index}
                    className="badge badge-outline badge-primary p-4"
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">About Doctor</h3>

            <p className="text-gray-500 leading-8">{doctor.description}</p>
          </div>

          <div className="mt-10 border-t border-base-300 pt-6">
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
              <div>
                <p className="text-gray-500 text-sm">Consultation Fee</p>
                <div className="flex">
                  <TbCurrencyTaka className="text-4xl font-bold text-primary" />
                  <p className="text-4xl font-bold text-primary">
                    {doctor.fee}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full xl:w-auto">
                <input
                  type="date"
                  className="input input-bordered w-full sm:w-64"
                />

                <button className="btn bg-gray-800 text-white rounded-md px-8">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;
