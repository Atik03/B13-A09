import React from "react";
import DoctorCard from "./DoctorCard";

async function TopDoctor() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/topDoctor`);
  const allAppointments = await res.json();
  return (
    <div className="py-10 px-4 md:px-none mt-15">
      <h1 className="text-4xl text-center font-bold pb-15 ">Our Top Doctors</h1>
      <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-4">
        {allAppointments.map((appointment) => (
          <div key={appointment._id}>
            <DoctorCard doctor={appointment} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopDoctor;
