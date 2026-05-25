import React from "react";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function DoctorCard({ doctor }) {
  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 relative">
      <figure className="relative h-65 w-full">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
