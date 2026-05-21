"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import { IoMdClock } from "react-icons/io";
import { FaRegHospital } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";

function DoctorDetails({ DoctorDetailsData }) {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));
    document.getElementById("appointment_modal")?.close();
  };

  return (
    <div className="w-full bg-base-100 border border-base-200 rounded-3xl shadow-xl overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/3 bg-primary/5 p-8 flex flex-col items-center justify-center">
          <div className="relative">
            <img
              src={DoctorDetailsData.image}
              alt={DoctorDetailsData.name}
              className="w-56 h-56 rounded-3xl object-cover shadow-lg border-4 border-white"
            />

            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
              <div className="badge badge-info badge-lg text-white px-5 py-4 font-semibold">
                <FaStar className="" /> {DoctorDetailsData.rating}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h2 className="text-3xl font-bold">{DoctorDetailsData.name}</h2>

            <p className="text-primary text-lg font-medium mt-2">
              {DoctorDetailsData.specialty}
            </p>

            <p className="text-gray-500 mt-3">
              {DoctorDetailsData.experience} Experience
            </p>
          </div>
        </div>

        <div className="flex-1 p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-base-200 rounded-2xl p-5">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <FaRegHospital /> Hospital
              </h3>

              <p className="mt-3 text-base font-semibold">
                {DoctorDetailsData.hospital}
              </p>

              <p className="text-gray-500 mt-2">{DoctorDetailsData.location}</p>
            </div>

            <div className="bg-base-200 rounded-2xl p-5">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <IoMdClock /> Availability
              </h3>

              <div className="flex flex-wrap gap-2 mt-4">
                {DoctorDetailsData.availability.map((time, index) => (
                  <div
                    key={index}
                    className="badge badge-outline badge-primary p-4"
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">About Doctor</h3>

            <p className="text-gray-500 leading-8">
              {DoctorDetailsData.description}
            </p>
          </div>

          <div className="mt-10 border-t border-base-300 pt-6">
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
              <div>
                <p className="text-gray-500 text-sm">Consultation Fee</p>
                <div className="flex">
                  <TbCurrencyTaka className="text-4xl font-bold text-primary" />
                  <p className="text-4xl font-bold text-primary">
                    {DoctorDetailsData.fee}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full xl:w-auto">
                <button
                  className="btn bg-gray-800 rounded-md text-white"
                  onClick={() =>
                    document.getElementById("appointment_modal").showModal()
                  }
                >
                  Book Appointment
                </button>

                <dialog id="appointment_modal" className="modal">
                  <div className="modal-box max-w-2xl rounded-3xl p-6 md:p-8">
                    <h3 className="font-bold text-3xl text-center mb-8">
                      Book Appointment
                    </h3>

                    <form className="space-y-5" onSubmit={onSubmit}>
                      <div>
                        <label className="font-semibold mb-2 block">
                          Doctor Name
                        </label>
                        <input
                          type="text"
                          value={DoctorDetailsData.name}
                          readOnly
                          className="input input-bordered w-full"
                        />
                      </div>

                      <div>
                        <label className="font-semibold mb-2 block">
                          Patient Name
                        </label>
                        <input
                          name="patientName"
                          type="text"
                          placeholder="Enter patient name"
                          className="input input-bordered w-full"
                        />
                      </div>

                      <div>
                        <label className="font-semibold mb-2 block">
                          Gender
                        </label>
                        <select
                          name="gender"
                          defaultValue=""
                          className="select select-bordered w-full"
                        >
                          <option value="" disabled>
                            Select Gender
                          </option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="font-semibold mb-2 block">
                          Phone Number
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          placeholder="Enter phone number"
                          className="input input-bordered w-full"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="font-semibold mb-2 block">
                            Appointment Date
                          </label>
                          <input
                            name="date"
                            type="date"
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
                            className="input input-bordered w-full"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="font-semibold mb-2 block">
                          Reason
                        </label>
                        <textarea
                          name="reason"
                          placeholder="Write appointment reason..."
                          className="textarea textarea-bordered w-full h-28"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary w-full rounded-xl text-lg"
                      >
                        Book Appointment
                      </button>
                    </form>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;
