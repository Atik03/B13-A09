import DoctorDetails from "@/component/DoctorDetails";
import React from "react";

async function DoctorDetailsPage({ params }) {
  const { id } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/allDoctorList/${id}`,
  );
  const DoctorDetailsData = await res.json();

  return (
    <>
      <div className="py-10">
        <h1 className="text-3xl font-bold text-center mb-10">
          Book Appointment
        </h1>

        <DoctorDetails DoctorDetailsData={DoctorDetailsData} />
      </div>
    </>
  );
}

export default DoctorDetailsPage;
