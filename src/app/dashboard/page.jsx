import DashboardClient from "./DashboardClient";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`,
    { cache: "no-store" },
  );

  const bookings = await res.json();

  return <DashboardClient bookings={bookings} />;
}

export default Dashboard;
