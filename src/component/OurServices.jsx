"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    id: 1,
    title: "Cardiac Surgery",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
    description:
      "Advanced heart surgery services with expert specialists, modern technology, and patient-focused recovery care.",
  },
  {
    id: 2,
    title: "Bills & Insurance",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    description:
      "Easy medical billing and insurance claim support with transparent guidance and fast processing services.",
  },
  {
    id: 3,
    title: "Cancer Screening",
    image:
      "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200&auto=format&fit=crop",
    description:
      "Early cancer detection solutions using advanced diagnostic technology for safer and faster treatment planning.",
  },
  {
    id: 4,
    title: "Neurology",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    description:
      "Complete neurological care for brain, nerve, and spine disorders with experienced medical professionals.",
  },
  {
    id: 5,
    title: "Orthopedic Care",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    description:
      "Specialized orthopedic treatments for bones, joints, and muscles to restore mobility and reduce pain.",
  },
];

function OurServices() {
  return (
    <section className="w-full py-14 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-2xl md:text-3xl font-bold text-black mb-4">
            Our Services
          </h2>

          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            We provide high-quality healthcare services with experienced
            specialists, advanced technology, and compassionate patient care for
            better recovery and wellness.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          className="servicesSwiper !pb-4"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id} className="h-auto">
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-[520px]">
                <div className="w-full h-[240px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-2xl font-bold text-black mb-3 line-clamp-1">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-base leading-7 flex-1">
                    {service.description}
                  </p>

                  <button className="mt-6 inline-flex items-center gap-2 text-blue-600 font-semibold text-base hover:gap-4 transition-all duration-300">
                    Learn More
                    <span>
                      <FaArrowRightLong />
                    </span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .servicesSwiper .swiper-button-next,
        .servicesSwiper .swiper-button-prev {
          width: 45px;
          height: 45px;
          background: white;
          border-radius: 9999px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
          color: #2563eb;
          transition: 0.3s;
        }

        .servicesSwiper .swiper-button-next:hover,
        .servicesSwiper .swiper-button-prev:hover {
          background: #2563eb;
          color: white;
        }

        .servicesSwiper .swiper-button-next:after,
        .servicesSwiper .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }

        @media (max-width: 640px) {
          .servicesSwiper .swiper-button-next,
          .servicesSwiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

export default OurServices;
