"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const LogInPage = () => {
  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLoginFunc = async (data) => {
    console.log(data, "data");

    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
    }

    if (res) {
      toast.success("Login successful");
    }
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center">
      <div className="p-4 rounded-xl bg-gray-100">
        <h2 className="font-bold text-3xl text-center mb-6">
          Login your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              placeholder="Type here email"
              {...register("email", {
                required: "Email field is required",
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type={isShowPassword ? "text" : "password"}
              className="input"
              placeholder="Type here password"
              {...register("password", {
                required: "Password field is required",
              })}
            />
            <span
              className="absolute right-2 top-4 cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>

          <button className="btn w-full bg-gray-800 text-white">Login</button>
        </form>
        <button
          className="btn w-full bg-slate-500 text-white mt-2"
          onClick={handleGoogleLogin}
        >
          Login with Google <FcGoogle />
        </button>

        <p className="mt-4">
          Don't have an account?
          <Link href={"/signup"} className="text-blue-500">
            Register
          </Link>
        </p>
        <p>
          <Link href={"#"} className="text-blue-500">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogInPage;
