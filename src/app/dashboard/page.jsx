import DashboardClient from "./DashboardClient";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard page for Online Doctor Appointment",
};

async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );

  const bookings = await res.json();

  return <DashboardClient bookings={bookings} />;
}

export default Dashboard;
