import React from "react";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

function DoctorCard({ doctor }) {
  return (
    <div className="card max-w-sm bg-base-100 shadow-2xl rounded-xl relative">
      <figure>
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-72 object-cover"
        />
      </figure>

      <div className="card-body ">
        <div className="flex items-center justify-between">
          <h2 className="card-title text-md font-bold text-gray-800">
            {doctor.name}
          </h2>

          <span className="badge badge-info text-white px-3 py-3 absolute top-2 right-2">
            <FaStar /> {doctor.rating}
          </span>
        </div>

        <p className="text-blue-600 font-medium mt-1">{doctor.specialty}</p>

        <p className="text-gray-600 mt-1">
          <span className="font-semibold">Hospital:</span> {doctor.hospital}
        </p>

        <p className="text-gray-600 mt-1">
          <span className="font-semibold">Location:</span> {doctor.location}
        </p>

        <div className="card-actions mt-4">
          <Link href={`/allappointment/${doctor._id}`} className="w-full">
            <button className="btn bg-gray-800 w-full rounded-md text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
