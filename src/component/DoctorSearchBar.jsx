"use client";

import { useState } from "react";
import DoctorCard from "@/component/DoctorCard";
import { FaSearch } from "react-icons/fa";

function DoctorSearchBar({ allAppointments }) {
  const [searchText, setSearchText] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState(allAppointments);

  const handleSearch = () => {
    const filtered = allAppointments.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchText.toLowerCase()),
    );

    setFilteredDoctors(filtered);
  };

  return (
    <div className="py-10 px-4">
      <h1 className="text-2xl md:text-3xl text-center font-bold pb-10">
        All Doctor Appointments
      </h1>

      <div className="max-w-2xl mx-auto mb-10">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Search doctor by name..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="input input-bordered w-full rounded-xl"
          />

          <button
            onClick={handleSearch}
            className="btn btn-primary rounded-xl px-6"
          >
            <FaSearch />
            Search
          </button>
        </div>
      </div>

      {filteredDoctors.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredDoctors.map((appointment) => (
            <DoctorCard key={appointment._id} doctor={appointment} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-gray-500">
            No Doctor Found
          </h2>

          <p className="text-gray-400 mt-2">Try searching with another name</p>
        </div>
      )}
    </div>
  );
}

export default DoctorSearchBar;
