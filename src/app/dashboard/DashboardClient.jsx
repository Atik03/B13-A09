"use client";

import { useState } from "react";
import BookingsAppointmentCard from "@/component/BookingsAppointmentCard";
import Profile from "@/component/Profile";
import { FaCalendarTimes } from "react-icons/fa";

function DashboardClient({ bookings = [] }) {
  const [activeTab, setActiveTab] = useState("appointments");

  return (
    <div className="py-10 max-w-6xl mx-auto px-4">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-10">Dashboard</h1>

      <div className="flex justify-center">
        <div className="flex gap-3 bg-base-200 p-2 rounded-xl shadow-sm">
          <button
            onClick={() => setActiveTab("appointments")}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              activeTab === "appointments"
                ? "bg-primary text-white shadow-md"
                : "hover:bg-base-300"
            }`}
          >
            Appointments
          </button>

          <button
            onClick={() => setActiveTab("profile")}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              activeTab === "profile"
                ? "bg-primary text-white shadow-md"
                : "hover:bg-base-300"
            }`}
          >
            Profile
          </button>
        </div>
      </div>

      <div className="mt-8 bg-base-100 p-6 rounded-2xl shadow-md">
        {activeTab === "appointments" && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              My Appointments
            </h2>

            {bookings.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {bookings.map((b) => (
                  <BookingsAppointmentCard key={b._id} UserBookingData={b} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <FaCalendarTimes className="text-6xl text-gray-400 mb-4" />

                <h3 className="text-xl font-semibold text-gray-600">
                  No Booking Data Found
                </h3>

                <p className="text-gray-400 mt-2">
                  You haven’t booked any appointment yet.
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === "profile" && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              My Profile
            </h2>

            <Profile />
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardClient;
