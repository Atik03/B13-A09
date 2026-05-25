"use client";

import React from "react";
import { FaCalendarAlt, FaClock, FaUserMd } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

function BookingsAppointmentCard({ UserBookingData }) {
  const { _id } = UserBookingData;

  const handleDelete = async () => {
    const { data: tokenData } = await authClient.token();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${_id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${tokenData?.token}`,
        },
      },
    );

    const data = await res.json();

    if (data.deletedCount > 0) {
      document.getElementById(`delete_modal_${_id}`)?.close();
      toast.success("Deleted Successfully!");
      window.location.reload();
    } else {
      toast.error("Delete failed!");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const patientData = Object.fromEntries(formData);

    const updatedData = {
      patientName: patientData.patientName || UserBookingData.patientName,
      date: patientData.date,
      time: patientData.time,
      phone: patientData.phone,
      gender: patientData.gender,
      reason: patientData.reason,
    };

    const { data: tokenData } = await authClient.token();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(updatedData),
      },
    );

    const data = await res.json();

    if (data.modifiedCount > 0) {
      toast.success("Updated Successfully!");
      window.location.reload();
    } else {
      toast.error("Nothing changed!");
    }

    document.getElementById(`appointment_modal_${_id}`)?.close();
  };

  return (
    <div className="card bg-base-100 shadow-xl border border-base-200 rounded-3xl overflow-hidden">
      <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
        <div className="flex items-center gap-4">
          <Image
            src={
              UserBookingData.userImage || "https://i.ibb.co/4pDNDk1/avatar.png"
            }
            alt="User"
            width={80}
            height={80}
            className="w-20 h-20 rounded-2xl object-cover border-4 border-white"
          />

          <div>
            <h2 className="text-2xl font-bold">
              {UserBookingData.patientName}
            </h2>
            <p className="opacity-90">Appointment Booking</p>
          </div>
        </div>
      </div>

      <div className="card-body space-y-3">
        <div className="flex items-center gap-3 bg-base-200 p-4 rounded-2xl">
          <FaUserMd className="text-primary text-2xl" />
          <div>
            <p className="text-sm text-gray-500">Doctor</p>
            <h3 className="font-bold text-lg">{UserBookingData.doctorName}</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-base-200 p-2 rounded-2xl flex items-center gap-2">
            <FaCalendarAlt className="text-primary text-xl" />
            <div>
              <p className="text-sm text-gray-500">Date</p>
              <p className="font-semibold">{UserBookingData.date}</p>
            </div>
          </div>

          <div className="bg-base-200 p-2 rounded-2xl flex items-center gap-2">
            <FaClock className="text-primary text-xl" />
            <div>
              <p className="text-sm text-gray-500">Time</p>
              <p className="font-semibold">{UserBookingData.time}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-base-200 p-2 rounded-2xl flex items-center gap-2">
            <FaCalendarAlt className="text-primary text-xl" />
            <div>
              <p className="text-sm text-gray-500">Gender</p>
              <p className="font-semibold">{UserBookingData.gender}</p>
            </div>
          </div>

          <div className="bg-base-200 p-2 rounded-2xl flex items-center gap-2">
            <FaClock className="text-primary text-xl" />
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-semibold">{UserBookingData.phone}</p>
            </div>
          </div>
        </div>

        <div className="bg-base-200 p-5 rounded-2xl">
          <p className="text-sm text-gray-500 mb-2">Appointment Reason</p>
          <p className="leading-7">{UserBookingData.reason}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <button
            className="btn btn-primary flex-1 rounded-xl"
            onClick={() =>
              document.getElementById(`appointment_modal_${_id}`)?.showModal()
            }
          >
            <MdEdit className="text-xl" />
            Update
          </button>

          <dialog id={`appointment_modal_${_id}`} className="modal">
            <div className="modal-box max-w-2xl rounded-3xl p-6 md:p-8">
              <h3 className="font-bold text-3xl text-center mb-8">
                Update Appointment
              </h3>

              <form className="space-y-5" onSubmit={onSubmit}>
                <label className="font-semibold mb-2 block">Doctor Name</label>

                <input
                  type="text"
                  value={UserBookingData.doctorName}
                  readOnly
                  className="input input-bordered w-full"
                />

                <label className="font-semibold mb-2 block">Patient Name</label>

                <input
                  name="patientName"
                  defaultValue={UserBookingData.patientName}
                  className="input input-bordered w-full"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="">
                    <label className="font-semibold mb-2 block">Gender</label>
                    <select
                      name="gender"
                      defaultValue={UserBookingData.gender}
                      className="select select-bordered w-full"
                    >
                      <option disabled>Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="">
                    <label className="font-semibold mb-2 block">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      defaultValue={UserBookingData.phone}
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold mb-2 block">
                      Appointment Date
                    </label>
                    <input
                      name="date"
                      type="date"
                      defaultValue={UserBookingData.date}
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div>
                    <label className="font-semibold mb-2 block">
                      Appointment Time
                    </label>
                    <input
                      name="time"
                      type="time"
                      defaultValue={UserBookingData.time}
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>

                <label className="font-semibold mb-2 block">
                  Reason for Appointment
                </label>
                <textarea
                  name="reason"
                  defaultValue={UserBookingData.reason}
                  className="textarea textarea-bordered w-full h-28"
                />

                <button
                  type="submit"
                  className="btn bg-gray-800 w-full text-white"
                >
                  Update Appointment
                </button>
              </form>
            </div>
          </dialog>

          <button
            onClick={() =>
              document.getElementById(`delete_modal_${_id}`)?.showModal()
            }
            className="btn btn-error flex-1 text-white rounded-xl"
          >
            <MdDelete className="text-xl" />
            Delete
          </button>

          <dialog id={`delete_modal_${_id}`} className="modal">
            <div className="modal-box rounded-3xl max-w-md">
              <h3 className="font-bold text-2xl text-center mb-4">
                Delete Appointment
              </h3>

              <p className="text-center text-gray-500 leading-7">
                Are you sure you want to delete this appointment?
              </p>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() =>
                    document.getElementById(`delete_modal_${_id}`)?.close()
                  }
                  className="btn flex-1 rounded-xl"
                >
                  Cancel
                </button>

                <button
                  onClick={handleDelete}
                  className="btn btn-error flex-1 rounded-xl text-white"
                >
                  Confirm Delete
                </button>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
}

export default BookingsAppointmentCard;
