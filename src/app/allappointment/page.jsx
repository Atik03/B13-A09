import DoctorCard from "@/component/DoctorCard";
import Image from "next/image";
import React from "react";

const AllAppointment = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/allDoctorList`,
  );
  const allAppointments = await res.json();

  return (
    <div className="py-10 px-4 md:px-none">
      <h1 className="text-2xl text-center font-bold pb-10 ">
        All Doctor Appointments
      </h1>
      <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-4">
        {allAppointments.map((appointment) => (
          <div key={appointment._id}>
            <DoctorCard doctor={appointment} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAppointment;
