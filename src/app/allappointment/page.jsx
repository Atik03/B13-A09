import Image from "next/image";
import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import DoctorSearchBar from "@/component/DoctorSearchBar";

export const metadata = {
  title: "Appointments",
  description: "All Doctor Appointments page for Online Doctor Appointment",
};

const AllAppointment = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/allDoctorList`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const allAppointments = await res.json();

  return <DoctorSearchBar allAppointments={allAppointments} />;
};

export default AllAppointment;
