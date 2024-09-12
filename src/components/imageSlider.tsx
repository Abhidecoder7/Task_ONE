"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import image1 from "../../public/image/image.jpg";
import image_car from "../../public/image/car.jpg";

const ImageSlider = () => {
  const images = [image1, image1, image1, image1];

  return (
    <div className="w-full max-w-[1201px] h-[316px] mx-auto relative mt-4 px-4">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row">
              {/* Left part with text */}
              <div className="w-full md:w-1/2 bg-blue-950 flex flex-col items-start justify-center pl-5 md:pl-20  md:rounded-l-lg leading-8">
                <div>
                  <h2 className="text-white text-2xl md:text-3xl font-bold">
                    Search for quality
                  </h2>
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-extrabold mt-2 mb-2 text-[#ff3b30]">
                    pre-owned cars
                  </h1>
                </div>
                <div>
                  <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
                    Discover great deals
                  </h2>
                </div>
              </div>

              {/* Right part with image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={image_car}
                  alt={`Slide ${index + 1}`}
                  layout="responsive"
                  width={800}
                  height={400}
                  objectFit="cover"
                  className="md:rounded"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination {
          display: flex;
          justify-content: flex-start; /* Align dots to the left */
          padding-left: 80px;
          bottom: 50px !important; /* Adjust to desired position */
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #ffffff; /* Default dot color */
          opacity: 1;
          border-radius: 50%;
          margin: 0 4px;
          transition: all 0.3s ease;
          transform: translateY(0px); /* Ensure bullets are vertically centered */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .swiper-pagination-bullet-active {
          width: 20px; /* Stretch to form a flat line */
          height: 4px;
          background: #ff3b30; /* Change to desired color */
          border-radius: 5px; /* Rounded edges for the line */
          margin: 0 2px;
          transform: translateY(3px); /* Center align the active bullet with others */
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
