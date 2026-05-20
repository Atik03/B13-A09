import React from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/allappointment"}>All Appointment</NavLink>
            <NavLink href={"/dashboard"}>Dashboard</NavLink>
          </ul>
        </div>
        <div className="hidden lg:block">
          <div className="">
            <Image
              src={"/doctorlogo.jpg"}
              alt="logo"
              loading="eager"
              width={50}
              height={50}
              className="object-cover h-auto w-auto"
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <p className="text-2xl font-bold text-green-500">Online Doctor</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex justify-between items-center text-gray-700 gap-3">
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/allappointment"}>All Appointment</NavLink>
          <NavLink href={"/dashboard"}>Dashboard</NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
        <ul className="flex items-center  text-sm gap-5">
          <li className="btn bg-green-500 text-white">
            <Link href={"/"}>SignUp</Link>
          </li>
          <li className="btn bg-green-500 text-white">
            <Link href={"/"}>SignIn</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
