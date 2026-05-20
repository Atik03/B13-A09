import DoctorDetails from "@/component/DoctorDetails";
import React from "react";

async function DoctorDetailsPage({ params }) {
  const { id } = await params;
  const res = await fetch(`${process.env.PUBLIC_SERVER_URL}/allDoctorList`);
  const allAppointments = await res.json();

  const filteredDetails = id
    ? allAppointments.filter((appointment) => appointment._id === id)
    : allAppointments;

  console.log("Filtered Photos:", filteredDetails);

  return (
    <>
      <div className="py-10">
        <h1 className="text-3xl font-bold text-center mb-10">
          Book Appointment
        </h1>
        {filteredDetails.map((doctor) => (
          <DoctorDetails key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </>
  );
}

export default DoctorDetailsPage;
