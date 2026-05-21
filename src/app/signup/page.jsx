"use client";
import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignUpPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleRegisterFunc = async (data) => {
    console.log(data, "data");
    const { email, name, photo, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
    }

    if (res) {
      toast.success("Signup successful");
      router.push("/");
    }
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center">
      <div className="p-4 rounded-xl bg-gray-100">
        <h2 className="font-bold text-3xl text-center mb-6">
          SignUp your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input"
              placeholder="Type here name"
              {...register("name", {
                required: "Name field is required",
              })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              className="input"
              placeholder="Type here photo url"
              {...register("photo", {
                required: "Photo URL field is required",
              })}
            />
            {errors.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
            )}
          </fieldset>
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

                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },

                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                  message:
                    "Password at least 1 uppercase and 1 lowercase letter",
                },
              })}
            />

            <span
              className="absolute right-8 top-4 cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </fieldset>
          <button className="btn w-full bg-gray-800 text-white">Sign Up</button>
          Already have an account?{" "}
          <Link href="/signin" className="text-blue-500">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
