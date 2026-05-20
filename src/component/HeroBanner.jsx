"use client";

import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

function HeroBanner() {
  const slides = [
    {
      image:
        "https://img.magnific.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541_1280.jpg",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1672759455907-bdaef741cd88?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNhbCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }} loop={true}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="hero md:min-h-screen h-[400px]"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="hero-overlay"></div>

            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Online Doctor</h1>

                <p className="leading-relaxed mb-5">
                  Get instant access to qualified healthcare professionals from
                  the comfort of your home.
                </p>

                <Link
                  href={"/allappointment"}
                  className="btn bg-primary border-none text-white"
                >
                  Book an Appointment
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroBanner;
