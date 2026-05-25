"use client";

import React from "react";
import Image from "next/image";
import { FaUser, FaEnvelope, FaEdit } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

function Profile() {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({
      name,
      image,
    });

    toast.success("Update Your Profile");
    document.getElementById("my_modal_1").close();
  };

  return (
    <div className="max-w-sm mx-auto my-8">
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body items-center text-center">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image
                src={
                  user?.image ||
                  "https://t4.ftcdn.net/jpg/08/08/37/31/360_F_808373133_lrCrFLLTXF0A2WQK7QKMCNAzKCjX7kvb.jpg"
                }
                alt={user?.name || "User"}
                width={96}
                height={96}
                className="rounded-full"
              />
            </div>
          </div>

          <h2 className="card-title mt-4 flex items-center gap-2">
            <FaUser className="text-primary" />
            {user?.name || "User Name"}
          </h2>

          <p className="flex items-center gap-2 text-gray-500">
            <FaEnvelope />
            {user?.email || "user@email.com"}
          </p>

          <div className="card-actions mt-4 w-full">
            <button
              className="btn btn-primary w-full flex items-center gap-2"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              <FaEdit /> Update Profile
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Update Profile</h3>

                <div className="modal-action">
                  <div className="container mx-auto flex justify-center items-center text-left">
                    <div className="p-4 rounded-xl bg-gray-100">
                      <form className="space-y-4 " onSubmit={onSubmit}>
                        <fieldset className="fieldset">
                          <legend className="fieldset-legend">Name</legend>
                          <input
                            type="text"
                            className="input"
                            name="name"
                            defaultValue={user.name}
                          />
                        </fieldset>

                        <fieldset className="fieldset">
                          <legend className="fieldset-legend">Photo URL</legend>
                          <input
                            type="text"
                            className="input"
                            placeholder="Type here photo url"
                            name="image"
                            defaultValue={user.image}
                          />
                        </fieldset>

                        <button className="btn w-full bg-blue-500 text-white">
                          Update Profile
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
