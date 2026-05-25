import DoctorDetails from "@/component/DoctorDetails";
import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata = {
  title: "Doctor Details",
  description: "Doctor Details page for Online Doctor Appointment",
};

async function DoctorDetailsPage({ params }) {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/allDoctorList/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const DoctorDetailsData = await res.json();

  return (
    <>
      <div className="py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Book Appointment
        </h1>

        <DoctorDetails DoctorDetailsData={DoctorDetailsData} />
      </div>
    </>
  );
}

export default DoctorDetailsPage;
